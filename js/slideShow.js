//Automatic slide show change in every 3 seconds


var image_arr = [
    "https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    "https://c.ndtvimg.com/2018-10/0nbugga8_work_625x300_12_October_18.png",
    "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    "https://miro.medium.com/max/2600/1*tVFawhAO3krzvKE0_8fwKA.jpeg",
    "https://tidbits.com/uploads/2019/05/black-background-costume-dark-mode-900x0-c-default.jpg",
    "https://miro.medium.com/max/800/0*ezNubwrFoWGM8wdr",
    "https://cdn.guidingtech.com/imager/assets/212232/Windows-10-File-Explorer-Dark-Mode-Not-Working-Featured-Alt_181227_221756_4d470f76dc99e18ad75087b1b8410ea9.png?1546437742"
]

var index = 0

setInterval(imageShow,3000)

function imageShow(){
    let element = document.getElementById("slide") //getting the slideshow id
    
    if(index >= image_arr.length){
        index = 0
        /* The image used */
        element.style.backgroundImage = "url(" + image_arr[index] + ")";
        element.style.width = "100%"
    }
    else{
        /* The image used */
        element.style.backgroundImage = "url(" + image_arr[index] + ")";
        element.style.width = "100%"
        ++index
    }

}

