import { useState, useEffect } from "react";

export default function App() {

  /* ---------------- CONTACT FORM ---------------- */
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
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

  /* ---------------- COMMENT SECTION ---------------- */
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  // Load saved comments
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(saved);
  }, []);

  // Save to local storage when comments change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  function addComment(e) {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      name: commentName || "Anonymous",
      text: commentText,
      time: new Date().toLocaleString(),
    };

    setComments([newComment, ...comments]);
    setCommentName("");
    setCommentText("");
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
      <section className="flex flex-col items-center justify-center text-center mt-12 px-6">
        <div className="relative">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-52 h-52 rounded-full object-cover shadow-lg"
          />
          <div className="absolute inset-0 rounded-full ring-4 ring-purple-500"></div>

          <div className="absolute bottom-0 right-0 translate-y-6 bg-purple-600 text-black font-bold px-4 py-1 rounded-full">
            💻 Full Stack Developer
          </div>
        </div>

        <h2 className="mt-6 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
          Building Secure, Scalable Web Apps
        </h2>

        <p className="mt-3 max-w-md text-gray-300">
          Full Stack Developer • Cloud Engineer • Cybersecurity Expert
        </p>

        <div className="mt-4 space-x-3">
          <a href="#projects" className="px-4 py-2 rounded-full border border-gray-700 hover:border-purple-400">
            View Projects
          </a>
          <a href="#contact" className="px-4 py-2 rounded-full bg-purple-600 text-black font-semibold hover:brightness-110">
            Contact Me
          </a>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech" className="max-w-5xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-semibold mb-4">🧠 My Tech Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[
            "HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS",
            "Node.js", "Express.js", "Python", "Django", "FastAPI", "MongoDB",
            "MySQL", "PostgreSQL", "Firebase", "AWS", "GCP", "Azure",
            "Docker", "Kubernetes", "Linux", "Git", "GitHub",
            "Wireshark", "Nmap", "Burp Suite", "Metasploit"
          ].map(tool => (
            <span
              key={tool}
              className="px-3 py-2 rounded-lg border border-gray-800 bg-gray-900 text-sm text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-200"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="max-w-5xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-semibold mb-4">🎓 Education & Certifications</h2>

        <div className="grid sm:grid-cols-2 gap-4">

          <div className="p-4 rounded-lg border border-gray-800">
            <h3 className="font-semibold">B.Sc. Computer Science</h3>
            <p className="text-sm text-gray-400">Egerton University — student (joined 2023)</p>
          </div>

          <div className="p-4 rounded-lg border border-gray-800">
            <h3 className="font-semibold">Certifications</h3>
            <ul className="mt-2 text-sm text-gray-300 list-disc list-inside">
              <li>AWS Certified Solutions Architect</li>
              <li>CompTIA Security+</li>
              <li>Google Cloud Engineer</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-semibold mb-6">📁 Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(p => (
            <div key={p.id} className="rounded-xl overflow-hidden border border-gray-800 bg-gray-900">
              <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{p.desc}</p>

                <div className="flex space-x-3">
                  <a href={p.live} target="_blank" className="px-3 py-2 rounded-md border border-gray-700 hover:border-cyan-400">
                    🔗 Live Demo
                  </a>
                  <a href={p.repo} target="_blank" className="px-3 py-2 rounded-md bg-purple-600 text-black font-semibold">
                    💻 GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="max-w-5xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-semibold mb-4">✉️ Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* FORM */}
          <form onSubmit={handleSubmit} className="p-6 rounded-xl border border-gray-800 bg-gray-900">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-black border border-gray-700 mb-3"
            />

            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-black border border-gray-700 mb-3"
            />

            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 rounded bg-black border border-gray-700 mb-4"
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold"
            >
              {sending ? "Sending..." : "Send via WhatsApp"}
            </button>
          </form>

          {/* DIRECT CONTACT GRID */}
          <div className="connect-section mt-4">
            <h3 className="connect-title">Connect With Me</h3>
            <div className="connect-grid">

              <a href="https://linkedin.com/in/ianirungu" className="connect-card">
                <div className="icon linkedin"></div>
                <div className="text">
                  <h4>LinkedIn</h4>
                  <p>Let's Connect</p>
                </div>
              </a>

              <a href="https://www.instagram.com/ianh.irungu/" className="connect-card">
                <div className="icon instagram"></div>
                <div className="text">
                  <h4>Instagram</h4>
                  <p>@ianh.irungu</p>
                </div>
              </a>

              <a href="#" className="connect-card">
                <div className="icon youtube"></div>
                <div className="text">
                  <h4>YouTube</h4>
                  <p>Add link later</p>
                </div>
              </a>

              <a href="https://github.com/devianh" className="connect-card">
                <div className="icon github"></div>
                <div className="text">
                  <h4>GitHub</h4>
                  <p>@devianh</p>
                </div>
              </a>

              <a href="#" className="connect-card">
                <div className="icon tiktok"></div>
                <div className="text">
                  <h4>TikTok</h4>
                  <p>@your_tiktok</p>
                </div>
              </a>

              <a href="https://wa.me/254759670729" className="connect-card">
                <div className="icon whatsapp"></div>
                <div className="text">
                  <h4>WhatsApp</h4>
                  <p>+254 759 670 729</p>
                </div>
              </a>

              <a href="mailto:emrgian@gmail.com" className="connect-card">
                <div className="icon email"></div>
                <div className="text">
                  <h4>Email</h4>
                  <p>emrgian@gmail.com</p>
                </div>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ---------------- COMMENT SECTION ---------------- */}
      <section id="comments" className="max-w-5xl mx-auto px-6 mt-20 mb-20">
        <h2 className="text-2xl font-semibold mb-4">💬 Visitor Comments</h2>

        {/* COMMENT FORM */}
        <form onSubmit={addComment} className="p-6 rounded-xl border border-gray-800 bg-gray-900">
          <input
            placeholder="Your name (optional)"
            value={commentName}
            onChange={(e) => setCommentName(e.target.value)}
            className="w-full px-3 py-2 rounded bg-black border border-gray-700 mb-3"
          />

          <textarea
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 rounded bg-black border border-gray-700 mb-3"
          />

          <button className="w-full px-4 py-2 rounded-full bg-purple-600 text-black font-semibold">
            Post Comment
          </button>
        </form>

        {/* COMMENTS LIST */}
        <div className="mt-6 space-y-4">
          {comments.length === 0 && (
            <p className="text-gray-400">No comments yet. Be the first!</p>
          )}

          {comments.map((c, i) => (
            <div key={i} className="p-4 bg-gray-900 border border-gray-800 rounded-lg">
              <h4 className="font-semibold text-purple-300">{c.name}</h4>
              <p className="text-gray-300 mt-1">{c.text}</p>
              <p className="text-gray-500 text-xs mt-2">{c.time}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
