import Profile from "../Users/Profile";
import Signin from "../Users/Signin";
import { Routes, Route, Navigate } from "react-router-dom";
import UserTable from "../Users/Table";
import Signup from "../Users/Signup";

export default function Account() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
        <Route path="Signin" element={<Signin />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Admin/Users" element={<UserTable />} />
        <Route path="test" element={<h1>TEST</h1>} />
      </Routes>
    </div>
  );
}
