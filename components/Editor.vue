<template>
  <div class="container">
    <h1>THis is plugin</h1>
    <div id="editor">
    </div>
  </div>
</template>

<script>
if (process.browser) {
  require('../libraries/ckeditor');
}

export default {
  name: "Editor",
  mounted() {

  }
}
</script>

<style scoped>

</style>