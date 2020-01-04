let accueil = document.querySelector('#accueil');
let competence = document.querySelector('#competence');
let formation = document.querySelector('#formation');
let experience = document.querySelector('#experience');
let portfolio = document.querySelector('#portfolio');
let navSide = document.querySelectorAll('nav a');
let section = document.querySelectorAll('section');



let arabe = document.querySelector('#arabe');
let francais = document.querySelector('#francais');
let anglais = document.querySelector('#anglais');
let maternelle = document.querySelector('#maternelle');
let courant = document.querySelector('#courant');
let bien = document.querySelector('#bien');
let nav = document.querySelector('nav');
let menu = document.querySelector('#menu');
let office = document.querySelector('#office');
let sql = document.querySelector('#sql');
let html = document.querySelector('#html');
let css = document.querySelector('#css');
let js = document.querySelector('#js');
let php = document.querySelector('#php');
let tel = document.querySelector('#tel');
let telephone = document.querySelector('#telephone');
let mail = document.querySelector('#mail');
let email = document.querySelector('#email');
let ic = document.querySelectorAll('.ic');
let icImg = document.querySelectorAll('.ic img');
let aSpan = document.querySelectorAll('#navMenu span');
let fade = document.querySelectorAll('.fade');
let btn = document.querySelectorAll('.btn');


tel.addEventListener('mouseover', function () {
    $('#telephone').fadeIn('slow');
});

tel.addEventListener('mouseout', function () {
    $('#telephone').fadeOut('slow');
});

mail.addEventListener('mouseover', function () {
    $('#email').fadeIn('slow');
});

mail.addEventListener('mouseout', function () {
    $('#email').fadeOut('slow');
});

$(ic).click(function () {
    $(section).hide()
    $(section).fadeIn()
})


function showFront(front, back) {
    $(front).hide();
    back.style.display = 'inherit';
    $(back).fadeIn('slow');
    back.style.display = 'inherit';
};

function showBack(front, back) {
    $(front).fadeIn('slow');
    $(back).hide();
};

arabe.addEventListener('mouseover', function () {
    showFront(arabe, maternelle) 
});
maternelle.addEventListener('mouseout', function () {
    showBack(arabe, maternelle) 
});

francais.addEventListener('mouseover', function () {
    showFront(francais, courant) 
});
courant.addEventListener('mouseout', function () {
    showBack(francais, courant) 
});

anglais.addEventListener('mouseover', function () {
    showFront(anglais, bien) 
});
bien.addEventListener('mouseout', function () {
    showBack(anglais, bien) 
});




for (let i = 0; i < btn.length; i++) {
    $(btn[i]).mouseover(function () {
        $(this).siblings().fadeIn('slow'); // selectionner les frères
    });
    $(btn[i]).mouseout(function () {
        $(this).siblings().fadeOut('slow');
    });
}

let childImg = document.querySelectorAll('.child2 img');
let myProgress = document.querySelectorAll('.myProgress');
for (let i = 0; i < childImg.length; i++) {
    childImg[i].addEventListener('mouseover', function () {
        childImg[i].style.transition = "2s ease";
        childImg[i].style.transform = 'rotate(360deg)';
        myProgress[i].style.visibility = 'visible';
        switch (i) {
            case 0:
                move("office", 90);
                break;
            case 1:
                move('sql', 60);
                break;
            case 2:
                move('html', 80);
                break;
            case 3:
                move('css', 70);
                break;
            case 4:
                move('js', 50);
                break;
            case 5:
                move('php', 20);
                break;
        }
    });
}



for (let i = 0; i < childImg.length; i++) {
    childImg[i].addEventListener('mouseout', function () {
        childImg[i].style.transition = "2s ease";
        childImg[i].style.transform = 'rotate(0deg)';
        myProgress[i].style.visibility = 'hidden';
    });
}

let i = 0;
function move(e, p) {
    if (i == 0) {
        i = 1;
        let elem = document.getElementById(e);
        let w = 1;
        let id = setInterval(frame, 15);
        function frame() {
            if (w >= p) {
                clearInterval(id);
                i = 0;
            } else {
                w++;
                elem.style.width = w + "%";
                elem.textContent = w + "%";
            }
        }
    }
}


let btnSpan=document.querySelector('#btnAdmin span');
let indice=1;
let admin=document.querySelector('#admin');
$('#btnAdmin').click(function(){
    if (indice%2){
        btnSpan.innerHTML='&#9650;'
    }
    else{
        btnSpan.innerHTML='&#9660;'
    }
    
    $(admin).slideToggle('slow');
    $(admin).css('display', 'flex');
    $(admin).css('flexFlow', 'row');
    // admin.style.display='flex';
    // admin.style.flexFlow='row';
    indice++;  
})

let btnSpan1=document.querySelector('#btnAdmin1 span');
let indice1=1;
let admin1=document.querySelector('#admin1');
$('#btnAdmin1').click(function(){
    if (indice1%2){
        btnSpan1.innerHTML='&#9650;'
    }
    else{
        btnSpan1.innerHTML='&#9660;'
    }
    
    $(admin1).slideToggle('slow');
    admin1.style.display='flex';
    admin1.style.flexFlow='row';
    indice1++;  
})


$('#menuBurger').click(function(){
    $(this).hide('slow');
    $('#close').show('slow');
    $('#menuToggle').show('slow')
})

$('#close').click(function(){
    $(this).hide();
    $('#menuBurger').show('slow');
    $('#menuToggle').hide('slow')
})