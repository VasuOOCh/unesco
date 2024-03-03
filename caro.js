let main = document.querySelector(".main");
let slider = document.querySelector(".slider");
let images = document.querySelectorAll("img");
let loader = document.querySelectorAll(".loader")
let loadProgress = document.querySelectorAll(".loadProgress");
let background= document.querySelector(".background");
let forw = document.querySelector(".forw")
let prev = document.querySelector(".prev")

let body = document.querySelector("body");

let title = document.querySelector(".titleText");
let loc = document.querySelector(".locationText");
let cord = document.querySelector(".cordText");
let about = document.querySelector(".about");
let search = document.querySelector("#search");
let mapMain = document.querySelector("#map")
let navbar = document.querySelector(".navbar");

slider.scrollLeft = 0;

let sliderX = 0;
let toggle1 = false;
let toggle2 = false;
let toggle3 = false;
let animate = true;

let titles = ["Colosseum","Taj Mahal", "Saint Basil's Cathedral","Hagia Sophia",  "Chichén Itzá"]

let locations = ["Regio III Isis et Serapis, Rome, Italy","Agra, Uttar Pradesh, India", "Red Square, Moscow, Russia", "Fatih, Istanbul, Turkey", "Yucatán, Mexico"];

let cords = ["41°53′25″N 12°29′32″E","27°10′30″N 78°02′31″E", "55°45′9″N 37°37′23″E", "41°00′30″N 28°58′48″E", "20°40′59″N 88°34′7″W"];

let abouts = [
    "The Colosseum is an elliptical amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world, despite its age.",

    "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. ",

    "The Cathedral of Vasily the Blessed, commonly known as Saint Basil's Cathedral, is an Orthodox church in Red Square of Moscow, and is one of the most popular cultural symbols of Russia. ",

    "Hagia Sophia, officially the Hagia Sophia Grand Mosque, is a converted former church and mosque and a major cultural and historical site in Istanbul, Turkey. The last of three church buildings to be successively erected on the site by the Eastern Roman Empire, it was completed in 537 AD.",

    "Chichén Itzá is a complex of Mayan ruins on Mexico's Yucatán Peninsula. A massive step pyramid, known as El Castillo or Temple of Kukulcan, dominates the ancient city, which thrived from around 600 A.D. to the 1200s. Graphic stone carvings survive at structures like the ball court, Temple of the Warriors and the Wall of the Skulls."
];

let searches = [
    "https://en.wikipedia.org/wiki/Colosseum",
    "https://en.wikipedia.org/wiki/Taj_Mahal",
    "https://en.wikipedia.org/wiki/Saint_Basil%27s_Cathedral",
    "https://en.wikipedia.org/wiki/Hagia_Sophia",
    "https://en.wikipedia.org/wiki/Chichen_Itza"
]

let map = [
    "https://www.google.com/maps/place/Colosseum/@41.8902142,12.489656,17z/data=!3m1!4b1!4m6!3m5!1s0x132f61b6532013ad:0x28f1c82e908503c4!8m2!3d41.8902102!4d12.4922309!16zL20vMGQ1cXg?entry=ttu",
    "https://www.google.com/maps/place/Taj+Mahal/@27.1751495,78.0395673,17z/data=!3m1!4b1!4m6!3m5!1s0x39747121d702ff6d:0xdd2ae4803f767dde!8m2!3d27.1751448!4d78.0421422!16zL20vMGw4Y2I?entry=ttu",
    "https://www.google.com/maps/place/St.+Basil's+Cathedral/@55.7525259,37.6205119,17z/data=!3m1!4b1!4m6!3m5!1s0x46b54a5962e69605:0xa4cf168ae7cb3ae5!8m2!3d55.7525229!4d37.6230868!16zL20vMDE0bGZ0?entry=ttu",
    "https://www.google.com/maps/search/Hagia+Sophia/@41.0056624,28.9710377,16z/data=!3m1!4b1?entry=ttu",
    "https://www.google.com/maps/search/Chich%C3%A9n+Itz%C3%A1/@20.6809818,-88.5736268,16z/data=!3m1!4b1?entry=ttu"
]


let leftScroll = slider.clientWidth - 50;
let sliderWidth = slider.clientWidth;

