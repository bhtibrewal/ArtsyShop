import "../auth.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../../context";
import { useDocumentTitle } from "../../../custom_hooks";
import { ButtonPrimary, InputField, PasswordInput } from "../../../components";
import { signIn } from "../../../services";

export const SignIn = () => {
  useDocumentTitle("| Sign In");
  const navigate = useNavigate();
  const [signinError, setSigninError] = useState();
  const { setLoginState, userDataDispatch } = useUserContext();
  const [inputValues, setInputValues] = useState({
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  });

  return (
    <main className="main center">
      <form onSubmit={(e)=>{
        e.preventDefault();
        signIn({
          setSigninError,
          data: inputValues,
          userDataDispatch,
          setLoginState,
          navigate,
        });
      }} className="flex-col signup-sec">
        <i className="primary fa-regular fa-user fa-5x"></i>
        <p className="body-l">Login to my user account.</p>
        <InputField
          label={"Email"}
          value={inputValues.email}
          onChange={(e) =>
            setInputValues({ ...inputValues, email: e.target.value })
          }
        />
        <PasswordInput
          label={"Password"}
          value={inputValues.password}
          onChange={(e) =>
            setInputValues({ ...inputValues, password: e.target.value })
          }
        />
        <label className="flex-align-center">
          <input type="checkbox" />
          <span className="checkbox-text"> Keep me logged in. </span>
        </label>
        <ButtonPrimary
          type='submit'
        >
          <span>validate</span>
          <i className="fa-solid fa-arrow-right-long"></i>
        </ButtonPrimary>

        <Link to="me" className="link-text-primary">
          Forgot your password?
        </Link>
        <div>
          <p className="body-md">Still don't have an account ?</p>
          <div
            className="link-text-primary"
            onClick={() => navigate("/sign-up")}
          >
            SIGN UP
          </div>
        </div>
        
        <p className="error-msg">{signinError}</p>
      </form>
    </main>
  );
};
