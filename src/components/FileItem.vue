<template>
  <div>
    <b>{{fileName}}</b> {{fileSize}}KB <a @click.prevent="download" style="cursor: pointer">下载文件</a>
  </div>
</template>

<script>
export default {
  name: "FileItem",
  props: ['fileName', 'fileSize'],
  methods: {
    download: function (){
      window.open("/api/download/downloadFile?fileName=" + this.fileName);
    }
  }
}
</script>

<style scoped>

</style>