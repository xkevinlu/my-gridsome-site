<template>
  <Layout>
    <h5>Archives</h5>
    <ul>
      <li v-for="post in $page.blogPosts.edges" :key="post.id">
        <g-link :to="post.node.path">{{post.node.title}}</g-link>
        - {{post.node.date}} by {{post.node.author}}
      </li>
    </ul>
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
    title: "About us"
  }
};
</script>
