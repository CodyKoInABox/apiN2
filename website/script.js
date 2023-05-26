
function factorial(){
    document.getElementById('loading').style.display = 'block'

    let input = document.getElementById('input').value

    let url = window.location.origin + '/factorial/' + input

    fetch(url)
    .then(response => (response).json())
    .then(data => {
        document.getElementById('loading').style.display = 'none'
        document.getElementById('result').innerHTML = 'Factorial of ' + input + ' = ' + "<span class='resultBold'>" + data.result + '</span>'
        if(data.wasCached){
            document.getElementById('wasCached').innerText = 'Was cached'
        }else{
            document.getElementById('wasCached').innerText = 'Was not cached'
        }
        
    })
}

function superFactorial(){
    document.getElementById('loading').style.display = 'block'

    let input = document.getElementById('input').value

    let url = window.location.origin + '/superFactorial/' + input

    fetch(url)
    .then(response => (response).json())
    .then(data => {
        document.getElementById('loading').style.display = 'none'
        document.getElementById('result').innerHTML = 'SuperFactorial of ' + input + ' = ' + "<span class='resultBold'>" + data.result + '</span>'
        if(data.wasCached){
            document.getElementById('wasCached').innerText = 'Was cached'
        }else{
            document.getElementById('wasCached').innerText = 'Was not cached'
        }
    })
}

function enableButtons(){
    if(document.getElementById('input').value != ''){
        document.getElementById('b1').disabled = false
        document.getElementById('b2').disabled = false
    }else{
        document.getElementById('b1').disabled = true
        document.getElementById('b2').disabled = true
    }
}