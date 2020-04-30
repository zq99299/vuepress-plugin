<template>
  <div>
    <ul v-for="menu in menus" class="sidebar-links sidebar-links2">
      <li class="sidebar-links sidebar-links2">
        <a :href="menu.path" class="sidebar-link sidebar-links2">
          {{menu.name}}
        </a>
        <page-nav-item v-if="menu.childs && menu.childs.length != 0" :menus="menu.childs"></page-nav-item>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PageNavItem',
    props: {
      menus: {}
    },
    create () {
    },
    methods: {},
    watch: {}
  }
</script>

<style lang="stylus" scoped>
  .sidebar-links2 {
    margin: 0;
    list-style-type: none !important;
  }
</style>
