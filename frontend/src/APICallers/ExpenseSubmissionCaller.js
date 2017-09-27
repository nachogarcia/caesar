async function getExpenseSubmissions () {
  return Promise.resolve(
    [
      { id: 'e1',
        user_id: 'u1',
        date: '2017-04-02',
        concept: 'Qcon London',
        state: 'submitted',
        expenses: [
          { id: 'e1', activity_id: 'a1', date: '2017-04-01', concept: 'Train', amount: 9.85, modified: '' },
          { id: 'e2', activity_id: 'a1', date: '2017-04-01', concept: 'Food', amount: 10.85, modified: ''  },
          { id: 'e3', activity_id: 'a2', date: '2017-03-28', concept: 'Consulting', amount: 900.43, modified: ''  }
        ]
      },
      { id: 'e2',
        user_id: 'u1',
        date: '2016-05-01',
        concept: 'Client expenses',
        state: 'rejected',
        expenses: [
          { id: 'e4', activity_id: 'a1', date: '2017-04-01', concept: 'Metro', amount: 6.50, modified: ''  },
          { id: 'e5', activity_id: 'a3', date: '2017-04-01', concept: 'Coaching', amount: 100, modified: ''  },
          { id: 'e6', activity_id: 'a2', date: '2017-03-28', concept: 'Consulting', amount: 1000, modified: ''  }
        ]
      },
      { id: 'e3',
        user_id: 'u2',
        date: '2017-08-03',
        concept: 'Barcelona Trip',
        state: 'accepted',
        expenses: [
          { id: 'e7', activity_id: 'a1', date: '2017-04-01', concept: 'Bus', amount: 30.40, modified: '2017-08-04'  },
          { id: 'e8', activity_id: 'a1', date: '2017-04-01', concept: 'Food', amount: 10.85, modified: '2017-08-04'  },
          { id: 'e9', activity_id: 'a1', date: '2017-03-28', concept: 'Food', amount: 10.85, modified: ''  }
        ]
      },
      { id: 'e4',
        user_id: 'u2',
        date: '2015-03-02',
        concept: 'Recruiting expenses',
        state: 'saved',
        expenses: [
          { id: 'e10', activity_id: 'a1', date: '2017-04-01', concept: 'Train', amount: 142.99, modified: ''  },
          { id: 'e11', activity_id: 'a1', date: '2017-04-01', concept: 'Food', amount: 20.43, modified: ''  },
          { id: 'e12', activity_id: 'a1', date: '2017-03-28', concept: 'Food', amount: 10, modified: ''  }
        ]
      },
      { id: 'e5',
        user_id: 'u3',
        date: '2017-04-02',
        concept: 'Catch-Up',
        state: 'payed',
        expenses: [
          { id: 'e13', activity_id: 'a4', date: '2017-04-01', concept: 'Consulting', amount: 653.53, modified: ''  },
          { id: 'e14', activity_id: 'a3', date: '2017-04-01', concept: 'Consulting', amount: 102.85, modified: ''  },
          { id: 'e15', activity_id: 'a2', date: '2017-03-28', concept: 'Consulting', amount: 90.45, modified: '2017-04-05'  }
        ]
      }
    ]
  )
}

export default getExpenseSubmissions
