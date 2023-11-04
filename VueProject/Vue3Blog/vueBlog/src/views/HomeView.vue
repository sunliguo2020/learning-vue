<script setup>
import { reactive } from 'vue'
// import ArticleItem from '../components/ArticleItem.vue'
const articleDatas = reactive([
  {
    'title': 'Vue3 +VueRouter+Vite',
    'link': '/',
    'desc': 'Vue(梵音)',
    'author': '张胜男',
    'category': 'Vue3',
    'pubdate': '2023年10月15日'
  },
  {
    'title': 'Vue3 +VueRouter+Vite',
    'link': '/',
    'desc': 'Vue(梵音)',
    'author': '李四',
    'category': 'Vue3',
    'pubdate': '2023年10月15日'
  },
  {
    'title': 'Vue3 +VueRouter+Vite',
    'link': '/',
    'desc': 'Vue(梵音)',
    'author': '张胜男',
    'category': 'Django',
    'pubdate': '2023年10月15日'
  },
  {
    'title': 'Vue3 +VueRouter+Vite',
    'link': '/',
    'desc': 'Vue(梵音)',
    'author': '张胜男',
    'category': 'python',
    'pubdate': '2023年10月15日'
  },
])

</script>

<template>
  <div>
    <article-item v-for="(item,index) in articleDatas" :key="index" :title="item.title" :link="item.link">
      <template #author>{{ item.author }}</template>
      <template #category>{{ item.category }}</template>
      <template #pubdate>{{ item.pubdate }}</template>
    </article-item>
  </div>
</template>

<style scoped></style>