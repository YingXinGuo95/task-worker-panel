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
      this.isLoading = false;
      this.fileList = [
        {fileName: '更新测试文件1', fileSize: 10000},
        {fileName: '更新测试文件2', fileSize: 52155},
        {fileName: '更新测试文件3', fileSize: 10000},
        {fileName: '更新测试文件4', fileSize: 10000},
      ];


      /*this.$axios.get('https://www.baidu.com')
          .then(function (response) {
            console.log(response);

            this.fileList = [
              {fileName: '更新测试文件1', fileSize: 10000},
              {fileName: '更新测试文件2', fileSize: 52155},
              {fileName: '更新测试文件3', fileSize: 10000},
              {fileName: '更新测试文件4', fileSize: 10000},
            ];

            this.isLoading = false;

          }).catch(function (error) {
            console.log(error);
            this.isLoading = false;
      });*/
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