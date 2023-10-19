import "./navbar/style.css";

const NavBar = () => {
  return (
    <header>
      <div className="start">
        <button className="bar-btn">
          <i className="fas fa-bars"></i>
        </button>
        <a href="" className="youtube-header">
          <i className="fab fa-youtube"></i>
          <p className="name-youtube">YouTube</p>
        </a>
      </div>
      <div className="center">
        <div className="input-logo">
          <input type="text" placeholder="Search" />
          <a href="#" className="search-logo">
            <i className="fas fa-search"></i>
          </a>
        </div>
        <button className="voice-search">
          <i className="fas fa-microphone"></i>
        </button>
      </div>
      <div className="end">
        <button className="end-btn">
          <i className="fas fa-video"></i>
        </button>
        <button className="end-btn">
          <i className="fas fa-th"></i>
        </button>
        <button className="end-btn">
          <i className="fas fa-bell"></i>
        </button>
        <button className="account-btn"></button>
      </div>
    </header>
  );
};

export default NavBar;
