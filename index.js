import express from "express"
const app = express()
const {dirname: __dirname} = import.meta;

app.set("view engine", 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set(express.static(path.join(__dirname, "public")))

app.get("/", function(req, res){
    res.render("index")
})

app.listen(3003)