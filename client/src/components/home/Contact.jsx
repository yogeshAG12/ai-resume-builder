import React, { useState } from "react";
import api from "../../configs/api";
import toast from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/api/contact", form);

      toast.success(data.message);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error?.response?.data?.message || error.message
      );
    }
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 py-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="text-gray-500">
          Have a question or suggestion?
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-xl p-6 space-y-4"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded-lg"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />

        <textarea
          rows="5"
          placeholder="Message"
          className="w-full border p-3 rounded-lg"
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;