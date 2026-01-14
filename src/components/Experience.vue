<template>
  <div class="experience">
    <section class="section-modern intro-section">
      <div class="section-header">
        <span class="section-badge">Career</span>
        <h2>Professional Journey</h2>
        <p class="section-description">
          With over 10 years of experience in software engineering, I've worked with leading organizations,
          driving digital transformation and building high-performing teams. Below is a comprehensive timeline of my career and impact.
        </p>
      </div>
    </section>

    <div class="timeline-container">
      <div class="timeline">
        <article class="timeline-item" v-for="(exp, i) in experiences" :key="i">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <div>
                <div class="company-name">{{ exp.company }}</div>
                <div class="position">{{ exp.position }}</div>
              </div>
              <div class="duration">{{ exp.duration }}</div>
            </div>

            <div class="company-description">{{ exp.description }}</div>

            <div class="achievements" v-if="exp.achievements?.length">
              <span class="achievements-title">Key Achievements</span>
              <ul class="achievement-list">
                <li v-for="(a, ai) in exp.achievements" :key="ai">{{ a }}</li>
              </ul>
            </div>

            <div class="technologies" v-if="exp.technologies?.length">
              <span class="tech-tag" v-for="(t, ti) in exp.technologies" :key="ti">{{ t }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import experiences from '../data/experience.json'

export default {
  name: 'Experience',
  data() {
    return { experiences }
  }
}
</script>

<style scoped>
.experience {
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

.timeline-container {
    position: relative;
    padding: 2rem 0;
}

.timeline {
    position: relative;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
}

.timeline-item {
    margin-bottom: 3rem;
    position: relative;
}

.timeline-item:nth-child(odd) .timeline-content {
    margin-left: 0;
    margin-right: auto;
    width: calc(50% - 2.5rem);
    text-align: left;
}

.timeline-item:nth-child(even) .timeline-content {
    margin-left: auto;
    margin-right: 0;
    width: calc(50% - 2.5rem);
    text-align: left;
}

.timeline-marker {
    position: absolute;
    left: 50%;
    top: 0.5rem;
    transform: translateX(-50%);
    width: 16px;
    height: 16px;
    background: #667eea;
    border: 4px solid white;
    border-radius: 50%;
    z-index: 10;
    box-shadow: 0 0 0 3px #667eea, 0 4px 12px rgba(102, 126, 234, 0.3);
}

.timeline-content {
    background: white;
    border: 2px solid #e2e8f0;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
}

.timeline-content:hover {
    transform: translateY(-5px);
    border-color: #667eea;
    box-shadow: 0 8px 30px rgba(102, 126, 234, 0.15);
}

.company-name {
    font-size: 1.35rem;
    font-weight: 700;
    color: #667eea;
    margin-bottom: 0.5rem;
    font-family: 'Poppins', sans-serif;
}

.position {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1a202c;
    margin-bottom: 0.5rem;
}

.duration {
    font-size: 0.85rem;
    color: #667eea;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.company-description {
    color: #4a5568;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    font-size: 1rem;
}

.achievements {
    margin: 1rem 0;    
}

.achievements-title {
    font-weight: 700;
    color: #1a202c;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: block;
    margin-bottom: 0.75rem;
    font-family: 'Poppins', sans-serif;
}

.achievement-list {
    list-style: none;
    max-height: 250px;
    overflow-y: auto;
}

.achievement-list li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
    color: #4a5568;
    line-height: 1.6;
}

.achievement-list li:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #667eea;
    font-weight: 700;
    font-size: 1rem;
}

.technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
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

@media (max-width: 768px) {
    .section-modern {
        padding: 2rem 1.5rem;
    }

    .section-header h2 {
        font-size: 1.75rem;
    }

    .timeline::before {
        left: 15px;
    }

    .timeline-marker {
        left: 15px;
    }

    .timeline-item:nth-child(odd) .timeline-content,
    .timeline-item:nth-child(even) .timeline-content {
        width: calc(100% - 60px);
        margin-left: 50px;
        margin-right: 0;
        text-align: left;
    }

    .company-name {
        font-size: 1.2rem;
    }

    .position {
        font-size: 1rem;
    }
}
</style>
