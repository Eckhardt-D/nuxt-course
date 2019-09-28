<template>
  <main>
    <!-- 
      Layouts can help with creating 'base'
        components/designs around our page
        the nuxt tag is where the page is
      dynamically rendered by the framework 
    -->
    <app-header />
    <nuxt />
  </main>
</template>

<script>
export default {
  components: {
    AppHeader: () => import("~/components/AppHeader")
  }
};
</script>

<style>
</style>