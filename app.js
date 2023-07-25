import express from 'express';
import * as url from 'url';
import 'dotenv/config';
import hbs from 'hbs';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express()
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/',(req,res) => {
  res.render('home',{
    name:'Nicolas',
    title:'Node Practice'
  });
});

app.get('/generic',(req,res) => {
  res.render('generic',{
    name:'Nicolas',
    title:'Node Practice'
  });
});

app.get('/elements',(req,res) => {
  res.render('elements',{
    name:'Nicolas',
    title:'Node Practice'
  });
});

app.get('*',(req, res) => {
  res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});