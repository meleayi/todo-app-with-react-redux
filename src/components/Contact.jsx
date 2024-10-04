import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send the data to an API)
    setSuccess(true);
    // Reset form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[750px] bg-gray-100 p-6 pt-10">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Get in Touch
      </h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Feel free to reach out using the information below or send a message
        using the form.
      </p>
      <div className="mb-6">
        <p className="text-lg text-gray-800">
          Email:{" "}
          <a
            href="mailto:meleayi2021@gmail.com"
            className="text-blue-500"
          >{`meleayi2021@gmail.com`}</a>
        </p>
        <p className="text-lg text-gray-800">
          Contact: <span className="text-blue-500">+251 93070 7411</span>
        </p>
        <p className="text-lg text-gray-800">
          Portfolio:{" "}
          <a
            href="https://meleseayichlie.netlify.app/"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            meleseayichlie.netlify.app
          </a>
        </p>
      </div>

      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Your Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border border-gray-300 rounded w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 rounded w-full p-2"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300"
        >
          Send Message
        </button>
      </form>

      {success && (
        <p className="mt-4 text-green-600">
          Your message has been sent. Thank you!
        </p>
      )}
    </div>
  );
};

export default Contact;
