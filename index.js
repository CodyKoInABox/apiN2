const app = require('express')()
const cors = require('cors')
require('dotenv').config()

app.use(cors())



app.get('/factorial/:value', async (req, res) =>{
    let value = parseInt(req.params.value)

    if(isNaN(value)){
        res.status(422).send({
            'error': 'Invalid number input.'
        })
    }
    else{
  

        let result = await redisGet('Factorial', value.toString())
        
        if(result == null){
            result = factorial(value)
            await redisSet('Factorial', value, result)
        }

        console.log(result)

        //if(result = null){
        //    result = factorial(value).toString()
        //}

        res.status(200).send({
            'result': result
        })
    }
})

app.get('/superfactorial/:value', (req, res) => {
    let value = parseInt(req.params.value)

    if(isNaN(value)){
        res.status(422).send({
            'error': 'Invalid number input.'
        })
    }
    else{

        res.status(200).send({
            'result': superFactorial(value).toString()
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
