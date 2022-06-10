<template>
  <div class="p-2">
    <PlansCategory
      :plan="products.internet"
      category="internet"
      description="Selecione um plano de internet para continuar"
    />
    <PlansCategory
      :plan="products.tv"
      category="tv"
      description="Selecione um plano de televisão"
    />
    <PlansCategory
      :plan="products.phone"
      category="fixo"
      description="Agora escolha o seu pacote de telefone fixo"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PlansCategory from '../organisms/PlansCategory.vue'
import { IPlans } from '@/interfaces/plans'

export default Vue.extend({
  name: 'PlansOptions',

  components: {
    PlansCategory,
  },

  computed: {
    products(): IPlans {
      return this.$store.getters['products/getProducts']
    },
    totalPriceOfCart(): string {
      return this.$store.getters['cart/getTotalPriceOfCart']
    },
  },
})
</script>

<style scoped></style>
