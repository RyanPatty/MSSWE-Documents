Setting up the Backend:


mkdir quiz-app
cd quiz-app
Initialize a new Node.js application:


npm init -y
Install necessary packages:


npm install express mongoose cors dotenv
Install development dependencies:


npm install --save-dev nodemon
In your package.json, add a start script:


"scripts": {
  "start": "nodemon server.js"
},
Create a new server.js file in the root directory of your project.


Need backend endpoint /quizzes/:quizId/evaluate