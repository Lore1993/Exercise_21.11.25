import { Link } from 'react-router-dom'

const NetflixNavbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#221f1f" }}>
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src="src/assets/logo.png" alt="logo" style={{ width: 100, height: 55 }} />
        </Link>

        {/* Bottone collapse per mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links e icone */}
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarSupportedContent"
        >
          {/* Links a sinistra */}
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link fw-bold title">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pokemon-shows" className="nav-link fw-bold">
                TV Shows
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link fw-bold">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link fw-bold">
                Recently Added
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link fw-bold">
                My List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pokemon-shows" className="nav-link fw-bold">
                Pokemon
              </Link>
            </li>
          </ul>

          {/* Sezione a destra */}
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <div id="kids" className="fw-bold mx-2">
              KIDS
            </div>
            <i className="bi bi-bell icons"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </div>
      </div>
    </nav>
            </>
  );
};

export default NetflixNavbar;