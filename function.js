/**
 * age calculator
 * it'll return the age
 * @returns 
 */

let inputdate = document.getElementById('date');
function age(){
    let birthday = new Date(`${inputdate.value}`);
    let today = new Date().getTime();
    let ageyear = Math.floor((today - birthday) / 31536000000)
    return ageyear;
}
