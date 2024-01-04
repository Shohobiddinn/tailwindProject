
<template>
  <div class="px-4">
    <div class="flex flex-wrap mt-10 justify-center" style="gap: 20px;">
      <div v-for="item in 5" :key="item" class="cursor-pointer caret-pink-600 text-gray-800 flex-auto min-h-48 w-64 rounded-lg gap-4 ml-px border-2 border-blue-600 p-2" >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ducimus
        fugiat veniam, et mollitia ad itaque tenetur culpa, hic distinctio quas quia
        velit repellendus, consectetur fugit ea possimus voluptates nemo!
      </div>
  
    </div>

  </div>
</template>


<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>