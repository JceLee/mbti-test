import React, { useState } from "react";
import { updateProfile } from "../api/auth";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");
  const [message, setMessage] = useState("");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await updateProfile({ nickname });
      setUser(updatedUser);
      setMessage("프로필이 성공적으로 업데이트되었습니다!");
    } catch (error) {
      setMessage("프로필 업데이트에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6">
          프로필 수정
        </h1>
        {message && (
          <p className="mb-4 text-center text-green-600 font-semibold">
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              닉네임
            </label>
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-primary-color"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-color text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
