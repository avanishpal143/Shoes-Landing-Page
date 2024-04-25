
alert("Welcome to our site");

//for Login
function add() {
    let user = document.querySelector('#mail');
    let pass = document.querySelector('#pass');
    let userItem = user.value;
    let passItem = pass.value;
    display(userItem,passItem);
  }

  
  
  function display(userItem,passItem) {
    let ele = document.querySelector('#out');
    let newHtml = '';
    if(userItem !== passItem){
    newHtml+="Invalid  username or password";
    }else{
        newHtml += "Please Enter Username & Password"
    }
    ele.innerHTML = newHtml;
  }
  
  
  
  
  
  //for submit
  function contacts() {
    
    let user = document.querySelector('#name');
    let mob = document.querySelector('#tel');
    let userItem = user.value;
    let mobItem = mob.value;
    display1(userItem,mobItem);
  }

    function display1(userItem,mobItem){
    let element = document.querySelector("#outp");
    let newHtml = '';
    if(userItem != '' && mobItem != ''){
        newHtml += "Thanks we will contact soon!" ;
    }else{
        newHtml += "Please enter name & Mob.No";
    }
    element.innerHTML = newHtml;
  }
  