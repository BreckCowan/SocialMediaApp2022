import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { UserContext } from "../context";
import { useRouter } from "next/router";

const Nav = () => {
  const [current, setCurrent] = useState("");
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  // console.log("current => ", current);

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
        <a
          className={`nav-link text-light flicker neon-text ${
            current === "/" && "active"
          }`}
        >
          Bar Tabs
        </a>
      </Link>

      {state !== null ? (
        <>
          <Link href="/user/dashboard">
            <a
              className={`nav-link text-light ${
                current === "/user/dashboard" &&
                "active" &&
                "flicker" &&
                "neon-text" 
              }`}
            >
              {state && state.user && state.user.name}
            </a>
          </Link>

          <a onClick={logout} className="nav-link text-light">
            Logout
          </a>
        </>
      ) : (
        <>
          <Link href="/login">
            <a
              className={`nav-link text-light ${
                current === "/login" && "active" && "flicker" && "neon-text"
              }`}
            >
              Login
            </a>
          </Link>

          <Link href="/register">
            <a
              className={`nav-link text-light ${
                current === "/register" && "active" && "flicker" && "neon-text"
              }`}
            >
              Register
            </a>
          </Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
