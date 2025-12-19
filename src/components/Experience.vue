<template>
  <section class="experience">
    <div class="intro-section">
      <h2>Professional Journey</h2>
      <p>With over 10 years of experience in software engineering, I've worked with leading organizations,
        driving digital transformation and building high-performing teams. Below is a timeline of my career and impact.</p>
    </div>

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
  </section>
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
    background: floralwhite;
}
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
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, rgba(99,102,241,0.95), rgba(124,58,237,0.9));
    border-radius: 4px;
    filter: drop-shadow(0 2px 6px rgba(67,56,202,0.12));
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
    padding-left: 2.25rem;
    border-right: 6px solid rgba(99,102,241,0.12); /* subtle accent */
}

.timeline-item:nth-child(even) .timeline-content {
    margin-left: auto;
    margin-right: 0;
    width: calc(50% - 2.5rem);
    text-align: left;
    padding-left: 2.25rem;
    border-left: 6px solid rgba(124,58,237,0.12); /* subtle accent */
}

.timeline-marker {
    position: absolute;
    left: 50%;
    top: 6px;
    transform: translateX(-50%);
    width: 22px;
    height: 22px;
    background: radial-gradient(circle at 35% 30%, #ffffff 0%, #e6eeff 25%, #c7d2fe 100%);
    border: 4px solid #5b21b6;
    border-radius: 50%;
    z-index: 12;
    box-shadow: 0 6px 14px rgba(67,56,202,0.18);
}
.timeline-marker::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
}

.timeline-content {
    background: linear-gradient(180deg, #ffffff, #f8fbff);
    border: 1px solid rgba(226,238,255,0.8);
    padding: 1.5rem 1.75rem;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(6, 10, 25, 0.08);
    transition: transform 0.35s cubic-bezier(.2,.9,.22,1), box-shadow 0.35s ease;
}

.timeline-content:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 18px 40px rgba(6, 10, 25, 0.15);
}

.timeline-marker {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background: #f5f8ff;
    border: 4px solid #4f46e5; /* slightly richer blue for marker */
    border-radius: 50%;
    z-index: 10;
    margin-bottom: 0.25rem;
}

.position {
    font-size: 1.05rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.duration {
    font-size: 0.9rem;
    color: #888;
    font-weight: 500;
}

.company-description {
    color: #374151;
    line-height: 1.7;
    margin-bottom: 1rem;
    font-size: 0.96rem;
}

.achievements {
    margin: 1rem 0;
}

.achievements-title {
    font-weight: 700;
    color: #2c3e50;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: block;
    margin-bottom: 0.5rem;
}

.achievement-list {
    list-style: none;
}

.achievement-list li {
    position: relative;
    padding-left: 1.2rem;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: #555;
    line-height: 1.5;
}

.achievement-list li:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #5b21b6;
    font-weight: 700;
    font-size: 0.95rem;
}

.technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
}

.tech-tag {
    background: #f0f0f0;
    color: #667eea;
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid #ddd;
}

@media (max-width: 768px) {
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
