const input = document.querySelector('.input-scan-maker');
const formulaire = document.querySelector('form');
const resultats = document.querySelector('.resultats');
const btn = document.querySelector('.btn-resultats');
const inputAtrribut = document.querySelectorAll('.input-attribute-span');
const inputValueAttribut = document.querySelectorAll('.input-value-attribute-span');
const btnAide = document.querySelector('.aide');
const bulleAide = document.querySelector('.aide-info');
const btnCopy = document.querySelector('.copy-button')


formulaire.addEventListener('submit', (e) =>{
    
    e.preventDefault();
    resultats.innerHTML = '<h2>Votre résultat ici :</h2>';
    
    let tabInputValue = input.value.split('');  

    for(let i = 0; i < tabInputValue.length; i+=2){
    tabInputValue.splice(i,0,`<span ${inputAtrribut[0].value}${inputValueAttribut[0].value} ${inputAtrribut[1].value}${inputValueAttribut[1].value} ${inputAtrribut[2].value}${inputValueAttribut[2].value}>`);
    }
    for(let i = 2; i <= tabInputValue.length; i+=3){
    tabInputValue.splice(i,0,'</span>');
    }
    
    const donnerResultats = document.createElement('p');
    donnerResultats.setAttribute('class', 'resultat-final');
    resultats.append(donnerResultats);
    donnerResultats.textContent = `${tabInputValue.join('').toString()}`;

// vider la valeur des inputs :
    
    input.value = '';
    inputValueAttribut.forEach(element => {
        element.value = ''    });
    inputAtrribut.forEach(element => {
        element.value = ''    });

})


// faire apparaitre/disparaitre l'aide
let timeOutID;

btnAide.addEventListener('click', () => {
    bulleAide.classList.toggle('active');
    clearTimeout(disparaitre);

    function disparaitre(){
       timeOutID = window.setTimeout(aideDisparaitre, 10000) 
    }
    function aideDisparaitre(){
        bulleAide.classList.remove('active')
    }
    disparaitre();
})


// copier le résultat :

btnCopy.addEventListener('click', () => {

    let content = document.querySelector('.resultat-final').textContent;
    navigator.clipboard.writeText(content);


})

// petite animation à l'entré :

const lettresTitre = document.querySelectorAll('.lettre');
const header = document.querySelector('header');
const formGlobalContainer = document.querySelector('.form-global')
const resultatGlobalContainer = document.querySelector('.container-resultats')

const TL = gsap.timeline({});

TL
.from(header, {y: -250, duration: 1, ease: 'power2.out'})
.from(lettresTitre[0], {visibility: "hidden", duration: 0.15})
.from(lettresTitre[1], {visibility: "hidden", duration: 0.15})
.from(lettresTitre[2], {visibility: "hidden", duration: 0.15})
.from(lettresTitre[3], {visibility: "hidden", duration: 0.15})
.from(lettresTitre[4], {visibility: "hidden", duration: 0.15})
.from(lettresTitre[5], {visibility: "hidden", duration: 0.15})
.from(lettresTitre[6], {visibility: "hidden", duration: 0.15})
.from(lettresTitre[7], {visibility: "hidden", duration: 0.15})
.from(lettresTitre[8], {visibility: "hidden", duration: 0.15})
.from(lettresTitre[9], {visibility: "hidden", duration: 0.15})
.from(lettresTitre[10], {visibility: "hidden", duration: 0.15})
.from(lettresTitre[11], {visibility: "hidden", duration: 0.15})
.from(lettresTitre[12], {visibility: "hidden", duration: 0.15})
.from(lettresTitre[13], {visibility: "hidden", duration: 0.15})
.from(formGlobalContainer, {x: -1500, duration: 1.3,ease: 'power4.out'}, '-=0.5')
.from(resultatGlobalContainer, {x: 1500, duration: 1.3, ease: 'power4.out'}, '-=1')

