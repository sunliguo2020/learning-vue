<template>
    <a-typography class="box">
        <a-typography-title :level="3">
            <router-link to="/">
                {{ props.title }}
            </router-link>
        </a-typography-title>
        <a-space>
            
                <a-space>
                    <user-outlined></user-outlined>
                    <span>作者：<slot name="author"></slot></span>
                </a-space>
            <slot name="category">
                <a-space>
                    <FolderOutlined></FolderOutlined>
                    <span>
                        分类：{{ props.category }}
                    </span>
                </a-space>
            </slot>
            <slot name="pubdate">
                <a-space>
                    <ClockCircleOutlined></ClockCircleOutlined>
                    <span>
                        发布日期：{{ props.pudate }}
                    </span>
                </a-space>
            </slot>
        </a-space>
        <a-typography-paragraph type="secondary">
            {{ props.desc }}
        </a-typography-paragraph>
    </a-typography>
</template>

<script setup>

import { FolderOutlined, UserOutlined, ClockCircleOutlined } from '@ant-design/icons-vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    link: String || Object,
    author: {
        type: String,
        default: '张胜男'
    },
    desc: {
        type: String,
        default: '本课程'
    },
    category: {
        type: String,
        default: 'vue3'
    },
    pudate: {
        type: String,
        default: '2023-11-04'
    }


})
</script>

<style></style>