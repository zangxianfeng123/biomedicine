<template>
    <div class="wkb-cmm-box">
        <el-row :gutter="10" v-for="item in jsonArr" :key="item.code">
            <el-col :span="3" class="wkb-cmm-text-ellipsis wkb-cmm-text-center" :class="'wkb-todo-remind-'+item.type.toLowerCase()">【{{item.type}}】</el-col>
            <el-col :span="6" class="wkb-cmm-text-ellipsis"><a href="javascript:void(0)" @mouseover="showMask(item)" @mouseout="hideMask">{{item.code}}</a></el-col>
            <el-col :span="8" class="wkb-cmm-text-ellipsis">{{item.content}}</el-col>
            <el-col :span="2" class="wkb-cmm-text-ellipsis">{{item.personnel}}</el-col>
            <el-col :span="5" class="wkb-cmm-text-ellipsis wkb-cmm-text-right">{{item.date}}</el-col>
        </el-row>
        <todo-remind-mask :ifShowMask="ifShowMask"/>
    </div>   
</template>

<script>
import TodoRemindMask from './TodoRemindMask'
export default {
  name: 'TodoRemind',
  components:{
      TodoRemindMask
  },
  data(){
      return {
        ifShowMask: false,
        jsonArr:[
            {type:'PBCS',code:'TASK1544039276189',content:'符合年轻群体和品味人群的热水器',personnel:'枫哥哥',date:'2012-02-10 10:03:10'},
            {type:'HID',code:'ADFSDFG23423455555',content:'撒旦飞洒地方岁的法国撒旦发射点发射点',personnel:'姚明',date:'2019-07-25 10:03:10'},
            {type:'PDM',code:'FGHFJFGHFGH5675675',content:'撒旦发射点噶似的噶撒旦噶山豆根',personnel:'艾弗森',date:'2014-05-20 10:03:10'},
            {type:'IPM',code:'FGHFGHFGRTYE567577',content:'地方很多是否会的身份和东方化工东方红东方红',personnel:'诺维斯基',date:'2019-04-05 10:03:10'},
            {type:'PDM',code:'FGHFGHDFHYE5DFGGGH',content:'地方很多是对方东方红东方红红',personnel:'迈克乔丹',date:'2019-04-05 10:03:10'},
        ]
      }
  },
  methods:{
      showMask(e){
          this.ifShowMask = true;
          console.log("当前：",e)
      },
      hideMask(){
          this.ifShowMask = false;
      }
  }
}
</script>

<style lang="scss" scoped>
.wkb-cmm-box{
    padding: 10px;
    height: 200px;
    overflow-y: auto;
    a{
        color:#0076BD;
        text-decoration: underline;
    }
    .el-row:hover{
        background-color: #efefef;
    }
}
.wkb-todo-remind-pbcs{
    color:#cc00ff;
}
.wkb-todo-remind-hid{
    color:#269c26;
}
.wkb-todo-remind-ipm{
    color: #f60;
}
.wkb-todo-remind-pdm{
    color: #03f;
}
</style>
