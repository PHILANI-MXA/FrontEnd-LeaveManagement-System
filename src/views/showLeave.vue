<template>
    <div class="min-vh-100 p-5 my-5" id="leaves">
        <h3 class="text-center border border-black">Leave applications</h3><br><br><br>
    </div>
</template>

<script>
export default{  data(){
    return {
      search:'',
    }
  },
    computed: {
       products() {
      return this.$store.state.products?.filter(products =>{
          let isMatch = true;
          if (!products.title.toLowerCase().includes(this.search.toLowerCase())) {
              isMatch = false;
          }
          return isMatch
          })
        }
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    addToCart() {
      const item = {
        title: '',
        category: '',
        product_description: '',
        img: '',
        price: '',
      }
    }
  }
}


</script>

<style scoped>

</style>