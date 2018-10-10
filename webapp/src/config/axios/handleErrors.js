import Vue from 'vue'

const validationErrors = {
  page_required: 'O número da página é necessário',
  page_too_small: 'O número da página deve ser maior',

  limit_required: 'O limite de itens é necessário',
  limit_too_small: 'O limite de itens deve ser maior',
  limit_too_big: 'O limite de itens deve ser menor',

  invalid_fileType: 'Imagem inválida'
}

export default function handleErrors (error) {
  const {
    status,
    data: { message }
  } = { ...error.response }

  if (status === 500) {
    error.toasted = true
    if (message.includes('request entity too large')) {
      return Vue.toasted.global.error('O arquivo deve ter menos de 2,5MB')
    }
    return Vue.toasted.global.error('Erro interno do servidor. Tente novamente mais tarde.')
  } else if (status > 400) {
    Object.keys(validationErrors).some(errorString => {
      if (message.includes(errorString)) {
        Vue.toasted.global.error(validationErrors[errorString])
        error.toasted = true
      }
    })
  }
}
