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
          <div class="col-md-6 mx-auto my-3">
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
          </div>
          <div class="col-md-6 mx-auto my-3">
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
          </div>
          <div class="col-md-6 mx-auto my-3">
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
          </div>
          <div class="col-md-6 mx-auto my-3">
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
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