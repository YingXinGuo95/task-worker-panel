<template>
  <div>
    <b>{{fileName}}</b> {{fileSize}}KB <a href="#">下载文件</a>
  </div>
</template>

<script>
export default {
  name: "FileItem",
  props: ['fileName', 'fileSize'],
}
</script>

<style scoped>

</style>