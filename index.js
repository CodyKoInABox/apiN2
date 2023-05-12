const app = require('express')()
const cors = require('cors')

app.use(cors())



app.get('/factorial/:value', (req, res) =>{
    let value = parseInt(req.params.value)

    if(isNaN(value)){
        res.status(422).send({
            'error': 'Invalid number input.'
        })
    }
    else{
  
        res.status(200).send({
            'result': factorial(value).toString()
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