// setTimeout(()=>{
//     slider.scrollLeft += leftScroll;
// },4000);
let timeouts = []

console.log(slider.clientWidth)

function animation() {

    if(sliderX == 0) {
        console.log("yess")
        let t1 = setTimeout(()=>{
            slider.scrollLeft += leftScroll;
        },4000);
        // console.log(t1);
        timeouts.push(t1);
    }else if(sliderX >= sliderWidth && sliderX < sliderWidth + 10) {
        if(toggle1 ==false) {
            console.log("yess2-forw")
            let t2_forw = setTimeout(()=>{
                slider.scrollLeft += 500;
            },4000);
            // console.log(t2_forw);
            timeouts.push(t2_forw);
            toggle1 = true
        } else{
            console.log("yess2-back")
            let t2_back = setTimeout(()=>{
                slider.scrollLeft -= 500;
            },4000);
            // console.log(t2_back);
            timeouts.push(t2_back);
            toggle1 = false
        }
    }
    else if(sliderX >= sliderWidth*2 && sliderX < sliderWidth*2 + 20) {
        if(toggle2 ==false) {
            console.log("yess3-forw")
            let t3_forw = setTimeout(()=>{
                slider.scrollLeft += 500;
            },4000);
            // console.log(t3_forw);
            timeouts.push(t3_forw);
            toggle2 = true
        } else{
            console.log("yess3-back")
            let t3_back = setTimeout(()=>{
                slider.scrollLeft -= 500;
            },4000);
            // console.log(t2_back);
            timeouts.push(t3_back);
            toggle2 = false
        }
    }
    else if(sliderX > sliderWidth*3 && sliderX < sliderWidth*3 + 20) {
        if(toggle3 ==false) {
            console.log("yess4-forw")
            let t4_forw = setTimeout(()=>{
                slider.scrollLeft += 500;
            },4000);
            // console.log(t4_forw);
            timeouts.push(t4_forw);
            toggle3 = true
        } else{
            console.log("yess4-back")
            let t4_back = setTimeout(()=>{
                slider.scrollLeft -= 500;
            },4000);
            // console.log(t4_back);
            timeouts.push(t4_back);
            toggle3 = false
        }
    }
    
    else if(sliderX >= sliderWidth*4) {
            console.log("yess5")
            let t5 = setTimeout(()=>{
                slider.scrollLeft -= 500;
            },4000);
            // console.log(t3_forw);
            timeouts.push(t5);
    }
}

setTimeout(()=>{
    animation();
},5000)

