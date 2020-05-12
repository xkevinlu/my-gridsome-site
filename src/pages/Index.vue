<template>
  <Layout>
    <div>
      <h5>Featured Posts</h5>
      <b-card
        no-body
        class="overflow-hidden mb-4 mt-3"
        v-for="post in $page.blogPosts.edges"
        :key="post.id"
        tag="article"
      >
        <b-row no-gutters>
          <b-col md="4">
            <g-link class="no-link-color" :to="post.node.path">
              <b-card-img :src="post.node.image" alt="Image" class="rounded-0"></b-card-img>
            </g-link>
          </b-col>
          <b-col md="8">
            <b-card-body>
              <g-link class="no-link-color" :to="post.node.path">
                <b-card-title>{{post.node.title}}</b-card-title>
              </g-link>
              <b-card-text>{{post.node.date}} by {{post.node.author}}</b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </Layout>
</template>

<page-query>
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
</page-query>


<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>

<style>
</style>
