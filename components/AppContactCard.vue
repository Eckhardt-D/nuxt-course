<!--
  A component in NuxtJS is a piece of re-usable markup, with:
    1. It's own data and methods
    2. The ability to communicate with the parent
       through props and events.
-->

<template>
  <div class="contact-card">
    <img
      width="60px"
      height="60px"
      src="https://www.w3schools.com/howto/img_avatar2.png"
      alt="Contact Name and Number"
      class="contact-avatar"
    />
    <div class="contact-details">
      <h1 class="contact-name">Jane Doe</h1>
      <p class="contact-email">jane.doe@enterprise.com</p>
    </div>
    <div class="contact-call">
      <a href="tel:+264814774491" class="call-link">
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
export default {};
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