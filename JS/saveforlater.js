
let images = []

function myLoad(){
    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
        sessionStorage.setItem("Images", JSON.stringify(images));
        sessionStorage.setItem("hasCodeRunBefore", true);
    } else {
        images = JSON.parse(sessionStorage.getItem("Images"));
    
    }
}

function saveforlater(event){
    if(event.id === 'btn0'){
        images.push("./Images/TenochHuerta.jpeg")
    }else if(event.id === 'btn1'){
        images.push("./Images/TenochWakandaForever.webp")
    }else if(event.id === 'btn2'){
        images.push("./Images/Madres.webp")
    }else if(event.id === 'btn3'){
        images.push("./Images/ChosenOne.jpeg")
    }else if(event.id === 'btn4'){
        images.push("./Images/tunitas.jpeg")
    }
/*ensure every button is linked to a corresponding image via it's
id and adding it to an array*/
    let allImages = JSON.parse(sessionStorage.getItem("Images"))
    let i = allImages.length
/*counting the total number of images in the sessionstorage and adding
and allerting the user before setting array images in session storage*/
    alert("You have "+(i+1)+" items saved.")
    sessionStorage.setItem("Images", JSON.stringify(images))
}

function showList(){
    let tbodyelements = document.getElementById("table-body")
    let newImage = document.createElement("tr")
    let Images = JSON.parse(sessionStorage.getItem("Images"))

/*for each element in the array we create a list item of the image
by editing the element content and turning the image location into
an actual image link */    
    Images.forEach(element => {
        let newImages = document.createElement("td")
        newImage.appendChild(newImages)
        newImages.innerHTML = "<img alt='element' src=''>"
        newImages.querySelector('img').src = "../" + element
        tbodyelements.appendChild(newImage) 
        newImage = document.createElement("tr")   
    })

}

function comments(){
    let comment = document.getElementById("comment").value
    let list = document.getElementById("comments")
    let listitem = document.createElement("li")
/* Create a list of comments by adding the comment content to 
an empty list item and adding it to the list */
    listitem.textContent = comment

    list.appendChild(listitem)
    console.log(list)    
}

/*function icon(x) {
    x.toggleClass("fa-solid fa-heart");
}*/


$(document).ready(function(){
//create an accordian
    $("#accordion").accordion({
        event: "mouseover"
    })
//fade in and out
    $("#btn1").click(function(e){
       $("#pic1").fadeToggle(3000);
       $("#btn1").fadeIn(0);
    })

//animate coloured backgrounds withing a set interval
    function animation(){  
        $('body').animate({backgroundColor: "red"},500).animate({backgroundColor: "blue"},500).animate({backgroundColor: "green"},500)
    }   

    let num = setInterval(animation(),1500)
    animation()

    /*toggle icon on click by selecting the wrapper defining the item clicked
    specifying the element of the item clicked*/
    $("span").click(
        function()
        {
            $(this).find("i").toggleClass("fa-solid")
        }
    );

//make drop down menu drop down/show when hovered over
    $(".dropdownButton").mouseenter(function(){
        $(".mydropDown").css("display","contents")
    })
//make drop down menu roll up when it leaves
    $(".dropdownButton").mouseleave(function(){
        $(".mydropDown").css("display","none")
    })

})

/*https://www.w3schools.com/css/css_display_visibility.asp
https://www.youtube.com/watch?v=yN0ALc5ZFgA
 https://stackoverflow.com/questions/23266545/how-to-toggle-font-awesome-icon-on-click
 https://www.w3schools.com/howto/howto_js_toggle_like.asp*/