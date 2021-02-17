const {
  createAndUploadPDFInvoice,
} = require('../internal/create-and-upload-PDF-invoice')

/**
 * Creates the invoice
 * @param invoice { sessionId: number, status: "OPEN" | "PAID" | "CANCELLED", amount: number}
 * @returns Promise<void>
 */
exports.createInvoice = function createInvoice(invoice) {
  // Hmm so apparently this fails from time to time ...
  return createAndUploadPDFInvoice(invoice)
}
