<template>
    <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
      <router-link class="navbar-brand" to="/">知乎专栏</router-link>
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item"><router-link to="/Login" class="btn btn-outline-light my-2">登录</router-link></li>
        <li class="list-inline-item"><router-link to="/Login" class="btn btn-outline-light my-2">注册</router-link></li>
      </ul>
      <ul v-else class="list-inline mb-0">
        <li class="list-inline-item">
          <drop-down :title="`你好 ${user.name}`">
            <drop-down-item disabled><a class="dropdown-item">我的文章</a></drop-down-item>
            <drop-down-item><a class="dropdown-item">编辑资料</a></drop-down-item>
          </drop-down>
        </li>
      </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import DropDown from './DropDown.vue'
import DropDownItem from './DropDownItem.vue'
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    DropDown,
    DropDownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  setup () {
    return {
      DropDown,
      DropDownItem
    }
  }
})
</script>

<style scoped>

</style>
