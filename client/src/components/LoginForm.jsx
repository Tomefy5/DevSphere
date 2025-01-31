import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authServices";

export default function LoginForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      setFormData({
        email: "",
        password: "",
      });
      navigate("/devpage");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col rounded-md w-96 h-auto mx-auto p-6 items-center gap-4 my-4 shadow-lg"
    >
      <h1 className="text-2xl font-extrabold">DevSphere</h1>
      <div className="flex flex-col gap-2">
        <input
          name="email"
          type="email"
          className="input input-bordered"
          placeholder="email..."
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          className="input input-bordered"
          placeholder="password..."
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary font-medium">Login</button>
      <p className="text-sm flex gap-1">
        <span>Don&apos;t have an account ?</span>
        <Link to={"/"} className="text-blue-800">Sign up</Link>
      </p>
    </form>
  );
}
