<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/">
      <button>Home</button>
    </router-link>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
