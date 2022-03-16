
export const SignUp = () => {
  return (
    <section className="flex-col signup-section-overlay">
      <button className="btn overlay-close" onclick="closeFunc(this)">
        <i className="fa-solid fa-x"></i>
      </button>
      <div className="flex-col signup-sec">
        <i className="primary fa-regular fa-user fa-5x"></i>
        <p className="body-l">Create my account on Artsy Shop!</p>

        <div className="artsy-input">
          <input type="text" />
          <span className="input-label">Full Name</span>
        </div>
        <div className="artsy-input">
          <input type="text" />
          <span className="input-label">Email</span>
        </div>
        <div className="artsy-input">
          <input type="password" />
          <span className="input-label">Password</span>
        </div>
        <label className="flex-align-center">
          <input type="checkbox" />
          <span className="checkbox-text">
            By registering, I accept the
            <a className="primary" href="">
              General terms and conditions.
            </a>
          </span>
        </label>
        <button className="btn btn-primary">create an account</button>
        <div>
          <p className="body-md">Already have account ?</p>
          <div onclick="openSignin()" className="link-text-primary">
            SIGN IN
          </div>
        </div>
      </div>
    </section>
  );
};
