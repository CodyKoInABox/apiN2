const app = require('express')()
const cors = require('cors')


app.get('/factorial', (req, res) =>{
    let value = req.query.value
    let result = 1;

    for(let i = 0; i < value; i++){
        result = result * (value - i)
    }
    
    res.status(200).send({
        'result': result.toString()
    })
})

app.listen(8080, () =>{
    console.log('Live on http://localhost:8080')
})