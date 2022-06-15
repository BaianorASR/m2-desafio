<template>
  <div>
    <PlansOptions />
    <CartCheckout />
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex'
import Vue from 'vue'
import PlansOptions from '@/components/templates/PlansOptions.vue'
import CartCheckout from '~/components/organisms/CartCheckout.vue'

export default Vue.extend({
  name: 'IndexPage',

  components: {
    PlansOptions,
    CartCheckout,
  },

  created() {
    this.fetchProducts()
  },

  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts',
    }),
  },
})
</script>
