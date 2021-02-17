const { sendEmail } = require('../internal/send-email')

/**
 * Sends email
 * @param invoice { sessionId: number, status: "OPEN" | "PAID" | "CANCELLED", amount: number}
 * @returns Promise<void>
 */
exports.sendInvoiceEmail = function sendInvoiceEmail(invoice) {
  // Hmm so apparently this fails from time to time ...
  return sendEmail(invoice)
}
