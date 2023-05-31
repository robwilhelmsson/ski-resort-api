const PORT = process.env.PORT || 8000
const express = require('express')
const app = express()

const resortListController = require('./controllers/resortListController')
const resortInfoController = require('./controllers/resortInfoController')


app.get('/', (req, res) => {
  res.json('Welcome to the ski resort API!')
})

// ! Path for resort list
app.get('/resort-list', resortListController.getResortList)

// ! Path for resort list by continent 
app.get('/resort-list/continent/:continent', resortListController.getResortList)

// ! Path for resort list by country 
app.get('/resort-list/country/:country', resortListController.getResortList)

// ! Path for resort information 
app.get('/resort/:resort', resortInfoController.getResortInfo)



app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
