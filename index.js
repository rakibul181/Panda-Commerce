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
 
