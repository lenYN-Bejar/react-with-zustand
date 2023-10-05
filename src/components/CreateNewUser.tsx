import React, { useState } from 'react'
import { useUsersStore } from '../store/store'

export function CreateNewUser () {
  const [result, setResult] = useState<'ok' | 'ko' | null>(null)

  const addNewUser = useUsersStore(state => state.addNewUser)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult(null)
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string

    if (!name || !email || !github) {
      setResult('ko'); return
    }

    addNewUser({ name, email, github })
    setResult('ok')

    form.reset()
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
                <span>
                  {result === 'ok' && <p>Guardado Correctamente</p>}
                  {result === 'ko' && <p>Error en los campos</p>}
                </span>
            </div>
            </form>
        </div>
  )
}
