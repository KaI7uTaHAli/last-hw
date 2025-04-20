import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [],
    isLoading: false,
    error: null,
  }),

  actions: {
    async fetchUsers() {
      this.isLoading = true
      this.error = null
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.users = res.data
      } catch (err) {
        this.error = 'Ошибка при загрузке пользователей'
      } finally {
        this.isLoading = false
      }
    }
  }
})