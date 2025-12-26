<template>
  <div class="app">
    <header>
      <h1>Jithin Sebastian</h1>
      <p>Fullstack Developer | 10+ Years in Software Engineering</p>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/experience">Experience</router-link>
        <a href="/#skills">Skills</a>
        <router-link to="/projects">Projects</router-link>
        <a href="/#contact">Contact</a>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; 2025 Jithin Sebastian. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import { trackVisitor } from './utils/analytics'

export default {
  name: 'App',
  mounted() {
    // Track visitor silently
    trackVisitor()
  }
}
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>

