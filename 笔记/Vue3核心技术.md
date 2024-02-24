# 1、Vue3简介

# 2、创建Vue3工程

# 3、Vue3核心语法

## 3.6 ref对比reactive

宏观角度看：

>
>
>1、ref用来定义：基本数据类型、对象类型数据；
>
>2、reactive用来定义：对象类型数据

- 区别：
  - 1、ref创建的变量必须使用.value (可以使用volar插件自动添加.value)
  - 2、reactive重新分配一个新对象，会失去响应式（可以使用Object.assign去整体替换).
- 使用原则
  - 1、若需要一个基本类型的响应式数据，必须使用ref。
  - 2、若需要一个响应式数据，层级不深，ref、reactive都可以。
  - 3、若需要一个响应式数据，且层级较深，推荐使用reactive。

## 3.7 toRefs 和 toRef

- 作用：将一个响应式对象的每一个属性，转换为ref对象。
- 备注：toRefs与toRef功能一致，但toRefs可以批量转换。

## 3.8 computed

作用：根据已有的数据计算出新数据

```
<template></template>
<script setup>
import {ref,computed} from "vue"
let firstName = ref('zhang')
let lastName = ref('san')
// 计算属性 只读
let fullName = computed(()=>{
return firstName.value +'-'+lastName.value;
})
</script>
```

## 3.9 wathch

- 作用：监视数据的边喝

- 特点：Vue3中的watch只能监视一下四种数据：

  >
  >
  >1、ref定义的数据
  >
  >2、reactive定义的数据
  >
  >3、函数返回一个值（getter函数）
  >
  >4、一个包含上述内容的数组

情况一：监视ref定义的基本数据类型：直接写数据名即可，监视的是其value值的变化。

```vue
<script setup>
import {ref ,watch} from "vue"
let sum = ref(9)
//监视 
watch(sum,()=>{
    console.log('sum变化了。')
})
</script>
```

情况二：监视ref定义的对象类型数据：直接写数据名，监视的是对象的 地址值，若想见识对象内部的数据，要手动开启手动监视。

>
>
>注意：
>
>1、若修改的是ref定义对象中的属性，newValue和oldValue都是新值，因为它们是同一个对象。
>
>2、若修改整个ref定义的对象，newValue是新值，oldValue是旧值，因为不是同一个对象了。

```vue
watch(person,(newValue,oldValue)=>{
console.log('person变换了',newValue,oldValue)
},{deep:true,immediate:true})
```

情况三：监视reactive定义的对象类型数据，且默认开启了深度监视。

情况四：监视ref或reactive定义的 对象类型 数据中的某个属性，注意一下几点：

1、若该属性值不是对象类型，需要携程函数形式

2、若该属性值依然是对象类型，可直接编，也可写成函数，建议写成函数。

```vue
<script setup>
    let person = reactive({
        name:"张三",
        age:18,
        car:{
            c1:'奔驰',
            c2:"宝马"
        }
    })
watch(()=>person.name,(newValue,oldValue)=>{
    console.log('person.name变化了',newValue,oldValue);
})
    </script>
```

情况五：监视上述多个数据



```vue
<script setup>
watch([()=>person.name,()=>person.car.c1],(newValue,oldValeu)=>{
    console.log(newValue,oldValue)
})
</script>
```

## 3.10 watchEffect

立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行该函数

watch对比watchEffect

1、都能监听响应式数据的变化，不同的是监听数据变化的方式不同

2、watch：要明确指出监视的数据

3、watchEffect：不用明确指出监视的数据（函数中要拿到哪些属性，那就监视哪些属性）

## 3.11标签的ref属性

作用：用于注册模版引用。

>
>
>- 用在普通的DOM标签上，获取的是DOM节点
>- 用在组件标签上，获取的是组件实例对象。

组件标签

```vue
<script setup>
import {ref,defineExpose} from "vue"
    let tiel2 = ref()
    let a = ref(0)
    let b = ref(1)
    let c = ref(2)
    
    function showLog(){
        console.log(title2.value)
    }
    defineExpose({a,b,c})
</script>
```

