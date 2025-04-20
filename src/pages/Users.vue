<template>
  <Loader v-if="isLoading" />
  <div>
    <h1>Пользователи</h1>

    <div v-if="isLoading">Загрузка...</div>
    <div v-else-if="error">{{ error }}</div>

    <ul v-else>
      <li v-for="user in users" :key="user.id">
        <strong>{{ user.name }}</strong> — {{ user.email }}
        <br />
        <router-link :to="`/users/${user.id}`">Подробнее</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useUsersStore } from "@/stores/usersStore";
import { Loader } from "@/components/Loader.vue";

const store = useUsersStore();

onMounted(() => {
  store.fetchUsers();
});

const { users, isLoading, error } = store;
</script>
