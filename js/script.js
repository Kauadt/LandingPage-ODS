xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/conteudo.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
x = xmlDoc.getElementsByTagName("content");
y = xmlDoc.getElementsByTagName("postagem");


function imagenavbar() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<img src='images/" + x[i].getElementsByTagName("imagenavbar")[0].childNodes[0].nodeValue + "' class='rounded-circle' width='40px'>");
    }
}

function imageinicio() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<img src='images/" + x[i].getElementsByTagName("imageinicio")[0].childNodes[0].nodeValue + "' class='img-fluid'>");
    }
}

function title1() {

    for (i = x.length - 1; i >= 0; i--) {
        document.write("<h1 class='text-center mt-5'>" +
            x[i].getElementsByTagName("title1")[0].childNodes[0].nodeValue +
            "</h1>");
    }
}

function text1() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p class='font mt-5'>" + x[i].getElementsByTagName("text1")[0].childNodes[0].nodeValue) + "</p>";
    }
}

function text2() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p class='font'>" + x[i].getElementsByTagName("text2")[0].childNodes[0].nodeValue + "</p>");
    }
}

function image1() {
    document.write("<div class='col-xxl-8 col-md-6 col-sm-6-col-xs-4 pt-5 pb-3 center'>")
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<img src='images/" + x[i].getElementsByTagName("image1")[0].childNodes[0].nodeValue + "' class='img-fluid'>");
    }
    document.write("</div>")
}

function text3() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p class='font pt-5'>" + x[i].getElementsByTagName("text3")[0].childNodes[0].nodeValue +
            "</p>");
    }
}

function text4() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p class='font'>" + x[i].getElementsByTagName("text4")[0].childNodes[0].nodeValue +
            "</p>");
    }
}

function title2() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<h1 class='pt2 text-center mt-5'>" + x[i].getElementsByTagName("title2")[0].childNodes[0].nodeValue +
            "</h1>");
    }
}

function text5() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p class='font3 mt-5'>" + x[i].getElementsByTagName("text5")[0].childNodes[0].nodeValue +
            "</p>");
    }
}

function imagecarousel1() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<img src='images/" + x[i].getElementsByTagName("imagecarousel1")[0].childNodes[0].nodeValue + "' class='d-block w-100'>");
    }
}

function imagecarousel2() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<img src='images/" + x[i].getElementsByTagName("imagecarousel2")[0].childNodes[0].nodeValue + "' class='d-block w-100'>");
    }
}

function imagecarousel3() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<img src='images/" + x[i].getElementsByTagName("imagecarousel3")[0].childNodes[0].nodeValue + "' class='d-block w-100'>");
    }
}

function text6() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p class='font3 mt-5'>" + x[i].getElementsByTagName("text6")[0].childNodes[0].nodeValue +
            "</p>");
    }
}

function title3() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<h1 class='text-center mt-5'>" + x[i].getElementsByTagName("title3")[0].childNodes[0].nodeValue + "</h1>");
    }
}

// Inicio Cards

function card1() {
    document.write("<div class='col-12 col-sm-6 col-lg-4 mt-2'>" +
        "<div class='card bg-dark' style='min-height: 270px;'>" +
        "<div class='card-body'>");

    for (i = x.length - 1; i >= 0; i--) {
        document.write("<h5 class='card-title text-center font2 fst-italic'>" +
            x[i].getElementsByTagName("cardtitle1")[0].childNodes[0].nodeValue + "</h5>" +
            "<p class='card-text font3'>"
            + x[i].getElementsByTagName("cardtext1")[0].childNodes[0].nodeValue + "</p>");
    }
    document.write("</div>" +
        "</div>" +
        "</div>")
}


function card2() {
    document.write("<div class='col-12 col-sm-6 col-lg-4 mt-2'>" +
        "<div class='card bg-dark' style='min-height: 270px;'>" +
        "<div class='card-body'>");

    for (i = x.length - 1; i >= 0; i--) {
        document.write("<h5 class='card-title text-center font2 fst-italic'>" +
            x[i].getElementsByTagName("cardtitle2")[0].childNodes[0].nodeValue + "</h5>" +
            "<p class='card-text font3'>"
            + x[i].getElementsByTagName("cardtext2")[0].childNodes[0].nodeValue + "</p>");
    }
    document.write("</div>" +
        "</div>" +
        "</div>")
}

function card3() {
    document.write("<div class='col-12 col-sm-6 col-lg-4 mt-2'>" +
        "<div class='card bg-dark' style='min-height: 270px;'>" +
        "<div class='card-body'>");

    for (i = x.length - 1; i >= 0; i--) {
        document.write("<h5 class='card-title text-center font2 fst-italic'>" +
            x[i].getElementsByTagName("cardtitle3")[0].childNodes[0].nodeValue + "</h5>" +
            "<p class='card-text font3'>"
            + x[i].getElementsByTagName("cardtext3")[0].childNodes[0].nodeValue + "</p>");
    }
    document.write("</div>" +
        "</div>" +
        "</div>")
}

function card4() {
    document.write("<div class='col-12 col-sm-6 col-lg-4 mt-2'>" +
        "<div class='card bg-dark' style='min-height: 270px;'>" +
        "<div class='card-body'>");

    for (i = x.length - 1; i >= 0; i--) {
        document.write("<h5 class='card-title text-center font2 fst-italic'>" +
            x[i].getElementsByTagName("cardtitle4")[0].childNodes[0].nodeValue + "</h5>" +
            "<p class='card-text font3'>"
            + x[i].getElementsByTagName("cardtext4")[0].childNodes[0].nodeValue + "</p>");
    }
    document.write("</div>" +
        "</div>" +
        "</div>")
}

