<template>
  <div id="app">
    <Row>
      <Col span="24">
        <AddTaskPanel/>
      </Col>
    </Row>
    <Row style="margin-top: 20px" type="flex" justify="center" class="code-row-bg">
      <Col span="15"><TaskList/></Col>
    </Row>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import AddTaskPanel from './components/AddTask.vue'
import TaskList from './components/TaskList.vue'

export default {
  name: 'App',
  components: {
    AddTaskPanel,
    TaskList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
