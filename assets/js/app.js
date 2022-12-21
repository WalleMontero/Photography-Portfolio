let expandButton = document.querySelector("button#moreAboutMe")

expandButton.addEventListener("click", ()=> {
    let moreAboutMe = document.querySelector("section#more-aboutme")
    moreAboutMe.classList.toggle("collapsed")
})