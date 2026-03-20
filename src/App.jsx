import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Phone, ExternalLink, Download, 
  Code2, Cpu, ShieldCheck, Database, Award, GraduationCap,
  ChevronRight, MessageSquare, Terminal, BrainCircuit, AppWindow
} from 'lucide-react';
import './index.css';

const LeetCodeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226a1.375 1.375 0 0 0 0 1.952l4.409 4.41a1.2 1.2 0 0 0 1.69 0 1.2 1.2 0 0 0 0-1.691L8.807 6.488c-.62-.619-1.24-1.222-1.24-1.222l4.13-4.13a.625.625 0 0 1 .883 0h.001l4.13 4.13c.621.619 1.241 1.222 1.241 1.222l-4.415 4.415a1.2 1.2 0 0 0 0 1.691 1.2 1.2 0 0 0 1.69 0L20.84 8.178a1.375 1.375 0 0 0 0-1.952l-5.405-5.406A1.374 1.374 0 0 0 13.483 0z"/>
    <path d="M16.018 20.21a1.2 1.2 0 0 0-1.691 0L9.91 24.625l-4.41-4.411c-.62-.619-1.24-1.221-1.24-1.221l4.129-4.129a.625.625 0 0 1 .883 0h.001l4.13 4.13c.62.619 1.24 1.222 1.24 1.222l4.412-4.41a1.2 1.2 0 0 0 0-1.691 1.2 1.2 0 0 0-1.692 0L12.553 18.52l-4.41-4.41a1.238 1.238 0 0 0-1.725 0l-5.42 5.42a1.375 1.375 0 0 0 0 1.952l5.42 5.42a1.375 1.375 0 0 0 1.952 0l5.42-5.42c.62-.619 1.24-1.222 1.24-1.222l-4.412 4.41a1.2 1.2 0 0 0 1.691 0 1.2 1.2 0 0 0 0-1.691L16.018 20.21z" opacity="0.6"/>
  </svg>
);

const HackerRankIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm3.111 16.5h1.389v-9h-1.389v3.429h-4.222v-3.429h-1.389v9h1.389v-4.143h4.222v4.143z"/>
  </svg>
);

