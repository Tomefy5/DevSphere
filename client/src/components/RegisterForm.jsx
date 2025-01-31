import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/authServices";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await register(formData.username, formData.email, formData.password);
      setFormData({
        username: "",
        email: "",
        password: "",
      });
      navigate("/login");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col rounded-md w-96 h-auto mx-auto p-6 items-center gap-4 my-4 shadow-lg"
    >
      <h1 className="text-2xl font-extrabold">DevSphere</h1>
      <div className="flex flex-col gap-2 w-[80%] mx-auto">
        <input
          name="username"
          type="text"
          className="input input-bordered"
          placeholder="username..."
          required
          value={formData.username}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          className="input input-bordered"
          placeholder="email..."
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          className="input input-bordered"
          placeholder="password..."
          required
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button
        className="btn btn-primary font-medium w-[40%] mx-auto"
        disabled={loading}
      >
        {loading ? "Loading" : "Sign Up"}
      </button>
      <p className="text-sm flex gap-1">
        <span>Already have an account ?</span>
        <Link to={"/login"} className="text-blue-800">login here</Link>
      </p>
    </form>
  );
}
