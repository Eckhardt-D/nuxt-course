<!--
  A component in NuxtJS is a piece of re-usable markup, with:
    1. It's own data and methods
    2. The ability to communicate with the parent
       through props and events.
-->
<template>
  <div
    @click="$router.push(`/single-contact/${contact._id}`)"
    class="contact-card"
  >
    <img
      width="60px"
      height="60px"
      :src="contact.avatar || fallbackAvatar"
      alt="Contact Avatar"
      class="contact-avatar"
    />
    <div class="contact-details">
      <h1 class="contact-name">{{ contact.name }}</h1>
      <p class="contact-email">{{ contact.email }}</p>
    </div>
    <div class="contact-call">
      <a :href="`tel:${contact.number}`" class="call-link">
        <img
          width="25px"
          height="25px"
          src="~/assets/phone-solid.svg"
          alt="Telephone Icon"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-contact-card",
  props: {
    contact: {
      _id: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      contact: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      }
    }
  },
  computed: {
    fallbackAvatar() {
      return "https://www.w3schools.com/howto/img_avatar2.png";
    }
  }
};
</script>

<style scoped>
/* 
  A component's styles can be scoped
  to not mix with any other component 
  or page
*/
.contact-card {
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  max-width: 425px;
  margin: 0 auto;
}

.contact-avatar {
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

.contact-call,
.contact-details > * {
  text-align: center;
}

@media screen and (max-width: 500px) {
  .contact-card {
    max-width: calc(90% - 1em);
  }
}
</style>