const TypewriterText = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span className="text-accent min-h-[1.5em] block">
      {texts[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Section = ({ id, title, children, className = "" }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className={`py-20 px-6 max-w-7xl mx-auto ${className}`}
  >
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-white">
        {title}
      </h2>
      <div className="h-[2px] flex-grow bg-gradient-to-r from-primary to-transparent"></div>
    </div>
    {children}
  </motion.section>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="min-h-screen bg-bg selection:bg-primary selection:text-white">
      <div className="mesh-bg"></div>

      {/* Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
        <div className="glass px-8 py-3 rounded-full flex items-center justify-between border-white/5 shadow-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black text-white"
          >
            JL<span className="text-primary">.</span>
          </motion.div>
          <div className="hidden md:flex gap-8 items-center">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="mailto:ladanejagannath@gmail.com"
              className="px-5 py-2 glass rounded-full text-xs font-bold hover:bg-white/10 transition-all border-primary/20"
            >
              HIRE ME
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full -z-10 animate-glow-pulse"></div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-bold tracking-[0.3em] uppercase mb-4"
          >
            Software Engineer | AI & Secure Systems
          </motion.p>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            Jagannath <span className="text-neon">Ladane</span>
          </h1>
          <div className="text-2xl md:text-4xl font-medium text-gray-400 h-16">
            <TypewriterText texts={["AI-powered apps", "Secure systems", "Real-world products"]} />
          </div>
          <p className="max-w-xl mx-auto text-gray-400 mt-8 mb-12 text-lg">
            "I build intelligent, scalable, and secure applications that solve real-world problems."
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#projects" className="bg-primary hover:bg-primary/80 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-primary/20">
              View Projects
            </a>
            <a href="#contact" className="glass hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold transition-all border-white/10">
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <Section id="about" title="Professional Story">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative group">
            <div className="aspect-square glass rounded-3xl overflow-hidden border-primary/20 relative">
               {/* Use the actual logo/placeholder if image not available */}
               <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                 <Cpu size={120} className="text-primary/20 group-hover:scale-110 transition-transform duration-500" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border-white/10 shadow-xl hidden lg:block">
              <div className="text-accent font-black text-2xl">2+ YRS</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">Building Products</div>
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              "I am a <span className="text-white font-bold underline decoration-primary">product-minded Software Engineer</span> currently pursuing MCA at PCCOE."
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I specialize in building AI-driven applications and secure systems with a focus on scalability and user experience. 
              My passion lies in solving complex problems and creating products that are both intelligent and user-centric. 
              From farming assistants to digital vaults, I bridge the gap between humans and intelligence.
            </p>
            <div className="flex gap-4">
              <a 
                href="file:///c:/Users/DJ/Downloads/jagannath_cv.pdf" 
                download
                className="flex items-center gap-3 bg-white text-bg px-8 py-3 rounded-full font-bold hover:bg-accent transition-colors transition-all"
              >
                <Download size={18} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Technical Arsenal">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Languages", items: ["Java", "SQL", "JavaScript"], icon: <Code2 /> },
            { title: "Frontend", items: ["React", "React Native", "Expo", "Tailwind"], icon: <AppWindow /> },
            { title: "Backend", items: ["Node.js", "Firebase", "PostgreSQL", "Bcrypt"], icon: <Database /> },
            { title: "Cloud & Security", items: ["AWS S3", "AES-256-GCM", "Cybersecurity"], icon: <ShieldCheck /> },
            { title: "APIs & AI", items: ["OpenAI API", "HuggingFace", "RESTful"], icon: <BrainCircuit /> },
            { title: "Tools", items: ["GitHub", "VS Code", "Android Studio"], icon: <Terminal /> }
          ].map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="glass p-8 rounded-[2rem] border-white/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-medium text-gray-400 border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Featured Work">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* PeekSathi */}
          <div className="group">
            <div className="relative overflow-hidden rounded-[2.5rem] glass border-white/5 mb-8">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                <BrainCircuit size={80} className="text-accent/20 group-hover:scale-125 transition-transform duration-700" />
              </div>
              <div className="absolute top-6 left-6 px-4 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-accent border-accent/20">
                AI + Real Impact
              </div>
            </div>
            <div className="px-4">
              <h3 className="text-3xl font-black mb-4 group-hover:text-accent transition-colors">PeekSathi</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                AI-powered farming assistant that detects crop diseases from images and provides treatment in Marathi & English.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-gray-500">
                <li className="flex gap-3 items-center"><ChevronRight size={14} className="text-primary" /> Integrated OpenAI for diagnosis</li>
                <li className="flex gap-3 items-center"><ChevronRight size={14} className="text-primary" /> Multi-lingual treatment plans</li>
                <li className="flex gap-3 items-center"><ChevronRight size={14} className="text-primary" /> Persistent crop history tracking</li>
              </ul>
              <div className="flex gap-4">
                <span className="text-xs font-bold text-gray-400 px-3 py-1 glass rounded-lg">React Native</span>
                <span className="text-xs font-bold text-gray-400 px-3 py-1 glass rounded-lg">Expo</span>
                <span className="text-xs font-bold text-gray-400 px-3 py-1 glass rounded-lg">Firebase</span>
              </div>
            </div>
          </div>

          {/* DailyDiary.in */}
          <div className="group">
            <div className="relative overflow-hidden rounded-[2.5rem] glass border-white/5 mb-8">
              <div className="aspect-video bg-gradient-to-br from-indigo-900/30 to-black flex items-center justify-center">
                <ShieldCheck size={80} className="text-primary/20 group-hover:scale-125 transition-transform duration-700" />
              </div>
              <div className="absolute top-6 left-6 px-4 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-primary border-primary/20">
                Security-First Product
              </div>
            </div>
            <div className="px-4">
              <h3 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors">DailyDiary.in</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A secure digital journaling platform designed with privacy-first architecture using military-grade encryption.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-gray-500">
                <li className="flex gap-3 items-center"><ChevronRight size={14} className="text-primary" /> AES-256-GCM Encryption</li>
                <li className="flex gap-3 items-center"><ChevronRight size={14} className="text-primary" /> AWS S3 Secure Storage</li>
                <li className="flex gap-3 items-center"><ChevronRight size={14} className="text-primary" /> UUID Protected Schema</li>
              </ul>
              <div className="flex gap-4">
                <span className="text-xs font-bold text-gray-400 px-3 py-1 glass rounded-lg">Node.js</span>
                <span className="text-xs font-bold text-gray-400 px-3 py-1 glass rounded-lg">Postgres</span>
                <span className="text-xs font-bold text-gray-400 px-3 py-1 glass rounded-lg">Bcrypt</span>
              </div>
            </div>
          </div>

          {/* Contest Generator */}
          <div className="group">
            <div className="relative overflow-hidden rounded-[2.5rem] glass border-white/5 mb-8">
              <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-transparent flex items-center justify-center">
                <Terminal size={80} className="text-primary/20 group-hover:scale-125 transition-transform duration-700" />
              </div>
              <div className="absolute top-6 left-6 px-4 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-primary border-primary/20">
                DSA Tooling
              </div>
            </div>
            <div className="px-4">
              <h3 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors">Contest Generator</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                 A web application designed for generating custom DSA contests and rounds with ease.
              </p>
              <div className="flex gap-4">
                <span className="text-xs font-bold text-gray-400 px-3 py-1 glass rounded-lg">TypeScript</span>
                <span className="text-xs font-bold text-gray-400 px-3 py-1 glass rounded-lg">React</span>
                <span className="text-xs font-bold text-gray-400 px-3 py-1 glass rounded-lg">Vite</span>
              </div>
            </div>
          </div>

          {/* Library Catalogue System */}
          <div className="group">
            <div className="relative overflow-hidden rounded-[2.5rem] glass border-white/5 mb-8">
              <div className="aspect-video bg-gradient-to-br from-indigo-900/20 to-transparent flex items-center justify-center">
                <Code2 size={80} className="text-accent/20 group-hover:scale-125 transition-transform duration-700" />
              </div>
              <div className="absolute top-6 left-6 px-4 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-accent border-accent/20">
                Backend System
              </div>
            </div>
            <div className="px-4">
              <h3 className="text-3xl font-black mb-4 group-hover:text-accent transition-colors">Library Catalogue</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A robust PHP-based system for managing and cataloguing library resources efficiently.
              </p>
              <div className="flex gap-4">
                <span className="text-xs font-bold text-gray-400 px-3 py-1 glass rounded-lg">PHP</span>
                <span className="text-xs font-bold text-gray-400 px-3 py-1 glass rounded-lg">MySQL</span>
                <span className="text-xs font-bold text-gray-400 px-3 py-1 glass rounded-lg">HTML/CSS</span>
              </div>
            </div>
          </div>

          {/* CRM Case Study */}
          <div className="group lg:col-span-2">
            <div className="glass p-12 rounded-[3.5rem] border-white/5 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 overflow-hidden rounded-3xl">
                <div className="aspect-video bg-gradient-to-tr from-accent/10 to-primary/10 flex items-center justify-center">
                  <Database size={100} className="text-primary/20 group-hover:rotate-12 transition-transform duration-500" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="inline-block px-4 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400 border-white/10 mb-6">
                  Corporate Solution
                </div>
                <h3 className="text-4xl font-black mb-6">Customer Relationship Website (CRM)</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  A high-performance CRM platform designed to streamline customer management and sales workflows.
                </p>
                <div className="flex gap-4">
                  <span className="tag">HTML5</span>
                  <span className="tag">Tailwind</span>
                  <span className="tag">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Achievements */}
      <Section id="achievements" title="Success Metrics" className="bg-white/[0.02]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "LeetCode Solved", value: "170+", sub: "Medium/Hard Focus", color: "text-accent" },
            { label: "Java Rank", value: "5 ★", sub: "Gold Badge @ HackerRank", color: "text-primary" },
            { label: "SQL Rank", value: "3 ★", sub: "Silver Badge @ HackerRank", color: "text-accent" }
          ].map((stat, i) => (
            <div key={i} className="glass p-10 rounded-3xl text-center border-white/5">
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">{stat.label}</div>
              <div className={`text-6xl font-black mb-4 ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.sub}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Education & Certs */}
      <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-3xl border-white/5">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold">MCA — PCCOE, Pune</h3>
                <p className="text-accent font-medium mb-3">2025 – 2027</p>
                <div className="inline-block px-4 py-1 glass rounded-full text-sm font-bold border-white/10">
                  SGPA: 8.2
                </div>
              </div>
            </div>
          </div>
          <div className="glass p-8 rounded-3xl border-white/5">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 shrink-0">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold">B.Sc Computer Science</h3>
                <p className="text-gray-400 font-medium mb-3">MGM College, Nanded | 2021 – 2024</p>
                <div className="inline-block px-4 py-1 glass rounded-full text-sm font-bold border-white/10">
                  CGPA: 8.22
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Get In Touch">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-4xl font-black mb-8">Let's build something <span className="text-neon text-accent">extraordinary</span>.</h3>
            <p className="text-gray-400 mb-12 text-lg">
              Currently open to roles focusing on AI integration, secure system design, and product-focused software engineering.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email Me</div>
                  <div className="font-bold text-lg">ladanejagannath@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Call Me</div>
                  <div className="font-bold text-lg">+91 9022301782</div>
                </div>
              </div>
              <div className="flex items-center gap-6 py-6 border-t border-white/5 mt-6">
                <div className="text-xs text-gray-500 uppercase tracking-widest mr-4">Connect:</div>
                <div className="flex gap-4">
                  <a href="https://github.com/ladane-lab" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all"><Github size={18} /></a>
                  <a href="https://www.linkedin.com/in/jagannath-ladane-71a748284/" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all"><Linkedin size={18} /></a>
                  <a href="https://leetcode.com/u/ladane-lab/" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all"><LeetCodeIcon size={18} /></a>
                  <a href="https://www.hackerrank.com/profile/ladanejagannath" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all"><HackerRankIcon size={18} /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="glass p-10 rounded-[2.5rem] border-white/5 relative">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-2">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-2">Your Message</label>
                <textarea rows="4" placeholder="How can I help you?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary/80 py-4 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3">
                Send Message <MessageSquare size={20} />
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-3xl font-black">JL<span className="text-primary">.</span></div>
          <div className="flex gap-8 items-center">
            <a href="https://github.com/ladane-lab" className="text-gray-500 hover:text-white transition-colors" title="GitHub"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/jagannath-ladane-71a748284/" className="text-gray-500 hover:text-white transition-colors" title="LinkedIn"><Linkedin size={20} /></a>
            <a href="https://leetcode.com/u/ladane-lab/" className="text-gray-500 hover:text-white transition-colors" title="LeetCode"><LeetCodeIcon size={20} /></a>
            <a href="https://www.hackerrank.com/profile/ladanejagannath" className="text-gray-500 hover:text-white transition-colors" title="HackerRank"><HackerRankIcon size={20} /></a>
          </div>
          <div className="text-xs text-gray-600 font-bold uppercase tracking-widest">
            © 2026 Jagannath Ladane — Built with React & Precision
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
