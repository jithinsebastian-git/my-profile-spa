<template>
  <section class="projects">
    <div class="intro-section">
      <h2>Featured Projects</h2>
      <p>Explore the key projects I've led and contributed to throughout my career. Each project demonstrates my
        expertise in full-stack development, cloud architecture, and team leadership.</p>
    </div>

    <div class="projects-grid">
      <article class="project-card" v-for="(project, i) in projects" :key="i">
        <div class="project-header">
          <h3>{{ project.title }}</h3>
          <div class="project-year">{{ project.year }}</div>
        </div>

        <div class="project-content">
          <div class="project-description">{{ project.description }}</div>

          <div class="project-section" v-if="project.technologies?.length">
            <div class="project-section-title">Technologies Used</div>
            <div class="technologies">
              <span class="tech-tag" v-for="(t, ti) in project.technologies" :key="ti">{{ t }}</span>
            </div>
          </div>

          <div class="project-section" v-if="project.responsibilities?.length">
            <div class="project-section-title">Key Responsibilities</div>
            <ul class="responsibilities">
              <li v-for="(r, ri) in project.responsibilities" :key="ri">{{ r }}</li>
            </ul>
          </div>

          <div class="impact" v-if="project.impact">
            <div class="impact-label">Business Impact</div>
            <div class="impact-text">{{ project.impact }}</div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import projects from '../data/projects.json'

export default {
  name: 'Projects',
  data() {
    return { projects }
  }
}
</script>

<style scoped>
.intro-section {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    margin-bottom: 3rem;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.intro-section h2 {
    color: #667eea;
    margin-bottom: 1rem;
    font-size: 1.8rem;
}

.intro-section p {
    font-size: 1.05rem;
    line-height: 1.6;
    color: #555;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.project-card {
  background: #f5f8ff; /* soft blue tint to highlight */
  border: 1px solid #e6eeff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(6, 10, 25, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
}

.project-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1.5rem;
    border-bottom: 4px solid #667eea;
}

.project-header h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
}

.project-year {
    font-size: 0.9rem;
    opacity: 0.9;
    font-weight: 500;
}

.project-content {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.project-description {
    color: #555;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
}

.project-section {
    margin-bottom: 1.5rem;
}

.project-section-title {
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tech-tag {
    background: #f0f0f0;
    color: #667eea;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    border: 1px solid #ddd;
}

.responsibilities {
    list-style: none;
}

.responsibilities li {
    position: relative;
    padding-left: 1.2rem;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    color: #555;
    line-height: 1.5;
}

.responsibilities li:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #667eea;
    font-weight: bold;
    font-size: 1.1rem;
}

.impact {
    background: #f8f9fa;
    border-left: 4px solid #667eea;
    padding: 1rem;
    border-radius: 4px;
    margin-top: auto;
}

.impact-label {
    font-weight: 700;
    color: #2c3e50;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.5rem;
}

.impact-text {
    color: #667eea;
    font-weight: 600;
    font-size: 0.95rem;
}

@media (max-width: 768px) {
    .projects-grid {
        grid-template-columns: 1fr;
    }
}
</style>
