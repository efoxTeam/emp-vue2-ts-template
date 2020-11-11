<template>
  <div class="main">
    <h3>EMP Vue2 App</h3>
    <img src="./logo.png" />
    <Content />
  </div>
</template>

<script>
import Content from "./components/Content";
export default {
  components: {
    Content,
  },
};
</script>

<style scoped>
.main {
  text-align: center;
}

img {
  width: 200px;
}

h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
