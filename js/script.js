window.addEventListener('load', () => {

    const btnPrint = fElId('btnPrint'),
    body = document.querySelector('main'),
        cbDeviation = fElId('deviation'),
        txtDeviation = fElId('deviationText'),
        labelDeviation = fElId('deviation-label'),
        areaDeviation = fElId('deviation-area'),
        choiceFiled = fElId('choice'),
        // 
        decisionInp = fElId('decision'),
        applicationInp = fElId('application'),
        // 
        appText = Array.prototype.slice.call(document.querySelectorAll('.appTxt')),
        appInp = Array.prototype.slice.call(document.querySelectorAll('.appInp')),
        // 
        desText = Array.prototype.slice.call(document.querySelectorAll('.desTxt')),
        desInp = Array.prototype.slice.call(document.querySelectorAll('.desInp'));

        areaDeviation.setAttribute('disabled', 'true');

    /* -------------------  EVENTS  ---------------------- */
    // print
    btnPrint.addEventListener('click', (e) => {
        window.print();
            
    }, false)
    // odstepstwa
    cbDeviation.addEventListener('click', (e) => {

        if (e.target.checked) {
            txtDeviation.classList.toggle('cross');
            labelDeviation.classList.toggle('none');
            areaDeviation.removeAttribute('disabled');
        } else {
            txtDeviation.classList.toggle('cross');
            labelDeviation.classList.toggle('none');
            areaDeviation.setAttribute('disabled', true);
        }
    }, false);
    // zgloszenie/decyzja
    choiceFiled.addEventListener('click', (e) => {
        // e.preventDefault();
        const label = e.target,
            id = label.getAttribute('id');
        // console.log(e.target)
        if (id === 'application') {
            applicationInp.firstElementChild.setAttribute('checked', 'true');
            decisionInp.firstElementChild.removeAttribute('checked');
            appText.forEach((e) => {
                e.classList.remove('cross');
            });
            appInp.forEach(e => {
                e.classList.remove('d-none');
            });
            desText.forEach(e => {
                e.classList.add('cross');
            });
            desInp.forEach(e => {
                e.classList.add('d-none');
            });
        } else if (id === 'decision') {
            decisionInp.firstElementChild.setAttribute('checked', 'true');
            applicationInp.firstElementChild.removeAttribute('checked');
            appText.forEach(e => {
                e.classList.add('cross');
            });
            appInp.forEach(e => {
                e.classList.add('d-none');
            });
            desText.forEach((e) => {
                
                e.classList.remove('cross');
            });
            desInp.forEach(e => {
                e.classList.remove('d-none');
            });
        }

    }, false);



}, false);

let fElId = (elem) => { return document.getElementById(elem) };