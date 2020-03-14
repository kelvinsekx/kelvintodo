let inputValue = document.getElementById('doIt');
const submit   = document.querySelector('input.submit');
let ul     = document.getElementById('todo')
//


//////""""""""""""""""""""""""""""
inputValue.value=""

function doSomething(){
    // let appendIt = append
    if(inputValue.value !== ""){
        let node = document.createElement('li')
        node.classList.add("list-group-item","d-flex", "justify-content-between", "align-items-center")
        let icon = document.createElement('ion-icon');
        icon.name="close-circle-outline";
        var textnode =  document.createTextNode(inputValue.value)
        node.appendChild(textnode)
        node.appendChild(icon)
        ul.appendChild(node)

        let lar=document.getElementsByTagName('li').length
        
        submit.value='Add #'+Number(lar+1)

        icon.addEventListener('click',deleteList)
        function deleteList(){
            ul.removeChild(node)
        
            submit.value='Add #'.concat(lar)
         }
    }
    inputValue.value ='' 
}



submit.addEventListener('click',doSomething)