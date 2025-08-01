"use client";

import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#ededed]">
      <div className="flex-grow py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-300">
              ご要望・ご連絡がございましたら、以下のフォームからご連絡ください。
              <br />
              できる限り迅速に対応させていただきます。
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-vertical"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed font-medium transition-colors"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <TypeAnimation
                  sequence={[
                    "Send a message",
                    3000,
                    "Send a warm hello",
                    3000,
                    "Send a thanks",
                    3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  style={{ whiteSpace: "pre-line" }}
                />
              )}
            </button>

            {submitStatus === "success" && (
              <div className="p-4 rounded-lg bg-green-800 text-green-200">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 rounded-lg bg-red-800 text-red-200">
                Sorry, there was an error sending your message. Please try
                again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;