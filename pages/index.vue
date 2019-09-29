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
import { mapState } from "vuex";

export default {
  /* https://nuxtjs.org/api/context */
  components: {
    AppContactCard: () => import("~/components/AppContactCard")
  },
  computed: {
    ...mapState(["contacts"])
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