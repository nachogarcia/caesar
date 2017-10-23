const statusVariants = {
  'accepted': 'info',
  'submitted': 'primary',
  'saved': 'secondary',
  'payed': 'success',
  'rejected': 'danger'
}

export default status => statusVariants[status]
