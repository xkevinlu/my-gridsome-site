<template>
    <layout>
        <h2>{{$page.blogPost.title}}</h2>
        <h6>{{$page.blogPost.date}} by {{$page.blogPost.author}}</h6>
        <div class="markdown-body" v-html="$page.blogPost.content" />
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
export default {
    
    metaInfo() {
        return {
            title:this.$page.blogPost.title
        }
    }
}
</script>

<style scoped>
    @import url(https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css);

    .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 2em auto;
    }

    @media (max-width: 767px) {
        .markdown-body {
            padding: 15px;
        }
    }

    h6 {
        color:gray;
        font-weight:400;
    }

</style>