import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSignup = async (formData) => {
    try {
      await register(formData);
      alert("회원가입 완료");
      navigate("/signin");
    } catch (error) {
      //?. : 옵셔널체이닝
      //객체의 특정속성에 접근할때, 해당속성이 undefined 또는 null 이면 오류를 방지하고 undefined 반환
      const errorMessage =
        error.response?.data?.message || "알 수 없는 오류가 발생했습니다.";

      console.log("error:", errorMessage);
      alert(`회원가입 실패 : ${errorMessage}`);
    }
  };
  return (
    <div>
      <h2> 회원가입</h2>
      <AuthForm mode={"signup"} onSubmit={handleSignup} />
      <p>
        이미 계정이 있으신가요? <Link to="/signin">로그인</Link>
      </p>
    </div>
  );
};

export default SignUp;
