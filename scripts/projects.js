var arr = [];

// push each page to array
arr.push({
    header: "Low Poly Dog",
    subHeader: "Graphic Design",
    imgThumbnail: "img/portfolio/leo-thumbnail.png",
    imgFull: "img/portfolio/leo-full.png",
    paragraphs: ["This was a small personal project created as a gift for a family member, but I'm proud of how it turned out. It's a portrait of our family dog, and I tried hard to capture his personality as best I could. I have always really loved this polygonal art style but had never tried to work with it before, so I was glad to get the chance to try it for myself."],
    modalName: "leoModal"
});
arr.push({
    header: "Swordplay Prototype",
    subHeader: "Game Design",
    imgThumbnail: "img/portfolio/sword-thumbnail.png",
    imgFull: "img/portfolio/sword-full.png",
    paragraphs: ["This project is a small game prototype of a local multiplayer competitive arena game in which two players fight using a attack/parry sword-fighting system. Each player controls one character using either a controller or a keyboard/mouse combination. Players must aim their attacks, and then may swing from either the left or right. They can also parry on the left or right side, and if one player's swing hits the other's parry, they are staggered for a moment, giving an opportunity to attack. The game includes a menu and scoring system, and players fight in a best-of-three across different maps.", "The biggest challenge for me with this project was in getting the sword mechanics to work right and feel good, especially as I have no animation experience. I also had a lot of issues with getting Unity's input system to work well with multiple controllers, so in the future I would probably prefer to write my own input system to replace the default Unity system.", "Overall, I think the project turned out well, and I completed most of what I wanted to, but there's definitely room for improvements to be made to the fighting, as well as other additions such as power-ups and more interesting maps.", "<iframe width='560' height='315' src='https://www.youtube.com/embed/s9-aANnhPIM?rel=0&amp;showinfo=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>"],
    modalName: "swordModal"
});
arr.push({
    header: "Album Cover",
    subHeader: "Graphic Design",
    imgThumbnail: "img/portfolio/vyral-thumbnail.png",
    imgFull: "img/portfolio/vyral-full.png",
    paragraphs: ["This was an album cover created for my cousin. With this project, it was all about getting his vision for the album and its storyline across. His concept was of an irradiated planet, with a solitary figure being chased by one of the planet's inhabitants, mutated by a viral strain accidentally released by the cloaked figure. The biggest challenge of this project was definitely balancing his vision for the cover with aesthetic decisions like keeping the layout even and not too cluttered. I'm proud of the end result, and I think that we collaborated well to make a cover that was both true to his vision and aesthetically pleasing."],
    modalName: "vyralModal"
});
arr.push({
    header: "GraviBird",
    subHeader: "Game Design",
    imgThumbnail: "img/portfolio/gravibird-thumbnail.png",
    imgFull: "img/portfolio/gravibird-full.png",
    paragraphs: ["This was a project made for a game design class in collaboration with another student. Our primary design philosophy with this piece was to try to create a single-button experience, which is a challenging design problem as it doesn't give you much leeway in terms of game mechanics. At first, we were going to make a simple jump over obstacles, but had the idea to instead incorporate the gravity-switching mechanic, with some blocks that fell with the player to provide an ever-changing landscape to navigate. I found this mechanic particularly compelling as it gives the player the ability to change the course on the fly with well-timed presses, and the obstacles become almost like a secondary character that the player is able to control.", "Our greatest challenge with this project was probably sticking with our original design idea and keeping it to only one button press. We had many different ideas for mechanics to incorporate, all of which would have required extra button presses, but we wanted to keep it simple and avoid adding too many unnecessary things to the game. In the end, I think this turned out well, and I was glad that we were able to get through to a complete product by the end."],
    modalName: "birdModal"
});

// loop through pages and modals
for (i = 0; i < arr.length; i++) {
    document.getElementById("portfolio-grid").innerHTML += "<div class='col-md-4 col-sm-6 portfolio-item'><a class='portfolio-link' data-toggle='modal' href = '#" + arr[i].modalName + "'><div class='portfolio-hover'><div class='portfolio-hover-content'><i class='fa fa-plus fa-3x'></i></div></div><img class='img-fluid' src='" + arr[i].imgThumbnail + "' alt=''></a><div class='portfolio-caption'><h4>" + arr[i].header + "</h4><p class='text-muted'>" + arr[i].subHeader + "</p></div></div > ";

    var paragraphString = "";

    for (j = 0; j < arr[i].paragraphs.length; j++) {
        paragraphString += "<p>" + arr[i].paragraphs[j] + "</p>";
    }

    document.getElementById("portfolio").innerHTML += "<div class='portfolio-modal modal fade' id='" + arr[i].modalName + "' tabindex='-1' role='dialog' aria-hidden='true'>    <div class='modal-dialog'>        <div class='modal-content'>            <div class='close-modal' data-dismiss='modal'>                <div class='lr'>                    <div class='rl'></div>                </div>            </div>            <div class='container'>                <div class='row'>                    <div class='col-lg-8 mx-auto'>                        <div class='modal-body'>                            <h2 class='text-uppercase'>" + arr[i].header + "</h2>                            <p class='item-intro text-muted'>" + arr[i].subHeader + "</p>                            <img class='img-fluid d-block mx-auto' src='" + arr[i].imgFull + "' alt=''>" + paragraphString + "<button class='btn btn-primary' data-dismiss='modal' type='button'>                                <i class='fa fa-times'></i>                                Close Project</button>                        </div>                    </div>                </div>            </div>        </div>    </div></div>"
}