# Bootcamper [![Build Status](https://travis-ci.com/bburrier/express-ci-starter.svg?branch=master)](https://travis-ci.com/bburrier/express-ci-starter)
 
A centralized hub to help current bootcamp students connect with bootcamp graduates, instructors, and professionals to share issues, ideas and experiences.

[Visit site!](https://limitless-springs-55622.herokuapp.com/)

## Motivation
As bootcamp students, we are overloaded with information on the web regarding all the new technology and programming languages that we are learning.

For example, stack overflow has a plethora of information, but it can be overwhelming to filter out useful information, especially when just starting out.

It would be nice to have a forum where bootcamp students can ask specific questions and receive answers that are understandable to beginners.


## Screenshots
![Home Page](https://i.ibb.co/G9BqHF5/home.png "Home Page")
![Create Account](https://i.ibb.co/hshyQPr/create-account.png "Create Account")
![New Post](https://i.ibb.co/ngR1YYK/first-sample-post.png "New Post")
![Network](https://i.ibb.co/QD9RBGd/network-tab.png "Network")


## Tech/framework used
<b>Built with</b>
- [BCrypt](https://www.npmjs.com/package/bcrypt)
- [Bootstrap](https://getbootstrap.com/)
- [Express](https://expressjs.com)
- [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
- [Express Session](https://github.com/expressjs/session)
- [MySQL](https://www.mysql.com/)
- [Passport](http://www.passportjs.org/)
- [Passport-heroku](https://www.npmjs.com/package/passport-heroku)
- [Passport-local](https://www.npmjs.com/package/passport-local)
- [Sequelize](http://docs.sequelizejs.com/)


## Features

- Create user account
- Write new post
- Make comments on posts
- Edit your account
- Edit your post
- Delete your post
- View all posts
- View just your posts
- View your network

## Installation

### Clone
- Clone this report to your local machine using `https://github.com/lnicholskara/project_two.git`
### Setup
> Go to the directory in which the repo is downloaded to and install npm packages
```shell
$ npm install
```
> Initialize local database
```shell
$ mysql < models/schema.sql
```
> Create .env, update as needed
```shell
$ cp .env.example .env
```
> Run tests
```shell
$ npm test
```
> Start node application
```shell
$ npm start
```

## Team
Kara Nichols - https://github.com/lnicholskara  
Hamza Agharbi - https://github.com/hagharbi  
Mauro Facciolla - https://github.com/Dendevpro  
Bao Phan - https://github.com/btp589 









