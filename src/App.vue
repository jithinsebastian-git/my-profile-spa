<template>
  <div class="min-h-screen bg-slate-800 flex flex-col">
    <!-- Header -->
    <header class="bg-slate-800 shadow-lg border-b border-slate-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo/Name -->
          <div class="flex items-center">
            <router-link
              to="/"
              class="text-xl font-bold text-white"
              @click.prevent="goHome"
            >
              Jithin Sebastian
            </router-link>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex space-x-8">
            <router-link
              to="/"
              class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              active-class="text-white bg-blue-900/40"
              exact-active-class="text-white bg-blue-900/40"
              @click.prevent="goHome"
            >
              Home
            </router-link>
            <router-link
              to="/experience"
              class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              active-class="text-white bg-blue-900/40"
              exact-active-class="text-white bg-blue-900/40"
            >
              Experience
            </router-link>
            <a
              href="/#skills"
              class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Skills
            </a>
            <router-link
              to="/projects"
              class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              active-class="text-white bg-blue-900/40"
              exact-active-class="text-white bg-blue-900/40"
            >
              Projects
            </router-link>
            <router-link
              to="/awards"
              class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              active-class="text-white bg-blue-900/40"
              exact-active-class="text-white bg-blue-900/40"
            >
              Awards
            </router-link>
            <a
              href="/#contact"
              class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button
              @click="toggleMobileMenu"
              class="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="isMobileMenuOpen" class="md:hidden border-t border-slate-700 py-4">
          <nav class="flex flex-col space-y-2">
            <router-link
              to="/"
              @click.prevent="goHome"
              class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              active-class="text-blue-400 bg-blue-900/20"
            >
              Home
            </router-link>
            <router-link
              to="/experience"
              @click="closeMobileMenu"
              class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              active-class="text-blue-400 bg-blue-900/20"
            >
              Experience
            </router-link>
            <a
              href="/#skills"
              @click="closeMobileMenu"
              class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Skills
            </a>
            <router-link
              to="/projects"
              @click="closeMobileMenu"
              class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              active-class="text-blue-400 bg-blue-900/20"
            >
              Projects
            </router-link>
            <router-link
              to="/awards"
              @click="closeMobileMenu"
              class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              active-class="text-blue-400 bg-blue-900/20"
            >
              Awards
            </router-link>
            <a
              href="/#contact"
              @click="closeMobileMenu"
              class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <transition name="page" mode="out-in">
        <router-view />
      </transition>
    </main>

    <!-- Footer -->
    <footer class="bg-slate-800 text-slate-300 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-sm">&copy; 2026 Jithin Sebastian. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { trackVisitor } from './utils/analytics'

export default {
  name: 'App',
  data() {
    return {
      isMobileMenuOpen: false
    }
  },
  mounted() {
    trackVisitor()
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    },
    goHome() {
      // Navigate to the root route and scroll to the top even if already on Home
      this.closeMobileMenu()
      this.$router
        .push({ path: '/' })
        .catch(() => {})
      this.scrollToTop()
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

