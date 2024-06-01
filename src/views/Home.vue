<template>
  <p class="hidden lg:flex absolute mt-8 text-bright w-20 cursor-default">
    / Home
  </p>
  <div class="flex lg:w-[48rem] lg:h-[26rem] justify-center lg:items-center">
    <router-link to="/page1">
      <a
        href="#_"
        class="rounded relative inline-flex group items-center justify-center text-2xl px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:shadow-none shadow-lg text-light bg-vendre font-bold w-80 h-24 hover:opacity-85 hover:text-white from-dvendre to-blue-500 border-dvendre lg:right-5"
      >
        <span
          class="absolute w-0 h-0 transition-all duration-300 ease-out bg-light rounded-full group-hover:w-[22rem] group-hover:h-48 opacity-10"
        ></span>
        <span class="relative mt-1">START</span>
      </a>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  };
</script>
