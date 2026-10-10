// src/components/Layout.jsx
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header Sederhana - Pengganti import yang error */}
      <header
        style={{
          backgroundColor: '#2c3e50',
          color: 'white',
          padding: '15px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2 style={{ margin: 0 }}>📚 Penjualan Buku</h2>
        <nav>
          <Link to="/" style={navLinkStyle}>Home</Link>
          <Link to="/book" style={navLinkStyle}>Book</Link>
          <Link to="/team" style={navLinkStyle}>Team</Link>
          <Link to="/contact" style={navLinkStyle}>Contact</Link>
          <Link to="/login" style={navLinkStyle}>Login</Link>
        </nav>
      </header>

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <footer className="py-3 text-bg-dark mt-auto">
        <div className="container">
          <ul className="nav justify-content-center border-bottom border-secondary pb-3 mb-3">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-white-50">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/book" className="nav-link px-2 text-white-50">Book</Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link px-2 text-white-50">Team</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link px-2 text-white-50">Contact</Link>
            </li>
          </ul>
          <p className="text-center text-white-50 mb-0">© 2026 TK ADINDA</p>
        </div>
      </footer>
    </div>
  );
}

const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  marginLeft: '15px',
  fontWeight: 'bold',
};