<template>
  <section id="contact-me" class="contact-us-area section-padding bg-color-dark img-cover">
    <div class="container">
      <div class="row d-none">
        <div class="col-12">
          <div class="section-title text-center">
            <span class="water-text">{{ data.sectionTitleWaterText }}</span>
            <h2 class="title">
              {{ data.sectionTitle }}
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="contact-info text-center">
            <div class="contact-info__list address">
              <i class="fa fa-home" />
              <p>Albert-Einstein-Straße 1, 49076 Osnabrück</p>
            </div>
            <div class="contact-info__list email">
              <i class="fa fa-envelope" />
              <a href="mailto:example@gmail.com">me@phillipp.io</a>
            </div>
          </div>
        </div>
        <div class="col-lg-8 offset-lg-2">
          <form class="contact-form">
            <div class="row">
              <div class="col-12">
                <input name="name" type="text" placeholder="Your Name">
              </div>
              <div class="col-12">
                <input name="subject" type="email" placeholder="Your Subject">
              </div>
              <div class="col-12">
                <input name="email" type="email" placeholder="Your Email">
              </div>
              <div class="col-12">
                <textarea name="message" placeholder="Your Message" />
              </div>
              <div class="col-12">
                <button class="btn btn-default">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from '../data/contact.json'
export default {
  data () {
    return {
      data
    }
  }
}
</script>
