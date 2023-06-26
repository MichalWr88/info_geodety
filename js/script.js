// class config {
//     constructor(name){
//         if(!document) throw Error("document is undefined");
//         this.obj =
//     };

//     init(name){
//         getElemFromDocument = (elem) => { return document.getElementById(elem) }
//     }

// }

window.addEventListener(
  "load",
  () => {
    const btnPrint = getElemFromDocument("btnPrint");
    const btnToday = getElemFromDocument("btnToday");
    const dateInp = getElemFromDocument("dateInput");
    const cbDeviation = getElemFromDocument("deviation");
    const txtDeviation = getElemFromDocument("deviationText");
    const labelDeviation = getElemFromDocument("deviation-label");
    const areaDeviation = getElemFromDocument("deviation-area");
    const choiceFiled = getElemFromDocument("choice");
    //
    const decisionInp = getElemFromDocument("decision");
    const applicationInp = getElemFromDocument("application");
    //
    const appText = [...document.querySelectorAll(".appTxt")];
    const appInp = [...document.querySelectorAll(".appInp")];
    const desText = [...document.querySelectorAll(".desTxt")];
    const desInp = [...document.querySelectorAll(".desInp")];

    areaDeviation.setAttribute("disabled", "true");

    /* -------------------  EVENTS  ---------------------- */
    // print
    btnPrint.addEventListener(
      "click",
      (e) => {
        window.print();
      },
      false
    );
    btnToday.addEventListener(
      "click",
      (e) => {
        dateInp.value = new Date().toLocaleDateString("pl-PL", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });
      },
      false
    );
    // odstepstwa
    cbDeviation.addEventListener(
      "click",
      (e) => {
        if (e.target.checked) {
          txtDeviation.classList.toggle("line-through");
          labelDeviation.classList.toggle("lapse");
          areaDeviation.removeAttribute("disabled");
        } else {
          txtDeviation.classList.toggle("line-through");
          labelDeviation.classList.toggle("lapse");
          areaDeviation.setAttribute("disabled", true);
        }
      },
      false
    );
    // zgloszenie/decyzja
    choiceFiled.addEventListener(
      "click",
      (e) => {
        // e.preventDefault();
        const label = e.target,
          id = label.getAttribute("id");
        console.log(label);
        if (id === "application") {
          applicationInp.firstElementChild.setAttribute("checked", "true");
          decisionInp.firstElementChild.removeAttribute("checked");
          appText.forEach((e) => {
            e.classList.remove("line-through");
          });
          appInp.forEach((e) => {
            e.classList.remove("hidden");
          });
          desText.forEach((e) => {
            e.classList.add("line-through");
          });
          desInp.forEach((e) => {
            e.classList.add("hidden");
          });
        } else if (id === "decision") {
          decisionInp.firstElementChild.setAttribute("checked", "true");
          applicationInp.firstElementChild.removeAttribute("checked");
          appText.forEach((e) => {
            e.classList.add("line-through");
          });
          appInp.forEach((e) => {
            e.classList.add("hidden");
          });
          desText.forEach((e) => {
            e.classList.remove("line-through");
          });
          desInp.forEach((e) => {
            e.classList.remove("hidden");
          });
        }
      },
      false
    );
  },
  false
);

const getElemFromDocument = (elem) => {
  return document.getElementById(elem);
};
