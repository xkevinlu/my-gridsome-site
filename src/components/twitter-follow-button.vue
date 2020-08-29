<template>

<a href="https://twitter.com/kevinlukevinlu?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="false">Follow @kevinlukevinlu</a>

</template>


<script>
  export default {
    mounted() {
      let buttonScript = document.createElement('script')
      buttonScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      document.head.appendChild(buttonScript)
    }
  }
</script>
<style scoped>
</style>