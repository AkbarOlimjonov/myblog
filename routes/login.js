const app = require('express')
const router = app.Router();


router.get('/',async (req,res)=>{
    res.render('login',{title: "Login"})
})


module.exports = router;