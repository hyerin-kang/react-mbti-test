import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import AuthForm from "../components/AuthForm";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = async (formData) => {
    try {
      await login(formData);
      alert("로그인 되었습니다.");
      navigate("/");
    } catch (error) {
      alert(
        `로그인 실패 : ${
          error.response?.data?.message || "알 수 없는 오류 발생"
        }`
      );
    }
  };
  return (
    <div>
      <h2>로그인</h2>
      <AuthForm mode={"signin"} onSubmit={handleSignIn} />
    </div>
  );
};

export default SignIn;
