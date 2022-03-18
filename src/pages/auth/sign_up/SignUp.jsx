import { useState } from "react";

export const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@neog.camp",
    password: "adarshBalika",
  });

  // const response = useAxios(`/api/auth/signup`, "POST", "encodedToken", signUpData);

  const [showPassword, setShowPassword] = useState(false);
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const validPassword = () => {
    return false;
  };
  const validEmail = () => {
    return false;
  };
  const canSubmit = () => {
    return (
      inputValues.firstName !== "" &&
      inputValues.lastName !== "" &&
      validEmail() &&
      validPassword()
    );
  };
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const isDisabled = () => {
    return agreeToTerms && canSubmit();
  };

  console.log(showPassword);
  return (
    <main className="main flex-col">
      <div className="flex-col signup-sec">
        <i className="primary fa-regular fa-user fa-5x"></i>
        <p className="body-l">Create my account on Artsy Shop!</p>

        <div className="artsy-input">
          <input
            type="text"
            value={inputValues.firstName}
            onChange={(e) =>
              setInputValues({ ...inputValues, firstName: e.target.value })
            }
          />
          <span className="input-label">First Name</span>
        </div>

        <div className="artsy-input">
          <input
            type="text"
            value={inputValues.lastName}
            onChange={(e) =>
              setInputValues({ ...inputValues, lastName: e.target.value })
            }
          />
          <span className="input-label">Last Name</span>
        </div>

        <div className="artsy-input">
          <input
            type="text"
            value={inputValues.email}
            onChange={(e) =>
              setInputValues({ ...inputValues, email: e.target.value })
            }
          />
          <span className="input-label">Email</span>
        </div>

        <div className="artsy-input passwrd-input">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            value={inputValues.password}
            onChange={(e) =>
              setInputValues({ ...inputValues, password: e.target.value })
            }
          />
          <i
            onClick={() => setShowPassword((prev) => !prev)}
            className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
          ></i>
          <span className="input-label">Password</span>
        </div>

        <label className="flex-align-center">
          <input
            type="checkbox"
            checked={agreeToTerms}
            onChange={() => setAgreeToTerms((prev) => !prev)}
          />
          <span className="checkbox-text">
            By registering, I accept the
            <a className="primary" href="#">
              General terms and conditions.
            </a>
          </span>
        </label>
        <button className={`btn btn-primary ${isDisabled && "diabled-btn"}`}>
          create an account
        </button>
        <div>
          <p className="body-md">Already have account ?</p>
          <div className={`link-text-primary `}>SIGN IN</div>
        </div>
      </div>
    </main>
  );
};
