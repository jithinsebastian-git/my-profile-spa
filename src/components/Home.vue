<template>
  <div class="space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Hero Section -->
    <section class="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden relative border border-slate-700 animate-fade-in-up">
      <!-- Animated tech background -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="absolute inset-0 tech-pattern"></div>
        <div class="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow delay-200"></div>
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div class="text-center lg:text-left lg:max-w-2xl">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span class="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent typewriter">
              Full-Stack Developer
            </span>
          </h1>
          <p class="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
            Transforming ideas into enterprise-grade solutions with 10+ years of expertise in
            cloud architecture, agile transformation, and team leadership.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div class="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-600 animate-fade-in-up animation-delay-200">
              <div class="text-3xl font-bold text-white mb-1">10+</div>
              <div class="text-slate-300 text-sm">Years Experience</div>
            </div>
            <div class="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-600 animate-fade-in-up animation-delay-400">
              <div class="text-3xl font-bold text-white mb-1">20+</div>
              <div class="text-slate-300 text-sm">Engineers Mentored</div>
            </div>
            <div class="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-600 animate-fade-in-up animation-delay-600">
              <div class="text-3xl font-bold text-white mb-1">30+</div>
              <div class="text-slate-300 text-sm">Projects Delivered</div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <router-link
              to="/experience"
              class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              View Experience
            </router-link>
            <router-link
              to="/projects"
              class="bg-gray-800 text-white border border-gray-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200"
            >
              Explore Projects
            </router-link>
          </div>
        </div>
      </div>

      <!-- Decorative elements -->
      <div class="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
      <div class="absolute bottom-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl pointer-events-none"></div>
    </section>

    <!-- About Section -->
    <section class="bg-slate-700 rounded-2xl shadow-sm border border-slate-600 p-8 lg:p-12 animate-fade-in-up">
      <div class="text-center mb-8">
        <span class="inline-block bg-blue-600/20 text-blue-300 text-sm font-semibold px-3 py-1 rounded-full mb-4 animate-pulse">
          About
        </span>
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">Who I Am</h2>
      </div>
      <div class="max-w-3xl mx-auto text-center space-y-6">
        <p class="text-lg text-slate-300 leading-relaxed">
          With a decade of experience leading cross-functional teams and delivering enterprise-grade solutions,
          I specialize in full-stack development, cloud architecture, and agile transformation.
        </p>
        <p class="text-lg text-slate-300 leading-relaxed">
          I believe in mentoring, continuous learning, and building scalable systems that empower businesses
          to achieve their goals. My approach combines technical excellence with strategic thinking to deliver
          solutions that make a real impact.
        </p>
      </div>
    </section>

    <!-- Experience Preview Section -->
    <section class="bg-slate-700 rounded-2xl shadow-sm border border-slate-600 p-8 lg:p-12 animate-fade-in-up">
      <div class="text-center mb-12">
        <span class="inline-block bg-green-600/20 text-green-300 text-sm font-semibold px-3 py-1 rounded-full mb-4 animate-pulse">
          Career
        </span>
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">Professional Journey</h2>
        <p class="text-lg text-slate-300 max-w-2xl mx-auto">
          I've had the privilege of working with leading organizations, driving digital transformation
          and building high-performing teams.
          <br />
          <router-link to="/experience" class="text-blue-400 hover:text-blue-300 font-semibold ml-2 transition-colors duration-200">
            View detailed experience →
          </router-link>
        </p>
      </div>

      <div class="max-w-4xl mx-auto space-y-8">
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
          <div class="flex-1">
            <div class="text-sm text-gray-400 mb-1">Nov 2018 – Jun 2025</div>
            <h3 class="text-xl font-semibold text-white mb-1">Technology Lead</h3>
            <div class="text-blue-400 font-medium mb-2">Infosys</div>
            <p class="text-gray-300">Led migration to microservices; mentored 12+ engineers.</p>
          </div>
        </div>
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
          <div class="flex-1">
            <div class="text-sm text-gray-400 mb-1">Jan 2018 – Oct 2018</div>
            <h3 class="text-xl font-semibold text-white mb-1">Senior .NET Developer</h3>
            <div class="text-blue-400 font-medium mb-2">Notetech Software</div>
            <p class="text-gray-300">Architected cloud-native solutions; improved CI/CD.</p>
          </div>
        </div>
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
          <div class="flex-1">
            <div class="text-sm text-gray-400 mb-1">Feb 2017 – Sep 2017</div>
            <h3 class="text-xl font-semibold text-white mb-1">Software Engineer L3</h3>
            <div class="text-blue-400 font-medium mb-2">Zerone Consulting</div>
            <p class="text-gray-300">Built scalable APIs; introduced agile practices.</p>
          </div>
        </div>
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
          <div class="flex-1">
            <div class="text-sm text-gray-400 mb-1">Dec 2014 – Jan 2017</div>
            <h3 class="text-xl font-semibold text-white mb-1">Senior .NET Developer</h3>
            <div class="text-blue-400 font-medium mb-2">Aabasoft Technologies</div>
            <p class="text-gray-300">Developed MVPs; wore multiple hats in dev & ops.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="bg-slate-700 rounded-2xl shadow-sm border border-slate-600 p-8 lg:p-12 animate-fade-in-up">
      <div class="text-center mb-12">
        <span class="inline-block bg-purple-600/20 text-purple-300 text-sm font-semibold px-3 py-1 rounded-full mb-4 animate-pulse">
          Expertise
        </span>
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">Technical Skills</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-600 hover:border-slate-500 animate-fade-in-up">
          <div class="text-3xl mb-4">💻</div>
          <h3 class="text-lg font-semibold text-white mb-3">Languages</h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-blue-600/20 text-blue-300 text-sm px-3 py-1 rounded-full">C#</span>
            <span class="bg-blue-600/20 text-blue-300 text-sm px-3 py-1 rounded-full">Java</span>
            <span class="bg-blue-600/20 text-blue-300 text-sm px-3 py-1 rounded-full">JavaScript</span>
            <span class="bg-blue-600/20 text-blue-300 text-sm px-3 py-1 rounded-full">TypeScript</span>
          </div>
        </div>
        <div class="bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-600 hover:border-slate-500 animate-fade-in-up" style="animation-delay: 100ms">
          <div class="text-3xl mb-4">⚡</div>
          <h3 class="text-lg font-semibold text-white mb-3">Frameworks</h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-green-600/20 text-green-300 text-sm px-3 py-1 rounded-full">.NET Core</span>
            <span class="bg-green-600/20 text-green-300 text-sm px-3 py-1 rounded-full">Spring Boot</span>
            <span class="bg-green-600/20 text-green-300 text-sm px-3 py-1 rounded-full">Angular</span>
            <span class="bg-green-600/20 text-green-300 text-sm px-3 py-1 rounded-full">React</span>
            <span class="bg-green-600/20 text-green-300 text-sm px-3 py-1 rounded-full">Vue</span>
            <span class="bg-green-600/20 text-green-300 text-sm px-3 py-1 rounded-full">Node.js</span>
          </div>
        </div>
        <div class="bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-600 hover:border-slate-500 animate-fade-in-up" style="animation-delay: 200ms">
          <div class="text-3xl mb-4">☁️</div>
          <h3 class="text-lg font-semibold text-white mb-3">Cloud</h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-orange-600/20 text-orange-300 text-sm px-3 py-1 rounded-full">Azure</span>
            <span class="bg-orange-600/20 text-orange-300 text-sm px-3 py-1 rounded-full">GCP</span>
          </div>
        </div>
        <div class="bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-600 hover:border-slate-500 animate-fade-in-up" style="animation-delay: 300ms">
          <div class="text-3xl mb-4">🚀</div>
          <h3 class="text-lg font-semibold text-white mb-3">DevOps</h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-red-600/20 text-red-300 text-sm px-3 py-1 rounded-full">Docker</span>
            <span class="bg-red-600/20 text-red-300 text-sm px-3 py-1 rounded-full">Kubernetes</span>
            <span class="bg-red-600/20 text-red-300 text-sm px-3 py-1 rounded-full">Jenkins</span>
          </div>
        </div>
        <div class="bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-600 hover:border-slate-500 animate-fade-in-up" style="animation-delay: 300ms">
          <div class="text-3xl mb-4">👥</div>
          <h3 class="text-lg font-semibold text-white mb-3">Leadership</h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-indigo-900/50 text-indigo-300 text-sm px-3 py-1 rounded-full">Agile</span>
            <span class="bg-indigo-900/50 text-indigo-300 text-sm px-3 py-1 rounded-full">Scrum</span>
            <span class="bg-indigo-900/50 text-indigo-300 text-sm px-3 py-1 rounded-full">Team Building</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Preview Section -->
    <section class="bg-slate-700 rounded-2xl shadow-sm border border-slate-600 p-8 lg:p-12 animate-fade-in-up">
      <div class="text-center mb-12">
        <span class="inline-block bg-pink-600/20 text-pink-300 text-sm font-semibold px-3 py-1 rounded-full mb-4 animate-pulse">
          Portfolio
        </span>
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">Featured Projects</h2>
        <p class="text-lg text-slate-300 max-w-2xl mx-auto">
          I've led and contributed to impactful projects across various domains.
          <router-link to="/projects" class="text-blue-400 hover:text-blue-300 font-semibold ml-2 transition-colors duration-200">
            View full portfolio →
          </router-link>
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-600 hover:border-slate-500 animate-fade-in-up">
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-lg font-semibold text-white">OCC Hub</h3>
            <span class="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">Enterprise</span>
          </div>
          <p class="text-slate-400">
            Operational Control Center Hub - A single place for monitoring and scheduling jobs
            for telecom technicians.
          </p>
        </div>
        <div class="bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-600 hover:border-slate-500 animate-fade-in-up" style="animation-delay: 100ms">
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-lg font-semibold text-white">Order Management System</h3>
            <span class="bg-green-600/20 text-green-300 text-xs px-2 py-1 rounded-full">Telecom</span>
          </div>
          <p class="text-slate-400">
            Built for a leading telecom client to manage wholesale orders efficiently through
            voice process automation.
          </p>
        </div>
        <div class="bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-600 hover:border-slate-500 animate-fade-in-up" style="animation-delay: 200ms">
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-lg font-semibold text-white">Keystone</h3>
            <span class="bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full">Analytics</span>
          </div>
          <p class="text-slate-400">
            Real-time insights platform for key performance indicators, enabling data-driven
            decision-making and operational efficiency.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-slate-700 rounded-2xl shadow-sm border border-slate-600 p-8 lg:p-12 animate-fade-in-up">
      <div class="text-center mb-12">
        <span class="inline-block bg-teal-600/20 text-teal-300 text-sm font-semibold px-3 py-1 rounded-full mb-4 animate-pulse">
          Get In Touch
        </span>
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">Let's Connect</h2>
        <p class="text-lg text-slate-300 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, innovative projects, or just having a chat about technology.
        </p>
      </div>

      <div class="max-w-md mx-auto">
        <a
          href="mailto:jithinsbstn@gmail.com"
          class="flex items-center p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors duration-200 mb-6 border border-gray-600"
        >
          <div class="text-2xl mr-4">✉️</div>
          <div>
            <div class="font-semibold text-white">Email</div>
            <div class="text-gray-300">jithinsbstn@gmail.com</div>
          </div>
        </a>

        <div class="flex justify-center space-x-6">
          <a
            href="https://linkedin.com/in/jithinsebastian"
            target="_blank"
            class="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 4.98 2.12 4.98 3.5ZM0 24H5V7H0V24ZM8.5 7H13V9.5H13.1C13.9 8.2 15.7 7 18 7C22.07 7 24 9.42 24 13.88V24H19V14.75C19 12.48 18.95 9.85 16 9.85C13.05 9.85 12.6 12.15 12.6 14.61V24H8.5V7Z" fill="currentColor"/>
            </svg>
          </a>
          <a
            href="https://github.com/jithinsebastian-git"
            target="_blank"
            class="flex items-center justify-center w-12 h-12 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-200 border border-gray-600"
            aria-label="GitHub"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.297C5.37 0.297 0 5.67 0 12.305C0 17.6 3.438 22.037 8.207 23.545C8.807 23.64 9.025 23.31 9.025 23.02C9.025 22.76 9.015 22.02 9.01 21.04C5.672 21.66 4.967 19.37 4.967 19.37C4.422 17.97 3.633 17.6 3.633 17.6C2.545 16.82 3.717 16.84 3.717 16.84C4.922 16.92 5.555 18.07 5.555 18.07C6.63 19.84 8.342 19.35 9.048 19.08C9.144 18.31 9.452 17.78 9.795 17.48C7.12 17.18 4.344 16.14 4.344 11.54C4.344 10.22 4.818 9.14 5.578 8.3C5.455 8 5.045 6.75 5.688 5.1C5.688 5.1 6.698 4.78 8.998 6.36C9.948 6.1 10.968 5.97 11.99 5.97C13.01 5.97 14.03 6.1 14.98 6.36C17.278 4.78 18.288 5.1 18.288 5.1C18.93 6.75 18.52 8 18.398 8.3C19.16 9.14 19.634 10.22 19.634 11.54C19.634 16.15 16.854 17.17 14.17 17.47C14.62 17.84 15.02 18.58 15.02 19.7C15.02 21.32 15.01 22.61 15.01 23.02C15.01 23.31 15.23 23.65 15.84 23.54C20.61 22.03 24 17.6 24 12.305C24 5.67 18.63 0.297 12 0.297Z" fill="currentColor"/>
            </svg>
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
@keyframes tech-move {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 160px 160px;
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.65;
  }
  50% {
    transform: scale(1.12);
    opacity: 0.18;
  }
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  0%,
  100% {
    border-color: transparent;
  }
  50% {
    border-color: currentColor;
  }
}

@keyframes tech-move {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 160px 160px;
  }
}

.tech-pattern {
  background-image: radial-gradient(circle, rgba(148, 163, 184, 0.35) 1px, transparent 1px);
  background-size: 25px 25px;
  opacity: 0.15;
  animation: tech-move 14s linear infinite;
}

.typewriter {
  display: inline-block;
  overflow: hidden;
  border-right: 2px solid currentColor;
  white-space: nowrap;
  animation: typing 2.5s steps(30, end), blink-caret 0.8s step-end infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}

.delay-200 {
  animation-delay: 0.2s;
}
</style>
