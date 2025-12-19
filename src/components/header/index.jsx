import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { flights, isLoading } = useSelector((store) => store.flight);

  console.log(flights);
  return (
    <header>
      <Link to="/" className="logo">
        <img src="/logo.webp" alt="logo" width={40} />
        <h2>Flight Radar</h2>
      </Link>

      <nav>
        <NavLink to="/">
          <button>Harita</button>
        </NavLink>
        <NavLink to="/list">
          <button>Liste</button>
        </NavLink>
      </nav>

      {isLoading ? (
        <h3 style={{ visibility: "hidden" }}>000 Uçuş Bulundu</h3>
      ) : (
        <h3>{flights.length} Uçuş Bulundu</h3>
      )}
    </header>
  );
};

export default Header;
