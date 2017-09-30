import Activity from '@/domain/Activity'

async function getActivities () {
  const activities = await Promise.resolve(
    [
      {
        id: 'a1',
        name: 'Conference',
        description: 'Conference allowance',
        activitytype: 'Daily',
        is_billable: false
      },
      {
        id: 'a2',
        name: 'Company1',
        description: 'Work for the Company1 service',
        activitytype: 'Daily',
        is_billable: true
      },
      {
        id: 'a3',
        name: 'Bad Company2',
        description: 'Work for the Company2 service',
        activitytype: 'Hourly',
        is_billable: true
      },
      {
        id: 'a4',
        name: 'Good Company3',
        description: '',
        activitytype: 'Daily',
        is_billable: true
      }
    ]
  )

  return activities.map(data =>
    new Activity(
      data.id,
      data.name,
      data.description,
      data.activitytype,
      data.is_billable
    )
  )
}

export default getActivities
