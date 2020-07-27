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
        <g-link class="no-link-color" :to="post.node.path">
          <b-row no-gutters>
            <b-col md="5">
              <b-card-img :src="post.node.image" alt="Image" class="rounded-0 p-3"></b-card-img>
            </b-col>
            <b-col md="7">
              <b-card-body>
                <b-card-title>{{post.node.title}}</b-card-title>
                <b-card-text>{{post.node.date}}</b-card-text>
                <b-card-text>{{post.node.excerpt}}</b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </g-link>
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
        excerpt
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
.drop-shadow {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.034);
  background: white;
  border-radius: 5px;
  transition: all 0.5s;
}

.drop-shadow:hover {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.034), 0 3px 2px rgba(0, 0, 0, 0.06), 0 5px 4px rgba(0, 0, 0, 0.056);
}

.no-link-color {
  color: black;
}

.no-link-color:hover {
  text-decoration: none;
  background: white;
  border-radius: 5px;
}
</style>
