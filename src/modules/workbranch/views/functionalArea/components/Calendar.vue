<template>
  <div class="wkb-calendar-box">
    <el-calendar class="wkb-calendar">
        <template
        slot="dateCell"
        slot-scope="{date, data}">
            <span :class="data.isSelected ? 'wkb-active-calendar' : ''" @click="chooseCalendar(data)">
                {{ data.day.split('-').slice(2).toString()}}
            </span>
        </template>
    </el-calendar>
    <div class="wkb-calendar-notice">
        <div>您有<a href="javascript:void(0)">18</a>条任务待处理</div>
        <div>您有<a href="javascript:void(0)">8</a>条协同待处理</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  methods:{
    chooseCalendar(data){
      console.log("current:",data)
    }
  },
}
</script>

<style lang="scss" scoped>
.wkb-calendar-box{
    box-shadow: 2px 2px 4px #d8d8d8;
}
.wkb-calendar{
    font-size: 12px;
}
.wkb-calendar-notice{
    font-size: 13px;
    line-height: 24px;
    padding: 4px 20px;
    background-color: #fff;
    border-top: 1px solid #efefef;
    a{
        color: #f80;
        padding:0 6px;
    }
}
@media (max-width: 990px) {
    .wkb-calendar,
    .wkb-calendar-notice{
        font-size: 14px;
    }
}
.wkb-active-calendar {
    color: #1989FA;
}
.el-calendar-day{
    span{
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
    }
}
</style>