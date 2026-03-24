const mysql = require('mysql2/promise');
require('dotenv').config();

async function expandFeaturedImageColumn() {
  let connection;

  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'game_accounts_db'
    });

    console.log('Connected to database');

    // Check current column type
    const [columns] = await connection.query(
      `
      SELECT DATA_TYPE, CHARACTER_MAXIMUM_LENGTH 
      FROM INFORMATION_SCHEMA.COLUMNS 
      WHERE TABLE_SCHEMA = ? 
        AND TABLE_NAME = 'products' 
        AND COLUMN_NAME = 'featured_image'
      `,
      [process.env.DB_NAME || 'game_accounts_db']
    );

    if (columns.length === 0) {
      console.log('Column featured_image does not exist, nothing to expand');
      return;
    }

    const column = columns[0];

    // Only modify if it's still a VARCHAR (e.g. from the previous migration)
    if (column.DATA_TYPE && column.DATA_TYPE.toLowerCase() === 'varchar') {
      console.log('Expanding featured_image column to TEXT');

      await connection.query(`
        ALTER TABLE products 
        MODIFY COLUMN featured_image TEXT DEFAULT NULL 
        COMMENT 'URL or data of featured/thumbnail image for product card'
      `);

      console.log('✅ Successfully expanded featured_image column to TEXT');
    } else {
      console.log('featured_image column is already', column.DATA_TYPE, '- no changes made');
    }
  } catch (error) {
    console.error('❌ Error expanding featured_image column:', error);
    throw error;
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

expandFeaturedImageColumn()
  .then(() => {
    console.log('Migration completed');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Migration failed:', error);
    process.exit(1);
  });

