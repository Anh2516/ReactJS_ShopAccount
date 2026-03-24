import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Game logos - using reliable public CDN sources
const gameLogos = {
  'Liên Quân Mobile': 'https://play-lh.googleusercontent.com/u-HxG-Q1fEpAL9w96iIEaBR0iQOY8yeqDuDvhUTr_J98nfOuAAa7S0B0nkAc0ROnnh555Qp2XYBqbN2FsvyN6p4=w240-h480-rw',
  'PUBG Mobile': 'https://play-lh.googleusercontent.com/E_bwpvmFEiRGW4G9VnTIpoJ4XM-3udz3Jm2cDBVsavyu4pT12x2hNLI1ucWoS2KaQIoA=w240-h480-rw',
  'Free Fire': 'https://play-lh.googleusercontent.com/fPV15zPzpECONm08K6BUS5EqD1A1Ir_hxsOaaJF7hOIK-BNDpFO-i3MAvUVM7952JJyGAhg1VJwzDKtYT2QB8Ns=w240-h480-rw',
  'Mobile Legends': 'https://img.utdstc.com/icon/78d/66f/78d66ff1ab1bd23f7fd6d9cdb93854881cb8f0b69e8a301faaf4f4eab058d19e:200',
  'Genshin Impact': 'https://play-lh.googleusercontent.com/YQqyKaXX-63krqsfIzUEJWUWLINxcb5tbS6QVySdxbS7eZV7YB2dUjUvX27xA0TIGtfxQ5v-tQjwlT5tTB-O',
  'Valorant': 'https://i.pinimg.com/736x/cf/ae/88/cfae886e263126f685510e2f45b82970.jpg'
};

// Fallback icons if logo fails to load
const gameIcons = {
  'Liên Quân Mobile': '⚔️',
  'PUBG Mobile': '🔫',
  'Free Fire': '💥',
  'Mobile Legends': '⚡',
  'Genshin Impact': '🌟',
  'Valorant': '🎯'
};

const popularGames = [
  { name: 'Liên Quân Mobile', rank: 'Rank từ Bạch Kim đến Thách Đấu' },
  { name: 'PUBG Mobile', rank: 'Rank từ Diamond đến Conqueror' },
  { name: 'Free Fire', rank: 'Rank từ Vàng đến Huyền Thoại' },
  { name: 'Mobile Legends', rank: 'Rank từ Epic đến Mythic Glory' },
  { name: 'Genshin Impact', rank: 'AR từ 45 đến 55' },
  { name: 'Valorant', rank: 'Rank từ Platinum đến Immortal' }
];

const Home = () => {
  const handleLogoError = (e, gameName) => {
    e.currentTarget.style.display = 'none';
    const fallback = e.currentTarget.nextElementSibling;
    if (fallback) {
      fallback.textContent = gameIcons[gameName];
      fallback.style.display = 'inline-block';
    }
  };

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">Nền tảng mua acc uy tín</span>
          <h1 className="hero-title">Shop Acc Game Chất Lượng</h1>
          <p className="hero-subtitle">Nơi mua bán nick game uy tín, chất lượng</p>
          <p className="hero-description">
            Chúng tôi cung cấp các tài khoản game chính chủ với nhiều rank, skin hiếm và giá cả hợp lý.
            Đảm bảo an toàn, nhanh chóng và hỗ trợ 24/7.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary btn-large">
              Xem sản phẩm
            </Link>
            <Link to="/register" className="btn btn-secondary btn-large">
              Đăng ký ngay
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat-item">
              <strong>500+</strong>
              <span>Tài khoản chất lượng</span>
            </div>
            <div className="hero-stat-item">
              <strong>24/7</strong>
              <span>Hỗ trợ nhanh chóng</span>
            </div>
            <div className="hero-stat-item">
              <strong>100%</strong>
              <span>Thông tin minh bạch</span>
            </div>
          </div>
          <div className="hero-contact">
            <p className="contact-label">Liên hệ với chúng tôi:</p>
            <div className="contact-links">
              <a href="mailto:vipzboi@gmail.com" className="contact-link contact-gmail">
                <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.546l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
                vipzboi@gmail.com
              </a>
              <a href="https://www.facebook.com/bo.cua.adam.118" target="_blank" rel="noopener noreferrer" className="contact-link contact-facebook">
                <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2 className="section-title">Tại sao chọn chúng tôi?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>An toàn tuyệt đối</h3>
            <p>Tài khoản chính chủ, đảm bảo không bị khóa, không bị lấy lại</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Giao dịch nhanh chóng</h3>
            <p>Nhận tài khoản ngay sau khi thanh toán, hỗ trợ 24/7</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Giá cả hợp lý</h3>
            <p>Giá tốt nhất thị trường, nhiều ưu đãi cho khách hàng thân thiết</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎮</div>
            <h3>Đa dạng game</h3>
            <p>Nhiều loại game phổ biến: Liên Quân, PUBG, Free Fire, ML, Genshin Impact...</p>
          </div>
        </div>
      </div>

      <div className="games-section">
        <h2 className="section-title">Các game phổ biến</h2>
        <div className="games-grid">
          {popularGames.map((game) => (
            <div className="game-card" key={game.name}>
              <div className="game-icon">
                <img
                  src={gameLogos[game.name]}
                  alt={game.name}
                  onError={(e) => handleLogoError(e, game.name)}
                />
                <span className="game-fallback-icon" aria-hidden="true">
                  {gameIcons[game.name]}
                </span>
              </div>
              <h3>{game.name}</h3>
              <p>{game.rank}</p>
            </div>
          ))}
        </div>
        <div className="games-cta">
          <Link to="/products" className="btn btn-primary btn-large">
            Xem tất cả sản phẩm
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
