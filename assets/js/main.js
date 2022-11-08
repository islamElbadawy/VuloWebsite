/*==================== TOGGLE HEADER STYLE ====================*/
function toggleHeaderStyle(){
    const header = document.getElementById('header');
    const headerBtn = document.querySelector('#header a:last-child')
    window.onscroll = function() {
        if(window.scrollY > 48){
            header.classList.add('scrolled');
            headerBtn.classList.add('filled');
            headerBtn.classList.remove('empty');
        }
        else{
            header.classList.remove('scrolled');
            headerBtn.classList.remove('filled');
            headerBtn.classList.add('empty');
        }
    }
}

toggleHeaderStyle()

/*==================== TABS SECTION ====================*/
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "grid";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen")?.click();



var onloadCallback = function() {
    alert("grecaptcha is ready!");
};


/*==================== FIREBASE CONNECTIONS ====================*/
// const inbox = db.collection("inbox");
// const msg ={
//     email: "mail@mail.com",
//     message: "This is a message from vulo"
// }
// async function addMsg(msg){
//     try{
//         const docRef = await inbox.add(msg)
//         console.log(docRef);
//     }
//     catch{
//         console.log(error);
//     }
// }

// addMsg(msg)


