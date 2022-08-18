const allh2s = document.getElementsByTagName('h2')
for(const allh2 of allh2s){
    allh2.style.color = 'lightblue'
}

document.getElementById('backpack').style.backgroundColor = 'tomato'


const acards = document.querySelectorAll('.card')
for(const cd of acards){
    cd.classList.remove('rounded')
    cd.style.borderRadius = "30px"
}

function submite(){
    console.log(' It is submited by successfully')
}

// const btnRemove = document.getElementById('backpack-element').addEventListener('click',function(event){
//     event.target.parentNode.removeChild(event.target)
// })
const btnRemove = document.getElementsByClassName('btn-remove')
// console.log(btnRemove)
for(const btnR of btnRemove){
    btnR.addEventListener('click', function(event){
        event.target.parentNode.parentNode.style.display = 'none'
        
    })
}
const submitBtn = document.getElementById('email-btn')
submitBtn.setAttribute('disabled', true)

document.getElementById('exampleInputEmail1').addEventListener('keyup', function(event){
    const inputText = event.target.value
    if(inputText ==='email'){
        submitBtn.removeAttribute('disabled')
    }
    else{
        submitBtn.setAttribute('disabled', true)
    }
})


document.getElementById('subscribe-section').addEventListener('dblclick',function(addEventListener){
    console.log('Click double')
    document.getElementById('subscribe-section').style.setProperty('background-color', 'pink', 'important');
})