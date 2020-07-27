<template>
  <Layout>
    <h5>About</h5>
    <g-image class="responsive-img" src="~/assets/colorsandcode-logo.png" fit="inside"></g-image>
    <h3>Colors and Code is a blog about design, tech, and data.</h3>
    <hr>
    <p>I'm a designer working at a tech company, and here is a collection of my daily musings.</p>
    <br>
    <h6>Contact</h6>
    <p>For inquiries or post submissions, please email:</p>
    <p>admin@colorsandcode.com</p>
    <br>
  
  </Layout>
</template>

<script>
import logo from '~/components/logo'
export default {
  components: {
    logo
  },
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style scoped>
.responsive-img {
  width:100%;
}

@media screen and (min-width: 900px) {

.responsive-img {
  max-width:600px;
}

}
</style>

