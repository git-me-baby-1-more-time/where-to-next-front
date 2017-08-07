const store = require('./store')

const signUpSuccess = (response) => {
}

const signUpError = (response) => {
}

const signInSuccess = (response) => {
  store.user = response.user
  $('#-signup-modal').modal('hide')
  $('#-signup-button').addClass('hidden')
  $('#-logout-button').removeClass('hidden')
  $('#-changepwd-button').removeClass('hidden')
}

const signInError = (response) => {
}

const signOutSuccess = (response) => {
  store.user = undefined
  $('#-signup-button').removeClass('hidden')
  $('#-logout-button').addClass('hidden')
  $('#-changepwd-button').addClass('hidden')
  forceSignIn()
}

const signOutError = (response) => {
}

const changePasswordSuccess = (response) => {
  $('#-changepwd-modal').modal('hide')
}

const changePasswordError = (response) => {
}

const forceSignIn = function () {
  if (!store.user) {
    $('#-signup-modal').modal('show')
  }
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  signOutSuccess,
  signOutError,
  changePasswordSuccess,
  changePasswordError,
  forceSignIn
}


// 'use strict'
//
// const store = require('../store')
//
// const success = (data) => {
//   console.log(data)
// }
//
// const failure = (error) => {
//   console.error(error)
// }
//
// const signInSuccess = (data) => {
//   store.user = data.user
//   console.log("Signed in")
// }
//
// const signOutSuccess = () => {
//   console.log("Signed out")
//   console.log(store.user)
//   delete store.user
//   console.log(store.user)
// }
//
// module.exports = {
//   success,
//   failure,
//   signInSuccess,
//   signOutSuccess,
// }
