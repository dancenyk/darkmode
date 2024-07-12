const darkButton = document.getElementById("darkButton");
const elementsToChange = document.querySelectorAll("body .change");


const darkModeFtn = () =>{
    document.body.classList.toggle("dark-mode");

    elementsToChange.forEach(element => {
        element.classList.toggle("dark-mode");
    });
};

darkButton.addEventListener("click", darkModeFtn);


