// import Link from "next/link";

// const Nav = () => {
//   return (
//     <nav className="nav justify-content-around d-flex" style={{backgroundColor: "blue" }}>
//       {/* Link to home page */}
//       <li className="nav-item">
//         <Link href="/">
//           <a className="nav-link text-light logo">Bar Tab</a>
//         </Link>
//       </li>
//       {/* Link to login page */}
//       <li className="nav-item">
//         <Link href="/login">
//           <a className="nav-link text-light logo">Login</a>
//         </Link>
//       </li>
//       {/* Link to register page */}
//       <li className="nav-item">
//         <Link href="/register">
//           <a className="nav-link text-light logo">Register</a>
//         </Link>
//       </li>
//     </nav>
//   );
// };

// export default Nav;

// code block for course resource
import { useContext } from "react";
import Link from "next/link";
import { UserContext } from "../context";
import { useRouter } from "next/router";

const Nav = () => {
  const [state, setState] = useContext(UserContext);

  const router = useRouter();

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    router.push("/login");
  };

  return (
    <nav
      className="nav d-flex justify-content-between"
      style={{ backgroundColor: "blue" }}
    >
      <Link href="/">
        <a className="nav-link text-light logo">Bar Tabs</a>
      </Link>

      <Link href="/login">
        <a className="nav-link text-light">Login</a>
      </Link>

      <Link href="/register">
        <a className="nav-link text-light">Register</a>
      </Link>

      <a onClick={logout} className="nav-link text-light">
        Logout
      </a>
    </nav>
  );
};

export default Nav;