slider.addEventListener("scrollend", ()=>{
    sliderX = slider.scrollLeft;
    console.log('SLiderX is ',sliderX);
    let index;
    if(sliderX >= 0 && sliderX <=(sliderWidth/2 + (sliderWidth * 0))) {
        index = 0;

        for(let i = 0; i<images.length; i++) {
            loader[i].classList.remove("activeLoader")
        }

        for(let i = 0; i<images.length; i++) {
            loadProgress[i].classList.remove("loading")
        }

        loader[index].classList.add("activeLoader")
        loadProgress[index].classList.add("loading")

        background.style.background = 'url("back1.png")';
        background.style.backgroundSize = "cover";
        background.style.backgroundRepeat = "no-repeat"
        background.style.backgroundPosition = "center"

        title.innerText = titles[0];
        loc.innerText = locations[0];
        cord.innerText = cords[0];
        about.innerText = abouts[0];

        search.setAttribute("href", searches[0]);
        mapMain.setAttribute("href", map[0])
        

    }
    else if(sliderX > (sliderWidth/2 + (sliderWidth * 0)) && sliderX <=(sliderWidth/2 + (sliderWidth * 1))) {
        index = 1;

        for(let i = 0; i<images.length; i++) {
            loader[i].classList.remove("activeLoader")
        }

        for(let i = 0; i<images.length; i++) {
            loadProgress[i].classList.remove("loading")
        }

        loader[index].classList.add("activeLoader")
        loadProgress[index].classList.add("loading")

        background.style.background = 'url("back2.png")';
        background.style.backgroundSize = "cover";
        background.style.backgroundRepeat = "no-repeat"
        background.style.backgroundPosition = "center"

        title.innerText = titles[1];
        loc.innerText = locations[1];
        cord.innerText = cords[1];
        about.innerText = abouts[1];

        search.setAttribute("href", searches[1])
        mapMain.setAttribute("href", map[1])

    }
    else if(sliderX >= (sliderWidth/2 + (sliderWidth * 1)) && sliderX < (sliderWidth/2 + (sliderWidth * 2))) {
        index = 2;

        for(let i = 0; i<images.length; i++) {
            loader[i].classList.remove("activeLoader")
        }

        for(let i = 0; i<images.length; i++) {
            loadProgress[i].classList.remove("loading")
        }

        loader[index].classList.add("activeLoader")
        loadProgress[index].classList.add("loading")

        background.style.background = 'url("back3.png")';
        background.style.backgroundSize = "cover";
        background.style.backgroundRepeat = "no-repeat"
        background.style.backgroundPosition = "center"

        title.innerText = titles[2];
        loc.innerText = locations[2];
        cord.innerText = cords[2];
        about.innerText = abouts[2];

        search.setAttribute("href", searches[2])
        mapMain.setAttribute("href", map[2])
    }

    else if(sliderX >= (sliderWidth/2 + (sliderWidth * 2)) && sliderX <(sliderWidth/2 + (sliderWidth * 3))) {
        index = 3;

        for(let i = 0; i<images.length; i++) {
            loader[i].classList.remove("activeLoader")
        }

        for(let i = 0; i<images.length; i++) {
            loadProgress[i].classList.remove("loading")
        }

        loader[index].classList.add("activeLoader")
        loadProgress[index].classList.add("loading")

        background.style.background = 'url("back4.png")';
        background.style.backgroundSize = "cover";
        background.style.backgroundRepeat = "no-repeat"
        background.style.backgroundPosition = "center"

        title.innerText = titles[3];
        loc.innerText = locations[3];
        cord.innerText = cords[3];
        about.innerText = abouts[3];

        search.setAttribute("href", searches[3])
        mapMain.setAttribute("href", map[3])

    }

    else if(sliderX >= (sliderWidth/2 + (sliderWidth * 3))) {
        index = 4;

        for(let i = 0; i<images.length; i++) {
            loader[i].classList.remove("activeLoader")
        }

        for(let i = 0; i<images.length; i++) {
            loadProgress[i].classList.remove("loading")
        }

        loader[index].classList.add("activeLoader")
        loadProgress[index].classList.add("loading")

        background.style.background = 'url("back5.png")';
        background.style.backgroundSize = "cover";
        background.style.backgroundRepeat = "no-repeat"
        background.style.backgroundPosition = "center"

        title.innerText = titles[4];
        loc.innerText = locations[4];
        cord.innerText = cords[4];
        about.innerText = abouts[4];

        search.setAttribute("href", searches[4])
        mapMain.setAttribute("href", map[4])

    }

    if(animate == true) {
        animation();
    }

})

prev.addEventListener("click", ()=>{
    for(let i = 0; i<timeouts.length;i++) {
        clearTimeout(timeouts[i]);
    }
    timeouts = [];
    slider.scrollLeft -= leftScroll;
    // animate = false;
})

forw.addEventListener("click", ()=>{
    for(let i = 0; i<timeouts.length;i++) {
        clearTimeout(timeouts[i]);
    }
    timeouts = [];
    slider.scrollLeft += leftScroll;
    // animate = false;
})


document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });


navbar.children[0].addEventListener("click", (e)=> {
    console.log("cliked")
    const home  = document.querySelector(".home")
    home.scrollIntoView({
        behavior : "smooth"
    });

})
navbar.children[1].addEventListener("click", (e)=> {
    console.log("cliked")
    background.scrollIntoView({
        behavior : "smooth"
    });

})

navbar.children[2].addEventListener("click", (e)=> {
    console.log("cliked")
    const contact  = document.querySelector(".contact")
    contact.scrollIntoView({
        behavior : "smooth"
    });

})

document.querySelector(".exploreIcon").addEventListener("click", ()=>{
    background.scrollIntoView({
        behavior : "smooth"
    });
})