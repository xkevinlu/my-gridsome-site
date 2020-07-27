<template>
  <layout class="mainLayout">
    <h2>{{$page.blogPost.title}}</h2>
    <h6>{{$page.blogPost.date}}</h6>
<div class="sharethis-inline-share-buttons"></div>
    <div class="markdown-body" v-html="$page.blogPost.content" />
<div class="sharethis-inline-share-buttons"></div>
<recommendedPosts></recommendedPosts>
  </layout>
</template>

<page-query>
query Post ($id: ID!) {
  blogPost (id: $id) {
    title
    content
    date (format: "MMMM DD, YYYY")
    author
    image
    excerpt
    }
  }
</page-query>


<script>
import recommendedPosts from "~/components/recommended-posts";

export default {
    components: {
    recommendedPosts
  },
  mounted() {
    let shareScript = document.createElement("script");
    shareScript.setAttribute(
      "src",
      "https://platform-api.sharethis.com/js/sharethis.js#property=5ec0dd5daa9dfe001ab3f778&product=inline-share-buttons&cms=website"
    );
    shareScript.setAttribute(
      "async",
      "async"
    );
    document.head.appendChild(shareScript);
  },
  metaInfo() {
    return {
      title: this.$page.blogPost.title,
      meta: [
        {
          name: "description",
          content: this.$page.blogPost.excerpt
        },
        {
          property: "og:title",
          content: this.$page.blogPost.title
        },
        {
          name: "twitter:card",
          content: this.$page.blogPost.image ? "summary_large_image" : "summary"
        },
        {
          name: "twitter:creator",
          content: "@kevinlukevinlu"
        },
        {
          property: "og:description",
          cotent: this.$page.blogPost.excerpt
        },
        {
          property: "og:image",
          content: this.$page.blogPost.image || ""
        }
      ]
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
  line-height:1.6em;
  font-size:1.1em;

  border-bottom: 1px solid black;
}

.markdown-body p {
 font-size:2em;
}

.mainLayout {
  margin-bottom:3em;
}

h6 {
  color: gray;
  font-weight: 400;
}

@media screen and (min-width: 600px) {
.markdown-body {
  line-height:1.6em;
  font-size:1.3em;
  }
}

</style>