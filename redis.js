require('dotenv').config()

async function redisSet(key, field, value){

    const redis = require('redis')

    const client = redis.createClient({
        url: process.env.REDIS_URL
    })

    client.connect()

    const result = await client.hSet(key, field, value)

    client.disconnect()

    console.log(result)
}

async function redisGet(key, field){

    const redis = require('redis')

    const client = redis.createClient({
        url: process.env.REDIS_URL
    })

    client.connect()

    const result = await client.hGet(key, field)

    client.disconnect()

    console.log(result)
}

redisGet('Factorial', '5')


