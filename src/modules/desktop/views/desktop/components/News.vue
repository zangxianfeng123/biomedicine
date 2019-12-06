  <!-- 
    功能：右侧新闻
    时间：2019-12-02
  -->
<template>
    <div class="des-main-right"> 
        <h3 class="des-column-right">海尔新闻</h3>
        <ul>
          <li v-for="item in items">
          <span class="title">{{item.name}}</span><span class="data">{{item.data}}</span>
        </li>
        </ul>

        <h3 class="des-column-right">公告中心</h3>
        <ul>
          <li v-for="item in items1">
          <span class="title">{{item.name}}</span><span class="data">{{item.data}}</span>
        </li>
        </ul>

        <h3 class="des-column-right">消息通知</h3>
        <ul>
          <li v-for="item in items2">
          <span class="title">{{item.name}}</span><span class="data">{{item.data}}</span>
        </li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
    return {
      items: [
        { name: '首届世界5G大会：央视聚焦海尔，海尔聚焦5G',data:'11-18' },
        { name: '秋实评论：海尔智家前景不可小觑' ,data:'12-02' },
        { name: '抵御多轮冲击 海尔双11再获多品类第一' ,data:'11-02'},
        { name: '首届世界5G大会：央视聚焦海尔，海尔聚焦5G',data:'11-22' },
        { name: '秋实评论：海尔智家前景不可小觑',data:'11-28' },
        { name: '抵御多轮冲击 海尔双11再获多品类第一',data:'11-29' },
        { name: '海尔智慧用水亮相上海厨卫展智能家居',data:'11-18' },
      ],
       items1: [
        { name: '关于有害物质RoHS系统上线试运行的通知',data:'11-18' },
        { name: '关于规范模块商质量体系认证的告知函' ,data:'11-05' },
        { name: '模块商质量索赔及相关问题优化的公告' ,data:'11-02'},
        { name: '首届世界5G大会：央视聚焦海尔，海尔聚焦5G',data:'11-22' },
        { name: '关于有害物质RoHS系统上线试运行的通知',data:'11-28' },
        { name: '抵御多轮冲击 海尔双11再获多品类第一',data:'11-29' },
        { name: '关于规范模块商质量体系认证的告知函' ,data:'11-05' },
      ],
       items2: [
        { name: '模块商质量索赔及相关问题优化的公告',data:'11-18' },
        { name: '秋实评论：海尔智家前景不可小觑' ,data:'12-02' },
        { name: '关于有害物质RoHS系统上线试运行的通知' ,data:'11-02'},
        { name: '首届世界5G大会：央视聚焦海尔，海尔聚焦5G',data:'11-22' },
        { name: '关于规范模块商质量体系认证的告知函',data:'11-28' },
         { name: '关于有害物质RoHS系统上线试运行的通知',data:'11-18' },
        { name: '抵御多轮冲击 海尔双11再获多品类第一',data:'11-29' }
      ],

    }
  }
}
</script>
<style scoped>

</style>