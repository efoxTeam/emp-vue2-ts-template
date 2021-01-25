<template>
  <div class="main">
    <h3>{{ title }}</h3>
    <Hello />
    <img src="./assets/logo.png" />
  </div>
</template>

<script lang="ts">
import Hello from "./components/Hello.vue"; // 注意，引入vue文件，需要加上vue后缀
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  components: {
    Hello,
  },
})
export default class App extends Vue {
  title = "EMP Vue2 TS App";
  name;
}
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
