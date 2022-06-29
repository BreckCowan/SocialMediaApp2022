import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";
import { useRouter } from "next/router";
import { UserContext } from "../context";

const Login = () => {
  const [email, setEmail] = useState("jay@jay.com");
  const [password, setPassword] = useState("password");
  const [loading, setLoading] = useState(false);

  const [state, setState] = useContext(UserContext);

  const router = useRouter();

  //code block producing errors
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // console.log(name, email, password, secret);
  //     setLoading(true);
  //     const { data } = await axios.post(
  //       `${process.env.NEXT_PUBLIC_API}/login`,
  //       {
  //         email,
  //         password,
  //       }
  //     );
  //     setState({
  //       user: data.user,
  //       token: data.token,
  //     });
  //     console.log(data);
  //     router.push("/");
  //   } catch (err) {
  //     toast.error('Something went wrong')
  //     // console.log(err.response.data)
  //     setLoading(false);
  //   }
  // };

  //code solution from course instructor
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`/login`, {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        // update in context

        setState({
          user: data.user,
          token: data.token,
        });
        // save in local storage
        window.localStorage.setItem('auth', JSON.stringify(data));
        // router.push("/user/dashboard");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row py-5 text-light bg-default-image">
        <div className="col text-center">
          <h1>Login</h1>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <AuthForm
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            loading={loading}
            page="login"
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p className="text-center">
            Not yet registered?{" "}
            <Link href="/register">
              <a>Register</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
