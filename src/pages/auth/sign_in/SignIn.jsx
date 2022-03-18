import { useEffect } from "react";
import { useUserContext } from "../../../context";
import { useAxios } from "../../../custom_hooks/useAxios";
import "../auth.css";

export const SignIn = () => {
  const { loginState, setLoginState } = useUserContext();
  const login = useAxios("/api/auth/login", "POST", "encodedToken", {
    email: "adarshbalak@gmail.com",
    password: "adarshBalaki123",
  });
  useEffect(() => {
    localStorage.setItem("token", login);
    setLoginState(true);
  }, [login]);

  return (
    <main className="main flex-col">
      <div className="flex-col signup-sec">
        <i className="primary fa-regular fa-user fa-5x"></i>
        <p className="body-l">Login to my user account.</p>

        <div className="artsy-input">
          <input type="text" />
          <span className="input-label">Email</span>
        </div>
        <div className="artsy-input passwrd-input">
          <input type="password" />
          <i className="fas fa-eye-slash"></i>
          <span className="input-label">Password</span>
        </div>
        <label className="flex-align-center">
          <input type="checkbox" />
          <span className="checkbox-text"> Keep me logged in. </span>
        </label>
        <button className="btn btn-primary">
          <span>validate</span>
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
        <a href="" className="link-text-primary">
          Forgot your password?
        </a>
        <div>
          <p className="body-md">Still don't have an account ?</p>
          <div className="link-text-primary">SIGN UP</div>
        </div>
      </div>
    </main>
  );
};
