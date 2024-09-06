//importing express
const express = require('express')
require("./connection")
var empModel = require("./model/employe")
var cors= require("cors")
//2.inetilize
const app = new express();
app.use(express.json())
app.use(cors())
//3 api creation
app.get('/', (req, res) => {
    res.send("message from the user")
})
app.get('/trial', (req, res) => {
    res.send("It is a trial message")
})
app.listen(1236, () => {
    console.log("port is running");
})
//add api
app.post("/add", async (req, res) => {
    try {
        await empModel(req.body).save()
        res.send({ message: "data added!!" })

    } catch (error) {
        console.log(error)

    }
})
app.get("/view", async (req, res) => {
    try {
        var show = await empModel.find()
        res.send({ show })

    } catch (error) {
        console.log(error)
    }

})
   app.get("/view", async (req, res) => {
       try {
           var show = await empModel.find()
           res.send({ show })

       } catch (error) {
           console.log(error)
       }
       })
    
       app.delete("/remove/:id", async (req, res) => {
           try {
               await empModel.findByIdAndDelete(req.params.id)
               res.send({ message: "Data Deleted" })
              

           } catch (error) {
               console.log(error)
           }
           })
           app.put("/update/:id", async (req, res) => {
               try {
                   await empModel.findByIdAndUpdate(req.params.id,req.body)
                   res.send({ message: "Data updated" })


               } catch (error) {
                   console.log(error)
               }
        

       })