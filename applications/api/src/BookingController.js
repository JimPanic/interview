const { getBooking, createBooking } = require('./internal/booking.repository')
const { sendInvoiceEmail } = require('./business/email.service')
const { createInvoice } = require('./business/invoice.service')

exports.create = function create(req, res) {
  console.info('Creating a booking')

  // Retrieve request options
  const body = req.body

  // Validate incoming options
  if (!body.sessionId) {
    console.info('No session ID passed in')
    res.sendStatus(500)
    res.end({ message: 'Invalid Arguments' })
  }

  // Create booking object
  const booking = {
    status: 'CREATED',
    sessionId: body.sessionId,
    questions: body.questions,
    friendNames: body.friendNames,
  }

  // If no friends are joining put in none
  if (!booking.friendNames) {
    booking.friendNames = 'None'
  }
  // Declare if friends are being brought for easier access & filtering
  if (booking.friendNames) {
    booking.bringsFriend = true
  }
  // Check that questions are trimmed and not longer then 25 characters because of database size limit
  if (booking.questions) {
    booking.questions = (booking.questions || '').trim().substr(0, 25)
  }

  // Create everything and respond
  createInvoice({ sessionId: body.sessionId, freeInvoice: true })
    .then((invoice) => sendInvoiceEmail({ invoice: invoice }))
    .then(() => createBooking(booking))
    .then((booking) => {
      console.info('Booking Creation Completed')
      res.sendStatus(200)
      res.end(booking)
    })
    .catch((error) => {
      console.info('Booking Creation Failed')
      res.sendStatus(500)
      res.end({ message: 'Internal Server Error' })
    })
}

exports.get = function get(req, res) {
  const params = req.params
  getBooking(params.id || 1)
    .then((booking) => res.json(booking))
    .catch((error) => {
      res.sendStatus(500)
      res.end('Booking not found')
    })
}
