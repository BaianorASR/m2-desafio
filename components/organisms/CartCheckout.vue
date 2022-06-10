<template>
  <div class="bg-neutral-200 fixed bottom-0 flex flex-col w-screen p-2">
    <div class="text-neutral-600 flex items-center justify-between">
      <p>Taxa de instalação</p>
      <p class="text-xs">Grátis</p>
    </div>
    <div class="flex items-center justify-between font-bold text-blue-800">
      <p>Total</p>
      <div class="relative flex items-center gap-2 cursor-pointer">
        <p>{{ totalPriceOfCart }}</p>
        <span
          class="text-neutral-900 absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs bg-white rounded-full"
          >4</span
        >
        <img src="@/assets/images/cart.svg" alt="Cart icon" class="w-8" />
      </div>
    </div>
    <button
      class="hover:brightness-90 h-10 my-2 text-white transition-colors bg-blue-600 rounded"
      type="button"
    >
      Continuar
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CartCheckout',

  computed: {
    totalPriceOfCart(): string {
      return this.$store.getters['cart/getTotalPriceOfCart']
    },
  },
})
</script>

<style scoped></style>
