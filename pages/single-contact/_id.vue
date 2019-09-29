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
  asyncData({ params, router }) {
    if (!params.id) return router.push("/");

    let contact = null;
    const contacts = [
      {
        id: 1,
        name: "Jane Doe",
        number: "+221678432222",
        email: "jane.doe@enterprise.com"
      },
      {
        id: 2,
        name: "John Doe",
        number: "+221673432222",
        email: "john.doe@enterprise.com"
      },
      {
        id: 3,
        name: "Peter Doe",
        number: "+221678432112",
        email: "peter.doe@enterprise.com"
      },
      {
        id: 4,
        name: "Sarah Doe",
        number: "+221678432245",
        email: "sarah.doe@enterprise.com"
      }
    ];

    contacts.forEach(c => {
      if (c.id == params.id) {
        contact = c;
      }
    });

    if (!contact) {
      return router.push("/");
    }

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