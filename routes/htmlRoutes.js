/* eslint-disable prettier/prettier */
var db = require("../models");

=======
module.exports = function(app, passport) {
  // Default Code - Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // "/login" - Login page
  app.get("/login", function(req, res) {
    res.render("login", { message: req.flash("loginMessage") });
  });
  app.post(
    "/login",
    passport.authentificate("local-login", {
      successRedirect: "/posts",
      failureRedirect: "/login",
      failureFlash: true
    }),
    function(req, res) {
      if (req.body.remember) {
        req.session.cookie.maxAge = 1000 * 60 * 3;
      } else {
        req.session.cookie.expires = false;
      }
      res.redirect("/");
    }
  );

  // "/createprofile" - Page with form to create new profile
  app.get("/signup", function(req, res) {
    res.render("signup", { message: req.flash("signupMessage") });
  });

  app.post(
    "/signup",
    passport.authentificate("local-signup", {
      successRedirect: "/posts",
      failureRedirect: "/signup",
      failureFlash: true
    })
  );

  // "/profile" - Page where user lands after login
  app.get("/profile", isLoggedIn, function(req, res) {
    res.render("profile", {
      user: req.user
    });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthentificated()) {
      return next();
    }
    res.redirect("/");
  }

  // "/updateprofile" - Page with form to update existing profile
  // "/network" - Load table of user profiles
  // "/posts" - Load main page with a table of posts
  // "/createpost" - Page with form to create new post
  // "/updatepost" - Page with form to update existing post

  //************************************************/
  // Load single profile by id
  app.get("/profile/:id", function (req, res) {
    db.Profile.findOne({ where: { id: req.params.id } }).then(function (
      oneProfile
    ) {
      res.render("singleProfile", {
        profile: oneProfile
      });
    });
  });

  // Load single post by id
  app.get("/post/:id", function (req, res) {
    db.Profile.findOne({
      where: { id: req.params.id },
      include: [db.Profile]
    }).then(function (onePost) {
      res.render("singleProfile", {
        post: onePost
      });
    });
    // Add in code to findAll Comments associated with the post
  });
  //************************************************/
  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
