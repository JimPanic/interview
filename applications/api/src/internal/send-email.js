/***************************************************
 ***************************************************
 * This file is out of scope of this challenge *****
 * Imagine this a wonderful file *******************
 * that you can just re-use ************************
 ***************************************************
 ***************************************************/

exports.sendEmail = async function sendEmail(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const worked = Math.random() > 0.3
      if (worked) {
        console.log('SUCCESS: Email Sending ')
        resolve()
      } else {
        console.error('ERROR: Email Sending')
        reject()
      }
    }, 3000)
  })
}
