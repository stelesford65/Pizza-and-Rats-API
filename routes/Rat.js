const express = require("express")
const RatRouter = express.Router()
const {index, create, update, destroy} = require("../controllers/Rat.js")

//Get all Rats
RatRouter.get("/",index)

RatRouter.post("/",create)

RatRouter.put("/:id",update)

RatRouter.delete("/:id",destroy)

module.exports = RatRouter
