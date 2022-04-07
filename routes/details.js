const router = require("express").Router();
const { User } = require("../models/user");

router.get("/", async (req,res,next) => {

    User.find()
    .then(result =>{
        res.status(200).json({
            userData:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });

});

module.exports = router;