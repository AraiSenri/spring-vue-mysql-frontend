<template>
  <header class="site-header">
    <div class="wrapper site-header__wrapper">
      <div class="site-header__start">
        <a href="#" class="brand">サイトタイトル</a>
      </div>

      <div class="site-header__middle">
        <!-- <nav class="nav">
          <button class="nav__toggle" aria-expanded="false" type="button">menu</button>
          <ul class="nav__wrapper">
            <li class="nav__item"><a href="#">Home</a></li>
            <li class="nav__item"><a href="#">About</a></li>
            <li class="nav__item"><a href="#">Services</a></li>
            <li class="nav__item"><a href="#">Hire us</a></li>
            <li class="nav__item"><a href="#">Contact</a></li>
          </ul>
        </nav> -->
      </div>
      <div class="site-header__end">
        <a class="button" href="#">Sign in</a>
      </div>
    </div>
    <div class="site-header__bottom">
      <div class="wrapper site-header__wrapper">
        <div class="site-header__start">
          <!--  <div class="search">
            <button class="search__toggle" aria-label="Open search">
              Search
            </button>
            <form class="search__form" action="">
              <label class="sr-only" for="search">Search</label>
              <input
                type="search"
                name=""
                id="search"
                placeholder="What's on your mind?"
              />
            </form>
          </div> -->
        </div>

        <div class="site-header__middle">
          <nav class="nav">
            <button class="nav__toggle" aria-expanded="false" type="button">menu</button>
            <ul class="nav__wrapper">
              <li class="nav__item"><a href="#">ホーム</a></li>
              <li class="nav__item"><a href="#">検索</a></li>
              <li class="nav__item"><a href="#">投稿</a></li>
              <li class="nav__item"><a href="#">???</a></li>
              <li class="nav__item"><a href="#">マイページ</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
let navToggle = document.querySelector('.nav__toggle')
let navWrapper = document.querySelector('.nav__wrapper')

/* navToggle.addEventListener('click', function () {
  if (navWrapper.classList.contains('active')) {
    this.setAttribute('aria-expanded', 'false')
    this.setAttribute('aria-label', 'menu')
    navWrapper.classList.remove('active')
  } else {
    navWrapper.classList.add('active')
    this.setAttribute('aria-label', 'close menu')
    this.setAttribute('aria-expanded', 'true')
    searchForm.classList.remove('active')
    searchToggle.classList.remove('active')
  }
}) */

let searchToggle = document.querySelector('.search__toggle')
let searchForm = document.querySelector('.search__form')

/* searchToggle.addEventListener('click', showSearch)

function showSearch() {
  searchForm.classList.toggle('active')
  searchToggle.classList.toggle('active')

  navToggle.setAttribute('aria-expanded', 'false')
  navToggle.setAttribute('aria-label', 'menu')
  navWrapper.classList.remove('active')

  if (searchToggle.classList.contains('active')) {
    searchToggle.setAttribute('aria-label', 'Close search')
  } else {
    searchToggle.setAttribute('aria-label', 'Open search')
  }
} */
</script>

<!-- <style>
/* 
** The Header Media Queries **
** Tweak as per your needs **
*/
.brand {
  font-weight: bold;
  font-size: 20px;
}

.site-header {
  position: relative;
  background-color: #def7ff;
}

.site-header__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
@media (min-width: 630px) {
  .site-header__wrapper {
    justify-content: initial;
  }
}
@media (min-width: 630px) {
  .site-header__middle {
    margin: auto;
  }
}

@media (max-width: 629px) {
  .site-header__end {
    padding-right: 4rem;
  }
}

@media (min-width: 630px) {
  .nav__wrapper {
    display: flex;
  }
}

@media (max-width: 629px) {
  .nav__wrapper {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: -1;
    background-color: #d9f0f7;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-100%);
    transition:
      transform 0.3s ease-out,
      opacity 0.3s ease-out;
  }
  .nav__wrapper.active {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
}

.nav__item a {
  display: block;
  padding: 1rem;
}

.nav__toggle {
  display: none;
}
@media (max-width: 629px) {
  .nav__toggle {
    display: block;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
}
</style> -->

<style>
/*
** The Header Media Queries **
** Tweak as per your needs **
*/
.brand {
  /* font-weight: bold; */
  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.site-header__top {
  background-color: #00befd;
}
.site-header__top ul {
  display: flex;
}
.site-header__top li:not(:last-child) {
  margin-right: 1.5rem;
}
.site-header__top .site-header__start {
  display: none;
}

.site-header__bottom {
  position: relative;
  background-color: #eeffff;
}
@media (max-width: 939px) {
  .site-header__bottom .site-header__end {
    order: -1;
  }
}
.site-header__wrapper {
  display: flex;
  justify-content: space-between;
}
@media (min-width: 630px) {
  .site-header__middle {
    margin: auto;
  }
}
.site-header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
@media (min-width: 940px) {
  .site-header__wrapper {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
}
@media (min-width: 940px) {
  .site-header__top .site-header__wrapper {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}
.nav {
  margin-left: 1rem;
  margin-right: 1rem;
}

@media (min-width: 940px) {
  .nav__wrapper {
    display: flex;
  }
}

@media (max-width: 939px) {
  .nav__wrapper {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: -1;
    background-color: #00ffff;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-100%);
    transition:
      transform 0.3s ease-out,
      opacity 0.3s ease-out;
  }
  .nav__wrapper.active {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
}

.nav__item a {
  display: block;
  padding: 1.5rem 1.25rem;
}

.nav__item svg {
  display: inline-block;
  vertical-align: middle;
  width: 28px;
  height: 28px;
  margin-right: 1rem;
}
@media (min-width: 940px) {
  .nav__item svg {
    display: block;
    margin: 0 auto 0.5rem;
  }
}
.nav__item.active a {
  border-left-color: #222;
}
@media (min-width: 800px) {
  .nav__item.active a {
    border-bottom-color: #222;
  }
}
.nav__toggle {
  position: absolute;
  right: 1rem;
  top: 1rem;
}
@media (min-width: 940px) {
  .nav__toggle {
    display: none;
  }
}
.search {
  display: flex;
}

.search__toggle {
  appearance: none;
  order: 1;
  font-size: 0;
  width: 34px;
  height: 34px;
  background: url('../img/header-3/search.svg') center/22px no-repeat;
  border: 0;
}
@media (max-width: 939px) {
  .search__toggle {
    position: absolute;
    right: 5.5rem;
    top: 0.65rem;
  }
}
.search__toggle.active {
  background: url('../img/header-5/close.svg') center/22px no-repeat;
}

.search__form {
  display: none;
}
.search__form.active {
  display: block;
}
@media (max-width: 799px) {
  .search__form {
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    background-color: red;
  }
  .search__form input {
    width: 100%;
  }
}
.search__form input {
  min-width: 200px;
  appearance: none;
  border: 0;
  background-color: #fff;
  border-radius: 0;
  font-size: 16px;
  padding: 0.5rem;
}
@media (max-width: 799px) {
  .search__form input {
    border-bottom: 1px solid #979797;
  }
}
</style>
