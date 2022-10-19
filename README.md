# ToDo list interview project

Thanks for taking the time to interview! We really appreciate it, and we hope to see the best of your work.

## Rules

Please do this interview project on your own, without the help of anyone else.
With that being said, you are more than welcome to use the internet.
Google and Stack Overflow are invaluable tools in our daily lives, and we wouldn't expect you to do your best work without them.

We'd really like to see every part of your development process, so please _record your screen while you work_.

In addition to writing the code required by the instructions, write down your answers to the questions in the instructions directly in this README file.

## Getting started

Make a fork of this repo on your own GitHub account and then clone it down to your personal computer.

You should be able to spin this app up using `yarn install` and `yarn start` (or `npm` if you prefer).
If you have trouble, please don't hesistate to reach out.

## Important Project contents

There are a few files that are important for this app:

### App.tsx

The main logic of the "frontend" of this app is in App.tsx. You should start your work there.

### ApiClient.ts

An API client that interacts with a fake database. Read the file over, but you should not need to edit it until the bonus section

### Prerequisites

- You'll need to run an instance of a Postgres database on your development machine.
  The `docker-compose.yml` file includes instructions to spin up an instance of Postgres and expose port 5432.
  If you can't use Docker, please send elliot@growtopline.com an email and we can figure something else out for you.
- Once you've started the databse, please run the initialization script:
  `psql -f server/db-init.sql postgresql://local:local@localhost:5432/interview`.
  This will create a table `todo` in your database with columns `label` and `done`.
- Install dependencies for the project with `yarn install`.
- Start the backend server with `yarn server`.
- Start the frontend development server with `yarn start`.

## Instructions

1. The page doesn't change when you click the "Add ToDo" button. Why not?
   Fix this bug and describe the tradeoffs in your implementation. Would your solution work if there were lots of (10,000+) todos?
   It's perfectly fine if the answer is no, but please discuss what would go wrong when the number of ToDos increases significantly
2. "Mark Done" doesn't appear to work at all. Why not?
   Fix this bug and make sure the page updates once the ToDo has been marked as "done".
   How could the API have been better designed to make the bug more noticable?
3. The ApiClient takes an argument `mockDelay`. Set that to `true` on line 5 of `App.tsx`.
   Add some visual indication to the UI during the initial "loading" time and any time the page is waiting for the server to respond.
   The style design doesn't need to look good, but it should indicate what the user can and cannot do.
4. Make the todo items re-orderable using drag-and-drop. Please use a 3rd party library for this. Why did you choose the library you used?

## Tips

- The project needs some organization. Feel free to create as many files and/or components as you need.
- Git is your friend. Commit often and use descriptive commit messages. Push your work to GitHub so you don't lose it.
- Get it working and then make it look good. Don't get lost in the perfect solution before you have a working solution.
- Include more comments than you would in normal code. This will help us understand your thought process.
- Take breaks when you need them.

## Responses

(your responses to the questions in the instructions should go here):

1.
2.
3.

## Submitting

To submit your code, send us a link to your repo.
Once we confirm that we've downloaded your work, please delete the repo you created so future candidates don't accidentally find your solution.

To submit your screen recording, please reach out to schedule a time we can use https://webwormhole.io/ to transfer the large file.
