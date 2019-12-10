<template>
    <div class="bio-breadcrumb-box">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>看单打印</el-breadcrumb-item>
            <el-breadcrumb-item>{{currentPathName}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    name: 'Breadcrumb',
    data() {
        return {
            currentPathName:''
        }
    },
    mounted(){
        this.currentPathName = this.$route.name;
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
