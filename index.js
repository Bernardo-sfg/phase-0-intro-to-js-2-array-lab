const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");
    }
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop;
}
function destructivelyRemoveFirstCat(){
    cats.push;
}
function appendCat(name){
    const cat = [...cats, "Broom"];
}
function prependCat(name){
    const cat = ["Arnold", ...cats];
}
function removeLastCat(name){
    const cat = [...cats];
    cat.pop;
}
function removeFirstCat(name){
    const cat = [...cats];
    cat.push;
}