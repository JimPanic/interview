# Technical Interview Challenge - Platform Engineer

Congratulations you made it to the Technical Interview Stage of our hiring process! Lean back, take a deep breath and then let's get started.

## Agenda

- Intro (10 min)
- Coding challenge (40 min)
- Technical question (20 min)
- Your questions (15 min)

## Prerequisites

- Ensure you have NodeJS with version 12+ installed
- Ensure you have Yarn 1.x installed

## Which skills do we want to check in this stage?

**Hard skills**

- Knowledge of React & TypeScript
- Using server technologies

**Soft skills**

- Use well-designed patterns and clear structures
- Grasp the scope of existing code and improve it
- Evaluate different approaches and choose the best-suited one

## The challenge

**Backstory**

A few years back an intern created a landing page where users can book free trials sessions of venues.
He created a React application that communicates with an NodeJS/Express API server. The API server provides some data to 
display on the client and also implements the booking creation of the trial sessions.

Already having a TypeScript setup in place you feel like it's time to migrate this critical business flow: The Booking Creation.
Usually nobody dares to touch it because they it is known for being quite fragile, but you know that there's sometimes no way around it.
What could go wrong, right? ;)

**Task**

Check out the booking creation API call (BookingController.js) and migrate its functionality to TypeScript and optimize the code (BookingController.ts).
Also migrate the corresponding services to TS (email.service.js and invoice.service.js)

Delivery items:
- Write down how you would approach such a refactoring task (Planning, execution steps, what to look out for, ...)
- Implement a working best-effort solution (yes it won't be perfect - we'll agree on how deep to go)
- Draw an optimal architecture for this flow and show us it's strengths and weaknesses

Hints:
- This is a business critical workflow so think about how you can ensure that as little goes wrong as possible with your refactoring
- The most important objective is that the booking is created (as fast as possible). Other steps in the process are not time sensitive & are not critical systems.

**Technical background**

- Start the client application with `yarn start-client`
- Deploy/Start the new lambda function with `yarn start-api`
