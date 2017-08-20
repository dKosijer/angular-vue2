import * as types from './actions-types.js'

const angularLink = {}

const actions = {
  [types.LOCAL] () { console.log('local') },
  [types.USE] ({dispatch}) {
    angularLink.use();
    dispatch('PRINT')
  }
}

export default actions

export function AngularService ($timeout) {
  const link = {
    use: use
  }

  this.linkStore = () => {
    angular.merge(angularLink, link)
  }

  function use () {
    $timeout(()=>{console.log('timeout')})
    console.log('service used')
  }

  console.log('register state')
}

