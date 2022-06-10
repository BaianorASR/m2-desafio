<template>
  <div class="mb-4">
    <div>
      <h2 class="text-2xl font-bold text-blue-800">
        {{ category.toUpperCase() }}
      </h2>
      <span class="text-neutral-600 text-sm font-light">
        {{ description }}
      </span>
    </div>
    <ul class="flex flex-col gap-1">
      <li
        v-for="item of plan"
        :key="item.id"
        class="flex justify-between w-full p-1 bg-white border rounded-sm shadow-sm cursor-pointer"
      >
        <label class="flex" :for="item.id">
          <div class="flex items-center">
            <input
              :id="item.id"
              type="radio"
              :name="category"
              @change="addItemToCart(item)"
            />
            <p class="ml-1 font-semibold">
              {{ item.value }} <span v-if="category === 'internet'">MEGA</span>
            </p>
          </div>
        </label>
        <div class="flex items-center gap-3">
          <p class="text-neutral-800 text-xs font-semibold">
            {{ centsToCurrency(item.price) }}
          </p>
          <span class="text-neutral-700 text-sm">+ DETALHES</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

interface IPlansProps
  extends Array<{
    id: string
    value: string
    price: number
    category: string
  }> {}

export default Vue.extend({
  name: 'PlanOptions',

  props: {
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    plan: {
      type: Object as () => IPlansProps,
      required: true,
    },
  },

  methods: {
    ...mapActions({
      addItemToCart: 'cart/addItemToCart',
    }),

    centsToCurrency(cents: number): string {
      const centsToPrice = cents / 100

      return centsToPrice.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    },
  },
})
</script>
