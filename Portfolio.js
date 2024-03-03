const spinner = document.querySelector('.spinner-con');
console.log(spinner);
setTimeout(() => {
    spinner.style.display='none';
},2000);

//Start cross for  hamburger
function onclickMenu() {
    document.getElementById('phone-menu').classList.toggle("bar-cross");
    document.getElementById('ph--navbar').classList.toggle('list-change');
}
//End cross for  hamburger
function scrollMe(){
    if(window.scrollY > 0){
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth',
        });
    }
    else{
        window.location.reload();
    }
}
//Start autowrite
let heading = document.querySelector(".title");
let main_heading ="frontend developer.";
let index = 1;
var typewriter = () => {
    if(heading){//Imaportant line because if it is not written like that otherwise it will show error due to null value in document when two HTML files has same javascript files
        // let new_title = main_heading.slice(0, index)
        heading.textContent = main_heading.slice(0, index);
        // index > main_heading.length ? index=1 : index++;
        index > main_heading.length ? index : index++;
        setTimeout(() => {
            typewriter();
        }, 400);
    }
}
typewriter();
       // start blink-bar
let blink_slash = document.querySelector('.slash');
let index1 = 1;
main_slash = "/";
var slash = () => {
    setTimeout(() => {
        if(blink_slash){
            let new_slash = main_slash.slice(0, index1);
            blink_slash.textContent = new_slash;
            index1 > main_slash.length ? index1 : index++;
        }
    }, 8000);
}
slash();
       // End blink-bar
// End autowrite

// start email.js
function sendMail() {
    if (navigator.onLine) {
        var form_data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        }
        emailjs
            .send("service_thdpjkt", "template_6xxx0ye", form_data)//inbuilt in emiljs
            .then(function (res) {
                alert("success!" + res.status);
                document.getElementById("form_id").reset();
                // document.getElementById("name").value = "";
                // document.getElementById("email").value = "";
                // document.getElementById("message").value = "";
            })
            .catch((err) => {
            alert("you are offline please, check your internet connection", err);
        })
    }
    else {
        alert("May be your connection are offline, please check your internet connection");
    }
}
function clearMail() {
    document.getElementById("form_id").reset();
}

function avil(modeToggleId) {
    const modeToggle = document.getElementById(modeToggleId);
    const bodylet = document.body;
    
    if(modeToggle){
        modeToggle.deviceSwitch = function () {
            bodylet.classList.toggle('dark-mode');
            const currentMode = bodylet.classList.contains('dark-mode') ? 'dark-mode' : ' ';
            localStorage.setItem('enable', currentMode);
        };
    }
    const saveModes = localStorage.getItem('enable');
    if (saveModes) {
        bodylet.classList.add(saveModes);
    }

    if (modeToggle) {
        modeToggle.addEventListener('click', function () {
            avil(modeToggleId);
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if(document){
        avil('phone-mode');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    if(document){
        avil('laptop-mode');
    }
});
        //End switch button 
// start project-file
function backClick(){
    history.back();
}

// start about file
function pointMe(){
    var pointText = document.querySelectorAll('.point--text')
    console.log(pointText);
    pointText.style.display="block";
}
