<template>
  <div id="app">
    <TopNav />
    <Header />
    <PopularItems />
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import Header from './components/Header.vue'
import PopularItems from './components/PopularItems.vue'

export default {
  name: 'app',
  components: {
    TopNav,
    Header,
    PopularItems
  }
}
</script>
