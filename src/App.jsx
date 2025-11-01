import React, { useState } from "react";

// Full React + Tailwind Portfolio (dark theme + colorful fonts + WhatsApp notifications)
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

    // Replace with your actual WhatsApp number in international format (e.g., 254712345678)
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
      {/* Header */}
      <header className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Ian Irungu
        </h1>
        <nav className="space-x-4 text-sm">
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#tech" className="hover:text-purple-400">Tech</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-12 px-6">
        <div className="relative">
          <img src="/profile.jpg" alt="Profile" className="w-52 h-52 rounded-full object-cover shadow-lg" />
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

      {/* Tech Stack */}
      <section id="tech" className="max-w-5xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-semibold mb-4">🧠 My Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "Python", "Django", "FastAPI", "MongoDB", "MySQL", "PostgreSQL", "Firebase", "AWS", "GCP", "Azure", "Docker", "Kubernetes", "Linux", "Git", "GitHub", "Wireshark", "Nmap", "Burp Suite", "Metasploit"].map((tool) => (
            <span key={tool} className="px-3 py-2 rounded-lg border border-gray-800 bg-gray-900 text-sm text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-200">
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-5xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-semibold mb-4">🎓 Education & Certifications</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border border-gray-800">
            <h3 className="font-semibold">B.Sc. Computer Science</h3>
            <p className="text-sm text-gray-400">University Name — Year</p>
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

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-semibold mb-6">📁 Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.id} className="rounded-xl overflow-hidden border border-gray-800 bg-gray-900">
              <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{p.desc}</p>
                <div className="flex space-x-3">
                  <a href={p.live} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md border border-gray-700 hover:border-cyan-400">🔗 Live Demo</a>
                  <a href={p.repo} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md bg-purple-600 text-black font-semibold">💻 View on GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-6 mt-16 mb-20">
        <h2 className="text-2xl font-semibold mb-4">✉️ Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="p-6 rounded-xl border border-gray-800 bg-gray-900">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full px-3 py-2 rounded bg-black border border-gray-700 mb-3" />

            <label className="block text-sm font-medium mb-2">Email</label>
            <input name="email" value={form.email} onChange={handleChange} className="w-full px-3 py-2 rounded bg-black border border-gray-700 mb-3" />

            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full px-3 py-2 rounded bg-black border border-gray-700 mb-4" />

            <button type="submit" disabled={sending} className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold">
              {sending ? "Sending..." : "Send via WhatsApp"}
            </button>
          </form>

          <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
            <h3 className="font-semibold mb-3">Reach Me Directly</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📞 WhatsApp: +254 759 670 729</li>
              <li>📧 Email: emrgian@gmail.com.com</li>
              <li>🔗 LinkedIn: linkedin.com/in/ianirungu</li>
              <li>💻 GitHub: github.com/devianh</li>
              <li>Instagram: https://www.instagram.com/ianh.irungu/</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Ian Irungu. Built with ❤️ | Full Stack • Cloud • Security
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/254759670729" target="_blank" rel="noreferrer" className="fixed right-6 bottom-6 p-4 rounded-full shadow-lg" style={{ background: 'linear-gradient(90deg,#25D366,#128C7E)' }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48C18.27 1.22 15.18 0 12 0 5.37 0 .03 5.34.03 12c0 2.12.56 4.1 1.62 5.83L0 24l6.41-1.71C8.08 22.67 9.99 23.1 12 23.1c6.63 0 11.97-5.34 11.97-11.99 0-3.18-1.22-6.27-3.45-8.42zM12 21.5c-1.8 0-3.55-.48-5.06-1.39l-.36-.22-3.8 1.02 1.02-3.7-.23-.36C2.98 14.1 2.5 12.4 2.5 10.6 2.5 6.3 6.3 2.5 10.6 2.5c2.3 0 4.45.9 6.07 2.52 1.62 1.62 2.52 3.77 2.52 6.07 0 4.3-3.8 8.1-8.1 8.1z"/></svg>
      </a>
    </div>
  );
}
