<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  >
    <div class="bg-white rounded-lg p-6 shadow-lg w-80">
      <p class="text-center mb-4">This will open your default email. Ok?</p>
      <div class="flex justify-around mt-6">
        <button
          @click="confirm"
          class="bg-vendre text-white py-2 px-4 rounded hover:opacity-80"
        >
          To email
        </button>
        <button
          @click="close"
          class="bg-transparent hover:underline text-dark py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isVisible: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      confirm() {
        this.$emit('confirm');
      },
      close() {
        this.$emit('close');
      }
    }
  };
</script>
