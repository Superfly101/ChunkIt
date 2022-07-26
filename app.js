const sliders = document.querySelectorAll('.sliders')
const btnLeft = document.querySelector('.sliders-btn-left')
const btnRight = document.querySelector('.sliders-btn-right')

const slide1 = document.querySelector("#slide1")
const slide2 = document.querySelector("#slide2")
const slide3 = document.querySelector("#slide3")


const text = document.querySelector('#text')
console.log(text)

var i = 0
var images = []
var time = 3000

images[0] = './img/file-girl.png'
images[1] = './img/dashbord-girl.png'
images[2] = './img/device-man.png'




// btnLeft.addEventListener('click', toggleSlides)
// btnRight.addEventListener('click', toggleSlides)


function toggleSlides(){
    document.slide.src = images[i]

    if(i < images.length-1 ){
        i++
    }else{
        i = 0
    }


    setTimeout('toggleSlides()', time)

    text.textContent != 'Get access to splitting your large files for free' ? text.textContent = 'Customise and Organize your split files in dashboard' : ''

    images[i] === images[0] ? text.textContent = 'Enjoy seamless experience across all devices' : ''

    // text.textContent= 'Enjoy seamless experience across all devices'
       
    
    
    // sliders.forEach(slide => {



    //     if(i < slide.lenght - 1){
    //         i++ && console.log(slide)
    //     }else{
    //         i = 0
    //     }
    //     setTimeout('toggleSlides()', time)
    // })
    
}

window.onload = toggleSlides