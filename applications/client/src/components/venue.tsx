import React from 'react'
import { Venue } from '../data/requests'
import { SessionComponent } from './session'

interface Props {
  venue: Venue
}

export const VenueComponent: React.FC<Props> = function ({ venue }) {
  console.log('Render Venue component')
  return (
    <div>
      <h2>{venue.name}</h2>
      {!venue.sessions.length ? (
        <p>No sessions available</p>
      ) : (
        venue.sessions.map((session) => (
          <SessionComponent key={session.id} session={session} />
        ))
      )}
    </div>
  )
}
