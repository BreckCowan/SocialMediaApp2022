import Link from "next/link";

const Nav = () => {
  return (
    <nav className="nav justify-content-around bg-dark d-flex">
      {/* Link to home page */}
      <li className="nav-item">
        <Link href="/">
          <a className="nav-link text-light">Bar Tab</a>
        </Link>
      </li>
      {/* Link to login page */}
      <li className="nav-item">
        <Link href="/login">
          <a className="nav-link text-light">Login</a>
        </Link>
      </li>
      {/* Link to register page */}
      <li className="nav-item">
        <Link href="/register">
          <a className="nav-link text-light">Register</a>
        </Link>
      </li>
    </nav>
  );
};

export default Nav;
