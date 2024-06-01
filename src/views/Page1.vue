<template>
  <p class="hidden lg:flex absolute mt-8 text-bright w-20 cursor-default">
    / Page1
  </p>
  <div>
    <UserList :page="1" />
    <BackButton />
  </div>
</template>

<script>
  import UserList from '../components/UserList.vue';
  import BackButton from '../components/BackButton.vue';

  export default {
    name: 'Page1',
    components: {
      UserList,
      BackButton
    }
  };
</script>
