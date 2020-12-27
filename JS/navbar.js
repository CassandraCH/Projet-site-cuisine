/* window.addEventListener('scroll', function (){
    console.log(document.documentElement.scrollTop);
}); */

let taille1 = window.innerWidth;
let taille2 = document.body.clientWidth ;
let taille3 = document.documentElement.clientWidth;

//Si la taille de l'ecran est superieure a 800px
if (taille1 > 800 || taille2 > 800 || taille3 > 800)
{
    
    window.onscroll = function ()
    {
        //Si le scroll depasse les 150px de ma navbar
        //documentElement pas supporte par tous les navigateurs => body 
        if (document.documentElement.scrollTop > 150 || document.body.scrollTop > 150)
        {
            //Modification de la hauteur du logo
            document.getElementById("logo").style.height = "60px";
            //Modification de la hauteur du header
            document.getElementById("header").style.height = "70px";
            //Ajout d'une border en bas
            document.getElementById("header").style.borderBottom = "5px solid rgb(128, 32, 32)";
            //Modification de la couleur de fond du header
            document.getElementById("header").style.background = "white";
        }

        else
        {
            document.getElementById("logo").style.height = "70px";
            document.getElementById("header").style.height = "100px";
            document.getElementById("header").style.borderBottom = "2px solid rgb(128, 32, 32)";
            document.getElementById("header").style.background = "rgb(250, 250, 237)";
        }
    }
}

//Sinon
else
{
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const elem = document.querySelectorAll('.menu li');

    hamburger.addEventListener('click', function () 
    {
        menu.classList.toggle('open');
        elem.forEach(element => 
        {
            element.classList.toggle('fade');
        });
    });
}

