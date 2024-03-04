const buttons=document.querySelectorAll('button');
    const body=document.querySelector('body');
// button css    
    buttons.forEach( (button)=>{
        // button.id=((Math.round(Math.random*100 +1 )));
       button.style.backgroundColor=button.id; 
       button.style.color='green'; 
       button.style.width='100px';
       button.style.height='100px';
       button.style.fontSize='20px';
       button.style.padding='10px';
       button.style.margin='10px';
       button.style.boxShadow='0px';
       
    } );

// background color change

buttons.forEach( (button)=>{
    button.addEventListener('click',(event)=>{
        buttons.forEach((btn)=>{
            if(btn.style.backgroundColor =='white') btn.style.backgroundColor=btn.id;
        })
     body.style.backgroundColor=event.target.id;
     button.style.backgroundColor='white';
    })
})