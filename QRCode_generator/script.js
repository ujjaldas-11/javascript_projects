const qrText = document.getElementById('qr-text')
const sizes = document.getElementById('sizes')
const generateBtn = document.getElementById('generateBtn')
const downloadBtn = document.getElementById('downloadBtn')
const qrBody = document.querySelector('.qr-body')


let size = sizes.value;

            // generate button

generateBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    isEptyInput();
});

sizes.addEventListener('change', (e)=> {
    size = e.target.value;
    isEptyInput();
})


            /* download section */

downloadBtn.addEventListener('click', ()=> {
    let img = document.querySelector('.qr-body img');
    if(img !== null) {
        let imgAttr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAttr);
    } else {
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`)
    }
})


function isEptyInput() {

    qrText.value.length > 0 ? generateQrcode() : alert("Enter text or URL to generate your QRCode");
    
}


            // qrcode button

function generateQrcode() {
    qrBody.innerHTML = "";
     new QRCode(qrBody,{
        text: qrText.value,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000",
    });
}

