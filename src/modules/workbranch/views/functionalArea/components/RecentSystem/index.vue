<template>
    <div class="wkb-cmm-box">
        <div class="wkb-recent-system-wrapper">
            <el-row :gutter="10">
                <el-col 
                    :span="3" 
                    class="wkb-cmm-text-ellipsis wkb-cmm-text-center"
                    v-for="item in jsonArr" :key="item.code"
                >
                    <pill-tag 
                        :name="item.type" 
                        :src="item.url"
                        @showMask="showMask(item)" 
                        @hideMask="hideMask"

                    />
                </el-col>
            </el-row>
        </div>
        <recent-system-mask :ifShowMask="ifShowMask"/>
    </div>   
</template>

<script>
import RecentSystemMask from './RecentSystemMask'
import PillTag from '@/components/pillTag'
export default {
  name: 'RecentSystem',
  components:{
      PillTag,
      RecentSystemMask
  },
  data(){
      return {
        ifShowMask: false,
        jsonArr:[
            {type:'PBCS',code:'TASK1544039276189',content:'符合年轻群体和品味人群的热水器',personnel:'枫哥哥',url:'/static/images/u113.png',date:'2012-02-10 10:03:10'},
            {type:'HID',code:'ADFSDFG23423455555',content:'撒旦飞洒地方岁的法国撒旦发射点发射点',personnel:'姚明',url:'/static/images/u113.png',date:'2019-07-25 10:03:10'},
            {type:'PDM',code:'FGHFJFGHFGH5675675',content:'撒旦发射点噶似的噶撒旦噶山豆根',personnel:'艾弗森',url:'/static/images/u113.png',date:'2014-05-20 10:03:10'},
            {type:'IPM',code:'FGHFGHFGRTYE567577',content:'地方很多是否会的身份和东方化工东方红东方红',personnel:'诺维斯基',url:'/static/images/u113.png',date:'2019-04-05 10:03:10'},
            {type:'PDM',code:'FGHFGHDFHYE5DFGGGH',content:'地方很多是对方东方红东方红红',personnel:'迈克乔丹',url:'/static/images/u113.png',date:'2019-04-05 10:03:10'},
            {type:'PDM',code:'FGHFGHDFHYEsdffGGH',content:'地方很多是对方东方红东方红红',personnel:'迈克乔丹',url:'/static/images/u113.png',date:'2019-04-05 10:03:10'},
            {type:'PDM',code:'FGHFGHDDFFE5DFGGGH',content:'地方很多是对方东方红东方红红',personnel:'迈克乔丹',url:'/static/images/u113.png',date:'2019-04-05 10:03:10'},
            {type:'PDM',code:'FGHFGHDFHGSDDGGGGH',content:'地方很多是对方东方红东方红红',personnel:'迈克乔丹',url:'/static/images/u113.png',date:'2019-04-05 10:03:10'},
            {type:'PDM',code:'FGHFGHDFSDSDGGGGGH',content:'地方很多是对方东方红东方红红',personnel:'迈克乔丹',url:'/static/images/u113.png',date:'2019-04-05 10:03:10'},
            {type:'PDM',code:'FGHFGHDFHSHSDFGGGH',content:'地方很多是对方东方红东方红红',personnel:'迈克乔丹',url:'/static/images/u113.png',date:'2019-04-05 10:03:10'},
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
    height: 283px;
    overflow-y: auto;
    .el-col:hover{
        background-color: #efefef;
    }
}
.wkb-recent-system-wrapper{
    position: relative;
    z-index: 7;
    background-color: #fff;
    width: 100%;
    padding: 10px;
    a{
        padding: 12px 4px;
    }
}


</style>
