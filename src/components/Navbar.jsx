import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar" aria-label="Main navigation">
      {/* Brand / Logo */}
      <NavLink to="/" className="navbar-brand" end>
        Codveda<span>.</span>
      </NavLink>

      {/* Navigation Links */}
      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
          end
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
        >
          Contact
        </NavLink>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          aria-pressed={theme === 'dark'}
        >
          <span aria-hidden="true">{theme === 'light' ? '☀️' : '🌙'}</span>
          {theme === 'light' ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
}
