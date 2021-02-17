import React, { useEffect, useState } from 'react'
import './App.css'
import { VenueComponent } from './components/venue'
import { getVenues, Venue } from './data/requests'
import logo from './logo.svg'

function App(): JSX.Element {
  const [venues, setVenues] = useState<Array<Venue>>([])
  useEffect(() => {
    void getVenues().then((response) => {
      setVenues(response)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Venues</h1>
        {venues.map((venue) => (
          <VenueComponent key={venue.id} venue={venue} />
        ))}
      </header>
    </div>
  )
}

export default App
