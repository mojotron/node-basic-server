# Node.js Basic Server

This project is part of [The Odin Project](https://www.theodinproject.com/lessons/nodejs-basic-informational-site) curriculum.

Goal of this project is to create server using Node.js built in modules (without express).

### Installing

1. Clone or fork this repo
2. cd into the node-basic-server directory (where this README is located).
3. Run npm install
4. create .env file with PORT=8080 (or eny number)
5. npm run dev to start project The server will be found at http://localhost:PORT

## Using the server

Server is hosting basic static site.

## Screenshots

![Home page.](/public/screenshots/screenshot-index.png "This is a sample image.")
![Home page.](/public/screenshots/screenshot-principles.png "This is a sample image.")
![Home page.](/public/screenshots/screenshot-about.png "This is a sample image.")

### Server routes:

- / => gives user random samurai image with random quote
- /principles.html => display Dokkōdō principles
- /about.html => basic information about Miyamoto Musashi
- /\* (\* means any other route, returning 404 page)
