<template>
  <div>
    <ul v-for="menu in menus" class="sidebar-links sidebar-links2">
      <li class="sidebar-links sidebar-links2">
        <a :href="menu.path" class="sidebar-link sidebar-links2">
          <i v-if="menu.childs && menu.childs.length != 0"
             style="width: 20px;background: antiquewhite;display: inline-block" @click="handleZD">+</i>
          {{menu.name}}
        </a>
        <menuNav v-if="menu.childs && menu.childs.length != 0" :menus="menu.childs"></menuNav>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'menuNav',
    props: {
      menus: {}
    },
    methods: {
      handleZD (event) {
        let eventStyle = event.target.parentElement.nextElementSibling.style
        console.log(eventStyle.display = eventStyle.display ? '' : 'none')
      }
    },
    watch: {}
  }
</script>

<style scoped>
  .sidebar-1 {
    position: relative;
  }

  .sidebar-links2 {
    margin: 0;
    list-style-type: none !important;
  }
</style>
