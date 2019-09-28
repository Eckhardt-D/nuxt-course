<!-- 
  A page in NuxtJS can be thought of as two things:
    1. A route in the URL bar
    2. A fully generated .html page
-->

<template>
  <section id="home-page">
    <div class="home-header">
      <img
        width="80px"
        src="~/assets/address-card-solid.svg"
        alt="My Contact Keeper Icon"
      />
      <h1>My Contact Keeper</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div class="home-contacts">
      <div class="container">
        <div class="row py-3">
          <div
            v-for="contact in contacts"
            class="col-md-6 mx-auto my-3"
            :key="contact.id"
          >
            <app-contact-card :contact="contact" />
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
.home-header {
  padding: 2em;
  background: #f4f4f4;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

.home-contacts {
  max-width: 800px;
  margin: 0 auto;
}
</style>