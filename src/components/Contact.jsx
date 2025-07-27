import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzzvrkpo";

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = 'Name is required';
        if (!form.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Invalid email';
        if (!form.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: undefined });
        setSubmitError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError("");
        const validation = validate();
        if (Object.keys(validation).length > 0) {
            setErrors(validation);
            return;
        }
        setLoading(true);
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    message: form.message
                })
            });
            if (res.ok) {
                setSubmitted(true);
                setForm({ name: '', email: '', message: '' });
            } else {
                setSubmitError("Something went wrong. Please try again later.");
            }
        } catch (err) {
            setSubmitError("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-[#f9fbfc] dark:bg-gray-900 py-16 px-4 sm:px-8" id="contact">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
                    Get In Touch
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
                    I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Left - Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-200/10 p-6 rounded-xl shadow flex items-center gap-4">
                            <div className="bg-pink-500 text-white p-3 rounded-lg text-xl">
                                <MdEmail />
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Email</p>
                                <p className="font-medium text-gray-900 dark:text-white">oom12345609@gmail.com</p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-200/10 p-6 rounded-xl shadow flex items-center gap-4">
                            <div className="bg-green-500 text-white p-3 rounded-lg text-xl">
                                <MdPhone />
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Phone</p>
                                <p className="font-medium text-gray-900 dark:text-white">+91 9568660020</p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-200/10 p-6 rounded-xl shadow flex items-center gap-4">
                            <div className="bg-purple-500 text-white p-3 rounded-lg text-xl">
                                <MdLocationOn />
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Location</p>
                                <p className="font-medium text-gray-900 dark:text-white">Ghaziabad, UP, India</p>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Connect With Me</h3>
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/om-maheshwari-a51b41233/" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-blue-600 p-3 rounded-lg text-white text-xl cursor-pointer">
                                        <FaLinkedin />
                                    </div>
                                </a>
                                <a href="https://github.com/OmMaheshwari27" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-gray-800 p-3 rounded-lg text-white text-xl cursor-pointer">
                                        <FaGithub />
                                    </div>
                                </a>
                                {/* LeetCode */}
                                <a
                                    href="https://leetcode.com/OmMaheshwari"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-lg cursor-pointer"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                                        <path d="M22.4 35.9L13.2 25.6L22.4 14.1L20.3 12L8.9 25.6L20.3 39.2L22.4 35.9ZM27.5 35.9L36.7 25.6L27.5 14.1L29.6 12L41.1 25.6L29.6 39.2L27.5 35.9Z" />
                                    </svg>
                                </a>

                                {/* Codolio (Globe Icon) */}
                                <a
                                    href="https://codolio.com/profile/OmMaheshwari"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg cursor-pointer"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm6.93 6h-3.24a8.049 8.049 0 0 0-1.07-2.63A8.04 8.04 0 0 1 18.93 8zM12 4c.75 0 1.799 1.223 2.377 3H9.623C10.201 5.223 11.25 4 12 4zM8.38 5.37A8.05 8.05 0 0 0 7.31 8H4.07a8.04 8.04 0 0 1 4.31-2.63zM4 12c0-.692.098-1.36.28-2h3.94a14.702 14.702 0 0 0 0 4H4.28c-.182-.64-.28-1.308-.28-2zm.07 4h3.24c.248.95.614 1.86 1.07 2.63A8.04 8.04 0 0 1 4.07 16zm3.24 0h9.38c-.578 1.777-1.627 3-2.377 3s-1.799-1.223-2.377-3zm5.38 3a8.05 8.05 0 0 0 1.07-2.63h3.24a8.04 8.04 0 0 1-4.31 2.63zM15.78 14a14.702 14.702 0 0 0 0-4h3.94c.182.64.28 1.308.28 2s-.098 1.36-.28 2h-3.94zm-.37-6a12.688 12.688 0 0 1 .591 2H8.999a12.688 12.688 0 0 1 .591-2h5.82zM9.59 14h4.82a12.688 12.688 0 0 1-.591 2H10.18a12.688 12.688 0 0 1-.591-2z" />
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/__om_maheshwari__/" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-pink-600 p-3 rounded-lg text-white text-xl cursor-pointer">
                                        <FaInstagram />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="bg-white dark:bg-gray-200/10 p-8 rounded-xl shadow space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Let's Work Together!</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            I'm currently looking for new opportunities and exciting projects. Whether you have a question about my work, want to collaborate, or just want to say hi, I'll try my best to get back to you!
                        </p>

                        {submitted ? (
                            <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-center p-4 rounded-lg font-semibold">
                                Thank you for reaching out! I'll get back to you soon.
                            </div>
                        ) : (
                            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1" htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:text-white ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
                                        value={form.name}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1" htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:text-white ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
                                        value={form.email}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1" htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:text-white ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
                                        value={form.message}
                                        onChange={handleChange}
                                    />
                                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
                                    disabled={loading}
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                                {submitError && <p className="text-red-500 text-center mt-2">{submitError}</p>}
                            </form>
                        )}

                        <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm p-4 rounded-lg">
                            💡 <span className="font-semibold">Quick Response:</span> I typically respond to emails within 24 hours!
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;