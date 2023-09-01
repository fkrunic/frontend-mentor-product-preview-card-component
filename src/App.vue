<script setup lang="ts">
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="flex flex-col desktop:flex-row w-96 desktop:w-[40rem] bg-white rounded-2xl shadow-lg">
      <img class="rounded-tl-2xl rounded-tr-2xl desktop:hidden" src="./assets/img/image-product-mobile.jpg">
      <img class="hidden desktop:block h-[30rem] rounded-tl-2xl rounded-bl-2xl" src="./assets/img/image-product-desktop.jpg">
      <div class="px-8 flex flex-col gap-5 py-6 pb-7">
        <p class="text-dark-grayish-blue font-montserrat tracking-perfume text-xs">
          PERFUME
        </p>
        <p class="font-fraunces text-4xl">Gabrielle Essence Eau De Parfum</p>
        <p class="text-dark-grayish-blue font-montserrat">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creater for the House of CHANEL.
        </p>
        <div class="flex flex-row justify-start items-center gap-6 desktop:py-3">
          <p class="text-dark-cyan text-4xl font-bold font-fraunces">$149.99</p>
          <p class="font-montserrat text-dark-grayish-blue line-through text-sm">$169.99</p>
        </div>
        <div class="bg-dark-cyan hover:bg-darker-cyan flex flex-row justify-center items-center gap-3 rounded-md p-3">
          <img class="h-4" src="./assets/img/icon-cart.svg">
          <p class="text-white font-montserrat font-bold">Add to Cart</p>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
</style>

<script>
export default {
  data() {
    return {
      bodyClass: 'bg-cream'
    };
  },
  mounted() {
    document.body.className = this.bodyClass;
  },
  beforeDestroy() {
    // Reset the class when the component is destroyed
    document.body.className = '';
  }
};
</script>