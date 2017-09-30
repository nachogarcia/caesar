import User from '@/domain/User'

async function getUsers () {
  const users = await Promise.resolve(
    [
      {
        id: 'u1',
        name: 'User1',
        role: ['expense-approver'],
        active: true
      },
      {
        id: 'u2',
        name: 'User2',
        role: ['Craftsman', 'Head of something'],
        active: true
      },
      {
        id: 'u3',
        name: 'User3',
        role: ['Apprentice'],
        active: false
      }
    ]
  )

  return users.map(data =>
    new User(
      data.id,
      data.name,
      data.role,
      data.active
    )
  )
}

export default getUsers
