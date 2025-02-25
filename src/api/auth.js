import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";

//등록하기
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

//로그인
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

//유저 프로필 가져오기
// : 로그인 했을때 주어지는 accessToken을 매개변수로 받응ㄹ 예정
export const getUserProfile = async (token) => {
  const response = await axios.post(`${API_URL}/login`, {
    //헤더에 토큰 넣어서 보내기
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

//프로필 업데이트
export const updateProfile = async (token, profileData) => {
  const formData = new FormData();
  if (profileData.nickname) {
    formData.append("nickname", profileData.nickname);
  }
  const response = await axios.patch(`${API_URL}/profile`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
