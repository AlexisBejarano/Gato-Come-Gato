var seleccion = 0;
var img = "";
var valor = 0;
var imgR1 = 1;
var imgR2 = 1;
var imgR3 = 1;
var imgR4 = 1;
var imgR5 = 1;
var imgR6 = 1;
var validar = 0;


var intentosImg = true;
//BOTONES SELECCIONAR QUE TIPO DE FICHA ES.
function selectA1() {
    if (validar == 0 && imgR1 <= 3) {
        seleccion = 1;
        img = '<img class="imgClass" src="https://i.postimg.cc/bGmyZRMm/1R.png">';
        switch (imgR1) {
            case 1:
                document.getElementById("imgId1").innerHTML = '<div></div>';
                break;
            case 2:
                document.getElementById("imgId2").innerHTML = '<div></div>';
                break;
            case 3:
                document.getElementById("imgId3").innerHTML = '<div></div>';
                break;
            default:
                break;
        }
        validar = 1;
        imgR1++;
        valor = 1;
    }
}

function selectA2() {
    if (validar == 0 && imgR2 <= 3) {
        seleccion = 2;
        img = '<img class="imgClass" src="https://i.postimg.cc/1nTyH3y6/2R.png">';
        switch (imgR2) {
            case 1:
                document.getElementById("imgId4").innerHTML = '<div></div>';
                break;
            case 2:
                document.getElementById("imgId5").innerHTML = '<div></div>';
                break;
            case 3:
                document.getElementById("imgId6").innerHTML = '<div></div>';
                break;
            default:
                break;
        }
        validar = 1;
        imgR2++;
        valor = 2;
    }
}

function selectA3() {
    if (validar == 0 && imgR3 <= 3) {
        seleccion = 3;
        img = '<img class="imgClass" src="https://i.postimg.cc/c6gxJwcc/3R.png">';
        switch (imgR3) {
            case 1:
                document.getElementById("imgId7").innerHTML = '<div></div>';
                break;
            case 2:
                document.getElementById("imgId8").innerHTML = '<div></div>';
                break;
            case 3:
                document.getElementById("imgId9").innerHTML = '<div></div>';
                break;
            default:
                break;
        }
        validar = 1;
        imgR3++;
        valor = 3;
    }
}

function selectB1() {
    if (validar == 0 && imgR4 <= 3) {
        seleccion = 4;
        img = '<img class="imgClass" src="https://i.postimg.cc/xkfjjZsk/1A.png">';
        switch (imgR4) {
            case 1:
                document.getElementById("imgId10").innerHTML = '<div></div>';
                break;
            case 2:
                document.getElementById("imgId11").innerHTML = '<div></div>';
                break;
            case 3:
                document.getElementById("imgId12").innerHTML = '<div></div>';
                break;
            default:
                break;
        }
        validar = 1;
        imgR4++;
        valor = 1;
    }
}

function selectB2() {
    if (validar == 0 && imgR5 <= 3) {
        seleccion = 5;
        img = '<img class="imgClass" src="https://i.postimg.cc/qhgky3H4/2A.png">';
        switch (imgR5) {
            case 1:
                document.getElementById("imgId13").innerHTML = '<div></div>';
                break;
            case 2:
                document.getElementById("imgId14").innerHTML = '<div></div>';
                break;
            case 3:
                document.getElementById("imgId15").innerHTML = '<div></div>';
                break;
            default:
                break;
        }
        validar = 1;
        imgR5++;
        valor = 2;
    }
}

function selectB3() {
    if (validar == 0 && imgR6 <= 3) {
        seleccion = 6;
        img = '<img class="imgClass" src="https://i.postimg.cc/Zvd4DzqQ/3A.png">';
        switch (imgR6) {
            case 1:
                document.getElementById("imgId16").innerHTML = '<div></div>';
                break;
            case 2:
                document.getElementById("imgId17").innerHTML = '<div></div>';
                break;
            case 3:
                document.getElementById("imgId18").innerHTML = '<div></div>';
                break;
            default:
                break;
        }
        validar = 1;
        imgR6++;
        valor = 3;
    }
}
var espacio1 = 0;
var espacio2 = 0;
var espacio3 = 0;
var espacio4 = 0;
var espacio5 = 0;
var espacio6 = 0;
var espacio7 = 0;
var espacio8 = 0;
var espacio9 = 0;
var espacio10 = 0;
var espacio11 = 0;
var espacio12 = 0;
//BTN DEL JUEGO DEL GATO-------------------------------------------------------------------------
function gato1() {
    
    if (seleccion == 0 || espacio1 >= valor) {
    } else{
        document.getElementById("espacio1").innerHTML = img;
        espacio1 = valor;
        seleccion = 0;
        validar = 0;
    }
}

function gato2() {
    
    if (seleccion == 0 || espacio2 >= valor){
    } else {
        document.getElementById("espacio2").innerHTML = img;
        espacio2 = valor;
        seleccion = 0;
        validar = 0;
    }
}

function gato3() {
    
    if (seleccion == 0 || espacio3 >= valor) {
    } else {
        document.getElementById("espacio3").innerHTML = img;
        espacio3 = valor;
        seleccion = 0;
        validar = 0;
    }
}

function gato4() {
    
    if (seleccion == 0 || espacio4 >= valor) {
    } else {
        document.getElementById("espacio4").innerHTML = img;
        espacio4 = valor;
        seleccion = 0;
        validar = 0;
    }
}

function gato5() {
    
    if (seleccion == 0 || espacio5 >= valor) {
    } else {
        document.getElementById("espacio5").innerHTML = img;
        espacio5 = valor;
        seleccion = 0;
        validar = 0;
    }
}

function gato6() {
    
    if (seleccion == 0 || espacio6 >= valor) {
    } else {
        document.getElementById("espacio6").innerHTML = img;
        espacio6 = valor;
        seleccion = 0;
        validar = 0;
    }
}

function gato7() {
    
    if (seleccion == 0 || espacio7 >= valor) {
    } else {
        document.getElementById("espacio7").innerHTML = img;
        espacio7 = valor;
        seleccion = 0;
        validar = 0;
    }
}

function gato8() {
    
    if (seleccion == 0 || espacio8 >= valor) {
    } else {
        document.getElementById("espacio8").innerHTML = img;
        espacio8 = valor;
        seleccion = 0;
        validar = 0;
    }
}

function gato9() {
    
    if (seleccion == 0 || espacio9 >= valor) {
    } else {
        document.getElementById("espacio9").innerHTML = img;
        espacio9 = valor;
        seleccion = 0;
        validar = 0;
    }
}