<!-- <template>
  <section id="blog-list">
    <article class="blog-post">
      <h2 class="post-title">Blog Post 1</h2>
      <p class="post-excerpt">This is an excerpt for the first blog post...</p>
      <a href="#" class="read-more">Read More</a>
    </article>

    <article class="blog-post">
      <h2 class="post-title">Blog Post 2</h2>
      <p class="post-excerpt">This is an excerpt for the second blog post...</p>
      <a href="#" class="read-more">Read More</a>
    </article>
  </section>
</template> -->

<template>
  <div class="blog-list">
    <div v-if="loading" class="text-center">Loading...</div>
    <section v-else id="blog-list"></section>
    <ul>
      <li v-for="post in posts" :key="post.id" class="blog-item">
        <article class="blog-post">
          <h2 class="post-title">
            <a :href="'/blog?id=' + post.id">{{ post.title }}</a>
          </h2>
          <p v-html="truncateAndConvert(post.body, 50)"></p>
          <a href="#" class="read-more">Read More</a>
        </article>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { marked } from 'marked'

export default {
  name: 'BlogList',
  setup() {
    const posts = ref([])
    const loading = ref(true)

    const fetchPosts = async () => {
      try {
        //const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const response = await axios.get('http://localhost:8080/items')
        posts.value = response.data
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        loading.value = false
      }
    }

    const truncate = (text, length) => {
      if (text.length > length) {
        return text.substring(0, length) + '...'
      }
      return text
    }

    const truncateAndConvert = (text, length) => {
      if (text.length > length) {
        text = text.substring(0, length) + '...'
      }
      return marked(text) // Convert Markdown to HTML
    }

    onMounted(() => {
      fetchPosts()
    })

    return {
      posts,
      loading,
      truncateAndConvert
    }
  }
}
</script>

<style scoped>
#blog-list {
  width: 80%;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  place-content: center;
  place-items: center;
}

.blog-post {
  background-color: #f1f1f1;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.post-title {
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 20px;
  font: bold;
}

.read-more {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: #54b6e7;
}
a {
  color: inherit;
  text-decoration: none;
}

p {
  height: 30px;
}
</style>
