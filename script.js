function insertitem(item){
    if(item == "heading"){
        var h1 = document.createElement("h1");
        h1.innerHTML = "Heading"
        document.querySelector(".output").appendChild(h1);
        closeNav2();
        h1.onclick = () =>{
            if(document.querySelectorAll(".active") != null){
                var previous = document.querySelectorAll(".active");
                previous.forEach(item => {
                    item.classList.remove("active");
                })
            }
            h1.classList.add("active");
            openNav();
        }
    }
    else if(item == "para"){
        var h1 = document.createElement("p");
        h1.innerHTML = "Paragraph"
        closeNav2();
        document.querySelector(".output").appendChild(h1);
        h1.onclick = () =>{
            if(document.querySelectorAll(".active") != null){
                var previous = document.querySelectorAll(".active");
                previous.forEach(item => {
                    item.classList.remove("active");
                })
                h1.classList.add("active");
                openNav();
            }
        }
    }
    else if(item == "heroright"){
        var hero = document.querySelector('.hero-right');
        document.querySelector(".output").appendChild(hero);
        hero.style.display = "block"
    }
    else if(item == "product"){
        var hero = document.querySelector('.product');
        document.querySelector(".output").appendChild(hero);
        hero.style.display = "block"
    }
    else if(item == "heroleft"){
        var hero = document.querySelector('.hero-left');
        document.querySelector(".output").appendChild(hero);
        hero.style.display = "block"
    }
    else if(item == "contact"){
        var hero = document.querySelector('.contact');
        document.querySelector(".output").appendChild(hero);
        hero.style.display = "block"
    }
    else if(item == "promotion"){
        var hero = document.querySelector('.promotion');
        document.querySelector(".output").appendChild(hero);
        hero.style.display = "block"
    }
    else if(item == "gallery"){
        var hero = document.querySelector('.gallery');
        document.querySelector(".output").appendChild(hero);
        hero.style.display = "block"
    }
}

function changeAlign(){
    document.querySelector(".active").style.textAlign = document.querySelector(".align").value;
}

function changeSize(){
    document.querySelector(".active").style.fontSize = document.querySelector(".size").value + "px";
}

function changeColor(){
    document.querySelector(".active").style.color = document.querySelector(".color").value;
}

function marginTop(){
    document.querySelector(".active").style.marginTop = document.querySelector(".mtop").value + "px";
}

function marginBottom(){
    document.querySelector(".active").style.marginBottom = document.querySelector(".mbottom").value + "px";
}

function marginRight(){
    document.querySelector(".active").style.marginRight = document.querySelector(".mright").value + "px";
}

function marginLeft(){
    document.querySelector(".active").style.marginLeft = document.querySelector(".mleft").value + "px";
}
function changeText(){
    document.querySelector(".active").innerHTML = document.querySelector(".text").value;
}
function background(){
    document.querySelector(".active").style.backgroundColor = document.querySelector(".bg").value;
}
function changeFont(){
    if( document.querySelector(".font").value == "Poppins"){
        var font = "'Poppins', sans-serif";
        document.querySelector(".active").style.fontFamily = font;
    }
    else if( document.querySelector(".font").value == "Montserrat"){
        var font = "'Montserrat', sans-serif";
        document.querySelector(".active").style.fontFamily = font;
    }
    else if( document.querySelector(".font").value == "Roboto2"){
        var font = "'Roboto Condensed', sans-serif";
        document.querySelector(".active").style.fontFamily = font;
    }
    else if( document.querySelector(".font").value == "Roboto"){
        var font = "'Roboto', sans-serif";
        document.querySelector(".active").style.fontFamily = font;
    }
}

function changeBold(){
    if(document.querySelector(".bold").checked){
        document.querySelector(".active").style.fontWeight = "bold";
    }
    else if(!document.querySelector(".bold").checked){
        document.querySelector(".active").style.fontWeight = "initial";
    }
}

function changeItalic(){
    if(document.querySelector(".italic").checked){
        document.querySelector(".active").style.fontStyle = "italic";
    }
    else if(!document.querySelector(".italic").checked){
        document.querySelector(".active").style.fontStyle = "initial";
    }
}
function deleteel() {
    document.querySelector(".active").remove();
    closeNav();
}

if(document.querySelector(".active") == null){
    document.querySelector(".prop").style.display = "none";
}
else{
    document.querySelector(".prop").style.display = "block";
}

$(".item-to-active").click(function () {
    if(document.querySelectorAll(".active") != null){
        var previous = document.querySelectorAll(".active");
        previous.forEach(item => {
            item.classList.remove("active");
        })
    }
    this.classList.add("active");
    if(!document.querySelector(".active").classList.contains("image-em")){
        openNav();
    }
})

function changeSource() {
    document.querySelector(".active").src = document.querySelector(".source").value;
}

$(".image-em").click(function () {
    openImageNav();
})