const switchInput = document.querySelector("#switch")
switchInput.addEventListener("change", () => {
    const months = document.querySelector(".months")
    const days = document.querySelector(".days")
    if(switchInput.checked){
        months.style.display = "none"
        days.style.display = 'flex'
    }else{
        months.style.display = "flex"
        days.style.display = 'none'
    }
})