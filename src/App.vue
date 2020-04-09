<template>
  <div id="app">
    <TopNav
      :showDrawer="drawerState" 
      :openMenu="openMenu"
    />

    <VDrawer
      v-model="drawerState"
      transition="slide-right"
      bg-transition="fade"
      right
    >
      <ul class="no-bullet">
        <li>
          <router-link to="/">
            <h4>Home</h4>
          </router-link>
        </li>
        <li>
          <router-link to="/cart">
            <h4>Cart</h4>
          </router-link>
        </li>
        <li>
          <router-link to="/past-purchases">
            <h4>Past Purchases</h4>
          </router-link>
        </li>
      </ul>
    </VDrawer>
    
    <router-view />
    <VAlert
      :class="alertDetails.color"
      v-model="alertDetails.isOpen"
      dismissible
    >
      {{ alertDetails.message }}
    </VAlert>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { VDrawer, VAlert } from "vuetensils"
import TopNav from '@/components/TopNav.vue'

export default {
  components: {
    TopNav,
    VDrawer,
    VAlert
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['alertDetails', 'showDrawer']),
    drawerState: {
      get () {
        return this.showDrawer
      },
      set (value) {
        this.setDrawer(value)
      }
    }
  },
  methods: {
    ...mapMutations(['setDrawer']),
    openMenu() {
      this.setDrawer(true)
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
  background-color: #222;
  transition: transform 0.3s;
}

.vts-drawer__content a {
  color: #fff;
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

.vts-alert.success {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid currentColor;
  border-radius: 4px;
  padding: 10px;
  color: #009;
  background: lightgreen;
  position: absolute;
  top: 20px;
  right: 5px;
  min-width: 300px;
}

.vts-alert.success .vts-alert__dismiss {
  border: 0;
  font: inherit;
  background: transparent;
}

</style>
