<template>
  <Layout>
    <h1>Archives</h1>
  <ul>
<li v-for="post in $page.blogPosts.edges"
      :key="post.id">
  <g-link :to="post.node.path">{{post.node.title}} - {{post.node.date}} by {{post.node.author}}</g-link>
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
    title: 'About us'
  }
}
</script>
