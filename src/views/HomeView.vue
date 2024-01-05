
<template>
  <div class="px-4 mb-[50px] flex flex-col justify-center items-center">
    <table class="table-autop-2 mt-[30px] rounded-[20px] sm:w-full">
      <thead class="">
        <tr class="*:border-2 *:border-black">
          <th class=" text-[20px] font-bold italic py-[10px]">Song</th>
          <th class=" text-[20px] font-bold italic">Artist</th>
          <th class=" text-[20px] font-bold italic">Year</th>
        </tr>
      </thead>
      <tbody class="" >
        <tr v-for="item in 5" :key="item" class="odd:bg-white-500 even:bg-blue-500 even:text-white hover:bg-gray-500 hover:text-white duration-[0.5s] *:border-2 *:border-black">
          <td class="italic px-[20px] py-[7px] cursor-pointer">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</td>
          <td class="italic px-[20px] py-[7px] cursor-pointer">Lorem ipsum </td>
          <td class="italic px-[20px] py-[7px] cursor-pointer">1992</td>
        </tr>
      
      </tbody>
    </table>
    <div class="flex flex-wrap mt-10 justify-center gap-[20px] sm:w-full">
      <div
        v-for="item in 5"
        :key="item"
        class="cursor-pointer text-gray-800 flex-auto min-h-48 w-64 rounded-[20px] gap-4 border-2 border-blue-600 p-2 duration-300  hover:-translate-y-[10px] "
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        ducimus fugiat veniam, et mollitia ad itaque tenetur culpa, hic
        distinctio quas quia velit repellendus, consectetur fugit ea possimus
        voluptates nemo!
      </div>
    </div>
    <div class="images flex justify-center flex-wrap mt-10 gap-[20px] sm:w-full" >
      <div
        class="image flex-auto w-[400px] max-h-[200px]"
        v-for="item in 5"
        :key="item"
      >
        <img
          :src="`https://picsum.photos/id/${50 + item}/1920/1080`"
          class="w-full h-full hover:scale-[1.03] duration-300 cursor-pointer duration-300 rounded-[10px] object-cover"
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