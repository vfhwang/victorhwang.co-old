    var z = true;

function toggleInfo() {
    var x = document.getElementById("biomore");
    var y = document.getElementById("moreinfo");

    if (z == true){
    x.classList.toggle("open");
    y.innerHTML = "actually, no thanks";
    z = false
} else {
    x.classList.toggle("open");
    y.innerHTML = "contact me";
    z = true
}

    // x.classList.toggle("open");
    // z = false



    // if (x.style.display === "none") {
    //   // document.getElementById("buttontext").innerHTML = "Less info";
    //     y.style.display = "none";
    //     x.style.display = "block";
    // } else {
    //   // document.getElementById("buttontext").innerHTML = "More info";
    //     x.style.display = "none";
    // }



}
