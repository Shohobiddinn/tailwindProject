
<template>
  <div class="px-4">
    <table class="table-auto w-full p-2 mt-[30px]">
      <thead class="">
        <tr class="">
          <th class="border-2 border-yellow-500 text-bold">Song</th>
          <th class="border-2 border-yellow-500 text-bold">Artist</th>
          <th class="border-2 border-yellow-500 text-bold">Year</th>
        </tr>
      </thead>
      <tbody >
        <tr v-for="item in 3" :key="item">
          <td class="border-2 border-blue-500 italic">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td class="border-2 border-blue-500 italic">Malcolm Lockyer</td>
          <td class="border-2 border-blue-500 italic">1961</td>
        </tr>
      
      </tbody>
    </table>
    <div class="flex flex-wrap mt-10 justify-center" style="gap: 20px">
      <div
        v-for="item in 5"
        :key="item"
        class="cursor-pointer caret-pink-600 text-gray-800 flex-auto min-h-48 w-64 rounded-lg gap-4 ml-px border-2 border-blue-600 p-2 hover:translate-y-[10px] duration-300"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        ducimus fugiat veniam, et mollitia ad itaque tenetur culpa, hic
        distinctio quas quia velit repellendus, consectetur fugit ea possimus
        voluptates nemo!
      </div>
    </div>
    <div class="images flex justify-center flex-wrap mt-10" style="gap: 20px">
      <div
        class="image flex-auto w-[400px] max-h-[200px]"
        v-for="item in 5"
        :key="item"
      >
        <img
          :src="`https://picsum.photos/id/${50 + item}/1920/1080`"
          class="w-full h-full hover:scale-105 duration-300 cursor-pointer duration-300 rounded-[10px] object-cover"
          alt=""
        />
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