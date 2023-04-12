# Simple Form Submission App
This is a simple web application that allows users to submit a form with their name, email address, and a message. The input data is then saved to a MongoDB database using Mongoose.

## Installation and Setup
* Clone the repository to your local machine using Git or download the ZIP file and extract it to a directory of your choice.

* Open a terminal window and navigate to the root directory of the application.

* Run npm install to install the dependencies.

* Make sure you have MongoDB installed on your machine and running in the background.

* `brew services start mongodb/brew/mongodb-community` run this command on your mac to start the database in case you use brew.

* Start the server by running `node index.js`. The server will start on port 4001.

* Open a web browser and navigate to http://localhost:4001 to view the form.

## Usage
* Fill out the form with your name, email address, and a message.

* Click the "Submit" button to submit the form.

* The data you entered will be saved to the MongoDB database.

## Technologies Used
* Node.js
* Express.js
* MongoDB
* Mongoose
## File Structure
* index.js: The main server file that sets up the Express.js app, defines the endpoint for the form submission, and connects to the MongoDB database.
* index.html: The HTML file that contains the form markup.
* package.json: The configuration file for the Node.js project, which includes the dependencies and scripts for running the server.
* README.md: This file, which provides information on how to install, set up, and use the application.
## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.
