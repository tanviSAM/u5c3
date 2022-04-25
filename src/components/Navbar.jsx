import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <form
      className="loginform"
      onSubmit={(e) => {
        handleAuth(true);
        navigate(-1, { replace: true });
        e.preventDefault();
      }}
    >
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};

export const Navbar = () => {
  return (
    <div className="navbar" style={{height:"40px", width:'1500px', border:"1px solid grey", textAlign: 'center', padding:"2px"}}>
    <Link className="nav-home" to="/" style={{color: 'grey', textAlign: 'center', margin: '25px', fontWeight: "bold", margin: '25px', textDecoration:"none"}}>
      HOME
    </Link>
    <Link className="nav-list" to="/employees" style={{color: 'grey', textAlign: 'center', margin: '25px', fontWeight: "bold", margin: '25px', textDecoration:"none"}}>
      Employee List
    </Link>
    <Link className="nav-admin" to="/admin" style={{color: 'grey', textAlign: 'center', margin: '25px', fontWeight: "bold", margin: '25px', textDecoration:"none"}}>
      Admin
    </Link>
    {/* Show Either logout or login based on auth context. DO NOT show both */}
    <Link className="nav-login" to="/login" style={{color: 'grey', textAlign: 'center', margin: '25px', fontWeight: "bold", margin: '25px', textDecoration:"none"}}>
      Log In
    </Link>

    <Link className="nav-logout" to="/logout" style={{color: 'grey', textAlign: 'center', margin: '25px', fontWeight: "bold", margin: '25px', textDecoration:"none"}}>
      Log Out
    </Link>
  </div>
  );
};
