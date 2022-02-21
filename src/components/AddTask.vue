<template>
  <div>
    <Row>
      <Col span="6"/>
      <Col span="10">
        <Input v-model="downloadURL" placeholder="请输入下载链接，以http、https开头"/>
      </Col>
      <Col span="2">
        <Button type="primary" @click="addTask">开始下载</Button>
      </Col>
      <Col span="6"/>
    </Row>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data () {
    return {
      downloadURL: ""
    }
  },
  methods: {
    addTask: function (){
      this.$axios.get('https://www.baidu.com')
          .then(function (response) {
            this.$Message.success(response);

            this.downloadURL = "";
          }).catch(function (error) {
            console.error(error);
      });
    }
  }
}
</script>

<style scoped>

</style>