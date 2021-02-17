import React, { useRef, useState } from 'react'
import { createBooking, Session } from '../data/requests'

interface Props {
  session: Session
}

export const SessionComponent: React.FC<Props> = function ({ session }) {
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean | undefined>(undefined)

  const questionsRef = useRef<HTMLTextAreaElement>(null)
  const friendNamesRef = useRef<HTMLInputElement>(null)
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'normal',
          justifyContent: 'space-between',
        }}
      >
        <h3>{session.name}</h3>
        <button onClick={() => setShowBookingForm(true)}>Book Session</button>
      </div>
      {showBookingForm && (
        <div>
          <textarea
            placeholder="Questions?"
            name="questions"
            ref={questionsRef}
          />
          <input
            placeholder="Friends Names?"
            type="text"
            name="friendNames"
            ref={friendNamesRef}
          />
          <button
            onClick={async () => {
              setSubmitting(true)
              const { success } = await createBooking({
                sessionId: session.id,
                questions: questionsRef.current!.value,
                friendNames: friendNamesRef.current!.value,
              })
              setSubmitting(false)
              setSuccess(success)
            }}
          >
            Send Booking
          </button>
          {submitting && <p>Submitting Booking ..</p>}
          {success !== undefined && !submitting ? (
            success ? (
              <p>Booking created</p>
            ) : (
              <p>Booking creation failed</p>
            )
          ) : null}
        </div>
      )}
    </div>
  )
}
