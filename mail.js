// Ввод имени
document.querySelector('#infoName').addEventListener('click', ()=>{
    document.querySelector('#windowName').style.display = 'block';
    document.querySelector('#infoName').style.display = 'none';
    document.querySelector('#enterName').style.display = 'block'
})

document.querySelector('#infoWindowName').addEventListener('click', ()=>{
    let data = document.querySelector('#windowTextName').value;
    document.querySelector('#enterName').innerHTML=data;
    document.querySelector('#windowName').style.display = 'none';
    if(data==0){
        document.querySelector('#infoName').style.display = 'block';
    } 

})

document.querySelector('#enterName').addEventListener('click', ()=>{
    document.querySelector('#windowName').style.display = 'none';
    document.querySelector('#infoName').style.display = 'block';
    document.querySelector('#enterName').style.display = 'none';

})
// Ввод возраста
document.querySelector('#infoAge').addEventListener('click', ()=>{
    document.querySelector('#windowAge').style.display = 'block';
    document.querySelector('#infoAge').style.display = 'none';
    document.querySelector('#enterAge').style.display = 'block';
    document.querySelector('#rowAge').textContent='';
})

// Цифры
document.querySelector('#c1').addEventListener('click', ()=>{
    document.querySelector('#rowAge').innerHTML+=1;
})
document.querySelector('#c2').addEventListener('click', ()=>{
    document.querySelector('#rowAge').innerHTML+=2;
})
document.querySelector('#c3').addEventListener('click', ()=>{
    document.querySelector('#rowAge').innerHTML+=3;
})
document.querySelector('#c4').addEventListener('click', ()=>{
    document.querySelector('#rowAge').innerHTML+=4;
})
document.querySelector('#c5').addEventListener('click', ()=>{
    document.querySelector('#rowAge').innerHTML+=5;
})
document.querySelector('#c6').addEventListener('click', ()=>{
    document.querySelector('#rowAge').innerHTML+=6;
})
document.querySelector('#c7').addEventListener('click', ()=>{
    document.querySelector('#rowAge').innerHTML+=7;
})
document.querySelector('#c8').addEventListener('click', ()=>{
    document.querySelector('#rowAge').innerHTML+=8;
})
document.querySelector('#c9').addEventListener('click', ()=>{
    document.querySelector('#rowAge').innerHTML+=9;
})
document.querySelector('#c0').addEventListener('click', ()=>{
    document.querySelector('#rowAge').innerHTML+=0;
})
document.querySelector('#del').addEventListener('click', ()=>{
    document.querySelector('#rowAge').innerHTML='';
})

document.querySelector('#ent').addEventListener('click', ()=>{
    let data = document.querySelector('#rowAge').textContent;
    document.querySelector('#enterAge').innerHTML=data;
    document.querySelector('#windowAge').style.display = 'none';
    if(data==''){
        document.querySelector('#infoAge').style.display = 'block';
    }
    if(data==1){
        document.querySelector('#enterAge').innerHTML=data + ' год';   
    } 
    if(data>=2){
        document.querySelector('#enterAge').innerHTML=data + ' года';   
    } 
    if(data>=5){
        document.querySelector('#enterAge').innerHTML=data + ' лет';   
    } 
    if(data>10){
        document.querySelector('#enterAge').innerHTML='';
        document.querySelector('#ssory').style.display = 'block'   
    } 
   
})
document.querySelector('#enterAge').addEventListener('click', ()=>{
    document.querySelector('#windowAge').style.display = 'none';
    document.querySelector('#infoAge').style.display = 'block';
    document.querySelector('#enterAge').style.display = 'none';
    document.querySelector('#rowAge').textContent='';

})
document.querySelector('#acc').addEventListener('click', ()=>{
    document.querySelector('#ssory').style.display = 'none';
    document.querySelector('#infoAge').style.display = 'block';
    document.querySelector('#enterAge').style.display = 'none';
})

document.querySelector('#infoPrize').addEventListener('click', ()=>{
    document.querySelector('#box').style.display='block';
    document.querySelector('#boxText').value='';
    
})

document.querySelector('#infoPrise').addEventListener('click', ()=>{
    let data=document.querySelector('#boxText').value;
    document.querySelector('#enterPrize').innerHTML= data;
    document.querySelector('#box').style.display='none';
    document.querySelector('#infoPrize').style.display='none';
    if(data ==''){
        
        document.querySelector('#infoPrize').style.display='block';
    }
})

document.querySelector('#enterPrize').addEventListener('click', ()=>{
    document.querySelector('#box').style.display='none';
    document.querySelector('#infoPrize').style.display='block';
    document.querySelector('#enterPrize').innerHTML ='';
})