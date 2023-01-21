# Social Network Api

## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usuage](#usage)
  * [Demo](#demo)
  * [ToDo's](#todos)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
 
 This is an API for a social network web app, where users can share thoughts, react to other friends thoughts, add and delete friends.

  
  ## Installation
  <h3> To use this project you will need these programs installed on your machine:<h3>
  
  * VS Code
  * Node.js
  * Express
  * MongoDB
  * Mongoose ODM
  * Postman or Insomnia
  
  
  <h3> Steps to initialize this project locally on your machine <h3>
    
    1. Copy link from [Github](https://github.com/CRMclaughlin/social-network-api) repo and clone to your coding workspace
    2. In your terminal use the command `npm init -y` to install Node Package Manager
    3. In your terminal use the command `npm run dev` to start your server
    4. Open your API tool and follow the steps described in usage

  
## Usage 
  
* On Postman, the following API routes have been created to add, update, remove users, friends, thougths, and reactions in the user's database

 **USER**
  * Create a new user:  `POST /api/users`
  * Get all users: `GET /api/users`
  * Get a single user by its `id`: `GET /api/users/:userId`

  * Update a user by its `id`: `PUT /api/users/:userId`

  * Delete a user by its `id`: `DEL /api/users/:userId`

**FRIEND**
  * Add a new friend to a user's friend list: `POST /api/users/:userid/friends/:friendId`
  * Delete a friend from a user's friend list: `DEL /api/users/:userid/friends/:friendId`

**THOUGHT**
  * Create a new thought: `POST /api/thoughts/`
  * Get all thoughts: `GET /api/thoughts/`
  * Get a single thought by its `id`: `GET /api/thoughts/:thoughtId`
  * Update a thought by its `id`: `PUT /api/thoughts/:thoughtId`
  * Delete a thought by its `id`: `DEL /api/thoughts/:thoughtId`

**REACTION**

* Create a reaction: `POST /api/thoughts/:thoughtId/reactions`
* Delete a reaction by the `reactionId`: `DEL /api/thoughts/:thoughtId/reactions/:reactionId`
  
## Demo

**Video**

Click the projector for a short video on the users routes [📽️](https://drive.google.com/file/d/1P9dgvX1gtiNAM1zROqJ60LymaNAfiGOl/view)

<img width="1427" alt="mongoDBscreenshot" src="https://user-images.githubusercontent.com/111208223/213318806-e57bf540-2c03-4502-b929-d3c67bb3a7af.png">
   
   
![PostmanScreenshotsocial](https://user-images.githubusercontent.com/111208223/213318848-ef30a3a6-6325-4636-a29a-18d6933922ea.png)

## ToDo's


* Record video demonstration

  
## License
N/A
  
  
## Contributing

N/A
  
## Tests
N/A
  
## Questions
Have questions about this project?  
GitHub: https://github.com/CRMclaughlin  
Email: chrisraymusik@gmail.com
