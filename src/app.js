const express = require('express')


const app = express()



const port = 3000


const path = require('path')

//  console.log(__dirname) 


const publicDirectory = path.join(__dirname,'../public')
//console.log(publicDirectory)

app.use(express.static(publicDirectory))


 app.set('view engine', 'hbs');


const viewsPath = path.join(__dirname,'../templates/views')
console.log(viewsPath)
app.set('views',viewsPath)

//////////////////////////////////////////////////////////////////////////////

const hbs = require('hbs')
const partialPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialPath)




const news = require('./tools/news')

app.get('/',(req,res)=>{
    // res.render('index')
   
    news('eg','324adadd057e4f419365711a6ff5cd98',(error,data)=>{
        if(error){
            return res.send({error})
        }else{
            res.render('index',{
                title:'Egypt News',
                name:'Fatma',
               articles:data
            })
        }
        })
    })
    

    app.get('*',(req,res)=>{
        res.render('404page',{
            title:'Page Not Found',
            msg:'Error!!!',
            name:'Fatma'
        })
    })
    

  app.listen(port,()=>{
      console.log('Listening on port 3000')
  })



  


