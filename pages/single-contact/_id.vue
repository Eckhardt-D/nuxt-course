<template>
  <section id="contact-page" class="h-100">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-12">
          <app-contact-card :contact="contact" class="card--shaded" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "no-header",
  asyncData({ params, router, store }) {
    let contact = store.state.contacts.filter(c => c._id == params.id)[0];
    if (!contact) return router.push("/");
    return { contact };
  },
  components: {
    AppContactCard: () => import("~/components/AppContactCard")
  }
};
</script>

<style scoped>
.h-100 {
  height: 100vh;
}

.card--shaded {
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
}
</style>