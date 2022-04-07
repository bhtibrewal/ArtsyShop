import "../auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProductContext, useToast, useUserContext } from "../../../context";
import { useDocumentTitle } from "../../../custom_hooks";
import {
  ButtonPrimary,
  InputField,
  OutlineButtonPrimary,
  PasswordInput,
} from "../../../components";
import { signIn } from "../../../services";

export const SignIn = () => {
  useDocumentTitle("| Sign In");
  const navigate = useNavigate();
  const [error, setSigninError] = useState();
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const guestLogin = {
    email: "adarshbalak@gmail.com",
    password: "adarshBalaki123",
  };
  const [keepMeLoggedIn, setKeepMeLoggedIn] = useState(false);

  const { productDispatch } = useProductContext();
  const { setIsUserLoggedIn, userDataDispatch } = useUserContext();
  const { showToast } = useToast();
  useEffect(() => {
    showToast({
      title: "Click on Keep me Logged in before submitting to stay logged in",
      type: "primary",
    });
    return () => {};
  }, []);

  return (
    <main className="main center">
      <form
        className="flex-col signup-sec"
        onSubmit={(e) => {
          e.preventDefault();
          signIn({
            setSigninError,
            data: inputValues,
            productDispatch,
            userDataDispatch,
            setIsUserLoggedIn,
            showToast,
            keepMeLoggedIn,
          });
        }}
      >
        <p className="body-l">Login to my user account.</p>

        <InputField
          value={inputValues.email}
          onChange={(e) =>
            setInputValues({ ...inputValues, email: e.target.value })
          }
          label={"Email"}
        />
        <PasswordInput
          value={inputValues.password}
          onChange={(e) =>
            setInputValues({ ...inputValues, password: e.target.value })
          }
          label={"Password"}
        />
        <label className="flex-align-center">
          <input
            type="checkbox"
            checked={keepMeLoggedIn}
            onChange={() => setKeepMeLoggedIn((prev) => !prev)}
          />
          <span className="checkbox-text"> Keep me logged in. </span>
        </label>
        <ButtonPrimary type="submit">
          <span>validate</span>
          <i className="fa-solid fa-arrow-right-long"></i>
        </ButtonPrimary>
        <OutlineButtonPrimary onClick={() => setInputValues(guestLogin)}>
          Login as Guest
        </OutlineButtonPrimary>
        <p
          onClick={() =>
            showToast({
              title: "Coming Soon",
              type: "primary",
            })
          }
          className="link-text-primary"
        >
          Forgot your password?
        </p>
        <div>
          <p className="body-md">Still don't have an account ?</p>
          <div
            className="link-text-primary"
            onClick={() => navigate("/sign-up")}
          >
            SIGN UP
          </div>
        </div>
        <div className="err-msg">{error}</div>
      </form>
    </main>
  );
};
