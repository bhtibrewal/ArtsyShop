import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonPrimary, InputField, PasswordInput } from "../../../components";
import { useUserContext } from "../../../context";
import { signUp } from "../../../services";

export const SignUp = () => {
  const navigate = useNavigate();
  const { setLoginState, userDataDispatch } = useUserContext();
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
  return (
    <main className="main flex-align-center">
      <div className="flex-col signup-sec">
        <i className="primary fa-regular fa-user fa-5x"></i>
        <p className="body-l">Create my account on Artsy Shop!</p>

        <InputField
          value={inputValues.firstName}
          onChange={(e) =>
            setInputValues({ ...inputValues, firstName: e.target.value })
          }
          label={"First Name"}
        />
        <InputField
          value={inputValues.lastName}
          onChange={(e) =>
            setInputValues({ ...inputValues, lastName: e.target.value })
          }
          label={"Last Name"}
        />
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
            checked={agreeToTerms}
            onChange={() => setAgreeToTerms((prev) => !prev)}
          />
          <span className="checkbox-text">
            By registering, I accept the
            <Link to="me" className="primary">
              General terms and conditions.
            </Link>
          </span>
        </label>
        <ButtonPrimary
          onClick={() =>
            signUp({
              data: inputValues,
              userDataDispatch,
              setLoginState,
              navigate,
            })
          }
          className={` ${isDisabled && "diabled-btn"}`}
        >
          <span>Create Account</span>
        </ButtonPrimary>
        <div>
          <p className="body-md">Already have account ?</p>
          <div
            className={`link-text-primary `}
            onClick={() => navigate("/sign-in")}
          >
            SIGN IN
          </div>
        </div>
      </div>
    </main>
  );
};
