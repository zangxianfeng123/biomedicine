<template>
    <div class="wkb-cmm-box">
        <el-row :gutter="10" v-for="item in jsonArr" :key="item.id">
            <el-col :span="8" class="wkb-cmm-text-ellipsis">
                <a href="javascript:void(0)">{{item.code}}</a>
            </el-col>
            <el-col :span="7">
                <el-progress 
                    :percentage="item.percentage" 
                    :color="item.customColor" 
                    :stroke-width="8"
                    class="wkb-process-position"
                />
            </el-col>
            <el-col :span="2" class="wkb-cmm-text-ellipsis">{{item.status}}</el-col>
            <el-col 
                :span="2" 
                class="wkb-cmm-text-ellipsis wkb-cmm-text-center" 
                :class="'wkb-process-'+item.level">
                    {{currentLevel(item.level)}}
            </el-col>
            <el-col :span="5" class="wkb-cmm-text-ellipsis wkb-cmm-text-right">{{item.date}}</el-col>
        </el-row>
    </div>   
</template>

<script>
export default {
  name: 'Process',
  data(){
      return {
        ifShowMask: false,
        jsonArr:[
            {id:1,level:'3',percentage: 20,customColor: '#409eff',code:'这条任务已经逾期了',status:'已超期',personnel:'枫哥哥',date:'2012-02-10 10:03:10'},
            {id:2,level:'2',percentage: 20,customColor: '#409eff',code:'非常紧急的任务',status:'已完成',personnel:'姚明',date:'2019-07-25 10:03:10'},
            {id:3,level:'2',percentage: 20,customColor: '#409eff',code:'非常紧急的任务',status:'进行中',personnel:'艾弗森',date:'2014-05-20 10:03:10'},
            {id:4,level:'1',percentage: 20,customColor: '#409eff',code:'一般紧急的任务',status:'待接收',personnel:'诺维斯基',date:'2019-04-05 10:03:10'},
            {id:5,level:'1',percentage: 20,customColor: '#409eff',code:'一般紧急的任务',status:'待接收',personnel:'迈克乔丹',date:'2019-04-05 10:03:10'},
            {id:6,level:'1',percentage: 20,customColor: '#409eff',code:'一般紧急的任务',status:'待接收',personnel:'迈克乔丹',date:'2019-04-05 10:03:10'},
        ]
      }
  },
  methods:{
      currentLevel(level){
          let currLevel = ''
          switch(level){
                case '3':
                    currLevel = '非常紧急';
                    break;
                case '2':
                    currLevel = '紧急';
                    break;
                default:
                    currLevel = '一般';
                    break;
          }
          return currLevel;
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
.wkb-process-2{
    color:#cc00ff;
}
.wkb-process-3{
    color: #f60;
}
.wkb-process-1{
    color: #03f;
}



.wkb-process-position{
    margin:10px 0;
}

</style>
