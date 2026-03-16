<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Intro Section -->
    <section class="bg-slate-700 rounded-2xl shadow-sm border border-slate-600 p-8 lg:p-12 mb-12">
      <div class="text-center">
        <span class="inline-block bg-green-600/20 text-green-300 text-sm font-semibold px-3 py-1 rounded-full mb-4">
          Career
        </span>
        <h1 class="text-3xl lg:text-4xl font-bold text-white mb-4">Professional Journey</h1>
        <p class="text-lg text-slate-300 max-w-3xl mx-auto">
          With over 10 years of experience in software engineering, I've worked with leading organizations,
          driving digital transformation and building high-performing teams. Below is a comprehensive timeline of my career and impact.
        </p>
      </div>
    </section>

    <!-- Timeline -->
    <div class="max-w-4xl mx-auto">
      <div class="space-y-8">
        <article
          class="bg-slate-800 rounded-2xl shadow-sm border border-slate-600 p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          v-for="(exp, i) in experiences"
          :key="i"
        >
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
            <div class="flex-1">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 class="text-xl font-semibold text-white mb-1">{{ exp.company }}</h3>
                  <p class="text-blue-400 font-medium">{{ exp.position }}</p>
                </div>
                <div class="text-sm text-slate-400 mt-1 sm:mt-0">{{ exp.duration }}</div>
              </div>

              <p class="text-slate-300 mb-4 leading-relaxed">{{ exp.description }}</p>

              <div v-if="exp.achievements?.length" class="mb-4">
                <h4 class="text-sm font-semibold text-white mb-2">Key Achievements</h4>
                <ul class="space-y-1">
                  <li
                    v-for="(a, ai) in exp.achievements"
                    :key="ai"
                    class="text-slate-300 text-sm flex items-start"
                  >
                    <span class="text-blue-400 mr-2">•</span>
                    {{ a }}
                  </li>
                </ul>
              </div>

              <div v-if="exp.technologies?.length" class="flex flex-wrap gap-2">
                <span
                  v-for="(t, ti) in exp.technologies"
                  :key="ti"
                  class="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-600"
                >
                  {{ t }}
                </span>
              </div>
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
