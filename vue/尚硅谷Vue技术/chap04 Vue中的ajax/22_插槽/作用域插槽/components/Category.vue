<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽（挖个坑），等着组件的使用者进行填充 -->
    <slot :games="games"
      >我是默认值，当使用者没有传递具体结构时，我会出现。
    </slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["listData", "title"],
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
    };
  },
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
img {
  width: 100%;
}
</style>