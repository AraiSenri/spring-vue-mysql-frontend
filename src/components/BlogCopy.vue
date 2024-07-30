<template>
  <!-- <div class="post-header">
    <div class="author-info">
      <img src="../assets/sample-author-icon.png" alt="投稿者アイコン" />
      <span>投稿者名</span>
    </div>
    <div class="post-date"><span>投稿日</span> yyy/mm/dd DBから取得予定</div>
  </div>
  <div class="blog"> -->
  <section class="post">
    <div class="post-header">
      <div class="author-info">
        <img src="../assets/sample-author-icon.png" alt="投稿者アイコン" />
        <span>投稿者名</span>
      </div>
      <div class="post-date"><span>投稿日</span> yyy/mm/dd</div>
    </div>
    <h1>{{ post.title }}</h1>
    <p>キーワード #食品 #フリーワード #何でも何個でも良い</p>
    <div class="post-content">
      <div class="blog-body" v-html="postHtml"></div>
    </div>
    <div class="post-navigation">
      <span>＜ 前回の投稿リンク（あれば）</span>
      <span>次の投稿リンク（あれば） ＞</span>
    </div>
  </section>
  <div class="profile-comments">
    <section class="profile">
      <h3>投稿者プロフィール/情報</h3>
      <div class="profile-content">
        <img src="../assets/sample-author-icon.png" alt="投稿者アイコン" />
        <span>投稿者名</span>
        <p>自己紹介とか ....</p>
      </div>
    </section>
    <section class="comments">
      <h3>コメント</h3>
      <div class="comment-input">
        <input type="text" placeholder="コメント入力" />
        <button type="submit">➤</button>
      </div>
      <div class="comment">
        <div class="comment-author">
          <img src="../assets/sample-author-icon.png" alt="アカウントアイコン" />
          <span>アカウント名</span>
        </div>
        <p>コメントとか</p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import { marked } from 'marked'

export default {
  name: 'BlogCopy',
  data() {
    return {
      post: {
        title: '',
        body: ''
      },
      postHtml: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        let id = this.$route.query.id
        console.log(id)
        if (id != undefined) {
          const response = await axios.get('http://localhost:8080/item?id=' + id)
          console.log(response)
          this.post = response.data
          this.postHtml = marked(this.post.body)
        } else {
          const response = await axios.get('http://localhost:8080/item')
          console.log(response)
          this.post = response.data
          this.postHtml = marked(this.post.body)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  }
}
</script>

<style>
.post {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.post h1 {
  color: #000000;
  text-align: left;
  font-size: 30px;
  border: rgb(15, 15, 13);
}

.post div {
  margin-top: 20px;
  font-size: 18px;
  line-height: 1.6;
  display: block;
  border: #000000;
}

.blog-body {
  margin-top: 20px;

  line-height: 1.6;
}

.blog-body h2 {
  font-size: 1.4rem;
  margin: 40px 0 30px;
  padding: 15px 16px 13px;
  color: #fff;
  background-color: rgb(28, 164, 209);
  font-weight: bold;
}

.blog-body h3 {
  font-size: 1.3rem;
}

.blog-body p {
}

.blog-body ol {
  list-style: none;
  counter-reset: number;
}

li {
  position: relative;
  padding-left: 40px;
}

.blog-body li::before {
  counter-increment: number;
  content: '（' counter(number) '）';
  position: absolute;
  left: 0;
}

.blog-body h3 {
  display: inline;
  font-size: 1.3rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(32, 178, 236) 70%);
}

/* ここから追加 */

section.post {
  margin-bottom: 30px;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.author-info {
  display: flex;
  align-items: center;
}

.author-info img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.post-date {
  font-size: 14px;
  color: #999;
}

.post-content {
  border: 1px solid #eee;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
}

.post-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: #999;
}

.profile-comments {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

section.profile {
  flex: 1;
}

section.comments {
  flex: 1;
}

.profile-content {
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 10px;
}

.profile-content img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

section.comments h3 {
  margin-bottom: 10px;
}

.comment-input {
  display: flex;
  margin-bottom: 20px;
}

.comment-input input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
}

.comment-input button {
  padding: 10px;
  border: 1px solid #ccc;
  border-left: none;
  border-radius: 0 5px 5px 0;
  background: #5cb85c;
  color: #fff;
  cursor: pointer;
}

.comment-input button:hover {
  background: #4cae4c;
}

.comment {
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.comment-author {
  display: flex;
  align-items: center;
}

.comment-author img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.comment p {
  margin-left: 20px;
}
</style>
