var imgs = Array.from (document.querySelectorAll(".img-fluid"));
var lightboxcon = document.getElementById("lightboxcon");
var closeIcon = document.getElementById("close")
var ligtbocitem = document.getElementById("ligtbocitem")

var nexticon = document.getElementById("next")
var prevticon = document.getElementById("prev")
currentIndex = 0;


for (var i = 0; i < imgs.length; i++){
    imgs[i].addEventListener("click",function (e) {
        lightboxcon.style.display = "flex";
        var imgsrc = e.target.src
        ligtbocitem.style.backgroundImage = `url(${imgsrc})`
        currentIndex=imgs.indexOf(e.target)
        
        
    })      
}
closeIcon.addEventListener("click", closeslider)
function closeslider() {
    lightboxcon.style.display = "none";
}
nexticon.addEventListener("click",nextslider )
function nextslider() {
    currentIndex++
    if (currentIndex == imgs.length) {
        currentIndex=0
        
    }
    var imgsrc = imgs[currentIndex].src;
    ligtbocitem.style.backgroundImage = `url(${imgsrc})`
    
}
prevticon.addEventListener("click",prevslider )
function prevslider() {
    currentIndex--
    if (currentIndex<0){
        currentIndex == imgs.length-1
        
    }
    var imgsrc = imgs[currentIndex].src;
    ligtbocitem.style.backgroundImage = `url(${imgsrc})`
    
}
document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
        closeslider()
    }
    else if (e.key == "ArrowRight") {
        nextslider()
        
    }
    else if (e.key == "ArrowLeft") {
        prevslider()
        
    }
})

    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET","https://jsonplaceholder.typicode.com/posts")
    httpRequest.send();
    var posts = [];
    httpRequest.addEventListener("readystatechange", function () {
        console.log("FGFD")
        if (httpRequest.readyState == 4) {
            posts=JSON.parse(httpRequest.response);
            console.log(posts)
        }

    })
