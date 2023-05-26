const app = require('express')()
const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

app.use(cors())


app.use(express.static(__dirname + '/website/'));


//endpoint for web page
app.get('/', (req, res) =>{
    res.sendFile()
})

//endpoint for factorial
app.get('/factorial/:value', async (req, res) =>{
    let value = parseInt(req.params.value)

    if(isNaN(value)){
        res.status(422).send({
            'error': 'Invalid number input.'
        })
    }
    else{
  
        let result = await redisGet('Factorial', value.toString())
        let wasCached = true
        
        if(result == null){
            result = factorial(value)
            await redisSet('Factorial', value, result)
            wasCached = false
        }

        res.status(200).send({
            'result': result,
            'wasCached': wasCached
        })
    }
})

//endpoint for superfactorial
app.get('/superfactorial/:value', async (req, res) => {
    let value = parseInt(req.params.value)

    if(isNaN(value)){
        res.status(422).send({
            'error': 'Invalid number input.'
        })
    }
    else{
        
        let result = await redisGet('Superfactorial', value.toString())
        let wasCached = true
        
        if(result == null){
            result = factorial(value)
            await redisSet('Superfactorial', value, result)
            wasCached = false
        }
        
        res.status(200).send({
            'result': superFactorial(value).toString(),
            'wasCached': wasCached
        })
    }
})


//host the API on port 8080
app.listen(8080, () =>{
    console.log('Live on http://localhost:8080')
})


//calculate factorial using recursion
function factorial(x){
    if(x<=1){
        return 1
    }
    else{
        return x * factorial(x-1)
    }
}


//calculate superfactorial using recursion
function superFactorial(x){
    if(x<=1){
        return 1
    }
    else{
        return x * factorial(x-1) * superFactorial(x-1)
    }
}


//set a value in redis
async function redisSet(key, field, value){

    let redis = require('redis')

    let client = redis.createClient({
        url: process.env.REDIS_URL
    })

    client.connect()

    let result = await client.hSet(key, field, value)

    client.disconnect()

    return result
}

//get a value in redis
async function redisGet(key, field){

    let redis = require('redis')

    let client = redis.createClient({
        url: process.env.REDIS_URL
    })

    client.connect()

    let result = await client.hGet(key, field)

    client.disconnect()

    return result
}
