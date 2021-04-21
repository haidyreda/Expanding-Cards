const panels =document.querySelectorAll('.panel');

// this is how to add or remove classes in js

panels.forEach((panel) => {
   panel.addEventListener('click', () => {
       removeActiveClass();
       panel.classList.add('active');   
    });
});

function removeActiveClass(){
    panels.forEach(panel =>{
     panel.classList.remove('active');
    });

};
