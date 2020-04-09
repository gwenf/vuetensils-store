<template>
  <div class="grid-container fluid" style="background: #eee; height: 300px">
    <div
      class="grid-x"
    >
      <div
        class="cell grid-padding-y grid-margin-x small-8 large-offset-2"
        style="margin-top: 10px"
      >
        <h3 class="subheader">Popular Products</h3>
      </div>
      <div class="cell grid-x grid-padding-y grid-margin-x small-8 large-offset-2">
        <div class="cell small-4" v-for="i in products" :key="i">
          <div class="card">
            <div class="card-divider">
              Product {{ i }}
            </div>
            <div class="card-section grid-y">
              Product Info
              <button class="button" @click="addToCart">Add to Cart</button>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      products: [...Array(3).keys()]
    }
  },
  methods: {
    ...mapMutations(['toggleAlert']),
    addToCart() {
      this.toggleAlert()
    }
  }
}
</script>
