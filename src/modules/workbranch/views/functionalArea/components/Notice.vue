<template>
    <div class="wkb-cmm-box">
        <ul>
            <li v-for="item in jsonArr" :key="item.id">
                <a href=""><i class="el-icon-football"></i>{{item.msg}}</a>
            </li>
        </ul>
        <div class="wkb-cmm-text-center">
            <el-button type="warning" plain round size="mini">发布公告</el-button>
        </div>
    </div>   
</template>

<script>
export default {
  name: 'Notice',
  data(){
      return {
        ifShowMask: false,
        jsonArr:[
            {id:1,msg:'PBCS系统已经完美上线。'},
            {id:2,msg:'我们都有一个家名字叫中国！'},
            {id:3,msg:'迅雷不及掩耳盗铃当仁不让世界充满爱！'},
            {id:4,msg:'爱你没商量之势！'},
            {id:5,msg:'他大舅他二舅都是他舅！'},
            {id:6,msg:'高桌子低板凳大师傅士大夫士大夫山豆根手动阀手动阀手动阀都是木头。'},
        ]
      }
  }
}
</script>

<style lang="scss" scoped>
.wkb-cmm-box{
    i{
        font-size: 10px;
        padding: 0 6px;
        color: #666;
    }
    ul{
        padding: 10px 0 0 10px;
        height: 144px;
        overflow-y: auto;
        a{
            line-height: 36px;
        }
        li{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        li:hover{
            background-color: #efefef;
        }
    }
    
    .wkb-cmm-text-center{
        background-color: #f9f9f9;
    }
}
</style>
