<template>
  <div id="app">
    <TopNav
      :showDrawer="showDrawer" 
      :openDrawer="openDrawer"
    />
    <VDrawer
      v-model="showDrawer"
      transition="slide-right"
      bg-transition="fade"
      right
    >
      My drawer content
    </VDrawer>
    
    <router-view />
  </div>
</template>

<script>
import { VDrawer } from "vuetensils"
import TopNav from '@/components/TopNav.vue'

export default {
  components: {
    TopNav,
    VDrawer
  },
  data() {
    return {
      showDrawer: false
    }
  },
  methods: {
    openDrawer() {
      this.showDrawer = true
    }
  }
}
</script>

<style>
.vts-drawer {
  background: rgba(230, 230, 230, 0.5);
}

.vts-drawer__content {
  padding: 20px;
  color: #fff;
  background-color: #222;
  transition: transform 0.3s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slide-right-enter,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(+100%);
}
</style>