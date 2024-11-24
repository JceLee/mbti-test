import React, { useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { login, getUserProfile } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const loginData = await login(formData);
      localStorage.setItem("accessToken", loginData.accessToken);

      // 로그인 후 프로필을 가져와서 사용자 상태에 설정
      const userProfile = await getUserProfile(loginData.accessToken);
      setUser(userProfile);

      navigate("/");
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6">로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div className="mt-4">
          <p className="text-gray-600">
            계정이 없으신가요?{" "}
            <Link to="/signup" className="text-primary-color hover:underline">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
