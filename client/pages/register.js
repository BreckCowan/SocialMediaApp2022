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
            <div className="form-group">
              <label className="text-muted">Your name</label>
              <input type='text' className="form-control" placeholder='Enter name' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
