# Technical Interview Challenge - Platform Engineer

Congratulations you made it to the Technical Interview Stage of our hiring process! Lean back, celebrate for a short moment and then dive into the preparation steps for the interview.

## Prerequisites

- Ensure you have NodeJS with version 12+ installed
- Ensure you have Docker installed

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

Having already a TypeScript setup in place you feel like it's time to migrate one of our business critical flows: The Booking Creation.
Usually nobody dares to touch them because they are known for being quite fragile, but you know that there's sometimes no way around.
What could go wrong, right? ;)

**Task**

Check out the booking creation API call (BookingController.js) and migrate its functionality to TypeScript and optimize the code (BookingController.ts).
Also migrate the corresponding services to TS (email.service.js and invoice.service.js)

Bear in mind to following ideas:
- This is a business critical workflow so think about how you can ensure that as little goes wrong as possible with your refactoring
- The most important objective is that the booking is created (as fast as possible). Other steps in the process are not time sensitive & are not critical systems.

Delivery items:
- Write down how you would approach such a refactoring task (Planning, execution steps, what to look out for, ...)
- Implement a working best-effort solution (yes it won't be perfect - we'll agree on how deep to go)
- Draw an optimal architecture for this flow and show us it's strengths and weaknesses

**Technical background**

- Start the client application with `yarn start-client`
- Deploy/Start the new lambda function with `yarn start-api`