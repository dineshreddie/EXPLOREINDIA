input=document.querySelector('input');
listItems=document.querySelectorAll('li');
input.addEventListener('input',show);
function show(){
    search=input.value.toLowerCase();
    listItems.forEach(function(li){
        text=li.innerHTML.toLowerCase();
        found=text.indexOf(search);
        if(search=='' || found==-1){
            li.style.display='none';
        }else{
            li.style.display='block';
        }
    })
}
        