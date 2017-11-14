window .addEventListener('keyup', function(e){
    var ascii = e.keyCode;
    console.log(ascii)
    var box1 = document.getElementById('div1')
    var box2 = document.getElementById('div2');
    var box3 = document.getElementById('div3');
    var box4 = document.getElementById('div4');
    var box5 = document.getElementById('div5');
    var box6 = document.getElementById('div6');
    var box7 = document.getElementById('div7');
    var box8 = document.getElementById('div8');
    var box9 = document.getElementById('div9');
    var box10 = document.getElementById('div10');
    var box11 = document.getElementById('div11');
    var box12 = document.getElementById('div12');

    //estamos en el div 7
});


var purple1 = function(){
    if(ascii == 39){
        box2.classList.add('purple');
        box1.classList.remove('purple');
        purple2();
    }
    if(ascii == 40){
        box5.classList.add('purple');
        box1.classList.remove('purple');
        purple5();
    }
};

var purple2 = function(){
    if(ascii == 37){
        box1.classList.add('purple');
        box2.classList.remove('purple');
        purple1();
    }
    if(ascii == 39){
        box3.classList.add('purple');
        box2.classList.remove('purple');
        purple3();
    }
    if(ascii == 40){
        box6.classList.add('purple');
        box2.classList.remove('purple');
        purple6();
    }
};

var purple3 = function(){
    if(ascii == 37){
        box2.classList.add('purple');
        box3.classList.remove('purple');
        purple2();
    }
    if(ascii == 39){
        box4.classList.add('purple');
        box3.classList.remove('purple');
        purple4();
    }
    if(ascii == 40){
        box7.classList.add('purple');
        box3.classList.remove('purple');
        purple7();
    }
};

var purple4 = function(){
    if(ascii == 37){
        box3.classList.add('purple');
        box4.classList.remove('purple');
        purple3();
    }
    if(ascii == 40){
        box8.classList.add('purple');
        box4.classList.remove('purple');
        purple8();
    }
};

var purple5 = function(){
    if(ascii == 38){
        box1.classList.add('purple');
        box5.classList.remove('purple');
        purple1();
    }
    if(ascii == 39){
        box6.classList.add('purple');
        box5.classList.remove('purple');
        purple6();
    }
    if(ascii == 40){
        box9.classList.add('purple');
        box5.classList.remove('purple');
        purple9();
    }
};

var purple6 = function(){
    if(ascii == 37){
        box5.classList.add('purple');
        box6.classList.remove('purple');
        purple5();
    }
    if(ascii == 38){
        box2.classList.add('purple');
        box6.classList.remove('purple');
        purple2();
    }
    if(ascii == 39){
        box7.classList.add('purple');
        box6.classList.remove('purple');
        purple7();
    }
    if(ascii == 40){
        box10.classList.add('purple');
        box6.classList.remove('purple');
        purple10();
    }
};

var purple7 = function(){
    if(ascii == 37){
        box6.classList.add('purple');
        box7.classList.remove('purple');
        purple6();
    }
    if(ascii == 38){
        box3.classList.add('purple');
        box7.classList.remove('purple');
        purple3();
    }
    if(ascii == 39){
        box8.classList.add('purple');
        box7.classList.remove('purple');
        purple8();
    }
    if(ascii == 40){
        box11.classList.add('purple');
        box7.classList.remove('purple');
        purple11();
    }
};

var purple8 = function(){
    if(ascii == 37){
        box7.classList.add('purple');
        box8.classList.remove('purple');
        purple7();
    }
    if(ascii == 38){
        box4.classList.add('purple');
        box8.classList.remove('purple');
        purple4();
    }
    if(ascii == 40){
        box12.classList.add('purple');
        box8.classList.remove('purple');
        purple12();
    }
};

var purple9 = function(){
    if(ascii == 38){
        box5.classList.add('purple');
        box9.classList.remove('purple');
        purple5();
    }
    if(ascii == 39){
        box10.classList.add('purple');
        box9.classList.remove('purple');
        purple10();
    }
};

var purple10 = function(){
    if(ascii == 37){
        box9.classList.add('purple');
        box10.classList.remove('purple');
        purple9();
    }
    if(ascii == 38){
        box6.classList.add('purple');
        box10.classList.remove('purple');
        purple6();
    }
    if(ascii == 39){
        box11.classList.add('purple');
        box10.classList.remove('purple');
        purple11();
    }
};

var purple11 = function(){
    if(ascii == 37){
        box10.classList.add('purple');
        box11.classList.remove('purple');
        purple10();
    }
    if(ascii == 38){
        box7.classList.add('purple');
        box11.classList.remove('purple');
        purple7();
    }
    if(ascii == 39){
        box12.classList.add('purple');
        box11.classList.remove('purple');
        purple12();
    }
};

var purple12 = function(){
    if(ascii == 37){
        box11.classList.add('purple');
        box12.classList.remove('purple');
        purple11();
    }
    if(ascii == 38){
        box8.classList.add('purple');
        box12.classList.remove('purple');
        purple8();
    }
};