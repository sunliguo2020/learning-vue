<template>
  <div >
    <div>
      <h5>导航</h5>
      <router-link to="/user">User</router-link>
      <router-link to="/person">Person</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
   
  </div>
</template>

<script>

import Users from './pages/Users.vue'
import Person from './pages/Person.vue'

export default {
  name: 'App',
  components: {
    Users,
    Person,
  }
}
</script>

<style>
a{
  margin-right: 5px;
}
</style>
