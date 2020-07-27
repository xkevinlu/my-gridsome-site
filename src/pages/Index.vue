<template>
  <Layout>
    <div>
      <h5>Featured Posts</h5>
      <b-card
        no-body
        class="overflow-hidden mb-4 mt-3 drop-shadow"
        v-for="post in $page.blogPosts.edges"
        :key="post.id"
        tag="article"
      >
        <b-row no-gutters>
          <b-col md="5">
            <g-link class="no-link-color" :to="post.node.path">
              <b-card-img :src="post.node.image" alt="Image" class="rounded-0"></b-card-img>
            </g-link>
          </b-col>
          <b-col md="7">
            <b-card-body>
              <g-link class="no-link-color" :to="post.node.path">
                <b-card-title>{{post.node.title}}</b-card-title>
              </g-link>
              <b-card-text>{{post.node.date}}</b-card-text>
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
  },
};
</script>

<style>
.drop-shadow {
  box-shadow:
  0 1px 1px rgba(0, 0, 0, 0.034),
  0 3px 2px rgba(0, 0, 0, 0.06),
  0 5px 4px rgba(0, 0, 0, 0.056)
;

  background: white;
  border-radius: 5px;
}
</style>
