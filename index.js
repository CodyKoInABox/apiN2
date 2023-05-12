const app = require('express')()
const cors = require('cors')

app.use(cors())

app.get('/factorial', (req, res) =>{
    let value = parseInt(req.query.value)
  
    res.status(200).send({
        'result': factorial(value).toString()
    })

})

app.get('/superfactorial', (req, res) => {
    let value = parseInt(req.query.value)

    let allResults = [];

    //push the factorial of each value from 1 to the user's input
    for(let i = 1; i <= value; i++){
        allResults.push(factorial(i))
    }

    //calculate the product of all of the factorials of all the numbers between 1 and the user's input
    let result = 1;
    for(let i = 0; i < allResults.length; i++){
        result = result * allResults[i]
    }

    res.status(200).send({
        'result': result.toString()
    })

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