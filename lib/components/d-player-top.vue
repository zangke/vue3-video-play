/*
 * @Author: web.王晓冬
 * @Date: 2021-08-19 16:59:13
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2021-08-28 07:14:57
 * @Description: file content
*/
<template>
    <div class="d-player-top">
        <span class="top-title">{{ title }} </span>
        <!-- <p class="top-title">{{ title || '' }}</p> -->
        <!-- <p class="top-title">{{ currTime }}</p> -->
        
        <span v-if="noChannel" >
            <n-button round type="info" @click.stop="channelChooseClick">选择通道</n-button>
        </span>
        <span class="top-button" v-if="!noChannel">
            <n-button round type="info" @click.stop="channelChooseClick">选择通道</n-button>
            <n-button round v-if="showClose" type="warning" @click.stop="channelCloseClick">关闭</n-button>
        </span>
    </div>
</template>

<script  setup>
import { onUnmounted, reactive, ref } from 'vue'
import { NButton } from 'naive-ui'
Date.prototype.format = function (fmt) {
    let o = {
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds()
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}
const props = defineProps({
    title: {
        default: ''
    },
    showClose: { 
        default : false
    },
    noChannel: { 
        default : false
    }
})
const emits = defineEmits(['channelChooseClick', 'channelCloseClick'])

let currTime = ref('00:00:00')
currTime.value = new Date().format("hh:mm:ss");
let timeout = null
timeout = setInterval(() => {
    currTime.value = new Date().format("hh:mm:ss");

}, 1000)

onUnmounted(() => {
    clearInterval(timeout)
});

// 选择通道事件
const channelChooseClick = (e) => {
  emits("channelChooseClick",e);
};
// 关闭通道事件
const channelCloseClick = (e) => {
  emits("channelCloseClick",e);
};

</script>

<style scoped lang='less'>
.d-player-top {
    position: absolute;
    font-size: 16px;
    text-align: center;
    top: 0;
    display: flex;
    height: 30px;
    width: 100%;
    line-height: 30px;
    background-color:transparent;
    justify-content: space-between;
    z-index:100;

}
.top-title {
    color: #fff;
    background-color:hsla(0,0%,50%,.5);
    border-radius:2px; 
    max-width:120px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.top-button {
    display: none;
}
.d-player-top:hover .top-button {
    display: flex;
}
</style>