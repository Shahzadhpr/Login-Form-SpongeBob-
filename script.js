let leftEye = document.querySelector(".lefteye")
let rightEye = document.querySelector(".righteye")
let userInput = document.querySelector("#userInput")
let passInput = document.querySelector("#passInput")

let leftEyeTop = 75
let leftEyeLeft = 110
let lefEyePaddingTop = 0
let lefEyePaddingLeft = 0

let rightEyeTop = 75
let rightEyeLeft = 174
let rightEyePaddingTop = 0
let rightEyePaddingLeft = 0


const userInputFocus = () => {
    let eyePosition = setInterval(() => {
        if(lefEyePaddingTop === 10) {
            clearInterval(eyePosition)
        }

        leftEye.style.paddingTop = lefEyePaddingTop + 'px'
        leftEye.style.left = leftEyeLeft + 'px'
        
        rightEye.style.paddingTop = rightEyePaddingTop + 'px'
        rightEye.style.left = rightEyeLeft + 'px'

        lefEyePaddingTop++
        leftEyeLeft--

        rightEyePaddingTop++
        rightEyeLeft--
     
    }, 15);
}

const userInputBlur = () => {
    let eyePosition = setInterval(() => {
        if(lefEyePaddingTop === 0) {
            clearInterval(eyePosition)
        }

        leftEye.style.paddingTop = lefEyePaddingTop + 'px'
        leftEye.style.left = leftEyeLeft + 'px'
        
        rightEye.style.paddingTop = rightEyePaddingTop + 'px'
        rightEye.style.left = rightEyeLeft + 'px'

        lefEyePaddingTop--
        leftEyeLeft++

        rightEyePaddingTop--
        rightEyeLeft++
     
    }, 15);
}

const userKeyHandler = (event) => {
    // console.log(event);

    if(lefEyePaddingLeft > 20) {
        return false
    }
    
    leftEye.style.paddingLeft = lefEyePaddingLeft + 'px'
    rightEye.style.paddingLeft = rightEyePaddingLeft + 'px'
    
    if(event.keyCode === 8) {
        lefEyePaddingLeft--
        rightEyePaddingLeft--
    } else{
        lefEyePaddingLeft++
        rightEyePaddingLeft++
    }
    
}

const passInputFocus = () => {
    let eyePosition = setInterval(() => {
        if(leftEyeTop === 62) {
            clearInterval(eyePosition)
        }

        leftEye.style.left = leftEyeLeft + 'px'
        leftEye.style.top = leftEyeTop + 'px'

        rightEye.style.left = rightEyeLeft+ 'px'
        rightEye.style.top = rightEyeTop+ 'px'  


        leftEyeLeft++
        leftEyeTop--

        rightEyeLeft--
        rightEyeTop--

    }, 15);
}

const passInputBlur = () => {
    let eyePosition = setInterval(() => {
        if(leftEyeTop === 75) {
            clearInterval(eyePosition)
        }

        leftEye.style.left = leftEyeLeft + 'px'
        leftEye.style.top = leftEyeTop + 'px'

        rightEye.style.left = rightEyeLeft+ 'px'
        rightEye.style.top = rightEyeTop+ 'px'  


        leftEyeLeft--
        leftEyeTop++

        rightEyeLeft++
        rightEyeTop++

    }, 15);
}

userInput.addEventListener('focus', userInputFocus)
userInput.addEventListener('blur', userInputBlur)
userInput.addEventListener('keydown', userKeyHandler)

passInput.addEventListener('focus', passInputFocus)
passInput.addEventListener('blur', passInputBlur)