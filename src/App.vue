<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
     <h1>Exemple d'un component Vue modulaire</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    <RouterView />
  </header>
</template>

<style scoped>


nav {
  width: 100%;
  font-size: 12px;
  margin-top: 2rem;
}

h1 {
  color: black;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

header{
  justify-items: center;
  align-items: center;
  text-align: center;
}

.wrapper {
  text-align: center;
}

@media (min-width: 1024px) {

  nav {
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
