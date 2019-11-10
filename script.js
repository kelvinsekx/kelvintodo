let inputValue = document.getElementById('do_it');
const submit   = document.querySelector('input.submit');
let append     = document.getElementById('todo')



inputValue.value=""

function doSomething(){
    // let appendIt = append
    if(inputValue.value !== ""){
        let node = document.createElement('li')
        var textnode =  document.createTextNode(inputValue.value)

        let icon = document.createElement('ion-icon');
        icon.name="close-circle-outline";

        node.appendChild(textnode)
        node.appendChild(icon)
        append.appendChild(node)
        
        
        let lar=append.getElementsByTagName('li').length
        submit.value='Add #'.concat(lar+1)

        icon.addEventListener('click',deleteList)
        function deleteList(){
            append.removeChild(node)
            submit.value='Add #'.concat(lar)
         }

        
    }
    
    inputValue.value ='' 

}


submit.addEventListener('click',doSomething)