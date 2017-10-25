import Expense from '@/domain/Expense'
import Status from '@/domain/Status'

async function getExpenses (findUser, findActivity, findImage) {
  const expenses = await Promise.resolve(
    [
      { id: 'e1',
        user_id: 'u1',
        activity_id: 'a1',
        image_id: 'img1',
        concept: 'Qcon London',
        amount: 9.85,
        status: {
          submitted: '2017-04-01'
        }
      },
      { id: 'e2',
        user_id: 'u1',
        activity_id: 'a1',
        image_id: 'img2',
        concept: 'Qcon Valencia',
        amount: 109.54,
        status: {
          submitted: '2017-04-01',
          accepted: '2017-04-02'
        }
      },
      { id: 'e3',
        user_id: 'u2',
        activity_id: 'a3',
        image_id: 'img3',
        concept: 'Meetup',
        amount: 432.43,
        status: {
          submitted: '2017-04-01',
          rejected: '2017-04-02'
        }
      },
      { id: 'e4',
        user_id: 'u3',
        activity_id: 'a3',
        image_id: 'img4',
        concept: 'Meetup',
        amount: 32.42,
        status: {
          submitted: '2017-04-01',
          accepted: '2017-04-02',
          payed: '2017-04-20'
        }
      }
    ]
  )

  return Promise.all(
    expenses.map(async data =>
      new Expense(
        data.id,
        findUser(data.user_id),
        findActivity(data.activity_id),
        await findImage(data.image_id),
        data.concept,
        data.amount,
        new Status(data.status)
      )
    )
  )
}

export default getExpenses
