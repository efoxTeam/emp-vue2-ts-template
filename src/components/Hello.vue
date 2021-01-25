<template>
  <div class="main">
    <h3>{{ title }}</h3>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Hello extends Vue {
  title = "Hello!";
}
</script>

<style scoped>
.main {
  text-align: center;
}
</style>
