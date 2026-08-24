import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Codveda<span>.</span>
      </Link>

      <div className="navbar-links">
        <Link to="/" className={`navbar-link ${isActive('/') ? 'active' : ''}`}>
          Home
        </Link>
        <Link to="/about" className={`navbar-link ${isActive('/about') ? 'active' : ''}`}>
          About
        </Link>
        <Link to="/contact" className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}>
          Contact
        </Link>

        <button onClick={toggleTheme} className="theme-toggle">
          <span>{theme === 'light' ? '☀️' : '🌙'}</span>
          {theme === 'light' ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
}
