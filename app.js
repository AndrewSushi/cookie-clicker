const cookie = document.getElementById("cookie")
let upgrade = document.getElementById("upgrade")
const score = document.getElementById('score');

let cookies = 0

let upgradeCost = 10
let mult = 1.25
let click = 1

upgrade.addEventListener('click', () => {
    if (cookies >= upgradeCost) {
        cookies -= upgradeCost;
        upgradeCost += 10;
        click *= mult;
        score.innerText = cookies;
        upgrade.innerText = `Upgrade Click: ${upgradeCost}`
  }
});

cookie.addEventListener('click', () => {
  cookies += click;
  score.innerText = cookies;
});
