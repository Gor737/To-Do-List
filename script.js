let message = document.querySelector('.message')
let addButton = document.querySelector('.add')
let list = document.querySelector('.list')
let arrM = []
let i = 0


addButton.addEventListener('click', () => {

    if(message.value === ''){
      return
    }


    if(arrM.length < 7){ 
        let obj = {
        message: message.value,
       }
    
    arrM.push(obj)

    addList()
    
    }

    message.value = ''
})



function addList(){
   let newLi = document.createElement('li')
   newLi.id = `li${i}`
   let newInput = document.createElement('input')
   newInput.type = 'checkbox'
   newInput.id = `input${i}`
   newInput.classList.add('checked')
   let newLabel = document.createElement('label')
   newLabel.setAttribute('for', `input${i}`)
   newLabel.id = `label${i}`
   newLabel.append(`${message.value}`)
   let newButton = document.createElement('button')
   newButton.id = `button${i}`
   newButton.append('DEL')
   newButton.classList.add('delBtn')

   newLi.append(newInput)
   newLi.append(newLabel)
   newLi.append(newButton)

   list.append(newLi)

   let objS = {
     check: false,
   }

   newButton.addEventListener('click', () => {
     console.log(newLi)

     list.removeChild(newLi)
     arrM.pop()
   })

   newInput.addEventListener('change', () => {
     objS.check = !objS.check

     if(objS.check){
      newLi.style.backgroundColor = 'green'
     } else{
      newLi.style.backgroundColor = ''
     }
     
   })

   i++
}



