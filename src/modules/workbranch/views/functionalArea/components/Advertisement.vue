<template>
  <div class="block">
    <el-carousel height="242px" :autoplay="false">
      <el-carousel-item v-for="item in 4" :key="item"/>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Advertisement',
}
</script>

<style>
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>