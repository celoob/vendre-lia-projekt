<template>
  <div class="flex w-full lg:justify-end justify-center">
    <router-link to="/" class="flex lg:justify-end justify-center m-2 w-28 h-12"
      ><a
        href="#_"
        class="rounded relative inline-flex group items-center justify-center text-md px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:shadow-none shadow-lg text-white bg-backb font-semibold w-28 h-12 hover:opacity-85 hover:text-white from-backb to-dark border-backb"
      >
        <span
          class="absolute w-0 h-0 transition-all duration-300 ease-out bg-light rounded-full group-hover:w-44 group-hover:h-28 opacity-10 text-white"
        ></span>
        <svg
          width="96"
          height="72"
          viewBox="0 0 96 72"
          fill="current"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-white w-5 mr-2"
        >
          <path
            d="M88 0H28C25.24 0 23.08 1.4 21.64 3.52L0 36L21.64 68.44C23.08 70.56 25.24 72 28 72H88C92.4 72 96 68.4 96 64V8C96 3.6 92.4 0 88 0ZM76 50.36L70.36 56L56 41.64L41.64 56L36 50.36L50.36 36L36 21.64L41.64 16L56 30.36L70.36 16L76 21.64L61.64 36L76 50.36Z"
            fill="current"
          />
        </svg>
        <span class="relative mt-1 mr-1"> back </span>
      </a></router-link
    >
  </div>
</template>

<script>
  export default {
    name: 'BackButton'
  };
</script>

<style scoped>
  .active {
    padding: 10px;
  }
</style>
