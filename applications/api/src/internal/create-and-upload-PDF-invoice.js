/***************************************************
 ***************************************************
 * This file is out of scope of this challenge *****
 * Imagine this a wonderful file *******************
 * that you can just re-use ************************
 ***************************************************
 ***************************************************/

exports.createAndUploadPDFInvoice = async function createAndUploadPDFInvoice(
  data
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const worked = Math.random() > 0.2
      if (worked) {
        console.log('SUCCESS: PDF Upload')
        resolve()
      } else {
        console.error('ERROR: PDF Upload')
        reject()
      }
    }, 3000)
  })
}
