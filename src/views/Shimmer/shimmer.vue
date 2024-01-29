<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  components: {
  },
};
</script>

<template>
  <div class="col-1  div">
    <h2 class="text-[25px] font-semibold relative w-[400px] h-[400px]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      provident dolor, itaque laborum error eius velit voluptas unde quo tempore
      voluptatibus rem iure natus voluptatum, porro expedita alias ipsam autem!
      <textShimmer class="whatever" />
    </h2>
  </div>
</template>

<style>
.div{
  position: relative;
}
.whatever {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
}
</style>