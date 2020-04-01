<template>
  <div>
    <TopNav />
    <Header />
    <PopularItems />
  </div>
</template>

<script>
import TopNav from '@/components/home/TopNav.vue'
import Header from '@/components/home/Header.vue'
import PopularItems from '@/components/home/PopularItems.vue'

export default {
  components: {
    TopNav,
    Header,
    PopularItems
  }
}
</script>