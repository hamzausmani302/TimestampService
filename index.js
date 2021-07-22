
const app = require('./App.js');
const router = require('./router.js');
app.use('/' , router);



app.listen(5000 , ()=>{
    console.log("connected");
})





