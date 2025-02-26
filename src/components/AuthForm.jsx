import { useState } from "react";

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //이거 어떻게 동작되는건지?
    onSubmit(formData);
    setFormData({ id: "", password: "", nickname: "" });
  };
  return (
    <form className="flex flex-col gap-4 max-w-2xl" onSubmit={handleSubmit}>
      <input
        className="border-2 border-orange-300 p-2 rounded-md"
        type="text"
        name="id"
        placeholder="아이디를 입력해주세요"
        value={formData.id}
        onChange={handleChange}
        required
      />
      <input
        className="border-2 border-orange-300 p-2 rounded-md"
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요"
        value={formData.password}
        onChange={handleChange}
        required
      />
      {mode === "signup" && (
        <input
          className="border-2 border-orange-300 p-2 rounded-md"
          type="text"
          name="nickname"
          placeholder="닉네임을 입력해주세요"
          value={formData.nickname}
          onChange={handleChange}
          required
        />
      )}
      <button type="submit" className="bg-amber-400 text-white p-2 rounded-md">
        {mode === "signup" ? "회원가입" : "로그인"}
      </button>
    </form>
  );
};

export default AuthForm;
