import { Request, Response } from 'express'

function getVenues(req: Request, res: Response): void {
  res.json([
    {
      id: 1,
      name: 'Ultimate Yoga One Berlin',
      sessions: [
        { id: 1, name: 'Deep Yoga' },
        { id: 2, name: 'Ultra Deep Yoga' },
        { id: 3, name: 'Probably Deepest Yoga' },
      ],
    },
    {
      id: 2,
      name: 'Mindful Mediation Vienna',
      sessions: [
        { id: 4, name: 'Mindful One' },
        { id: 5, name: 'Mindful Three' },
      ],
    },
    {
      id: 3,
      name: 'Power Crossfit',
      sessions: [],
    },
  ])
}

module.exports = { getVenues }
