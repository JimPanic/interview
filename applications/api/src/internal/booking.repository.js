/***************************************************
 ***************************************************
 * This file is out of scope of this challenge *****
 * Imagine this a wonderful file *******************
 * that you can just re-use ************************
 ***************************************************
 ***************************************************/

let lastBookingId = 0
const bookings = {}

async function createBooking(booking) {
  const dbBooking = { ...booking, id: ++lastBookingId }
  bookings[lastBookingId] = dbBooking
  return dbBooking
}

async function getBooking(id) {
  const booking = bookings[id]
  if (!booking) throw new Error(`Booking with id ${id} does not exist`)
  return booking
}

module.exports = { createBooking, getBooking }
