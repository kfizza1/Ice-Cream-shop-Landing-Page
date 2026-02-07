const flavourDiv = document.querySelector(".flavours");
const buttons = document.querySelectorAll(".flavours button");
const images = document.querySelectorAll(".image");
const body = document.body;
const orderBtn = document.getElementById("order");
const modal = document.querySelector(".order-modal");
const orderFlavourText = document.querySelector(".order-flavour");
const closeBtn = document.querySelector(".close");
const confirmBtn = document.querySelector(".confirm");
const popup = document.getElementById("popup");

let selectedFlavour = "Caramel";


const gradients ={
    caramel: "linear-gradient(180deg, #c2984b, #6b4314)",
  blueberry: "linear-gradient(180deg, #3e245c, #562669)",
  strawberry: "linear-gradient(180deg, #B2383B, #D2575C)",
  chocolate: "linear-gradient(180deg, #3E2723, #6D4C41)",
  pineapple: "linear-gradient(180deg, #F4C430, #F6D860)"
}
const btngradients ={
    caramel: "linear-gradient(180deg, #c2984b, #6b4314)",
  blueberry: "linear-gradient(180deg, #3e245c, #562669)",
  strawberry: "linear-gradient(180deg, #B2383B, #D2575C)",
  chocolate: "linear-gradient(180deg, #3E2723, #6D4C41)",
  pineapple: "linear-gradient(180deg, #F4C430, #F6D860)"
}

// show default flavour
showFlavour("caramel");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const flavour = button.innerText.toLowerCase();
    showFlavour(flavour);
     buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

function showFlavour(flavour){
    selectedFlavour = flavour;
  images.forEach(image => {
    image.classList.remove("show", "hide");

    if (image.classList.contains(flavour)) {
      image.classList.add("show");
    } else {
      image.classList.add("hide");
    }
  });
  body.style.background = gradients[flavour];
  flavourDiv.style.background = btngradients[flavour];
}

orderBtn.addEventListener("click",()=>{
    orderFlavourText.innerText = `Flavour: ${selectedFlavour}`;
    modal.classList.remove("hidden");
});
closeBtn.addEventListener("click",()=>{
    modal.classList.add("hidden");
});
confirmBtn.addEventListener("click",()=>{
    modal.classList.add("hidden");
    popup.style.display = "block";
    setTimeout(() => {
        popup.style.display = "none";
    }, 1000);
});