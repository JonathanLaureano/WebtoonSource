import React from "react"
import "./Header.css"
import AutoComplete from "./Autocomplete";
import PersonIcon from '@mui/icons-material/Person';



function Header({ top100Films }) {
  return (
      <header className="Header">
        <div className="logo-left">
            <a href="/"><img alt='logo' className="header-logo" src={require('../../img/logo.png')} /></a>
        </div>
        <div className="nav-container">
            <a className="nav-link" href="/Novels">Series</a>
            <a className="nav-link" href="/Bookmarks">Bookmarks</a>
            <a className="nav-link" href="/Store">Store</a>
        </div>
        <div className="profile-right">
            <div>
                <AutoComplete top100Films={top100Films}/>
            </div>
            <button className="nav-profile">
              <PersonIcon/>
            </button>
        </div>
      </header>
  );
}

export default Header;