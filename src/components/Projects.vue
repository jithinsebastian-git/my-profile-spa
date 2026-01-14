<template>
  <div class="projects">
    <section class="section-modern intro-section">
      <div class="section-header">
        <span class="section-badge">Portfolio</span>
        <h2>Featured Projects</h2>
        <p class="section-description">
          Explore the key projects I've led and contributed to throughout my career. Each project demonstrates my
          expertise in full-stack development, cloud architecture, and team leadership.
        </p>
      </div>
    </section>

    <div class="projects-grid">
      <article class="project-card" v-for="(project, i) in projects" :key="i">
        <div class="project-header">
          <h3>{{ project.title }}</h3>
          <div class="project-year">{{ project.year }}</div>
        </div>

        <div class="project-content">
          <div class="project-description clamp-3">{{ project.description }}</div>

          <div class="project-section" v-if="project.technologies?.length">
            <div class="project-section-title">Technologies Used</div>
            <div class="technologies">
              <span class="tech-tag" v-for="(t, ti) in project.technologies.slice(0, 4)" :key="ti">{{ t }}</span>
              <span v-if="project.technologies.length > 4" class="tech-tag">
                +{{ project.technologies.length - 4 }} more
              </span>
            </div>
          </div>

          <div class="project-section" v-if="project.responsibilities?.length">
            <div class="project-section-title">Key Responsibilities</div>
            <ul class="responsibilities">
              <li v-for="(r, ri) in project.responsibilities.slice(0, 2)" :key="ri">{{ r }}</li>
            </ul>
            <div v-if="project.responsibilities.length > 2" class="more-hint">
              +{{ project.responsibilities.length - 2 }} more
            </div>
          </div>

          <div class="impact" v-if="project.impact">
            <div class="impact-label">Business Impact</div>
            <div class="impact-text clamp-2">{{ project.impact }}</div>
          </div>
        </div>

        <div class="project-footer">
          <button class="read-more-btn" @click="openProject(i)">
            Read More
            <span class="btn-icon">↗</span>
          </button>
        </div>
      </article>
    </div>

    <!-- Modal -->
    <div v-if="activeProjectIndex !== null" class="modal-overlay" @click.self="closeProject">
      <div class="modal">
        <button class="modal-close" type="button" @click="closeProject" aria-label="Close">×</button>

        <div class="modal-header">
          <div>
            <h3 class="modal-title">{{ activeProject.title }}</h3>
            <div class="modal-subtitle">{{ activeProject.year }}</div>
          </div>
        </div>

        <div class="modal-body">
          <div class="modal-section">
            <div class="modal-section-title">Overview</div>
            <p class="modal-text">{{ activeProject.description }}</p>
          </div>

          <div class="modal-section" v-if="activeProject.technologies?.length">
            <div class="modal-section-title">Technologies Used</div>
            <div class="technologies">
              <span class="tech-tag" v-for="(t, ti) in activeProject.technologies" :key="ti">{{ t }}</span>
            </div>
          </div>

          <div class="modal-section" v-if="activeProject.responsibilities?.length">
            <div class="modal-section-title">Key Responsibilities</div>
            <ul class="responsibilities modal-list">
              <li v-for="(r, ri) in activeProject.responsibilities" :key="ri">{{ r }}</li>
            </ul>
          </div>

          <div class="modal-section" v-if="activeProject.impact">
            <div class="modal-section-title">Business Impact</div>
            <p class="modal-impact">{{ activeProject.impact }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from '../data/projects.json'

export default {
  name: 'Projects',
  data() {
    return { 
      projects,
      activeProjectIndex: null
    }
  },
  computed: {
    activeProject() {
      if (this.activeProjectIndex === null) return {}
      return this.projects[this.activeProjectIndex] || {}
    }
  },
  methods: {
    openProject(index) {
      this.activeProjectIndex = index
      document.body.style.overflow = 'hidden'
    },
    closeProject() {
      this.activeProjectIndex = null
      document.body.style.overflow = ''
    }
  }
}
</script>

<style scoped>
.projects {
    width: 100%;
}

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
    margin-bottom: 0;
    text-align: center;
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
    max-width: 800px;
    margin: 0 auto;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
    align-items: start;
}