function card5() {
    document.write("<div class='col-12 col-sm-6 col-lg-4 mt-2'>" +
        "<div class='card bg-dark' style='min-height: 270px;'>" +
        "<div class='card-body'>");

    for (i = x.length - 1; i >= 0; i--) {
        document.write("<h5 class='card-title text-center font2 fst-italic'>" +
            x[i].getElementsByTagName("cardtitle5")[0].childNodes[0].nodeValue + "</h5>" +
            "<p class='card-text font3'>"
            + x[i].getElementsByTagName("cardtext5")[0].childNodes[0].nodeValue + "</p>");
    }
    document.write("</div>" +
        "</div>" +
        "</div>")
}

function card6() {

    for (i = x.length - 1; i >= 0; i--) {
        document.write(
            "<div class='col-12 col-sm-6 col-lg-4 mt-2'>" +
            "<div class='card bg-dark' style='min-height: 270px;'>" +
            "<div class='card-body'>" +
            "<h5 class='card-title text-center font2 fst-italic'>" +
            x[i].getElementsByTagName("cardtitle6")[0].childNodes[0].nodeValue + "</h5>" +
            "<p class='card-text font3'>"
            + x[i].getElementsByTagName("cardtext6")[0].childNodes[0].nodeValue + "</p>"); +
                "</div>" +
                "</div>" +
                "</div>"
    }
}

// Fim cards

// Blog

function noticias(){
    for(i = y.length - 1; i >= 0; i--){
        document.write(
            "<div class='row mt-5'>" +
        "<div class='areanot center'>" +
        "<div class='row'>" +
        "<div class='col-md-6 col-sm-12'>" +
            "<div class='quadrado'>" +
            "<div class='imagem'>" +
            "<img src='images/" + y[i].getElementsByTagName("imageblog")[0].childNodes[0].nodeValue + "' class='img-fluid'>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='col-md-6 mt-3 pt-4'>" +
            "<h1 class='display-5 font2 ps-2'>" +
            y[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h1>" +
            "<p class='font3' style='padding-top: 20px;'>" +
            y[i].getElementsByTagName("blogtext")[0].childNodes[0].nodeValue.substr(0, 273) + "...</p>" +
            "<a class='font3 lead' style='padding-top: 20px; padding-left: 35px' href='noticias.html?codigo_noticia=" + i + "'>" + y[i].getElementsByTagName("lermais")[0].childNodes[0].nodeValue + "</a>" +
            "</div>" +
        "</div>" +
        "</div>" +
        "</div>"
        );
    }
}



function funcaoPostagem() {
    url = new URL(window.location.href)
    parametro = url.searchParams;
    i = parametro.get("codigo_noticia");

    document.write(
        "<h1 style='color: #de1768;'>" + y[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h1>" +
        "<p class='font mt-5 mb-5'>" + y[i].getElementsByTagName("blogtext")[0].childNodes[0].nodeValue + "</p>" +
        "<div class='row'>" +
        "<div class='col-xxl-8 col-md-6 col-sm-6-col-xs-4 pt-5 pb-3 center'>" +
        "<img src='images/" + y[i].getElementsByTagName("imageblog")[0].childNodes[0].nodeValue + "' class='img-fluid'>" +
        "</div>" +
        "</div>" +
        "<p class='font mt-5 mb-5'>" + y[i].getElementsByTagName("blogtext2")[0].childNodes[0].nodeValue + "</p>" +
        "<button type='button' class='btn btn-dark ms-5 mt-3 mb-5'>" +
        "<a href='" + y[i].getElementsByTagName("fonte")[0].childNodes[0].nodeValue + "'>Notícia Original</a>" +
        "</button>"
        );
}


function titleGeralNoticias(){
    url = new URL(window.location.href)
    parametro = url.searchParams;
    i = parametro.get("codigo_noticia");
    y[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue
}

// Blog


// Footer
function footercreators() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<h5 class='font2 text-center'>" + x[i].getElementsByTagName("footercreators")[0].childNodes[0].nodeValue +
            "</h5>");
    }
}

function footername1() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<a href='https://github.com/Kauadt' class='font3'>" + x[i].getElementsByTagName("footername1")[0].childNodes[0].nodeValue + "</a>");
    }
}

function footername2() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<a href='https://github.com/MuriloDeLima' class='font3'>" + x[i].getElementsByTagName("footername2")[0].childNodes[0].nodeValue + "</a>");
    }
}


function footername3() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<a href='hhttps://github.com/zzzKauaMoledo' class='font3'>" + x[i].getElementsByTagName("footername3")[0].childNodes[0].nodeValue + "</a>");
    }
}

function footertext1() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write(x[i].getElementsByTagName("footertext1")[0].childNodes[0].nodeValue);
    }
}

function imageinsta() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<img src='images/" + x[i].getElementsByTagName("imagefooter1")[0].childNodes[0].nodeValue + "'>");
    }
}

function imagetwitter() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<img src='images/" + x[i].getElementsByTagName("imagefooter2")[0].childNodes[0].nodeValue + "'>");
    }
}

function imageyt() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<img src='images/" + x[i].getElementsByTagName("imagefooter3")[0].childNodes[0].nodeValue + "'>");
    }
}

function imageface() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<img src='images/" + x[i].getElementsByTagName("imagefooter4")[0].childNodes[0].nodeValue + "'>");
    }
}
// Footer