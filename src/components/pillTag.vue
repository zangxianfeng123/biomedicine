<template>
    <a 
        href="javascript:void(0)" 
        class="wkb-pilltag-box"
        @mouseenter="showMask"
        @mouseleave="hideMask"
    >
      <div class="wkb-pilltag-img"><img :src="src"/></div>
      <div class="wkb-pilltag-name">{{name}}</div>
    </a>
</template>

<script>
export default {
  name: 'PillTag',
  components: {

  },
  data() {
    return {
    }
  },
  methods:{
      showMask(e){
          this.$emit('showMask',e)
      },
      hideMask(){
          this.$emit('hideMask')
      }
  },
  props:{
      name:{
          type: String,
          required: true
      },
      src:{
          type: String,
          required: true
      }
  }
}
</script>

<style lang="scss" scoped>
.wkb-pilltag-box{
    display: block;
    padding: 4px;
}
.wkb-pilltag-img{
    height: 55px;
    img{
        width: 46px;
        height: 46px;
    }
}
.wkb-pilltag-name{
    line-height: 24px;
}
</style>
