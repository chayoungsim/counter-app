var counter = {
  num:0, 
  increment:function(n){  
    n = typeof n!== 'undefined' ? this.num=this.num+n: this.num=this.num+1; 
  },
  decrement:function(){
    this.num=this.num-1;
  },
  
  reset:function(n){
    //num=n
    if(n){
      this.num=n;
    } else{
      this.num=0;
    }
  },
  getCount:function(){
     return this.num;
  }
 }
 
 const COUNTER_NUM = document.querySelector('.counter-num');
 const MINUS_BTN = document.querySelector('.minus');
 const PLUS_BTN = document.querySelector('.plus');
 const RESET_BTN = document.querySelector('.reset');



 function setNum(){
  COUNTER_NUM.innerHTML=counter.getCount();
 }


window.onload=function(){
  setNum()
   
   
   MINUS_BTN.addEventListener('click',function(){
     counter.decrement();
     setNum();
   });

   PLUS_BTN.addEventListener('click',function(){
     counter.increment();
     setNum();
   });

   RESET_BTN.addEventListener('click',function(){
     counter.reset();
     setNum();
   })

   
}




// counter.increment(33);
// counter.decrement();
// counter.reset(33);
// counter.getCount();
  
// console.log(counter.num)

/*


const $ =function(query,target){
  const TARGET = target || document;
  return TARGET.querySelector(query)
}

const $$ = function(query){
  return[...document.querySelectorAll(query)]
  
}

querySelectAll 로 하면 nodelist 반환

배열로 바꿔준다.
1. => Array.from(links);
2.[...links]


*/


