async function getUsers () {
  return Promise.resolve(
    [
      {
        id: 'u1',
        name: 'User1',
        role: ['Apprentice'],
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
        role: ['expense-approver'],
        active: false
      }
    ]
  )
}

export default getUsers
