<template>
  <body>
    <div id="buttons-top">
      <button id="cancel-button">Cancel</button>
      <button id="save-button">Save</button>
    </div>

    <div id="blog-editor">
      <p>新しい記事のタイトル</p>
      <input
        id="subject-input"
        placeholder="最大100文字まで"
        name="editBlogSubject"
        v-model="editBlogData.editBlogSubject"
      />
    </div>
    <div id="blog-editor">
      <p>本文入力</p>
      <textarea
        id="markdown-input"
        placeholder="Enter your markdown here..."
        name="editBlogBody"
        v-model="editBlogData.editBlogBody"
      ></textarea>
      <div id="buttons-bottom">
        <button id="cancel-button">Cancel</button>
        <button id="save-button" type="botton" @click.prevent="save">Save</button>
      </div>
    </div>
  </body>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      editBlogData: {
        editBlogSubject: '',
        editBlogBody: ''
      }
    }
  },
  methods: {
    async save() {
      let formData = new FormData()
      //formData.append('editBlogSubject', this.editBlogSubject)
      //formData.append('editBlogBody', this.editBlogBody)
      formData.append(
        'jsonValue',
        new Blob([JSON.stringify(this.editBlogData)], { type: 'application/json' })
      )
      const instance = axios.create({
        baseURL: 'http://127.0.0.1:8080/'
      })
      console.log(instance)
      //const res = await instance.post('/edit/save', formData)
      instance.post('/edit/save', formData)
      console.log('end')
      //console.log(res)
    }
  }
}
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
}

#blog-editor {
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
}

#blog-editor p {
  font-size: small;
}

#markdown-input {
  width: 100%;
  height: 300px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  box-sizing: border-box;
}

#buttons-bottom {
  display: flex;
  justify-content: center;
}

#buttons-top {
  display: flex;
  justify-content: flex-end;
}

#buttons-bottom button {
  padding: 5px 10px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
  border-radius: 20px;
}
#buttons-top button {
  padding: 5px 10px;
  margin-left: 10px;
  border-radius: 20px;
  cursor: pointer;
}

#save-button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  text-align: center;
}

#cancel-button {
  background-color: #ed7269; /* Red */
  color: white;
  border: none;
  text-align: center;
}

header {
  background: #333;
  color: #fff;
  padding: 10px;
}

#toolbar {
  display: flex;
  gap: 1rem;
}

#toolbar a {
  color: #fff;
  text-decoration: none;
}
#subject-input {
  width: 100%;

  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px;
  box-sizing: border-box;
}
</style>
