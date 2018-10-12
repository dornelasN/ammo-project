export default {
  category (category) {
    return {
      BED: {
        text: 'Cama'
      },
      BATH: {
        text: 'Banho'
      },
      DECORATION: {
        text: 'Decoração'
      },
      KIDS: {
        text: 'Kids'
      },
      BABY: {
        text: 'Baby'
      },
      SCENT: {
        text: 'Aroma'
      },
      KITCHEN: {
        text: 'Mesa'
      },
      OTHER: {
        text: 'Outros'
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
