import { useUsersStore } from '../store/store'

export const ListOfUsers = () => {
  const users = useUsersStore(state => state.users)
  const deleteUser = useUsersStore(state => state.deleteUser)
  const handleDelete = (id: string) => {
    deleteUser(id)
  }

  return (
        <div className='grid gap-3'>
          {
            users.map(user => (
              <ul className='flex gap-3 border-2 border-black rounded-lg p-4' key={user.id}>
                <li>{user.id}</li>
                <li className='flex'>
                  <img
                  className='w-8 rounded-lg mx-3'
                  src={`https://unavatar.io/github/${user.github}`}
                  alt={user.name}
                />
                  {user.name}
                </li>
                <li>{user.email}</li>
                <li className='mx-auto'>
                  <button onClick={() => { handleDelete(user.id) }}>Delete</button>
                  <button>Editar</button>
                </li>
              </ul>
            ))
            }
        </div>
  )
}
