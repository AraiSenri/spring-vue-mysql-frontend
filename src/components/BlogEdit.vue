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
    <!-- <input-tab></input-tab> -->
    <div id="keyword">
      <p>タグ</p>
      <div class="input-grid">
        <div class="input-group" v-for="(input, index) in tagInputs" :key="input.id">
          <input type="text" v-model="input.value" maxlength="50" placeholder="タグ" />
          <!-- :placeholder="'Text Input ' + input.id" -->
          <button
            @click="addInput"
            :class="{ 'add-keyword': true, disabled: tagInputs.length >= 9 }"
            v-if="index === 0"
          >
            +
          </button>
          <button @click="removeInput(input.id)" v-else class="delete-keyword">-</button>
        </div>
      </div>
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
import { ref } from 'vue'
export default {
  // data() {
  //   return {
  //     editBlogData: {
  //       editBlogSubject: '',
  //       editBlogBody: '',
  //       editBlogTags: []
  //     }
  //   }
  // },
  // methods: {
  //   async save() {
  //     let formData = new FormData()
  //     //formData.append('editBlogSubject', this.editBlogSubject)
  //     //formData.append('editBlogBody', this.editBlogBody)
  //     const tags = this.tagInputs.value.map((input) => input.value)
  //     this.editBlogTags = {
  //       list: tags
  //     }

  //     formData.append(
  //       'jsonValue',
  //       new Blob([JSON.stringify(this.editBlogData)], { type: 'application/json' })
  //     )
  //     const instance = axios.create({
  //       baseURL: 'http://127.0.0.1:8080/'
  //     })
  //     console.log(instance)
  //     //const res = await instance.post('/edit/save', formData)
  //     instance.post('/edit/save', formData)
  //     console.log('end')
  //     //console.log(res)
  //   }
  // }
  setup() {
    const tagInputs = ref([{ id: 1, value: '' }])
    const editBlogData = ref({
      editBlogSubject: '',
      editBlogBody: '',
      editBlogTags: []
    })
    let idCounter = 2

    const addInput = () => {
      if (tagInputs.value.length < 9) {
        tagInputs.value.push({ id: idCounter++, value: '' })
      }
    }

    const removeInput = (id) => {
      tagInputs.value = tagInputs.value.filter((input) => input.id !== id)
    }

    const save = async () => {
      let formData = new FormData()
      const tags = tagInputs.value.map((input) => input.value)
      editBlogData.value.editBlogTags = {
        list: tags
      }

      formData.append(
        'jsonValue',
        new Blob([JSON.stringify(editBlogData.value)], { type: 'application/json' })
      )
      const instance = axios.create({
        baseURL: 'http://127.0.0.1:8080/'
      })
      console.log(instance)
      console.log(editBlogData)
      //const res = await instance.post('/edit/save', formData)
      instance.post('/edit/save', formData)
      console.log('end')
      //console.log(res)
    }

    return {
      tagInputs,
      addInput,
      removeInput,
      save,
      editBlogData
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
  font-size: large;
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

#keyword {
  width: 90%;
  max-width: 600px;
  margin: 10px auto;
}
#keyword p {
  margin: 10px 5px 0;
}
#keyword .input-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
#keyword .input-group {
  display: flex;
  align-items: center;
  margin: 10px auto;
}

#keyword .input-group input,
#keyword .input-group textarea {
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#keyword button {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f0f0;
  cursor: pointer;
  width: 30px;
}

#keyword button:hover {
  background-color: #e0e0e0;
}

#keyword .add-keyword {
  background-color: #28a745;
  color: white;
}

#keyword .add-keyword.disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

#keyword .remove-keyword {
  background-color: #dc3545;
  color: white;
}
</style>
