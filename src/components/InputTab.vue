<template>
  <div id="keyword">
    <p>タグ</p>
    <div class="input-grid">
      <div class="input-group" v-for="(input, index) in textInputs" :key="input.id">
        <input type="text" v-model="input.value" maxlength="50" placeholder="タグ" />
        <!-- :placeholder="'Text Input ' + input.id" -->
        <button
          @click="addInput"
          :class="{ 'add-keyword': true, disabled: textInputs.length >= 9 }"
          v-if="index === 0"
        >
          +
        </button>
        <button @click="removeInput(input.id)" v-else class="delete-keyword">-</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const textInputs = ref([{ id: 1, value: '' }])
    let idCounter = 2

    const addInput = () => {
      if (textInputs.value.length < 9) {
        textInputs.value.push({ id: idCounter++, value: '' })
      }
    }

    const removeInput = (id) => {
      textInputs.value = textInputs.value.filter((input) => input.id !== id)
    }

    const submitForm = () => {
      const list = textInputs.value.map((input) => input.value)
      const data = {
        list: list
      }
      console.log('Form submitted with data: ', JSON.stringify(data, null, 2))
      // ここにフォーム送信処理を追加
    }

    return {
      textInputs,

      addInput,
      removeInput,
      submitForm
    }
  }
}
</script>

<style scoped>
#keyword {
  width: 90%;
  max-width: 600px;
  margin: 10px auto;
}
#keyword p {
  margin: 10px 5px 0;
}
.input-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.input-group {
  display: flex;
  align-items: center;
  margin: 10px auto;
}

.input-group input,
.input-group textarea {
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f0f0;
  cursor: pointer;
  width: 30px;
}

button:hover {
  background-color: #e0e0e0;
}

.add-keyword {
  background-color: #28a745;
  color: white;
}

.add-keyword.disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.remove-keyword {
  background-color: #dc3545;
  color: white;
}
</style>
