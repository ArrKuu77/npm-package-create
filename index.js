const myName = "AUng Kaung San" ;

export function showMyName () {
    return myName ;
};

export function showMyNameUI(selector) {
    document.querySelector(selector).innerHTML = myName ;
};