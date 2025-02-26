import axios from "axios";

const API_URL = "http://localhost:5000/testResults";

//전체결과 불러오기
export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
//특정 아이디에 대한 결과 가져오기
export const getTestResultsById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

//테스트 결과 추가하기 등록 : post
export const createTestResult = async (resultData) => {
  //받아온 매개변수 resultData 를 데이터 바디에 어떤거 써주고싶은지 넣어준다.
  const response = await axios.post(`${API_URL}`, resultData);
  return response.data;
};

//결과 삭제하기
export const deleteTestResult = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

//공개여부 수정하기
export const updateTestResultVisibility = async (id, visibility) => {
  //특정 아이디에 접근을 하고 바꾸어줄 요소 변경
  const response = await axios.patch(`${API_URL}/${id}`, { visibility });
  return response.data;
};
