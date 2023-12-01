let form = document.forms.calculator;
let [money] = document.getElementsByName("money");
let [interests] = document.getElementsByName("interest");
let [months] = document.getElementsByName("months");

interests.oninput = countPecrent;
money.oninput = countPecrent;
months.onchange = countPecrent;

function countPecrent() {
  let initial =+ money.value;
  let years = months.value / 12;
  let interest = interests.value * 0.01;
  console.log(initial, years, interest);
  console.log(money, months, interests);
  let result = Math.round(initial * (1 + interest) ** years);
  let height = (result / money.value) * 100 + "px";
  let afterHeight = document.getElementById("height-after");
  let before = document.getElementById("money-before");
  let after = document.getElementById("money-after");
  afterHeight.style.height = height;
  before.innerHTML = form.money.value;
  after.innerHTML = result;
}
countPecrent();
