import React from 'react'
import { useUsersStore } from '../store/store'

export function CreateNewUser () {
  const addNewUser = useUsersStore(state => state.addNewUser)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string
    console.log(form)

    addNewUser({ name, email, github })
  }

  return (
        <div>
            <h2>Create a New User</h2>
            <form onSubmit={handleSubmit}>
                <input name='name' placeholder="Aqui nombre" type="text" />
                <input name='email' placeholder="Aqui Email" type="text" />
                <input name='github' placeholder="Aqui Usuario Github" type="text" />
            <div>
                <button type="submit">Crear Usuario</button>
            </div>
            </form>
        </div>
  )
}
