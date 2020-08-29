<template>
<div class="container">
    <b-card-group column deck>
      <b-card
        no-body
        style="min-width: 15rem; margin:0.5em;"
        v-for="(post, idx) in $static.blogPosts.edges"
        v-if="idx < 4"
        :key="post.id"
        tag="article"
      >
            <g-link class="no-link-color" :to="post.node.path">
              <b-card-img :src="post.node.image" alt="Image" img-top></b-card-img>
            </g-link>

            <b-card-body>
              <g-link class="no-link-color" :to="post.node.path">
                <b-card-title>{{post.node.title}}</b-card-title>
              </g-link>
              <b-card-text>{{post.node.date}}</b-card-text>
            </b-card-body>
      </b-card>
    </b-card-group>
</div>
</template>

<static-query>
query blogPosts {
  blogPosts: allBlogPost(sortBy: "date") {
    edges {
      node {
        id
        title
        author
        path
        date(format: "MMMM DD, YYYY")
        image
      }
    }
  }
}
</static-query>

<style scoped>
.container {
    margin-top:2em;
    margin-left:0em;
}

</style>

<script>
export default {
  data () {
    return {
			message: "hello"
    }
  },
}
</script>