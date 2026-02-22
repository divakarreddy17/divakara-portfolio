import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-inner">
          <h1 className="logo">Divakara K N</h1>

          {/* Hamburger */}
<div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
  {menuOpen ? <FaTimes /> : <FaBars />}
</div>

<nav className={`nav-links nav-flex ${menuOpen ? "active" : ""}`}>
  <a href="#about">About</a>
  <a href="#experience">Experience</a>
  <a href="#projects">Projects</a>
  <a href="#skills">Skills</a>
  <a href="#contact">Contact</a>

  <div className="nav-socials">
    <a
      href="https://github.com/divakarreddy17"
      target="_blank"
      rel="noopener noreferrer"
      className="nav-icon"
    >
      <FaGithub />
    </a>

    <a
      href="https://www.linkedin.com/in/divakara-k-n-066042194"
      target="_blank"
      rel="noopener noreferrer"
      className="nav-icon linkedin"
    >
      <FaLinkedin />
    </a>
  </div>
</nav>
        </div>
      </header>

      {/* HERO */}
      <section className="container hero">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="hero-title">
            Statistical Programmer
          </h2>

          <p className="hero-subtitle">
            Specialized in time-series forecasting, machine learning, and
            infectious disease early warning systems using R and Python.
          </p>

          
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="hero-right"
        >
          <div className="hero-badge">Divakara KN</div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container section">
        <h3 className="section-title">About Me</h3>

        <div className="glass">
          I am a Statistical Programmer specializing in time-series forecasting, machine learning, and epidemiological analytics using R and Python. At the Tata Institute for Genetics and Society (TIGS), I developed EpiAlertR, an early warning system designed to enhance infectious disease surveillance and forecasting. I am passionate about transforming complex health and environmental data into scalable, data-driven solutions that support early detection and informed public health decision-making.
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="container section">
        <h3 className="section-title">Professional Experience</h3>

        <div className="glass">
          <h4 className="job-title">
            Statistical Programmer — TIGS
          </h4>

          <p className="job-meta">
            Jun 2025 – Present | Bengaluru
          </p>

          <ul className="job-list">
            <li>Developed EpiAlertR early warning system</li>
            <li>Performed missing value imputation and correlation analysis</li>
            <li>Built ARIMA, EWMA, GLM, GAM, Bayesian, RF and XGBoost models</li>
            <li>Conducted lag and cross-correlation analysis</li>
            <li>Automated scalable analytical pipelines in R</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
<section id="projects" className="container section">
  <h3 className="section-title">Projects</h3>

  <div className="projects-grid">
    {projects.map((p, i) => (
      <div key={i} className="glass project-card">
        <h4 className="project-title">{p.title}</h4>
        <p className="project-desc">{p.desc}</p>

        <div className="project-tags">
          {p.tech.map((t, idx) => (
            <span key={idx} className="project-tag">
              {t}
            </span>
          ))}
        </div>
        <a
  href={p.github}
  target="_blank"
  rel="noopener noreferrer"
  className="project-btn"
>
Source Code
</a>
      </div>
    ))}
  </div>
</section>

      {/* SKILLS */}
      <section id="skills" className="container section">
        <h3 className="section-title">Core Skills</h3>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div key={i} className="glass">
              <h4 className="skill-card-title">{s.title}</h4>
              <p className="skill-card-text">{s.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="container text-center">
          <h3 className="section-title">Contact</h3>
          <p className="contact-text">divakarr233@gmail.com</p>
          <p className="contact-text">+91 9663614939</p>
          <p className="contact-text">Bengaluru, India</p>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Divakara K N
      </footer>
    </div>
  );
}

const skills = [
  {
    title: "Programming",
    items: "R, Python, SQL",
  },
  {
    title: "Statistics",
    items: "Time Series, Regression, Bayesian, PCA",
  },
  {
    title: "Machine Learning",
    items: "Random Forest, KNN, K-Means, XGBoost",
  },
  {
    title: "Visualization",
    items: "Excel, Power BI",
  },
];


const projects = [
  {
    title: "Bank Marketing Term Deposit Prediction",
    desc: "Built a machine learning classification model to predict customer subscription to term deposits using bank marketing data.",
    tech: ["Python", "Machine Learning", "Classification", "Data Analysis"],
    github: "https://github.com/divakarreddy17/Prediction-of-Term-Deposit-Subscription-for-Bank-Marketing-Data",
  },
  {
    title: "Loan Status Prediction",
    desc: "Developed a credit risk prediction model using scikit-learn to classify loan approval status.",
    tech: ["Python", "Scikit-learn", "Classification", "Credit Risk"],
    github: "https://github.com/divakarreddy17/Loan-Status-Prediction",
  },
  {
    title: "IPL Players Nationality Prediction",
    desc: "Performed sports analytics and machine learning to predict player nationality based on IPL statistics.",
    tech: ["Python", "Machine Learning", "Sports Analytics", "Data Analysis"],
    github: "https://github.com/divakarreddy17/_Analysis-of-IPL-Cricket-Players-Statistics-for-Nationality-Prediction",
  },
  {
    title: "Afame Technologies Internship Work",
    desc: "Completed industry internship projects involving data analysis and machine learning workflows.",
    tech: ["Python", "Data Analysis", "Machine Learning"],
    github: "https://github.com/divakarreddy17/Afame-Technologies-Internship",
  },
];