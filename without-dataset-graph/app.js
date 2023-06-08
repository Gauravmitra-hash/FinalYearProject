const T = require('tesseract.js')
T.recognize('./text.png','eng',{
    logger: e => console.log("please Wait..",Math.trunc(e.progress*100))})
    .then((out) => {
        console.log("---------------------------")
        console.log()
        console.log(out.data.text)
        console.log("---------------------------")
    })




