const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { getVenues } = require('./VenueController.ts')
const {
  create: createBooking,
  get: getBooking,
} = require('./BookingController')
const app = express()
const port = 4000

// Inject JSON parsing middleware
app.use(express.json())
app.use(cors())

// This endpoint is not really used I think???
app.get('/', (req, res) => {
  res.send('API endpoint working')
})

/**
 * Booking API: Create booking for a user
 */
app.post('/booking', createBooking)
app.get('/booking/:id', getBooking)

/**
 * Venue API: Get venues and sessions
 */
app.get('/venue', getVenues)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// A lot of other things happening later on in this file (not your concern)
app.all('/unimportant-other-route', (req, res) => {
  res.send('I am rather unimportant')
})
