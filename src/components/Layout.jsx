import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children, isAuthenticated, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };
  return (
    <div>
      <nav className="flex align-center justify-between p-5 ">
        <Link to="/">홈</Link>
        {isAuthenticated ? (
          <>
            <Link to="/profile">프로필</Link>
            <Link to="/test">테스트</Link>
            <Link to="/results">테스트 결과 목록</Link>
            <button onClick={handleLogout}>로그아웃</button>
          </>
        ) : (
          <div className="flex gap-4">
            <Link to="/signIn">로그인</Link>
            <Link to="/signUp">회원가입</Link>
          </div>
        )}
      </nav>
      <main className="max-w-[700px] mx-auto">{children}</main>
    </div>
  );
};

export default Layout;

/*
link, useNavigation 이 필요하다
children, isAuthenticated, setUser
로그아웃시 : 유저정보 없애고 홈으로

로그인되었는지 어케 확인함?
app 에서 user에

*/
