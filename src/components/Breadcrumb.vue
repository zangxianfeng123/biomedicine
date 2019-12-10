<template>
    <div class="bio-breadcrumb-box">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in currentPathJson" :key="item.name">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    name: 'Breadcrumb',
    data() {
        return {
            currentPathJson:[]
        }
    },
    mounted(){
        console.log("看一下：",this.$route);
        this.currentPathJson = this.$route.matched;
    },
    /*watch: {
        '$route':function(to, from) {
            this.currentPathName = to.name;
        }
    }*/
}
</script>

<style lang="scss" scoped>
/*.bio-breadcrumb-box{

}*/
</style>
