<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="gradient-text">Full-Stack Developer</span>
          </h1>
          <p class="hero-subtitle">
            Transforming ideas into enterprise-grade solutions with 10+ years of expertise in 
            cloud architecture, agile transformation, and team leadership.
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">10+</div>
              <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">20+</div>
              <div class="stat-label">Engineers Mentored</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">30+</div>
              <div class="stat-label">Projects Delivered</div>
            </div>
          </div>
          <div class="hero-cta">
            <router-link to="/experience" class="btn btn-primary">View Experience</router-link>
            <router-link to="/projects" class="btn btn-secondary">Explore Projects</router-link>
          </div>
        </div>
      </div>
      <div class="hero-decoration">
        <div class="floating-shape shape-1"></div>
        <div class="floating-shape shape-2"></div>
        <div class="floating-shape shape-3"></div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section-modern">
      <div class="section-header">
        <span class="section-badge">About</span>
        <h2>Who I Am</h2>
      </div>
      <div class="about-content">
        <p class="lead-text">
          With a decade of experience leading cross-functional teams and delivering enterprise-grade solutions, 
          I specialize in full-stack development, cloud architecture, and agile transformation.
        </p>
        <p>
          I believe in mentoring, continuous learning, and building scalable systems that empower businesses 
          to achieve their goals. My approach combines technical excellence with strategic thinking to deliver 
          solutions that make a real impact.
        </p>
      </div>
    </section>

    <!-- Experience Preview Section -->
    <section id="experience" class="section-modern">
      <div class="section-header">
        <span class="section-badge">Career</span>
        <h2>Professional Journey</h2>
        <p class="section-description">
          I've had the privilege of working with leading organizations, driving digital transformation 
          and building high-performing teams. 
          <router-link to="/experience" class="inline-link">View detailed experience →</router-link>
        </p>
      </div>
      <div class="timeline-modern">
        <div class="timeline-entry-modern">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-date">Nov 2018 – Jun 2025</div>
            <h3 class="timeline-title">Technology Lead</h3>
            <div class="timeline-company">Infosys</div>
            <p class="timeline-description">Led migration to microservices; mentored 12+ engineers.</p>
          </div>
        </div>
        <div class="timeline-entry-modern">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-date">Jan 2018 – Oct 2018</div>
            <h3 class="timeline-title">Senior .NET Developer</h3>
            <div class="timeline-company">Notetech Software</div>
            <p class="timeline-description">Architected cloud-native solutions; improved CI/CD.</p>
          </div>
        </div>
        <div class="timeline-entry-modern">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-date">Feb 2017 – Sep 2017</div>
            <h3 class="timeline-title">Software Engineer L3</h3>
            <div class="timeline-company">Zerone Consulting</div>
            <p class="timeline-description">Built scalable APIs; introduced agile practices.</p>
          </div>
        </div>
        <div class="timeline-entry-modern">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-date">Dec 2014 – Jan 2017</div>
            <h3 class="timeline-title">Senior .NET Developer</h3>
            <div class="timeline-company">Aabasoft Technologies</div>
            <p class="timeline-description">Developed MVPs; wore multiple hats in dev & ops.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section-modern">
      <div class="section-header">
        <span class="section-badge">Expertise</span>
        <h2>Technical Skills</h2>
      </div>
      <div class="skills-grid">
        <div class="skill-card">
          <div class="skill-icon">💻</div>
          <h3 class="skill-title">Languages</h3>
          <div class="skill-tags">
            <span class="tag">C#</span>
            <span class="tag">Java</span>
            <span class="tag">JavaScript</span>
            <span class="tag">TypeScript</span>
          </div>
        </div>
        <div class="skill-card">
          <div class="skill-icon">⚡</div>
          <h3 class="skill-title">Frameworks</h3>
          <div class="skill-tags">
            <span class="tag">.NET Core</span>
            <span class="tag">Spring Boot</span>
            <span class="tag">Angular</span>
            <span class="tag">React</span>
            <span class="tag">Vue</span>
            <span class="tag">Node.js</span>
          </div>
        </div>
        <div class="skill-card">
          <div class="skill-icon">☁️</div>
          <h3 class="skill-title">Cloud</h3>
          <div class="skill-tags">
            <span class="tag">Azure</span>
            <span class="tag">GCP</span>
          </div>
        </div>
        <div class="skill-card">
          <div class="skill-icon">🚀</div>
          <h3 class="skill-title">DevOps</h3>
          <div class="skill-tags">
            <span class="tag">Docker</span>
            <span class="tag">Kubernetes</span>
            <span class="tag">Jenkins</span>
          </div>
        </div>
        <div class="skill-card">
          <div class="skill-icon">👥</div>
          <h3 class="skill-title">Leadership</h3>
          <div class="skill-tags">
            <span class="tag">Agile</span>
            <span class="tag">Scrum</span>
            <span class="tag">Team Building</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Preview Section -->
    <section id="projects" class="section-modern">
      <div class="section-header">
        <span class="section-badge">Portfolio</span>
        <h2>Featured Projects</h2>
        <p class="section-description">
          I've led and contributed to impactful projects across various domains. 
          <router-link to="/projects" class="inline-link">View full portfolio →</router-link>
        </p>
      </div>
      <div class="projects-grid">
        <div class="project-card">
          <div class="project-header">
            <h3 class="project-title">OCC Hub</h3>
            <span class="project-badge">Enterprise</span>
          </div>
          <p class="project-description">
            Operational Control Center Hub - A single place for monitoring and scheduling jobs 
            for telecom technicians.
          </p>
        </div>
        <div class="project-card">
          <div class="project-header">
            <h3 class="project-title">Order Management System</h3>
            <span class="project-badge">Telecom</span>
          </div>
          <p class="project-description">
            Built for a leading telecom client to manage wholesale orders efficiently through 
            voice process automation.
          </p>
        </div>
        <div class="project-card">
          <div class="project-header">
            <h3 class="project-title">Keystone</h3>
            <span class="project-badge">Analytics</span>
          </div>
          <p class="project-description">
            Real-time insights platform for key performance indicators, enabling data-driven 
            decision-making and operational efficiency.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section-modern contact-section">
      <div class="section-header">
        <span class="section-badge">Get In Touch</span>
        <h2>Let's Connect</h2>
        <p class="section-description">
          I'm always open to discussing new opportunities, innovative projects, or just having a chat about technology.
        </p>
      </div>
      <div class="contact-content">
        <div class="contact-info">
          <a href="mailto:jithinsbstn@gmail.com" class="contact-item">
            <div class="contact-icon">✉️</div>
            <div class="contact-details">
              <div class="contact-label">Email</div>
              <div class="contact-value">jithinsbstn@gmail.com</div>
            </div>
          </a>
        </div>
        <div class="contact-links-modern">
          <a href="https://linkedin.com/in/jithinsebastian" target="_blank" class="social-link linkedin">
            <span class="social-icon">💼</span>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/jithinsebastian-git" target="_blank" class="social-link github">
            <span class="social-icon">🔗</span>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  width: 100%;
}

