# ToDo list interview project

Thanks for taking the time to interview! We really appreciate it, and we hope to see the best of your work.

## Rules

Please do this interview project on your own, without the help of anyone else.
With that being said, you are more than welcome to use the internet.
Google and Stack Overflow are invaluable tools in our daily lives, and we wouldn't expect you to do your best work without them.

We'd really like to see every part of your development process, so please _record your screen while you work_.

In addition to writing the code required by the instructions, write down your answers to the questions in the instructions directly in this README file.
Most of the questions are open ended, and you don't need to make your code handle the questions below each prompt.
Please do discuss how you would make your code handle those questions.
Clear writing and expressing your ideas is just as valuable as writing great code.

## Getting started

Make a fork of this repo on your own GitHub account and then clone it down to your personal computer.

- You'll need to run an instance of a Postgres database on your development machine.
  The `docker-compose.yml` file includes instructions to spin up an instance of Postgres and expose port 5555.
  If you can't use Docker, please send elliot@growtopline.com an email and we can figure something else out for you.
- Run `docker-compose up` to start the database
- Once you've started the database, please run the initialization script:
  `psql -f db-init.sql postgresql://local:local@localhost:5555/interview`.
  This will create a table `todo` in your database with columns `id`, `label` and `done`.
- Install dependencies for the project with `yarn install`.
- Start the backend server with `yarn server`.

If you have trouble, please don't hesitate to reach out.

## Instructions

1. Add an endpoint to get the number of completed todos
   - How does your solution scale with the number of todos? Would it work for >1 million todos?
   - How could you make the endpoint more performant? What would the tradeoffs be if you implemented that speed boost?
2. Make the server add a "Brush Teeth" todo every morning at 8am pacific time. You can use a library to schedule tasks.
   - How did you schedule your job?
   - What tradeoffs did you consider when picking your library (or creating your own scheduling service)?
   - What would happen if the job server was down at 8am - would the job eventually be created? (it's ok if the answer is "no", but please explain how you might solve the problem if the answer had to be "yes")
   - What would happen if you had multiple instances of the server - would multiple todos get created? (it's ok if the answer is "yes", but please explain how you might solve the problem if the answer had to be "no")
   - Can you test this job to make sure it works without having to wait for 8am to test it?
3. Make a job that adds a "Wear Sunscreen" todo every morning at 8am pacific time if the temperature in Atlanta will be above 75 degrees fahrenheit any time during the day. Use a 3rd party service to find the temperature.
   - What tradeoffs did you consider when picking your service?
   - How did you handle api secrets?
   - How would those secrets work in a production environment?
   - What could you do if there was an error when fetching temperature data so that users and engineers were informed and could take action? You don't need to implement this, but discuss what you would recommend to a UX designer and what tools you might use internally.
4. Write a unit test for the code you wrote in questions 3 and 4 using the unit testing framework of your choice.
   - What tradeoffs did you make in testability?
   - What did you have to fake or mock?
   - Why did you choose the the testing framework you chose?

## Tips

- The project needs some organization. Feel free to create as many files and folders as you need.
- Git is your friend. Commit often and use descriptive commit messages. Push your work to GitHub so you don't lose it.
- Get it working and then make it look good. Don't get lost in the perfect solution before you have a working solution.
- Write down your responses to all the questions in the prompt before moving on to the next prompt.
- Include more comments than you would in normal code. This will help us understand your thought process.
- Take breaks when you need them.
- You don't have to finish all of the prompts. We prefer thorough, well thought out responses over a complete solution without written responses.

## Responses

Please write your responses to the questions in the instructions here. Please indicate any tradeoffs you made.

1.
2.
3.
4.

## Submitting

To submit your code, send us a link to your repo.
Once we confirm that we've downloaded your work, please delete the repo you created so future candidates don't accidentally find your solution.

To submit your screen recording, please reach out to schedule a time we can use https://webwormhole.io/ to transfer the large file.
