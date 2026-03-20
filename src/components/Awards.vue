<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Intro Section -->
    <section class="bg-slate-700 rounded-2xl shadow-sm border border-slate-600 p-8 lg:p-12 mb-12">
      <div class="text-center">
        <span class="inline-block bg-yellow-600/20 text-yellow-300 text-sm font-semibold px-3 py-1 rounded-full mb-4">
          Recognition
        </span>
        <h1 class="text-3xl lg:text-4xl font-bold text-white mb-4">Awards & Certifications</h1>
        <p class="text-lg text-slate-300 max-w-3xl mx-auto">
          A curated list of professional certifications and awards that demonstrate my commitment to continuous learning and delivering high-impact outcomes.
        </p>
      </div>
    </section>

    <!-- Filters -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
      <div class="flex flex-wrap gap-2">
        <button
          @click="selectedType = 'All'"
          :class="filterButtonClass('All')"
          type="button"
        >
          All
        </button>
        <button
          @click="selectedType = 'Certification'"
          :class="filterButtonClass('Certification')"
          type="button"
        >
          Certifications
        </button>
        <button
          @click="selectedType = 'Award'"
          :class="filterButtonClass('Award')"
          type="button"
        >
          Awards
        </button>
      </div>
    </div>

    <!-- List -->
    <transition-group
      name="list"
      tag="div"
      class="grid grid-cols-1 lg:grid-cols-2 gap-6"
      appear
      :duration="{ enter: 220, leave: 220, move: 220 }"
    >
      <article
        v-for="(item, index) in filteredAwards"
        :key="item.title + item.date"
        :class="[
          'bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-600/50 p-6 transition-all duration-300 hover:-translate-y-1',
          cardClass(item.type)
        ]"
      >
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-xl font-semibold text-white mb-1">{{ item.title }}</h3>
            <p class="text-sm text-slate-400">
              {{ item.issuer }} · <span class="font-medium">{{ item.date }}</span>
            </p>
          </div>
          <span class="text-xs font-semibold px-3 py-1 rounded-full" :class="badgeClass(item.type)">
            {{ item.type }}
          </span>
        </div>

        <p class="text-slate-300 mb-4 leading-relaxed">{{ item.description }}</p>

        <a
          v-if="item.link"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm font-semibold"
        >
          View Certificate
          <span aria-hidden="true">↗</span>
        </a>
      </article>
    </transition-group>
  </div>
</template>

<script>
import awards from '../data/awards.json'

export default {
  name: 'Awards',
  data() {
    return {
      awards,
      selectedType: 'All'
    }
  },
  computed: {
    filteredAwards() {
      if (this.selectedType === 'All') return this.awards
      return this.awards.filter((item) => item.type === this.selectedType)
    }
  },
  methods: {
    badgeClass(type) {
      return {
        Certification: 'bg-green-600/20 text-green-200 border border-green-500/40 animate-pulse',
        Award: 'bg-yellow-600/20 text-yellow-200 border border-yellow-500/40 animate-bounce'
      }[type] || 'bg-slate-700/30 text-slate-200 border border-slate-600/40'
    },
    cardClass(type) {
      return {
        Certification: 'border-green-500/40 hover:border-green-400/60 shadow-green-500/20 animate-glow',
        Award: 'border-yellow-500/40 hover:border-yellow-400/60 shadow-yellow-500/20 animate-float'
      }[type] || ''
    },
    filterButtonClass(type) {
      const base =
        'px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
      const isActive = this.selectedType === type
      const active =
        'bg-blue-600 text-white border border-blue-500 shadow-sm'
      const inactive =
        'bg-slate-700/50 text-slate-200 border border-slate-600/50 hover:bg-slate-700'
      return `${base} ${isActive ? active : inactive}`
    }
  }
}
</script>

<style scoped>
@keyframes glow {
  0%,
  100% {
    box-shadow: 0 0 0 rgba(34, 197, 94, 0);
  }
  50% {
    box-shadow: 0 0 18px rgba(34, 197, 94, 0.3);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.animate-glow {
  animation: glow 4s ease-in-out infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }

  .list-enter-to,
  .list-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .list-enter-active,
  .list-leave-active,
  .list-move {
    transition: opacity 220ms cubic-bezier(0.4, 0.0, 0.2, 1),
      transform 220ms cubic-bezier(0.4, 0.0, 0.2, 1);
  }

  .list-move {
    transition-property: transform;
  }

  /* Make sure transition starts even when items are removed/added quickly */
  .list-enter-active {
    transition-delay: 0ms;
  }

  .list-leave-active {
    transition-delay: 0ms;
  }
</style>
