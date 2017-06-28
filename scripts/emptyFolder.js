import fs from 'fs-extra'

/* eslint-disable no-console */

function emptyDist() {
  return Promise.all([
    new Promise((resolve, reject) => {
      fs.emptyDir('../../dist', (err) => {
        if (err) {
          console.error(err)
          reject()
        } else {
          console.log('Emptying dist directory job is done')
          resolve()
        }
      })
    }),
    new Promise((resolve, reject) => {
      fs.emptyDir('../../build', (err) => {
        if (err) {
          console.error(err)
          reject()
        } else {
          console.log('Emptying build directory job is done')
          resolve()
        }
      })
    }),
  ])
}

emptyDist()
