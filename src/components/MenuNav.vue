<template>
  <nav id="menu-nav">
    <ul class="menu">
      <li>
        <a href="#" class="buttonUnderline">新着</a>
      </li>
      <li>
        <a href="#" class="buttonUnderline">ランキング</a>
      </li>
      <li>
        <a href="#" class="buttonUnderline">検索</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
#menu-nav {
  text-align: center;

  margin: 0 auto;
}

/* メニューを横並びにするスタイル */
.menu {
  display: flex;
  grid-template-columns: 1fr;
  padding: 0px 16px;
  background-color: #fff;
  box-shadow: 0 0 4px rgb(0 0 0 / 30%);
  margin-bottom: 10px;
}

/* ボタンのスタイル */
.buttonUnderline {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  padding: 0 24px;
  overflow: hidden;
  font-size: 15px;
  color: #222;
  text-align: center;
  overflow-wrap: anywhere;
  background: transparent;
}

.buttonUnderline::after {
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 2px;
  content: '';
  background-color: #6fa24a;
  transform: scaleX(0);
  transform-origin: right top;
}

ul,
li {
  display: flex;
  padding: 0;
  margin: -5px;
  list-style-type: none;
  justify-content: center;
}
</style>