/* Hero Section */
.hero {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 4rem 3rem;
  margin-top: 0;
  margin-bottom: 3rem;
  overflow: hidden;
  color: white;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.25);
  z-index: 1;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 20px;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3), 0 4px 20px rgba(0, 0, 0, 0.2);
}

.gradient-text {
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3), 0 4px 20px rgba(0, 0, 0, 0.2);
  display: inline-block;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  color: #ffffff;
  max-width: 700px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  font-weight: 400;
}

.hero-stats {
  display: flex;
  gap: 3rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0.25rem;
  color: #ffffff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.stat-label {
  font-size: 0.9rem;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  opacity: 0.95;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  font-size: 1rem;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

/* Hero Decoration */
.hero-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  animation: float 20s infinite ease-in-out;
  z-index: 1;
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -100px;
  animation-delay: 0s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: -50px;
  animation-delay: 5s;
}

.shape-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  right: 10%;
  animation-delay: 10s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
}

/* Modern Section Styles */
.section-modern {
  background: white;
  padding: 3rem;
  margin-bottom: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.section-modern:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.section-header {
  margin-bottom: 2rem;
}

.section-badge {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
}

.section-header h2 {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 0.75rem;
  font-family: 'Poppins', sans-serif;
}

.section-description {
  color: #64748b;
  line-height: 1.7;
  font-size: 1.05rem;
}

.inline-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.inline-link:hover {
  color: #764ba2;
  text-decoration: underline;
}

/* About Section */
.about-content {
  max-width: 800px;
}

.lead-text {
  font-size: 1.25rem;
  line-height: 1.8;
  color: #2d3748;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.about-content p {
  color: #4a5568;
  line-height: 1.8;
  font-size: 1.05rem;
}

/* Modern Timeline */
.timeline-modern {
  position: relative;
  padding-left: 2rem;
}

.timeline-modern::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
}

.timeline-entry-modern {
  position: relative;
  margin-bottom: 2.5rem;
  padding-left: 2.5rem;
}

.timeline-marker {
  position: absolute;
  left: -1.5rem;
  top: 0.5rem;
  width: 16px;
  height: 16px;
  background: #667eea;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 0 0 3px #667eea;
}

.timeline-content {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.timeline-entry-modern:hover .timeline-content {
  background: #f1f5f9;
  border-left-color: #667eea;
  transform: translateX(5px);
}

.timeline-date {
  font-size: 0.85rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.timeline-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 0.25rem;
  font-family: 'Poppins', sans-serif;
}

.timeline-company {
  color: #667eea;
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.timeline-description {
  color: #4a5568;
  line-height: 1.6;
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.skill-card:hover {
  transform: translateY(-5px);
  border-color: #667eea;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.15);
}

.skill-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.skill-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.tag {
  padding: 0.4rem 0.9rem;
  background: white;
  color: #667eea;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.tag:hover {
  background: #667eea;
  color: white;
  transform: scale(1.05);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: #667eea;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.15);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

.project-badge {
  padding: 0.25rem 0.75rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
}

.project-description {
  color: #4a5568;
  line-height: 1.7;
  margin: 0;
}

/* Contact Section */
.contact-section {
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.contact-info {
  width: 100%;
  max-width: 500px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.contact-item:hover {
  transform: translateY(-3px);
  border-color: #667eea;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
}

.contact-icon {
  font-size: 2rem;
}

.contact-details {
  flex: 1;
}

.contact-label {
  font-size: 0.85rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.25rem;
}

.contact-value {
  font-size: 1.1rem;
  color: #1a202c;
  font-weight: 600;
}

.contact-links-modern {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: white;
  color: #1a202c;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid #e2e8f0;
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.social-link.linkedin:hover {
  border-color: #0077b5;
  color: #0077b5;
}

.social-link.github:hover {
  border-color: #333;
  color: #333;
}

.social-icon {
  font-size: 1.25rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    padding: 2.5rem 1.5rem;
  }

  .hero-title {
    font-size: 2.25rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-stats {
    gap: 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .section-modern {
    padding: 2rem 1.5rem;
  }

  .section-header h2 {
    font-size: 1.75rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .timeline-modern {
    padding-left: 1.5rem;
  }

  .timeline-entry-modern {
    padding-left: 2rem;
  }

  .hero-cta {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    text-align: center;
  }
}
</style>
