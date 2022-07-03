const { response } = require("express");

const router = require("express").Router();

router.get("/get", (request, response) => {
    response.send("Users is successfull");
});

router.post("/post", (request, response) => {
    const username = request.body.username;
    response.send("Your username is: " + username);
});

module.exports = router;