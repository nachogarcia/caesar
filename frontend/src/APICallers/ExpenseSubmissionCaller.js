async function getExpenseSubmissions () {
  return Promise.resolve(
    [
      { id: 'e1',
        user_id: 'u1',
        date: '2017-04-02',
        concept: 'Qcon London',
        state: 'submitted',
        modified_by_reviewer: true,
        expenses: [
          { activity_id: 'a1', date: '2017-04-01', concept: 'Train', amount: 9.85 },
          { activity_id: 'a1', date: '2017-04-01', concept: 'Food', amount: 10.85 },
          { activity_id: 'a2', date: '2017-03-28', concept: 'Consulting', amount: 900.43 }
        ]
      },
      { id: 'e2',
        user_id: 'u1',
        date: '2016-05-01',
        concept: 'Client expenses',
        state: 'rejected',
        modified_by_reviewer: false,
        expenses: [
          { activity_id: 'a1', date: '2017-04-01', concept: 'Metro', amount: 6.50 },
          { activity_id: 'a3', date: '2017-04-01', concept: 'Coaching', amount: 100 },
          { activity_id: 'a2', date: '2017-03-28', concept: 'Consulting', amount: 1000 }
        ]
      },
      { id: 'e3',
        user_id: 'u2',
        date: '2017-08-03',
        concept: 'Barcelona Trip',
        state: 'reviewed',
        modified_by_reviewer: false,
        expenses: [
          { activity_id: 'a1', date: '2017-04-01', concept: 'Bus', amount: 30.40 },
          { activity_id: 'a1', date: '2017-04-01', concept: 'Food', amount: 10.85 },
          { activity_id: 'a1', date: '2017-03-28', concept: 'Food', amount: 10.85 }
        ]
      },
      { id: 'e4',
        user_id: 'u2',
        date: '2015-03-02',
        concept: 'Recruiting expenses',
        state: 'saved',
        modified_by_reviewer: false,
        expenses: [
          { activity_id: 'a1', date: '2017-04-01', concept: 'Train', amount: 142.99 },
          { activity_id: 'a1', date: '2017-04-01', concept: 'Food', amount: 20.43 },
          { activity_id: 'a1', date: '2017-03-28', concept: 'Food', amount: 10 }
        ]
      },
      { id: 'e5',
        user_id: 'u3',
        date: '2017-04-02',
        concept: 'Catch-Up',
        state: 'payed',
        modified_by_reviewer: true,
        expenses: [
          { activity_id: 'a4', date: '2017-04-01', concept: 'Consulting', amount: 653.53 },
          { activity_id: 'a3', date: '2017-04-01', concept: 'Consulting', amount: 102.85 },
          { activity_id: 'a2', date: '2017-03-28', concept: 'Consulting', amount: 90.45 }
        ]
      }
    ]
  )
}

export default getExpenseSubmissions
