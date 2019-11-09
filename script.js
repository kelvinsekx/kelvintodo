let inputValue = document.getElementById('do_it');
const submit   = document.querySelector('input.submit');
let append     = document.getElementById('todo')



inputValue.value=""

function doSomething(){
    let appendIt = append
    if(inputValue.value !== ""){
        let node = document.createElement('li')
        var textnode =  document.createTextNode(inputValue.value)

        let icon = document.createElement('ion-icon');
        icon.name="close-circle-outline";

        node.appendChild(textnode)
        node.appendChild(icon)
        appendIt.appendChild(node)

        let lar=appendIt.getElementsByTagName('li').length
        submit.value='Add #'.concat(lar+1)

        function deleteList(){
            node.style.display="none"
        }
        icon.addEventListener('click',deleteList)
    }
    inputValue.value ='' 

}


submit.addEventListener('click',doSomething)