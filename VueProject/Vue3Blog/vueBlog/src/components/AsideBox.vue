<template>
    <aside class="box side-title">
        <h1>{{ props.name }}</h1>
        <div v-if="props.type == 'search'">
            <a-input-search 
            @change="$emit('update:searchValue', $event.target.value)" 
            @search="$emit('someSearch')"
            placeholder="input search text">
            </a-input-search>
        </div>

        <div class="news" v-if="props.type == 'news' && props.newsData.length > 0">
            <ul>
                <li v-for="(item, index) of props.newsData" :key="index">
                    <a href="">{{ item.title }}</a>
                </li>
            </ul>
        </div>

        <div v-if="props.type == 'tag' && props.tagsData.length > 0">
            <a-tag v-for="(item, index) in props.tagsData" :color="item.color" :key="index">{{ item.name }}</a-tag>
        </div>

        <div class="archive" v-if="props.type == 'archive' && props.archiveData.length > 0">
            <ul class="pl-2 pr-2">
                <li v-for="(item, index) in props.archiveData" :key="index">
                    <a href="">{{ item.date }}</a>
                </li>
            </ul>
        </div>

        <slot name="box" v-if="props.type == 'box'"></slot>
    </aside>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    name: {
        type: String,
        default: '搜索'
    },
    type: {
        type: String,
        default: 'search',
        validator(value) {
            return ['search', 'news', 'tag', 'archive', 'box'].includes(value)
        }
    },
    newsData: {
        type: Array,
        default: []
    },
    tagsData: {
        type: Array,
        default: []
    },
    archiveData: {
        type: Array,
        default: []
    },
    searchValue: {
        type: String,
        default: ''
    },

})

// const searchValue = ref(10)
defineEmits(['update:searchValue', 'someSearch'])

</script>

<style scoped>
.side-title {
    font-size: 18px;
    font-weight: bold;
    border-bottom: solid 1px #eee;
    padding-bottom: .5em;

}

.news li,
.archive li {
    font-size: 15px;
    line-height: 2.5em;
    border-bottom: dashed 1px #eee;
}
</style>
