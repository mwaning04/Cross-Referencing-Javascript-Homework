const typeChart = {
  fire: { strongAgainst: ["grass"], weakAgainst: ["water"] },
  water: { strongAgainst: ["fire"], weakAgainst: ["electric"] },
  electric: { strongAgainst: ["water"], weakAgainst: ["grass"] },
  grass: { strongAgainst: ["electric"], weakAgainst: ["fire"] }
};

const resultText = document.getElementById("result");
const btnPress = document.getElementById("calculateBtn");

btnPress.addEventListener("click", () => {
    checkTypes();
});

checkTypes = () => {
    if (document.getElementById("attackingGroup").value === "fire") {
        if (document.getElementById("defendingGroup").value === typeChart.fire.strongAgainst[0]) {
            resultText.innerHTML = "It's super effective! 2x more damage.";
        } else if (document.getElementById("defendingGroup").value === typeChart.fire.weakAgainst[0]) {
            resultText.innerHTML = "It's not very effective... 0.5x damage.";
        } else {
            resultText.innerHTML = "It's effective. 1x damage.";
        }
    };

    if (document.getElementById("attackingGroup").value === "water") {
        if (document.getElementById("defendingGroup").value === typeChart.water.strongAgainst[0]) {
            resultText.innerHTML = "It's super effective! 2x more damage.";
        } else if (document.getElementById("defendingGroup").value === typeChart.water.weakAgainst[0]) {
            resultText.innerHTML = "It's not very effective... 0.5x damage.";
        } else {
            resultText.innerHTML = "It's effective. 1x damage.";
        }
    };

    if (document.getElementById("attackingGroup").value === "electric") {
        if (document.getElementById("defendingGroup").value === typeChart.electric.strongAgainst[0]) {
            resultText.innerHTML = "It's super effective! 2x more damage.";
        } else if (document.getElementById("defendingGroup").value === typeChart.electric.weakAgainst[0]) {
            resultText.innerHTML = "It's not very effective... 0.5x damage.";
        } else {
            resultText.innerHTML = "It's effective. 1x damage.";
        }
    };

    if (document.getElementById("attackingGroup").value === "grass") {
        if (document.getElementById("defendingGroup").value === typeChart.grass.strongAgainst[0]) {
            resultText.innerHTML = "It's super effective! 2x more damage.";
        } else if (document.getElementById("defendingGroup").value === typeChart.grass.weakAgainst[0]) {
            resultText.innerHTML = "It's not very effective... 0.5x damage.";
        } else {
            resultText.innerHTML = "It's effective. 1x damage.";
        }
    };
}