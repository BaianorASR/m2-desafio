<template>
  <div
    v-if="visible"
    class="rounded-md border p-2 bg-white w-full h-full sm:h-[300px] sm:w-[200px] z-10 shadow mb-2"
  >
    <div class="flex items-center gap-4">
      <img
        src="@/assets/images/x-fill.svg"
        class="fill-red-800 w-4 h-4 cursor-pointer"
        @click="handleModalStatus"
      />
      <p v-if="productsOfCart.length === 0" class="text-red-900">
        Carrinho vazio!
      </p>
    </div>
    <ul class="flex flex-col flex-1 gap-2 mt-2">
      <li
        v-for="item in productsOfCart"
        :key="item.id"
        class="flex justify-between w-full"
      >
        <div
          class="bg-neutral-100 flex items-center justify-between flex-1 gap-2 p-1 rounded-md"
        >
          <p class="text-neutral-500 text-sm font-normal uppercase">
            {{ item.category }}
          </p>
          <span class="flex justify-start text-sm">{{ item.value }}</span>
          <span class="flex items-center gap-2 text-green-700"
            >{{ centsToCurrency(item.price) }}
            <img
              src="@/assets/images/trash-simple-fill.svg"
              class="w-4 h-4"
              @click="removeItemFromCart(item.id)"
            />
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { mapActions } from 'vuex'

interface IProducts {
  id: string
  value: string
  price: number
  category: string
}

export default Vue.extend({
  name: 'CartDetails',

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    func: {
      type: Function as PropType<() => void>,
      required: true,
      default: () => {},
    },
  },

  computed: {
    totalPriceOfCart(): string {
      return this.$store.getters['cart/getTotalPriceOfCart']
    },
    totalItemsOfCart(): number {
      return this.$store.getters['cart/getTotalItemsOfCart']
    },

    productsOfCart(): IProducts[] {
      return this.$store.getters['cart/getProductsOfCart']
    },
  },

  methods: {
    ...mapActions({
      removeItemFromCart: 'cart/removeItemFromCart',
    }),

    handleModalStatus() {
      if (typeof this.func === 'function') {
        return this.func()
      }
      /* eslint-disable-line no-console */ console.error(
        'Erro ao tentar fechar o modal! verifique a função "handleModalStatus"'
      )
    },

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
