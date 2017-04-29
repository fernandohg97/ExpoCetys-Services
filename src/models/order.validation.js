/**
 * Created by FER on 4/8/2017.
 */
'use strict'

class Validation {
  static get detailsValidation () {
    return [{
      validator: (details) => {
        return details.length > 0
      },
      message: 'Los detalles estan vacios'
    }]
  }

  static get orderDateValidation () {
    return [{
      validator: (date) => {
        let today = new Date()
        return date >= today
      },
      message: 'La fecha ya paso'
    }]
  }

  static get presentationValidation () {
    return [{
      validator: (servings) => {
        return servings > 0
      },
      message: 'El producto debe contener cierta cantidad de porciones'
    }]
  }

}
module.exports = Validation
