import Link from "next/link";

const Nav = () => {
  return (
    <nav className="nav justify-content-center">
      {/* Link to home page */}
      <li className="nav-item">
        <Link href="/" className="nav-link active">
          <a>Home</a>
        </Link>
      </li>
      {/* Link to login page */}
      <li className="nav-item">
        <Link href="login" className="nav-link">
          <a>Login</a>
        </Link>
      </li>
      {/* Link to register page */}
      <li className="nav-item">
        <Link href="register" className="nav-link">
          <a>Register</a>
        </Link>
      </li>
    </nav>
  );
};

export default Nav;
