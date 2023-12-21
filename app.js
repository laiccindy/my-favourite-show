const express = require('express');
const app = express();
const port = 8080;

const {showInfo, castObject, seasonOne, seasonTwo} = require("./data.js");

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')
const user = {
    firstName: 'Tim',
    lastName: 'Cook',
    admin: true,
}
const article = [
  {title: 'Title 1', body: 'Body 1' },
  {title: 'Title 2', body: 'Body 2' },
  {title: 'Title 3', body: 'Body 3' },
  {title: 'Title 4', body: 'Body 4' },
]
app.get('/', (req, res) => {
    res.render('pages/index', {
        showInfo, castObject, seasonOne, seasonTwo
    })
})
app.get('/s1e1', (req, res) => {
  res.render('pages/s1e1', {
      showInfo, castObject, seasonOne, seasonTwo
  })
})
app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})