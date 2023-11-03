<script setup>
// import {message} from 'ant-design-vue'
import { getCurrentInstance } from 'vue';

const {proxy} = getCurrentInstance()

import {StepBackwardOutlined } from '@ant-design/icons-vue'

const info =()=>{
    proxy.$message.info('ant 测试按钮 message')
    console.log('adafdafaaf');
}
</script>

<template>
    <div>
        <a-button type="primary">Primary Button</a-button>
        <a-button>Default Button</a-button>
        <a-button type="dashed">Dashed Button</a-button>
        <a-button type="text">Text Button</a-button>
        <a-button type="link">Link Button</a-button>
        <a-button type="primary" @click="info">Display normal message</a-button>

        <StepBackwardOutlined />
    </div>
</template>

<style scoped></style>