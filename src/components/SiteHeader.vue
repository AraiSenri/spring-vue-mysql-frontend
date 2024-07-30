<template>
  <!-- <head>
    <link rel="stylesheet" type="text/css" href="siteheader.css" />
    <title>My Blog</title>
  </head> -->
  <header>
    <div id="header-content">
      <h1 id="title">My Blog</h1>
      <nav id="navigation-bar">
        <!-- <a href="#">Home</a> -->
        <!-- <a href="#">About</a> -->
        <a href="#">Sign in</a>
      </nav>
    </div>
  </header>
</template>

<style>
header {
  background-color: #098db5;
  color: white;
  padding: 10px 0;
  margin-top: -3%;
  margin-bottom: 20px;
}

#title {
  margin: 0;
  padding: 0;
  font-size: 26px;
}

#header-content {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#navigation-bar {
  display: flex;
  gap: 15px;
}

#navigation-bar a {
  color: white;
  text-decoration: none;
}
</style>
