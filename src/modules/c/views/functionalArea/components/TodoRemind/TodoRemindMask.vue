<template>
    <transition name="wkb-slide">
        <div class="wkb-todo-remind-mask" v-if="ifShowMask">
            <div class="wkb-todo-remind-mask-title">TASK1544039276189</div>
            <el-row>
                <el-col :span="12" class="wkb-cmm-text-ellipsis">
                    代办标题：阿斯顿发射点豆腐干豆腐干豆腐干豆腐干发射点
                </el-col>
                <el-col :span="12" class="wkb-cmm-text-ellipsis">
                    代办内容：阿斯顿发射点豆腐干豆腐干豆腐干豆腐干发射点
                </el-col>
                <el-col :span="12" class="wkb-cmm-text-ellipsis">
                    系统：PBCS
                </el-col>
                <el-col :span="12" class="wkb-cmm-text-ellipsis">
                    备注：嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎
                </el-col>
                <el-col :span="12" class="wkb-cmm-text-ellipsis">
                    处理人：枫哥哥
                </el-col>
                <el-col :span="12" class="wkb-cmm-text-ellipsis">
                    处理时间：2019-06-06 18:20:13
                </el-col>
                <el-col :span="12" class="wkb-cmm-text-ellipsis">
                    字段：阿斯顿发射点豆腐干豆腐干豆腐干豆腐干发射点
                </el-col>
                <el-col :span="12" class="wkb-cmm-text-ellipsis">
                    字段：阿斯顿发射点豆腐干豆腐干豆腐干豆腐干发射点
                </el-col>
                <el-col :span="12" class="wkb-cmm-text-ellipsis">
                    字段：阿斯顿发射点豆腐干豆腐干豆腐干豆腐干发射点
                </el-col>
                <el-col :span="12" class="wkb-cmm-text-ellipsis">
                    字段：阿斯顿发射点豆腐干豆腐干豆腐干豆腐干发射点
                </el-col>
                
            </el-row>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'todoRemindMask',
  props:{
      ifShowMask:{
          type: Boolean,
          required: true
      }
  }
}
</script>

<style lang="scss" scoped>
.wkb-todo-remind-mask{
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    width: 65%;
    top: 0;
    right: 0;
    bottom: 0;
    color: #fff;
    padding: 8px 14px;
}
.wkb-slide-enter-active,.wkb-slide-leave-active {
  transition: all .4s;
}
.wkb-slide-enter,.wkb-slide-leave-to{
  width: 0;
}
.wkb-todo-remind-mask-title{
    border-bottom: 1px solid #666;
}
</style>
