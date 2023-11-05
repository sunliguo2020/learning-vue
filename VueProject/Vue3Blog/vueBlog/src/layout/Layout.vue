<script setup>
import {ref,computed} from 'vue'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { RouterView, RouterLink } from 'vue-router'
import AsideBox from '../components/AsideBox.vue';

const newsData = [
    {
         title:'Vue3 + VueRouter + Vite + pinia组件化开发实战入门'
    },
    {
         title:'Vue3 + VueRouter + Vite + pinia组件化开发实战入门'
    },
    {
         title:'Vue3 + VueRouter + Vite + pinia组件化开发实战入门'
    },
    {
         title:'Vue3 + VueRouter + Vite + pinia组件化开发实战入门'
    }, {
         title:'Vue3 + VueRouter'
    },
]

const newsDataComp=computed(()=>{
    let itemNewsData = []
    newsData.forEach(item=>{
        if(item.title.length >20){
            item.title = item.title.substring(0,20)+'...'
        }
        itemNewsData.push(item)
    })
    return itemNewsData
})
const tagsData =[
    {
        name:'tag1',
        color:'#87d068'
    },
    {
        name:'tag2',
        color:'#87d068'
    },
    {
        name:'tag3',
        color:'#87d068'
    },
    {
        name:'tag4',
        color:'#87d068'
    },

]
const archiveData = [
    {
        date:'2022年11月8日'
    },
    {
        date:'2022年11月8日'
    },
    {
        date:'2022年11月8日'
    },
    {
        date:'2022年11月8日'
    },
]

const search1Value = ref('')
const search2Value = ref('')

function search1CallBack(){
    console.log(search1Value.value)
}

function search2CallBack(){
    console.log(search2Value.value)
}

</script>

<template>
    <div id="main">
        <header class="header">
            <nav class="navbar is-spaced has-shadow" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                        </a>

                        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                            data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item">
                                Home
                            </a>

                            <a class="navbar-item">
                                Documentation
                            </a>

                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link">
                                    More
                                </a>

                                <div class="navbar-dropdown">
                                    <a class="navbar-item">
                                        About
                                    </a>
                                    <a class="navbar-item">
                                        Jobs
                                    </a>
                                    <a class="navbar-item">
                                        Contact
                                    </a>
                                    <hr class="navbar-divider">
                                    <a class="navbar-item">
                                        Report an issue
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="navbar-end">
                            <div class="navbar-item">
                                <a-space>
                                    <a-button type="primary">Login</a-button>
                                    <a-button>Register</a-button>
                                </a-space>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <div class="container">
            <a-row :gutter="[16, 16]">
                <a-col :span="18">
                    <!-- banner -->
                    <a-carousel arrows>
                        <template #prevArrow>
                            <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
                                <left-circle-outlined />
                            </div>
                        </template>
                        <template #nextArrow>
                            <div class="custom-slick-arrow" style="right: 10px">
                                <right-circle-outlined />
                            </div>
                        </template>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </a-carousel>

                    <!-- 文章列表 -->
                    <RouterView></RouterView>

                </a-col>
                <a-col :span="6">
                    <aside-box 
                        type="search" 
                        @some-search="search1CallBack" 
                        v-model:searchValue="search1Value">
                    </aside-box>
                    <aside-box 
                        type="search" 
                        @some-search="search2CallBack" 
                        v-model:searchValue="search2Value">
                    </aside-box> 
                <aside-box name='最新文章' type="news" :newsData="newsDataComp"></aside-box>
                <aside-box name='标签' type="tag" :tagsData="tagsData"></aside-box>
                <aside-box name='归档' type="archive" :archiveData="archiveData"></aside-box>
                <aside-box></aside-box>
                </a-col>
            </a-row>
        </div>
        <footer>
            底部
        </footer>
    </div>
</template>

<style lang="scss" >
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/base/minireset.sass";
@import "bulma/sass/components/navbar.sass";
@import "bulma/sass/elements/container.sass";
@import "bulma/sass/elements/box.sass";
</style>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
    z-index: 1;
}

.ant-carousel :deep(.custom-slick-arrow:before) {
    display: none;
}

.ant-carousel :deep(.custom-slick-arrow:hover) {
    opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
    color: #fff;
}
</style>