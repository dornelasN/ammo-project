export default {
  category (category) {
    return {
      BED: {
        text: 'Cama',
        color: 'red'
      },
      BATH: {
        text: 'Banho',
        color: 'red'
      },
      DECORATION: {
        text: 'Decoração',
        color: 'red'
      },
      KIDS: {
        text: 'Kids',
        color: 'red'
      },
      BABY: {
        text: 'Baby',
        color: 'red'
      },
      SCENT: {
        text: 'Aroma',
        color: 'red'
      },
      KITCHEN: {
        text: 'Mesa',
        color: 'red'
      },
      OTHER: {
        text: 'Outros',
        color: 'red'
      }
    }[category]
  },

  status (status) {
    return {
      ACTIVE: {
        text: 'ativo',
        variant: 'success'
      },
      INACTIVE: {
        text: 'inativo',
        variant: 'warning'
      }
    }[status]
  }
}
