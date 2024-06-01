<template>
  <div class="flex justify-center lg:mt-16 overflow-hidden">
    <ul
      class="grid grid-cols-1 grid-rows-6 lg:grid-cols-2 lg:grid-rows-3 lg:justify-self-center text-dark bg-white w-[96vw] lg:w-[48rem] lg:h-[26rem] lg:p-4 my-4 rounded-2xl"
    >
      <li v-for="user in users" :key="user.id" class="flex p-2 m-2 gap-6">
        <img
          :src="user.avatar"
          :alt="user.first_name"
          class="rounded-full max-w-24 max-h-24 object-cover"
        />
        <div class="place-self-start mt-1">
          <h2 class="font-semibold">
            {{ user.first_name }} {{ user.last_name }}
          </h2>
          <a
            @click="toggleDetails(user.id)"
            class="text-vendre cursor-pointer text-sm"
          >
            {{ user.showDetails ? 'Hide Details' : 'Show Details' }}
          </a>
          <div v-if="user.showDetails" class="mt-2 flex gap-1 items-center">
            <a
              @click.prevent="openModal(user.email)"
              class="flex py-1 hover:text-vendre cursor-pointer"
            >
              <p class="text-sm">{{ user.email }}</p>
            </a>

            <div class="relative group bg-transparent mb-1">
              <button
                @click="copyEmail(user.id)"
                class="text-vendre bg-transparent"
              >
                <svg
                  v-if="!user.copied"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="current"
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon hover:opacity-80 hover:bg-light fill-dark hover:fill-dvendre p-1 rounded-md transition-opacity duration-300 ease-in-out"
                >
                  <g clip-path="url(#a)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 5h7.795c1.115 0 1.519.116 1.926.334.407.218.727.538.945.945.218.407.334.811.334 1.926V16a1 1 0 1 0 2 0V8.128c0-1.783-.186-2.43-.534-3.082a3.635 3.635 0 0 0-1.512-1.512C18.302 3.186 17.655 3 15.872 3H8a1 1 0 0 0 0 2zm7.721 2.334C15.314 7.116 14.91 7 13.795 7h-7.59c-1.115 0-1.519.116-1.926.334a2.272 2.272 0 0 0-.945.945C3.116 8.686 3 9.09 3 10.205v7.59c0 1.114.116 1.519.334 1.926.218.407.538.727.945.945.407.218.811.334 1.926.334h7.59c1.114 0 1.519-.116 1.926-.334.407-.218.727-.538.945-.945.218-.407.334-.811.334-1.926v-7.59c0-1.115-.116-1.519-.334-1.926a2.272 2.272 0 0 0-.945-.945z"
                      fill="#current"
                    />
                  </g>

                  <defs>
                    <clipPath id="a">
                      <path fill="#current" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="icon hover:bg-light fill-dark hover:fill-dvendre p-1 rounded-md transition-opacity duration-300 ease-in-out absolute inset-0"
                >
                  <path
                    d="M10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  ></path>
                </svg>
              </button>
              <span class="tooltip-text group-hover:opacity-100">Copy</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <modal
      :isVisible="isModalVisible"
      @confirm="confirmNavigation"
      @close="closeModal"
    />
  </div>
  <div class="flex justify-center">
    <ul class="flex gap-6 p-6">
      <li>
        <router-link
          to="/page1"
          class="text-vendre font-bold bg-transparent py-4 px-5 border-2 border-vendre hover:opacity-85"
          active-class="active"
          >1</router-link
        >
      </li>
      <li>
        <router-link
          to="/page2"
          class="text-vendre font-bold bg-transparent py-4 px-5 border-2 border-vendre hover:opacity-90"
          active-class="active"
          >2</router-link
        >
      </li>
    </ul>
    <p class="text-center my-auto w-24">Page {{ page }}/2</p>
  </div>
</template>

<script>
  import Modal from './Modal.vue';

  export default {
    components: {
      Modal
    },
    props: {
      page: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        users: [],
        isModalVisible: false,
        emailToOpen: ''
      };
    },
    async created() {
      const response = await fetch(
        `https://reqres.in/api/users?page=${this.page}`
      );
      const data = await response.json();
      this.users = data.data.map((user) => ({
        ...user,
        showDetails: false,
        copied: false
      }));
    },
    methods: {
      copyEmail(userId) {
        const user = this.users.find((user) => user.id === userId);
        if (user) {
          navigator.clipboard.writeText(user.email).then(() => {
            user.copied = true;
            setTimeout(() => {
              user.copied = false;
            }, 2000);
          });
        }
      },
      toggleDetails(userId) {
        this.users = this.users.map((user) =>
          user.id === userId
            ? { ...user, showDetails: !user.showDetails }
            : user
        );
      },
      openModal(email) {
        this.emailToOpen = email;
        this.isModalVisible = true;
      },
      confirmNavigation() {
        window.location.href = `mailto:${this.emailToOpen}`;
        this.isModalVisible = false;
      },
      closeModal() {
        this.isModalVisible = false;
        this.emailToOpen = '';
      }
    }
  };
</script>

<style>
  .icon {
    transition: opacity 0.3s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
  }

  .tooltip-text {
    opacity: 0;
    font-size: 0.9rem;
    transition: opacity 0.3s ease-in-out;
    position: absolute;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #000000bb;
    color: #fff;
    text-align: center;
    padding: 5px 10px;
    border-radius: 6px;
    z-index: 1;
  }

  .group:hover .tooltip-text {
    opacity: 1;
  }
</style>
