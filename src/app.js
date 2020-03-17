const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = PLAYERS => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here


    for (var i = 0; i < PLAYERS.length; i++) {
        detailedPlayers.push({
            name: PLAYERS[i],
            strength: getRandomStrength(),
            image: "./images/super-" + (i + 1) + ".png",
            type: "hero|villian"
        });
    }
    return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random() * 100 + 1);
};

const buildPlayers = (players, type) => {
    let fragment = "";
    var i;
    if (type == "hero")
        i = 0
    else
        i = 1
    for (; i < players.length; i++) {
        var temp = getRandomStrength();
        fragment += `
        <div class="player">
            <img src="${players[i].image}" alt="">
            <div class="name">${players[i].name}</div>
            <div class="strength">${temp}</div>
        </div>`;
    }
    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    return fragment;
};

// Display players in HTML
const viewPlayers = players => {
    document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
    document.getElementById("villains").innerHTML = buildPlayers(
        players,
        "villain"
    );
};

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
};