<template>
  <main>
    <!-- <div class="breadcrumb"><a href="#">ホーム</a> > <span>新規会員登録</span></div> -->
    <h1>新規会員登録</h1>

    <div class="progress-bar">
      <div class="step active">メールアドレス送信</div>
      <div class="step">入力・確認</div>
      <div class="step">登録完了</div>
    </div>

    <p>
      サイト利用規約に同意のうえ、メールアドレスを入力し、「送信する」ボタンを押してください。確認用のパスコードをお送りします。
    </p>

    <form @submit.prevent="save">
      <div class="form-group">
        <label for="email">メールアドレス <span class="required">必須</span></label>
        <input type="email" id="email" v-model="accountUserDetails.emailaddress" required />
      </div>
      <div class="form-group">
        <label for="confirm-email"
          >メールアドレス（確認用） <span class="required">必須</span></label
        >
        <input type="email" id="confirm-email" v-model="confirmEmail" required />
      </div>

      <div class="form-group">
        <label for="password">パスワード <span class="required">必須</span></label>
        <input type="parssword" id="password" v-model="accountUserDetails.password" required />
      </div>
      <div class="form-group">
        <label for="confirm-password"
          >パスワード（確認用） <span class="required">必須</span></label
        >
        <input type="password" id="confirm-password" v-model="confirmPassword" required />
      </div>

      <button type="submit">送信する</button>
    </form>

    <p>会員登録済みの方は、<a href="#">こちらからログインしてください</a>。</p>

    <p class="note">
      ※プライベートブラウスや、シークレットモードでは、新規会員登録手続きをすることができません。設定を解除の上、行ってください。<br />
      ※メールが届かない場合は、ご入力いただいたメールアドレスが間違っている可能性があります。メールの受信可能設定がされているかご確認ください。<br />
      ... （補足情報を続けてください）
    </p>

    <!-- <section class="footer-links">
      <div><a href="#">モスのネット注文</a></div>
      <div><a href="#">モスバーガー公式アプリ</a></div>
      <div><a href="#">モスのWEB会員</a></div>
    </section>

    <footer>
      <div class="footer">
        <ul>
          <li><a href="#">公式サイト</a></li>
          <li><a href="#">会社情報</a></li>
          ... （他のフッターメニューを続けてください）
        </ul>
      </div>
    </footer> -->
  </main>
</template>

<script>
import axios from 'axios'
export default {
  setup() {},
  data() {
    return {
      accountUserDetails: {
        username: '',
        emailaddress: '',
        password: ''
      },
      confirmEmail: '',
      confirmPassword: ''
    }
  },
  methods: {
    handleSubmit() {
      if (this.accountUserDetails.emailaddress !== this.confirmEmail) {
        alert('メールアドレスが一致しません。')
      } else {
        // TODO: フォーム送信ロジックを実装
        alert(`メールアドレス: ${this.accountUserDetails.emailaddress}`)
      }
    },
    async save() {
      const formData = new FormData()
      formData.append(
        'jsonValue',
        new Blob([JSON.stringify(this.accountUserDetails)], { type: 'application/json' })
      )
      const instance = axios.create({
        baseURL: 'http://127.0.0.1:8080/'
      })
      console.log(instance)
      console.log(this.accountUserDetails)
      instance.post('/auth/signup/new-account', formData)
      console.log('end')
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
  color: #006400;
}

h1 {
  margin-top: 0;
}

/* .progress-bar {
  display: flex;
  margin: 1rem 0;
}

.progress-bar .step {
  flex: 1;
  padding: 1rem;
  text-align: center;
  border: 1px solid #0c820a;
  border-radius: 4px;
  margin-right: 1rem;
}

.progress-bar .step:last-child {
  margin-right: 0;
}

.progress-bar .step.active {
  background-color: #0c820a;
  color: #fff;
} */

.progress-bar {
  display: flex;
  justify-content: space-between;
  width: 95%;
  max-width: 800px;
  padding: 10px;
}

.step {
  flex-grow: 1;
  text-align: center;
  padding: 5px 0;
  border: 2px solid #dddddd;
  border-radius: 25px;
  background-color: #ffffff;
  font-size: 16px;
  color: #000000;
  position: relative;
}

.step + .step {
  margin-left: 20px;
}

.step.active {
  background-color: #098db5;
  color: white;
  border-color: #098db5;
}

.step::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -20px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #098db5;
  transform: translateY(-50%);
}

.step:last-child::after {
  display: none;
}

.required {
  color: red;
}

.form-group {
  margin-top: 2rem;
  margin-bottom: 1rem;
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
  text-decoration: none;
  color: #006400;
  margin: 0 0.5rem;
}

.note {
  font-size: 0.9rem;
  margin-top: 2rem;
  background: #fffae6;
  padding: 1rem;
  border-radius: 4px;
}

.footer-links {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 1rem;
  background: #fff;
  border-radius: 4px;
}

.footer-links div {
  flex: 1;
  text-align: center;
  padding: 1rem;
  border-right: 1px solid #ddd;
}

.footer-links div:last-child {
  border-right: none;
}

footer {
  margin-top: 2rem;
  padding: 1rem;
  background: #fff;
  border-radius: 4px;
}

footer ul {
  list-style: none;
  padding: 0;
}

footer ul li {
  margin-bottom: 0.5rem;
}

footer ul li a {
  text-decoration: none;
  color: #006400;
}

#confirm-email {
  margin-bottom: 30px;
}
</style>
