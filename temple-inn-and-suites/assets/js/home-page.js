function toggleInfo1(){
    document.querySelector("#t-btn1").classList.toggle("see");
    document.querySelector("#t-info1").classList.toggle("see");    
  }
  
  const d = document.querySelector("#t-btn1");
  d.onclick = toggleInfo1;
  
  function toggleInfo2(){
    document.querySelector("#t-btn2").classList.toggle("see2");
    document.querySelector("#t-info2").classList.toggle("see2");    
  }
  
  const k = document.querySelector("#t-btn2");
  k.onclick = toggleInfo2;