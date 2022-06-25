const Register = () => {
  return (
    <div className="container-fluid">
      <div className="row py-5 bg-secondary text-light">
        <div className="col text-center">
          <h1>Register Page</h1>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <form>
            <div className="form-group p-2">
              <small>
                <label className="text-muted">Your name</label>
              </small>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
              />
            </div>
            <div className="form-group p-2">
              <small>
                <label className="text-muted">Email address</label>
              </small>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group p-2">
              <small>
                <label className="text-muted">Password</label>
              </small>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group p-2">
              <small>
                <label className="text-muted">Pick a question</label>
              </small>
              <select className="form-control">
                <option value="favorite-color">
                  What is your favorite color?
                </option>
                <option value="best-friend">Who is your best friend?</option>
                <option value="city-born">Where were you born?</option>
              </select>
              <small className="form-text text-muted">
                You can use this to reset your password if forgotten
              </small>
            </div>
            <div className="form-group p-2">
              <input
                type="text"
                className="form-control"
                placeholder="Write your answer here"
              />
            </div>
            <div className="form-group p-2">
              <button className="btn btn-primary col-12">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
