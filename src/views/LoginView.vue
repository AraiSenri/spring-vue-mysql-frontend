<template>
  <main>
    <!-- <div class="breadcrumb"><a href="#">ホーム</a> > <span>ログイン</span></div> -->
    <h1>ログイン</h1>
    <p>一部機能のご利用にはログインが必要です。<a href="#">新規会員登録はこちら</a>。</p>
    <!-- <ul>
      <li>2014年9月9日以降よりモスバーガー公式サイトをご利用の方へ（ログイン方法について）</li>
    </ul> -->
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">メールアドレス <span class="required">必須</span></label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">パスワード <span class="required">必須</span></label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">ログインする</button>
    </form>
    <div class="links"><a href="#">パスワードを忘れた方</a> | <a href="#">退会をご希望の方</a></div>
    <section class="login-help">
      <h2>ログインできない方</h2>
      <ul>
        <li>
          ご入力いただいたパスワードが間違っている可能性があります。パスワードを忘れた方は、<a
            href="#"
            >こちらからパスワードを再登録してください</a
          >。
        </li>
        <li>
          ご入力いただいたメールアドレスが間違っている可能性があります。メールアドレスをご登録しているメールアドレスをご確認ください。
        </li>
        <li>
          その他の理由でログインに失敗した場合、<a href="#">こちらからお問い合わせください</a>。
        </li>
        <li>メールアドレスを変更された場合、会員登録時のメールアドレスにてログインが可能です。</li>
      </ul>
    </section>
  </main>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  setup() {},
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      // TODO: フォーム送信ロジック
      alert(`Email: ${this.email}, Password: ${this.password}`)
    }
  }
}
</script>

<style scoped>
main {
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.breadcrumb {
  margin-bottom: 1rem;
}

.breadcrumb a {
  text-decoration: none;
  color: #006264;
}

h1 {
  margin-top: 0;
}

.required {
  color: red;
}

.form-group {
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input {
  width: calc(100% - 12px);
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type='submit'] {
  background-color: #00a6ff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  width: 33%;
  display: block;
  margin: auto;
}

button[type='submit']:hover {
  background-color: #00b715;
}

.links {
  margin-top: 1rem;
  text-align: center;
}

.links a {
  /* text-decoration: none; */
  /* color: #006400; */
  margin: 0 0.5rem;
}

.login-help {
  background: #fffae6;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 2rem;
}

.login-help h2 {
  margin-top: 0;
}

.login-help ul {
  padding-left: 1.2rem;
}

.login-help ul li {
  margin-bottom: 0.5rem;
}

.login-help ul li a {
  color: #006400;
  text-decoration: none;
}
</style>
