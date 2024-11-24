import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Layout = ({ children, user, setUser }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user && location.pathname !== "/" && location.pathname !== "/signup") {
      navigate("/login");
    }
  }, [user, navigate, location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="h-full bg-gray-100 flex flex-col justify-between">
      <header className="bg-primary-color p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center text-white">
          <Link to="/" className="text-lg font-semibold">
            홈
          </Link>
          <div className="space-x-4">
            {user ? (
              <>
                <Link to="/profile" className="hover:text-gray-300">
                  프로필
                </Link>
                <Link to="/test" className="hover:text-gray-300">
                  테스트
                </Link>
                <Link to="/results" className="hover:text-gray-300">
                  결과 보기
                </Link>
                <button onClick={handleLogout} className="hover:text-gray-300">
                  로그아웃
                </button>
              </>
            ) : (
              <Link to="/login" className="hover:text-gray-300">
                로그인
              </Link>
            )}
          </div>
        </nav>
      </header>
      <main className="container mx-auto pt-10 main">{children}</main>
    </div>
  );
};

export default Layout;
