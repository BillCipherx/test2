function get(obj) {
    return document.getElementById(obj);
}
function switchone(){
    get('Login').style.display="none";
    get('Singin').style.display="block";
}
function switchTwo(){
    get('Login').style.display="block";
    get('Singin').style.display="none";
}