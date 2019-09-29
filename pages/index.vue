<!-- 
  A page in NuxtJS can be thought of as two things:
    1. A route in the URL bar
    2. A fully generated .html page
-->
<template>
  <section id="home-page">
    <div class="home-contacts">
      <div class="container">
        <div class="row py-3">
          <div
            v-for="contact in contacts"
            class="col-md-6 mx-auto my-3"
            :key="contact.id"
          >
            <app-contact-card
              class="card--clickable"
              @click="gotToCard(contat.id)"
              :contact="contact"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  /* https://nuxtjs.org/api/context */
  asyncData() {
    return {
      contacts: [
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
      ]
    };
  },
  components: {
    AppContactCard: () => import("~/components/AppContactCard")
  }
};
</script>

<style>
.home-contacts {
  max-width: 800px;
  margin: 0 auto;
}

.card--clickable {
  transition: transform 150ms linear;
}

.card--clickable:hover {
  cursor: pointer;
  transform: scale(1.03);
}
</style>