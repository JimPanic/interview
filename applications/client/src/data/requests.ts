export interface Session {
  id: number
  name: string
}

export interface Venue {
  id: number
  name: number
  sessions: Array<Session>
}

const requestUrl = 'http://localhost:4000'

export async function getVenues(): Promise<Array<Venue>> {
  const response = await fetch(`${requestUrl}/venue`, {
    method: 'GET',
  })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return response.json()
}

export async function createBooking(options: {
  sessionId: number
  questions: string
  friendNames: string
}): Promise<{ success: boolean }> {
  try {
    const response = await fetch(`${requestUrl}/booking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    })
    if (response.status !== 200) {
      throw new Error('Error submitting booking')
    }
    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false }
  }
}
