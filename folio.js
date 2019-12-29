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
let btn=document.querySelectorAll('.btn');



for (let i = 0; i < icImg.length; i++) {
    icImg[i].addEventListener('mouseover', function () {
        $(icImg[i]).css('transform', 'translate(50px, 0) scale(1.5)');
        icImg[i].style.transition = '1s ease-in-out';
    });

    icImg[i].addEventListener('mouseout', function () {
        icImg[i].style.transform = 'scale(1)';
        icImg[i].style.transition = '1s ease'

    })


}

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


accueil.addEventListener('click', function () {
    $('#accueil').slideDown('slow');
});

competence.addEventListener('click', function () {
    $('#competence').slideDown('slow');
});

function showFront(front, back) {
    $(front).slideUp('slow');
    back.style.display = 'inherit';
    $(back).slideDown('slow');
    back.style.display = 'inherit';
};

function showBack(front, back) {
    $(front).slideDown('slow');
    $(back).slideUp('slow');
};

arabe.addEventListener('mouseover', function () { showFront(arabe, maternelle) });
maternelle.addEventListener('mouseout', function () { showBack(arabe, maternelle) });

francais.addEventListener('mouseover', function () { showFront(francais, courant) });
courant.addEventListener('mouseout', function () { showBack(francais, courant) });

anglais.addEventListener('mouseover', function () { showFront(anglais, bien) });
bien.addEventListener('mouseout', function () { showBack(anglais, bien) });


for (let i=0;i<btn.length;i++){
    $(btn[i]).mouseover(function(){
        let brother=$(btn[i]).siblings(); // selectionner les frères
        for (let j=0;j<brother.length;j++){
            $(brother[j]).fadeIn('slow');
        }
    });
    $(btn[i]).mouseout(function(){
        let brother=$(btn[i]).siblings();
        for (let j=0;j<brother.length;j++){
            $(brother[j]).fadeOut('slow');
        }
    });
}







// let navWidth = $('nav').width();
// window.addEventListener('mousemove', function (e) {
//     let wBody=screen.width;
//     if (wBody> 800) {
//         let x = e.clientX;
//         if (x < 80) {
//             nav.style.transform = 'translateX(0)';
//             $('#menu').slideUp('slow');
//         }
//         else {
//             nav.style.transform = 'translateX(-100%)';
//             $('#menu').slideDown('slow');
//         }
//     }
//     else{
//         let y = e.clientY;
//         if (y < 80) {
//             nav.style.transform = 'translateY(0)';
//             $('#menu').slideUp('slow');
//         }
//         else {
//             nav.style.transform = 'translateY(-100%)';
//             $('#menu').slideDown('slow');
//         }
//     }
// });



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
                elem.innerHTML = w + "%";
            }
        }
    }
}



// let indice = 1;

// show(indice); // faire apparaître le premier élément

// document.getElementById('btn-left').addEventListener('click', function () {
//     indice -= 1;
//     show(indice);
// })
// document.getElementById('btn-right').addEventListener('click', function () {
//     indice += 1;
//     show(indice);
// })

// function show(n) {

//     let x = document.getElementsByClassName("slide");

//     if (n > x.length) {
//         indice = 1
//     }

//     if (n < 1) {
//         indice = x.length // indice = 5
//     }

//     for (let i = 0; i < x.length; i++) {
//         x[i].style.visibility = "hidden"; // faire dispparaître tous les éléments

//     }

//     x[indice - 1].style.visibility = "visible"; // faire apparaître l'élément selon l'indice

// }