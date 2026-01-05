<template>
  <div class="home">
    <section id="about">
      <h2>About Me</h2>
      <p>With a decade of experience leading cross-functional teams and delivering enterprise-grade solutions, I
        specialize in full-stack development, cloud architecture, and agile transformation. I believe in mentoring,
        continuous learning, and building scalable systems that empower businesses.</p>
    </section>

    <section id="experience">
      <h2>Experience</h2>
      <p>I've had the privilege of working with leading organizations, driving digital transformation and building
        high-performing teams. Check out my <router-link to="/experience">detailed
          experience page</router-link> to see a comprehensive timeline with achievements and technologies for each role.
      </p>
      <div class="timeline">
        <div class="timeline-entry">
          <strong>Nov 2018 – Jun 2025:</strong> Technology Lead @ Infosys<br />
          Led migration to microservices; mentored 12+ engineers.
        </div>
        <div class="timeline-entry">
          <strong>Jan 2018 – Oct 2018:</strong> Senior Dot net Developer @ Notetech Software<br />
          Architected cloud-native solutions; improved CI/CD.
        </div>
        <div class="timeline-entry">
          <strong>Feb 2017 – Sep 2017:</strong> Software Engineer L3 @ Zerone Consulting<br />
          Built scalable APIs; introduced agile practices.
        </div>
        <div class="timeline-entry">
          <strong>Dec 2014 – Jan 2017:</strong> Senior Dot .net developer @ Aabasoft Technologies (India) Pvt.
          Ltd.<br />
          Developed MVPs; wore multiple hats in dev & ops.
        </div>
      </div>
    </section>

    <section id="skills">
      <h2>Skills</h2>
      <div class="skills">
        <div><strong>Languages:</strong> C#, Java, JavaScript, TypeScript</div>
        <div><strong>Frameworks:</strong> .Net Core, Spring Boot, Angular, React, Vue, Node.js</div>
        <div><strong>Cloud:</strong> Azure, GCP</div>
        <div><strong>DevOps:</strong> Docker, Kubernetes, Jenkins</div>
        <div><strong>Leadership:</strong> Agile, Scrum, Team Building</div>
      </div>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <p>I've led and contributed to impactful projects across various domains. Check out my <router-link
          to="/projects">detailed
          projects portfolio</router-link> to see the full scope of my work, including technologies used and key responsibilities.
      </p>
      <div class="projects">
        <div>
          <strong>OCC (Operational Control Center) Hub</strong><br />
          Single place for monitoring and scheduling jobs for telecom technicians.
        </div>
        <div>
          <strong>Order Management System (Voice Process)</strong><br />
          Built for a leading telecom client to manage wholesale orders efficiently.
        </div>
        <div>
          <strong>Keystone</strong><br />
          The platform provided real-time insights into key performance indicators, enabling data-driven decision-making and improving operational efficiency.
        </div>
      </div>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <p>Email: jithinsbstn@gmail.com</p>
      <div class="contact-links">
        <a href="https://linkedin.com/in/jithinsebastian" target="_blank">LinkedIn</a>
        <a href="https://github.com/jithinsebastian-git" target="_blank">GitHub</a>
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
.projects {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.projects div {
    background: #f8f9fa;
    padding: 1.2rem;
    border-left: 4px solid #667eea;
    border-radius: 4px;
    flex: 1 1 250px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.projects div:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.projects div strong {
    color: #667eea;
    display: block;
    margin-bottom: 0.5rem;
}
</style>
