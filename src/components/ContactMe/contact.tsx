import React, { useState } from "react";

type ContactProps = {
  contact: string;
};

export const Contact = ({ contact }: ContactProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", { name, email, message });
    // Reset fields after submission (optional)
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <footer className="flex justify-center items-center p-10 bg-wenge text-white">
      <div className="w-full max-w-md">
        <h2 className="text-4xl text-center text-white-smoke mb-6">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white-smoke font-medium">
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
                required
              />
            </label>
          </div>
          <div>
            <label className="block text-white-smoke font-medium">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
                required
              />
            </label>
          </div>
          <div>
            <label className="block text-white-smoke font-medium">
              Message
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
                rows={4}
                required
              ></textarea>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-white-smoke hover:bg-blue-600 text-wenge p-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};