.project-card {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  min-height: 520px;
}

.project-card:hover {
    transform: translateY(-8px);
    border-color: #667eea;
    box-shadow: 0 8px 30px rgba(102, 126, 234, 0.15);
}

.project-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem;
    position: relative;
    overflow: hidden;
}

.project-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    z-index: 1;
}

.project-header > * {
    position: relative;
    z-index: 2;
}

.project-header h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.project-year {
    font-size: 0.9rem;
    opacity: 0.95;
    font-weight: 600;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

.project-content {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    position: relative;
}

.project-description {
    color: #4a5568;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    font-size: 1rem;
}

.more-hint {
    margin-top: -0.25rem;
    color: #667eea;
    font-weight: 600;
    font-size: 0.85rem;
}

.project-section {
    margin-bottom: 1.5rem;
}

.project-section-title {
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 0.75rem;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: 'Poppins', sans-serif;
}

.technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tech-tag {
    background: white;
    color: #667eea;
    padding: 0.4rem 0.9rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
}

.tech-tag:hover {
    background: #667eea;
    color: white;
    transform: scale(1.05);
    border-color: #667eea;
}

.responsibilities {
    list-style: none;
}

.responsibilities li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
    color: #4a5568;
    line-height: 1.6;
}

.responsibilities li:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #667eea;
    font-weight: 700;
    font-size: 1rem;
}

.impact {
    background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
    border-left: 4px solid #667eea;
    padding: 1.25rem;
    border-radius: 8px;
    margin-top: auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.impact-label {
    font-weight: 700;
    color: #1a202c;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.75rem;
    font-family: 'Poppins', sans-serif;
}

.impact-text {
    color: #667eea;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.6;
}

.project-footer {
    padding: 1rem 1.5rem;
    border-top: 1px solid #e2e8f0;
    background: #f8fafc;
    display: flex;
    justify-content: center;
}

.read-more-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 0.65rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);
}

.read-more-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.read-more-btn:active {
    transform: translateY(0);
}

.btn-icon {
    font-size: 0.75rem;
    transition: transform 0.3s ease;
}

/* Line clamp helpers */
.clamp-2,
.clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.clamp-2 { line-clamp: 2; -webkit-line-clamp: 2; }
.clamp-3 { line-clamp: 3; -webkit-line-clamp: 3; }

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(6px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
}

.modal {
  width: min(900px, 100%);
  max-height: min(80vh, 900px);
  overflow: hidden;
  border-radius: 16px;
  background: white;
  border: 2px solid #e2e8f0;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  position: relative;
}

.modal-close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #e2e8f0;
  background: white;
  color: #1a202c;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-close:hover {
  border-color: #667eea;
  color: #667eea;
  transform: translateY(-1px);
}

.modal-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.modal-header::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.12);
  z-index: 1;
}

.modal-header > * {
  position: relative;
  z-index: 2;
}

.modal-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.modal-subtitle {
  opacity: 0.95;
  font-weight: 600;
}

.modal-body {
  padding: 1.5rem 2rem 2rem 2rem;
  max-height: calc(80vh - 140px);
  overflow: auto;
}

.modal-section {
  margin-bottom: 1.5rem;
}

.modal-section-title {
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 0.75rem;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: 'Poppins', sans-serif;
}

.modal-text {
  color: #4a5568;
  line-height: 1.7;
  margin: 0;
}

.modal-impact {
  color: #667eea;
  font-weight: 600;
  line-height: 1.7;
  margin: 0;
}

.modal-list {
  margin-bottom: 0;
}

@media (max-width: 768px) {
    .section-modern {
        padding: 2rem 1.5rem;
    }

    .section-header h2 {
        font-size: 1.75rem;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .project-header {
        padding: 1.5rem;
    }

    .project-header h3 {
        font-size: 1.25rem;
    }

    .project-footer {
        padding: 0.75rem 1rem;
    }

    .read-more-btn {
        padding: 0.55rem 1.25rem;
        font-size: 0.85rem;
    }

    .project-card {
      min-height: 500px;
    }

    .modal-header {
      padding: 1.5rem;
    }

    .modal-body {
      padding: 1.25rem 1.25rem 1.5rem 1.25rem;
    }
}
</style>
