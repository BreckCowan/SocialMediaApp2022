import { useContext } from "react";
import { UserContext } from "../context";

const Home = () => {
  const [state, setState] = useContext(UserContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="display-1 text-center py-5">Bar Tab</h1>
          {JSON.stringify(state)}
          <img className="bar-pic" src='/images/back-bar.jpg' alt="picture of back bar"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
