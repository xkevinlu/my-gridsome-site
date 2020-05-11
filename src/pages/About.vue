<template>
  <Layout>
    <h1>About us</h1>
    <logo></logo>
    <p>Colors and Code is a blog about design, technology, and data. Join the email list to receive updates.</p>
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
