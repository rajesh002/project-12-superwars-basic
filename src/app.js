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
const initPlayers = (PLAYERS) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for (var i = 0; i < PLAYERS.length; i++) {
        detailedPlayers.push({
            name: "hero",
            strength: 100,
            image: "./images/super-" + (i + 1) + ".png",
            type: 'hero|villian'
        });
    }
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random() * 100 + 1)
}

const buildPlayers = (PLAYERS, type) => {
    let fragment = '';
    //  var temp = getRandomStrength();
    for (var start = 0; start < PLAYERS.length; start++) {
        fragment = `
        <div class="player">
            <img src=\"./images/super-1.png\" alt=\"\">
            <div class=\"name\">hero</div>
            <div class=\"strength\">100</div>
        </div>`;
    }
    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}