<template>
  <Layout>
    <g-image class="responsive-img" src="~/assets/colorsandcode-logo.png" fit="inside"></g-image>
    <h3>About Colors and Code</h3>
    <hr>
    <p>Colors and code is the personal blog of Kevin Lu where I write about a bunch of random topic, often related to design, tech, data, and culture. I'm currently a product designer at Amazon Web Services. I also like ballroom dancing. You can reach me at: admin@colorsandcode.com</p>
    <br>
    <twitter></twitter>
    </Layout>
</template>

<script>
import logo from '~/components/logo'
import twitter from '~/components/twitter-follow-button'

export default {
  components: {
    logo, twitter
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

