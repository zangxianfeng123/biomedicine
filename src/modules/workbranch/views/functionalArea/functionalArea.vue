<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :sm="24" :md="17" class="wkb-cmm-margin-top8">
        <div class="wkb-todo-remind-outbox">
          <Panel :title="title" :showMore="true">
            <todo-remind></todo-remind>
          </Panel>
        </div>
      </el-col>
      <el-col :sm="24" :md="7" class="wkb-cmm-margin-top8">
        <Panel title="公告" :showMore="true">
          <notice/>
        </Panel>
      </el-col>
      <el-col :sm="24" :md="17" class="wkb-cmm-margin-top8">
        <Panel title="任务调度" :showMore="true">
          <process/>
        </Panel>
      </el-col>
      <el-col :sm="24" :md="7" class="wkb-cmm-margin-top8">
        <advertisement/>
      </el-col>
      <el-col :sm="24" :md="17" class="wkb-cmm-margin-top8">
        <div class="wkb-todo-remind-outbox">
          <Panel title="常用系统" :showMore="true">
            <recent-system/>
          </Panel>
        </div>
      </el-col>
      <el-col :sm="24" :md="7" class="wkb-cmm-margin-top8">
        <calendar/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Panel from '@/components/panel'
import {TodoRemind, Notice, Process, Advertisement, RecentSystem, Calendar} from './components'
export default {
  name: 'functionalArea',
  components: {
    Panel,
    TodoRemind,
    Notice,
    Process,
    Advertisement,
    RecentSystem,
    Calendar
  },
  data() {
    return {
      title:'我的代办'
    }
  },
  created() {},
  watch: {},
  mounted() {},
  computed: {}
}
</script>

<style lang="scss" scoped>
  .wkb-todo-remind-outbox{
    position: relative;
  }
</style>
