<template>
<nav>
This is a navBar
</nav>
</template>
<script>

export default {
  data: function () {
    return {
      activeMenu: null,
      menu: [
        { name: 'Home', path: '/', meta: { label: 'Home', link: 'Home.vue' }, width: 17 }
      ]
    }
  },
  methods: {
    processRequest: function (obj) {
      this.activeMenu = obj
    },
    getRouteObj: function (name) {
      for (let obj of this.menu) {
        if (obj.name === name) {
          return obj
        }
      }
    }
  },
  mounted: function () {
    this.activeMenu = this.getRouteObj(this.$route.name)
  },
  watch: {
    '$route' (to, from) {
      this.activeMenu = this.getRouteObj(to.name)
    }
  }
}
</script>
<style lang="scss">
ul.drawer-list-nav.tier-1 {
  left: -500px;
}
</style>