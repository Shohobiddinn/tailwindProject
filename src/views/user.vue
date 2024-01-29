<template>
  <vue3-star-ratings v-model="rating" />
  <button class="btn btn-primary text-[20px]" @click="lob()">Click Me</button>
  <input type="range" />
</template>
  
  <script>
import vue3starRatings from "vue3-star-ratings";

export default {
  data() {
    return {
      rating: 2.5,
    };
  },
  components: {
    vue3starRatings,
  },
  methods: {
    lob() {
      console.log(Math.round(this.rating));
    },
  },
  created() {
    this.lob();
  },
};
</script>