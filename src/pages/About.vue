<template>
  <Layout>
    <h5>About</h5>
    <logo></logo>
    <p>Colors and Code is a blog about design, technology, and data. Join the email list to receive updates.</p>
    <hr>
    <h6>Contact</h6>
    <p>For inquiries or post submissions, please email:</p>
    <p>admin@colorsandcode.com</p>
  
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
