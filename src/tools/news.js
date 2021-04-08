const request = require('request')
const news = (address,key,callback)=>{
    const geocodeUrl= 'https://newsapi.org/v2/top-headlines?country='+address+'&category=entertainment&apiKey='+key
    
    request({url:geocodeUrl,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to news service',undefined)
        }
        else if(response.body.message){
            callback('Unauthorized user',undefined)
        }
        else if(response.body.articles.length == 0){
            callback('Unable to find location',undefined)
        }
        else{
                callback(undefined, response.body.articles)
           
        }
    })
}
module.exports = news