import { log } from "util";

window.addEventListener('load',()=>{

    const btnPrint = fElId('btnPrint'),
        cbDeviation = fElId('deviation'),
        txtDeviation = fElId('deviationText'),
        areaDeviation = fElId('deviation-area'),
        choiceFiled = fElId('choice'),
        // 
        decisionInp = fElId('decision'),
        // 
        applicationInp = fElId('application'),
        appText = Array.prototype.slice.call(document.querySelectorAll('.appTxt')),
    appInp = Array.prototype.slice.call(document.querySelectorAll('.appInp'));
        

    console.log(applicationInp)
        /* -------------------  EVENTS  ---------------------- */
        // print
        btnPrint.addEventListener('click', (e)=>{
            window.print();
        },false)
        // odstepstwa
        cbDeviation.addEventListener('click', (e) => {
            
            if(e.target.checked){
                txtDeviation.classList.toggle('cross');
                areaDeviation.classList.toggle('none');
            }else{
                txtDeviation.classList.toggle('cross');
                areaDeviation.classList.toggle('none');
            }
        }, false);
        // zgloszenie/decyzja
    choiceFiled.addEventListener('click',(e)=>{
        // e.preventDefault();
        const label = e.target,
            id = label.getAttribute('id');
        // console.log(e.target)
        if (id === 'application' ){
            applicationInp.firstElementChild.setAttribute('checked','true');
            decisionInp.firstElementChild.removeAttribute('checked');
            appText.forEach((e) => {
                console.log(e)
                e.classList.remove('cross');
            });
            appInp.forEach(e => {
                e.classList.remove('d-none');
            });
        } else if (id === 'decision' ){
            decisionInp.firstElementChild.setAttribute('checked', 'true');
            applicationInp.firstElementChild.removeAttribute('checked');
            appText.forEach(e => {
                e.classList.add('cross');
            });
            appInp.forEach(e => {
                e.classList.add('d-none');
            });
        }
        
    },false);

},false);

let fElId = (elem) =>{return document.getElementById(elem)};