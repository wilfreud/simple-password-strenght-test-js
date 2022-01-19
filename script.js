let fild = document.getElementById("passwd")
let content = document.getElementById("focus")


fild.addEventListener("input", () => {
    let flen = fild.value
    if (flen == "") {
        content.innerHTML = ""
        document.body.removeAttribute("class")
    }
    else{
        if (flen.length < 8) {
            content.innerHTML = `<span class="weak">Weak</span> password`
            document.body.className = "weak"
        }
        if (flen.length >= 8 && flen.length < 16) {
            content.innerHTML = `<span class="medium">Medium</span> password`
            document.body.className = "medium"
        }
        if (flen.length >= 16) {
            content.innerHTML = `<span class="strong">Strong</span> password`
            document.body.className = "strong"
        }
    }
})