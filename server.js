const express = require("express")
const app = express();
const path = require("path")
const ejs = require("ejs")
const expressLayout = require("express-ejs-layouts");

app.use(expressLayout)
app.set("view engine", 'ejs')
app.set('views', path.join(__dirname, '/resourses/views')) //this is very impot/



const PORT = process.env.PORT || 3000

app.get("/", (req, res)=>{
    res.render('index')
})
app.listen(PORT, ()=>{
        console.log(`server is running at ${PORT}`); 
})