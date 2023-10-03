import { create } from 'zustand'
import { getAllUsers } from '../services/users'
import { persist } from 'zustand/middleware'

interface User {
  name: string
  email: string
  github: string
}

interface Users extends User {
  id: string
}

interface State {
  users: Users[]
  fetchUsers: () => Promise<void>
  deleteUser: (id: string) => void
  addNewUser: (user: User) => void
}

// addNewUser, deleteUserById, rollbackUser

export const useUsersStore = create<State>()(persist((set, get) => {
  return {
    users: [],

    fetchUsers: async () => {
      const users = await getAllUsers()
      set({ users })
    },

    deleteUser: (id: string) => {
      const { users } = get()
      const newUsers = users.filter(user => user.id !== id)
      set({ users: newUsers })
    },

    addNewUser: (user: User) => {
      console.log(user)
      const { users } = get()
      const id = crypto.randomUUID()
      set({ users: [...users, { id, ...user }] })
    }
  }
}, {
  name: 'users'
}))
