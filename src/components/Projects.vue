<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Intro Section -->
    <section class="bg-slate-700 rounded-2xl shadow-sm border border-slate-600 p-8 lg:p-12 mb-12">
      <div class="text-center">
        <span class="inline-block bg-pink-600/20 text-pink-300 text-sm font-semibold px-3 py-1 rounded-full mb-4">
          Portfolio
        </span>
        <h1 class="text-3xl lg:text-4xl font-bold text-white mb-4">Featured Projects</h1>
        <p class="text-lg text-slate-300 max-w-3xl mx-auto">
          Explore the key projects I've led and contributed to throughout my career. Each project demonstrates my
          expertise in full-stack development, cloud architecture, and team leadership.
        </p>
      </div>
    </section>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <article
        class="bg-slate-800 rounded-2xl shadow-sm border border-slate-600 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        v-for="(project, i) in projects"
        :key="i"
      >
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-lg font-semibold text-white">{{ project.title }}</h3>
          <span class="text-sm text-slate-400 bg-slate-700 px-2 py-1 rounded-full border border-slate-600">{{ project.year }}</span>
        </div>

        <p class="text-slate-300 mb-4 line-clamp-3">{{ project.description }}</p>

        <div v-if="project.technologies?.length" class="mb-4">
          <h4 class="text-sm font-semibold text-white mb-2">Technologies</h4>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(t, ti) in project.technologies.slice(0, 3)"
              :key="ti"
              class="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full"
            >
              {{ t }}
            </span>
            <span
              v-if="project.technologies.length > 3"
              class="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded-full border border-slate-600"
            >
              +{{ project.technologies.length - 3 }} more
            </span>
          </div>
        </div>

        <div v-if="project.responsibilities?.length" class="mb-4">
          <h4 class="text-sm font-semibold text-white mb-2">Key Responsibilities</h4>
          <ul class="space-y-1">
            <li
              v-for="(r, ri) in project.responsibilities.slice(0, 2)"
              :key="ri"
              class="text-gray-300 text-sm flex items-start"
            >
              <span class="text-blue-400 mr-2">•</span>
              {{ r }}
            </li>
          </ul>
          <div v-if="project.responsibilities.length > 2" class="text-xs text-gray-400 mt-1">
            +{{ project.responsibilities.length - 2 }} more
          </div>
        </div>

        <div v-if="project.impact" class="mb-4">
          <h4 class="text-sm font-semibold text-white mb-1">Business Impact</h4>
          <p class="text-gray-300 text-sm line-clamp-2">{{ project.impact }}</p>
        </div>

        <button
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
          @click="openProject(i)"
        >
          <span>Read More</span>
          <span>↗</span>
        </button>
      </article>
    </div>

    <!-- Modal -->
    <div
      v-if="activeProjectIndex !== null"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click.self="closeProject"
    >
      <div class="bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-600">
        <div class="p-6 lg:p-8">
          <div class="flex justify-between items-start mb-6">
            <div>
              <h3 class="text-2xl font-bold text-white">{{ activeProject.title }}</h3>
              <p class="text-slate-400 mt-1">{{ activeProject.year }}</p>
            </div>
            <button
              class="text-slate-400 hover:text-slate-200 text-2xl"
              @click="closeProject"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div class="space-y-6">
            <div>
              <h4 class="text-lg font-semibold text-white mb-2">Overview</h4>
              <p class="text-slate-300 leading-relaxed">{{ activeProject.description }}</p>
            </div>

            <div v-if="activeProject.technologies?.length">
              <h4 class="text-lg font-semibold text-white mb-3">Technologies Used</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(t, ti) in activeProject.technologies"
                  :key="ti"
                  class="bg-blue-600/20 text-blue-300 text-sm px-3 py-1 rounded-full"
                >
                  {{ t }}
                </span>
              </div>
            </div>

            <div v-if="activeProject.responsibilities?.length">
              <h4 class="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
              <ul class="space-y-2">
                <li
                  v-for="(r, ri) in activeProject.responsibilities"
                  :key="ri"
                  class="text-slate-300 flex items-start"
                >
                  <span class="text-blue-400 mr-2 mt-1">•</span>
                  {{ r }}
                </li>
              </ul>
            </div>

            <div v-if="activeProject.impact">
              <h4 class="text-lg font-semibold text-white mb-2">Business Impact</h4>
              <p class="text-slate-300 leading-relaxed">{{ activeProject.impact }}</p>
            </div>
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
      return this.activeProjectIndex !== null ? this.projects[this.activeProjectIndex] : null
    }
  },
  methods: {
    openProject(index) {
      this.activeProjectIndex = index
    },
    closeProject() {
      this.activeProjectIndex = null
    }
  }
}
</script>
