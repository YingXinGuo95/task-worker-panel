<template>
  <List header="文件列表" border size="large">
    <ListItem v-show="isLoading">
      <Spin fix>
        <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
        <div>Loading</div>
      </Spin>
    </ListItem>
    <ListItem v-for="item in fileList" :key="item.fileName">
      <FileItem v-bind="item"/>
    </ListItem>
  </List>
</template>

<script>
import FileItem from './FileItem'

export default {
  name: "TaskList",
  components: {
    "FileItem": FileItem
  },
  data: function (){
    return {
      isLoading: true,
      fileList: []
    }
  },
  methods: {
    listFiles: function () {
      this.isLoading = true;

      this.$axios.get('/download/listFile')
          .then(function (response) {
            let result = response.data;
            if (result.code !== 0) {
              this.$Message.error(result.message);
            }

            this.fileList = [];
            for (const rowData of result.data) {
              this.fileList.push({fileName: rowData.fileName, fileSize: rowData.size})
            }

            this.isLoading = false;
          }.bind(this)).catch(function (error) {
            console.error(error);
      });
    }
  },
  created(){
    this.listFiles();
  }
}
</script>

<style scoped>
.demo-spin-icon-load{
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from { transform: rotate(0deg);}
  50%  { transform: rotate(180deg);}
  to   { transform: rotate(360deg);}
}
.demo-spin-col{
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}
</style>