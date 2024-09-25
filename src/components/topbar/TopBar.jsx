import "./topbar.css";
import {Link} from "react-router-dom";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList link">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/login">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/login">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">WRITE</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/login">{user && "LOGOUT"}</Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="logo"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
            <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}