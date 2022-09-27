# ToDo list interview project

Thanks for taking the time to interview! We really appreciate it, and we hope to see the best of your work.

## Rules

Please do this interview project on your own, without the help of anyone else.
With that being said, you are more than welcome to use the internet.
Google and Stack Overflow are invaluable tools in our daily lives, and we wouldn't expect you to do your best work without them.
We really like to see every part of your development process, so please record your screen while you work.

In addition to writing the code required by the instructions, please write down your answers to the questions in the instructions.
Please include the answers directly in this README file.

## Getting started

Please make a fork of this repo on your own GitHub account and then clone it down to your personal computer.

You should be able to spin this app up using `yarn install` and `yarn start` (or `npm` if you prefer).
If you have trouble, please don't hesistate to reach out.

## Important Project contents

There are a few files that are important for this app:

### App.tsx

The main logic of the "frontend" of this app is in App.tsx. You should start your work there.

### ApiClient.ts

An API client that interacts with a fake database. Please read this, but you should not need to edit it until the bonus section

## Instructions

1. The page doesn't change when you click the "Add ToDo" button. Why not?
   Please fix this bug and describe the tradeoffs in your implementation. Would your solution work if there were lots of (10,000+) todos?
   It's perfectly fine if the answer is no, but please discuss what would go wrong when the number of ToDos increases significantly
2. "Mark Done" doesn't appear to work at all. Why not?
   Please fix this bug and make sure the page updates once the ToDo has been marked as "done".
   How could the API have been better designed to make the bug more noticable?
3. The ApiClient takes an argument `mockDelay`. Please set that to `true` on line 5 of `App.tsx`.
   Please add some visual indication to the UI during the initial "loading" time and any time the page is waiting for the server to respond.
   The design doesn't need to look good, but it should indicate what the user can and cannot do.
4. Bonus! Make the todo items re-orderable using drag-and-drop. You are more than welcome to use a 3rd party library for this, or you can roll vanilla.

## Tips

- The project needs some organization. Feel free to create as many files and/or components as you need.
- Git is your friend. Please commit often and use descriptive commit messages.
- Get it working and then make it look good. Don't get lost in the perfect solution before you have a working solution.
- Include more comments than you would in normal code. This will help us understand your thought process.
- Take breaks when you need them.

## Responses

(your responses to the questions in the instructions should go here):

1.
2.
3.

## Submitting

To submit your code, please make a pull request from your fork of this repo to the upstream branch at https://github.com/GrowtTopline/todo-interview.

To submit your screen recording, please reach out to schedule a time we can use https://webwormhole.io/ to transfer the large file.
