<template>
    <div class="wkb-panel-box">
      <div class="wkb-panel-nav">
        <el-row>
          <el-col :span="12">
            <strong>|</strong>{{title}}
          </el-col>
          <el-col :span="12" class="wkb-cmm-text-right" v-if="showMore">
            <a href="javascript:void(0)" class="el-icon-more wkb-cmm-color-muted"></a>
          </el-col>
        </el-row>
      </div>
      <div class="wkb-panel-content">
          <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Panel',
  components: {

  },
  data() {
    return {
    }
  },
  props:{
      title:{
          type: String,
          required: true
      },
      showMore:{
          type: Boolean
      }
  }
}
</script>

<style lang="scss" scoped>
  .wkb-panel-box{
    width: 100%;
    background-color: #fff;
    -moz-box-shadow:2px 2px 4px #d8d8d8;
    -webkit-box-shadow:2px 2px 4px #d8d8d8; 
    box-shadow:2px 2px 4px #d8d8d8;
  }
  .wkb-panel-nav{
    height: 42px;
    line-height: 42px;
    padding: 0 8px;
    font-size: 14px;
    border-bottom: 1px solid #efefef;
    strong{
        margin-right: 12px;
        color: #0076bd;
        font-size: 16px;
    }
  }
  .wkb-panel-content{
      font-size: 13px;
  }
</style>
