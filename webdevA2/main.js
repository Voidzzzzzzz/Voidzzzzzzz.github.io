//target all elements to save to constants
const hamIcon=document.querySelector("#hamIcon");
var allpages=document.querySelectorAll(".page");
const allSubpages = document.querySelectorAll(".subpg");
const menuItemsList=document.querySelector("ul");
const pieces = document.querySelectorAll(".piece");
const resetBtn = document.getElementById("resetBtn");

function hideall(){ //function to hide all pages
    for(let onepage of allpages){ //go through all subtopic pages
        onepage.style.display="none"; //hide it
    }
}
function show(pgno){ //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage=document.querySelector("#page"+pgno);
    onepage.style.display="block"; //show the page
}

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
for(let i=1; i<=5;i++){
      const pgbutton = document.querySelector(`#page${i}btn`);

    if (pgbutton) {
        pgbutton.addEventListener("click", function () {
            show(i);
        });
        //uses the constant to add event listener
    }
} //same as subpage

for(let i=1; i<=10;i++){
      const button = document.querySelector(`#subpage${i}btn`);
      //Save the subpage to constant
    if (button) {
        button.addEventListener("click", function () {
            togglesubpage(i);
        });
        //uses the constant to add event listener
    }
} //For loop to add click to all subpages
hideall();

function togglesubpage(subpgno) {
    // Hide all subpages first
    allSubpages.forEach(function (subpg) {
        subpg.style.display = "none";
    });

    // Get the specific subpage
    const selectedSubpage = document.querySelector("#subpg" + subpgno);

    // Toggle visibility (only show if it was hidden)
    if (selectedSubpage.style.display === "none") {
        selectedSubpage.style.display = "block";
    } 
    else {
        selectedSubpage.style.display = "none";
    }
}

function toggleMenus(){ /*open and close menu*/
    //if menuItemsList dont have the class "menuShow", add it, else remove it
        menuItemsList.classList.toggle("menuShow");
    //if menu is showing (has the class “menuShow”)
    if(menuItemsList.classList.contains("menuShow")){
        hamIcon.innerHTML="Close Menu"; //change button text to chose menu
    }
    else{ //if menu NOT showing
        hamIcon.innerHTML="Open Menu"; //change button text open menu
    }
}

hamIcon.addEventListener("click", toggleMenus);

pieces.forEach(function (piece) {
  piece.addEventListener("click", function () {
    const part = piece.getAttribute("data-part");
    const imgUrl = piece.getAttribute("data-img");
    dressUp(part, imgUrl);
  });
});

resetBtn.addEventListener("click", resetDress);

function dressUp(part, imgUrl) {
  const layer = document.getElementById(part);
  if (layer) {
    layer.src = imgUrl;
  }
}

function resetDress() {
  ["wig", "top", "bottom"].forEach(function (part) {
    const layer = document.getElementById(part);
    if (layer) {
      layer.src = "";
    }
  });
}

const btnSubmit=document.querySelector("#btnSubmit");
const scorebox=document.querySelector("#scorebox");
var score=0;
function CheckAns(){
  score=0;
    arrayAns=[        
        "Bringing characters to life",
        "Basic Character Makeup",
        "Spirit gum and fake blood",
        "To depict non-human skin colors",
        "It requires advanced tools and skills",
        "It's soft and flexible",
        "3D printing",
        "Choosing material and drawing sketches",
        "Shaping materials into required forms",
        "To apply base coat and sealants"
    ];

    for(let i=1;i<=10;i++){
        CheckOneAnswer(i,arrayAns[i-1]);
    }
    scorebox.innerHTML = `Score: ${score} / 10`;

    // Trigger the pop animation
    scorebox.classList.remove("popout"); // Reset in case it's already applied
    void scorebox.offsetWidth; // bMakes teh website know that we wanna do it again
    scorebox.classList.add("popout");
}

function CheckOneAnswer(qnNo,correctAns){
    let q=document.querySelector("input[name='q"+qnNo+"']:checked").value;
    console.log(q);
    if(q==correctAns) score++;
}
btnSubmit.addEventListener("click", CheckAns);