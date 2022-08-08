import axios from "axios";

export const signUp = async ({
  data,
  showToast,
  navigate,
}: {
  data?: {};
  showToast: Function;
  navigate: Function;
}) => {
  try {
    const res = await axios.post("/api/auth/signup", data);
    if (res.status === 201) {
      navigate("/sign-in");
      showToast({ title: "sign up successful", type: "success" });
    }
  } catch (err) {
    if (err instanceof Error) console.log(err?.response?.data?.errors);
    else console.log("Unexpected error", err);
  }
};
