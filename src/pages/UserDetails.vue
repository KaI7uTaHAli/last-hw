<template>
  <Loader v-if="isLoading" />
  <div v-if="isLoading">Загрузка...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <h2>{{ user.name }}</h2>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <p><strong>Город:</strong> {{ user.address.city }}</p>
    <p><strong>Компания:</strong> {{ user.company.name }}</p>

    <hr />

    <h3>Посты пользователя:</h3>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <strong>{{ post.title }}</strong
        ><br />
        {{ post.body }}
      </li>
    </ul>

    <router-link to="/users">← Назад к списку</router-link>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import Loader from "@/components/Loader.vue";

const route = useRoute();
const userId = route.params.id;

const user = ref(null);
const posts = ref([]);
const isLoading = ref(true);
const error = ref(null);

onMounted(async () => {
  isLoading.value = true;
  try {
    const [userRes, postsRes] = await Promise.all([
      axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
    ]);

    user.value = userRes.data;
    posts.value = postsRes.data;
  } catch (err) {
    error.value = "Ошибка при загрузке данных";
  } finally {
    isLoading.value = false;
  }
});
</script>
