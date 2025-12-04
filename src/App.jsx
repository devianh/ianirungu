import React, { useState, useEffect } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Real-time Chat App",
      desc: "A full stack chat platform with authentication, WebSockets, and cloud deployment.",
      live: "https://example.com/chat",
      repo: "https://github.com/yourusername/chat-app",
      img: "https://via.placeholder.com/600x350?text=Chat+App",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      desc: "A secure, scalable online store with payment integration and admin dashboard.",
      live: "https://example.com/shop",
      repo: "https://github.com/yourusername/ecommerce",
      img: "https://via.placeholder.com/600x350?text=Ecommerce",
    },
  ];

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill out all fields.");
      return;
    }

    setSending(true);
    const phone = "254759670729";
    const text = `New portfolio message from ${form.name} (%0AEmail: ${form.email}%0A%0A${form.message})`;
    const whatsappUrl = `https://wa.me/${phone}?text=${text}`;
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      alert("Message opened in WhatsApp.");
      setSending(false);
      setForm({ name: "", email: "", message: "" });
    }, 800);
  }

  return (
    <div className="min-h-screen bg-black text-white antialiased">

      {/* HEADER */}
      <header className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Ian Irungu
        </h1>
        <nav className="space-x-4 text-sm">
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#tech" className="hover:text-purple-400">Tech</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
          <a href="#comments" className="hover:text-purple-400">Comments</a>
        </nav>
      </header>

      {/* HERO */}
      {/* ...your hero section stays unchanged... */}

      {/* TECH STACK */}
      {/* ...unchanged... */}

      {/* EDUCATION */}
      {/* ...unchanged... */}

      {/* PROJECTS */}
      {/* ...unchanged... */}

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-5xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-semibold mb-4">✉️ Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* FORM */}
          <form onSubmit={handleSubmit} className="p-6 rounded-xl border border-gray-800 bg-gray-900">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input name="name" value={form.name} onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-black border border-gray-700 mb-3" />

            <label className="block text-sm font-medium mb-2">Email</label>
            <input name="email" value={form.email} onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-black border border-gray-700 mb-3" />

            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={4}
              className="w-full px-3 py-2 rounded bg-black border border-gray-700 mb-4" />

            <button type="submit" disabled={sending}
              className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold">
              {sending ? "Sending..." : "Send via WhatsApp"}
            </button>
          </form>

          {/* SOCIALS */}
          {/* ... your socials grid stays unchanged ... */}

        </div>
      </section>

      {/* COMMENT SECTION BELOW CONTACT */}
      <CommentSection />

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-400 mt-20">
        © {new Date().getFullYear()} Ian Irungu. Built with ❤️ | Full Stack • Cloud • Security
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/254759670729"
        target="_blank"
        rel="noreferrer"
        className="fixed right-6 bottom-6 p-4 rounded-full shadow-lg"
        style={{ background: "linear-gradient(90deg,#25D366,#128C7E)" }}
      >
        <svg width="26" height="26" fill="white" viewBox="0 0 24 24">
          <path d="M20.52 3.48C18.27 1.22 15.18 0 12 0 5.37 0 .03 5.34.03 12c0 2.12.56 4.1 1.62 5.83L0 24l6.41-1.71C8.08 22.67 9.99 23.1 12 23.1c6.63 0 11.97-5.34 11.97-11.99 0-3.18-1.22-6.27-3.45-8.42z" />
        </svg>
      </a>
    </div>
  );
}

/* 💬 COMMENT SECTION COMPONENT */
function CommentSection() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [anonymous, setAnonymous] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("portfolio-comments"));
    if (saved) setComments(saved);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComment = {
      id: Date.now(),
      name: anonymous || !name.trim() ? "Anonymous" : name.trim(),
      text: comment.trim(),
      time: new Date().toLocaleString(),
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem("portfolio-comments", JSON.stringify(updated));

    setComment("");
    setName("");
  };

  return (
    <section id="comments" className="max-w-5xl mx-auto px-6 mt-20">
      <h2 className="text-2xl font-semibold mb-4 text-white">💬 Comments</h2>

      <form onSubmit={handleSubmit} className="p-6 rounded-xl border border-gray-800 bg-gray-900 space-y-4">

        {!anonymous && (
          <input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 rounded bg-black border border-gray-700"
          />
        )}

        <label className="flex items-center gap-3 text-gray-300 text-sm">
          <input type="checkbox" checked={anonymous} onChange={() => setAnonymous(!anonymous)} />
          Post as Anonymous
        </label>

        <textarea
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full h-28 px-3 py-2 rounded bg-black border border-gray-700"
        />

        <button
          type="submit"
          className="w-full px-4 py-2 rounded-full bg-purple-600 text-black font-semibold hover:brightness-110"
        >
          Post Comment
        </button>
      </form>

      <div className="mt-8 space-y-4">
        {comments.length === 0 ? (
          <p className="text-gray-500 text-sm">No comments yet. Be the first!</p>
        ) : (
          comments.map((c) => (
            <div key={c.id} className="p-4 border border-gray-800 bg-gray-900 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-purple-300">{c.name}</span>
                <span className="text-xs text-gray-500">{c.time}</span>
              </div>
              <p className="text-gray-300">{c.text}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
