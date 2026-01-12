const favFoods = [
  "Pizza",
  "Burgers",
  "Lasagna",
];

console.log(favFoods); // 

const randomIndex = Math.floor(Math.random() * favFoods.length);
console.log(favFoods[randomIndex]); 


function add(a, b) {
  return a + b;
}

const button = document.getElementById("generate-btn");
const result = document.getElementById("result");

if (button && result) {
  button.addEventListener("click", function () {
    button.classList.remove("spin");
    void button.offsetWidth;
    button.classList.add("spin");

    const random1 = Math.floor(Math.random() * 66);
    const random2 = Math.floor(Math.random() * 1337);
    const sum = add(random1,random2);

    button.classList.add("spin");
 
    setTimeout(() => {
    result.textContent = sum;
}, 1200);
  });
}





