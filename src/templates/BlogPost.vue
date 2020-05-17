<template>
  <layout>
    <h2>{{$page.blogPost.title}}</h2>
    <h6>{{$page.blogPost.date}}</h6>
    <div class="markdown-body" v-html="$page.blogPost.content" />
    <vue-goodshare></vue-goodshare>
  </layout>
</template>

<page-query>
query Post ($id: ID!) {
  blogPost (id: $id) {
    title
    content
    date (format: "MMMM DD, YYYY")
    author
    }
  }
</page-query>


<script>
import VueGoodshare from "vue-goodshare";

export default {
  components: {
    VueGoodshare
  },
  metaInfo() {
    return {
      title: this.$page.blogPost.title
    };
  }
};
</script>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css);

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 2em 0em;
  padding-bottom: 4em;
  border-bottom: 1px solid black;
}

h6 {
  color: gray;
  font-weight: 400;
}
</style>