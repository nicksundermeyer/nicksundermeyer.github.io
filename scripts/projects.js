var arr = [];

// push each page to array
arr.push({
    header: "GraviBird",
    subHeader: "Game Development",
    imgFull: "",
    imgThumbnail: "img/portfolio/gravibird-full.png",
    paragraphs: ["<iframe src='https://www.youtube.com/embed/onVdS1dRl34' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>", "This was a project made for a game design class in collaboration with another student. Our primary design philosophy with this piece was to try to create a single-button experience, which is a challenging design problem as it doesn't give you much leeway in terms of game mechanics. At first, we were going to make a simple jump over obstacles, but had the idea to instead incorporate the gravity-switching mechanic, with some blocks that fell with the player to provide an ever-changing landscape to navigate. I found this mechanic particularly compelling as it gives the player the ability to change the course on the fly with well-timed presses, and the obstacles become almost like a secondary character that the player is able to control.", "Our greatest challenge with this project was probably sticking with our original design idea and keeping it to only one button press. We had many different ideas for mechanics to incorporate, all of which would have required extra button presses, but we wanted to keep it simple and avoid adding too many unnecessary things to the game. In the end, I think this turned out well, and I was glad that we were able to get through to a complete product by the end."],
    modalName: "birdModal"
});
arr.push({
    header: "Water Shader",
    subHeader: "Programming",
    imgFull: "",
    imgThumbnail: "img/portfolio/water-full.png",
    paragraphs: ["<iframe src='https://www.youtube.com/embed/pnjgvrapLC8' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>", "This was created for a computer graphics class. It is a dynamic water shader written in GLSL and running in OpenGL. It has controls to change direction, size, and other attributes of the two waves, which move across the surface of the poly. The water surface has reflection mapping including Fresnel factor, animated bump mapping, and refraction mapping."],
    modalName: "waterModal"
});
arr.push({
    header: "Reservation App Concept",
    subHeader: "Graphic Design",
    imgFull: "",
    imgThumbnail: "img/portfolio/rehearsal-full.png",
    paragraphs: ["<iframe src='https://drive.google.com/file/d/1qDKmeZPwnL-c8p5L9eZ3mnklHEGHrHiF/preview'></iframe>", "This was an app concept done for a design challenge."],
    modalName: "rehearsalModal"
});
arr.push({
    header: "UE4 Project",
    subHeader: "Game Development",
    imgFull: "img/portfolio/ue4_full.jpg",
    imgThumbnail: "img/portfolio/ue4_full.jpg",
    paragraphs: ["This was a project created in Unreal Engine 4 for my Game Programming 2 class. With this project, I learned to use the Unreal engine, including both Blueprints and C++. The final project is a bit eclectic because I was learning along the way, but UE4 is a great tool and I learned a lot from working with it.", "The game is a first-person platformer/puzzler, with three levels that the player can go through in any order. Players try to complete each level as quickly as possible, which involves a combination of dodging various enemies and traps, as well as opening doors using special 'keys' and smashing through rock formations with a hammer. I think the most challenging aspect of this project was keeping the game as a coherent experience as I learned each part of the engine along the way, and avoiding feature creep as I began to open up the possibilities of the engine.", "<iframe width='560' height='315' src='https://www.youtube-nocookie.com/embed/SPDKFkvGXs0?rel=0&amp;showinfo=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>"],
    modalName: "ueModal"
});
arr.push({
    header: "Swordplay Prototype",
    subHeader: "Game Development",
    imgFull: "img/portfolio/sword-full.png",
    imgThumbnail: "img/portfolio/sword-full.png",
    paragraphs: ["This project is a small game prototype of a local multiplayer competitive arena game in which two players fight using a attack/parry sword-fighting system. Each player controls one character using either a controller or a keyboard/mouse combination. Players must aim their attacks, and then may swing from either the left or right. They can also parry on the left or right side, and if one player's swing hits the other's parry, they are staggered for a moment, giving an opportunity to attack. The game includes a menu and scoring system, and players fight in a best-of-three across different maps.", "The biggest challenge for me with this project was in getting the sword mechanics to work right and feel good, especially as I have no animation experience. I also had a lot of issues with getting Unity's input system to work well with multiple controllers, so in the future I would probably prefer to write my own input system to replace the default Unity system.", "Overall, I think the project turned out well, and I completed most of what I wanted to, but there's definitely room for improvements to be made to the fighting, as well as other additions such as power-ups and more interesting maps.", "<iframe src='https://www.youtube.com/embed/s9-aANnhPIM?rel=0&amp;showinfo=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>"],
    modalName: "swordModal"
});
arr.push({
    header: "Low Poly Dog",
    subHeader: "Graphic Design",
    imgFull: "img/portfolio/leo-full.png",
    imgThumbnail: "img/portfolio/leo-full.png",
    paragraphs: ["This was a small personal project created as a gift for a family member, but I'm proud of how it turned out. It's a portrait of our family dog, and I tried hard to capture his personality as best I could. I have always really loved this polygonal art style but had never tried to work with it before, so I was glad to get the chance to try it for myself."],
    modalName: "leoModal"
});
arr.push({
    header: "Album Cover",
    subHeader: "Graphic Design",
    imgFull: "img/portfolio/vyral-full.png",
    imgThumbnail: "img/portfolio/vyral-full.png",
    paragraphs: ["This was an album cover created for my cousin. With this project, it was all about getting his vision for the album and its storyline across. His concept was of an irradiated planet, with a solitary figure being chased by one of the planet's inhabitants, mutated by a viral strain accidentally released by the cloaked figure. The biggest challenge of this project was definitely balancing his vision for the cover with aesthetic decisions like keeping the layout even and not too cluttered. I'm proud of the end result, and I think that we collaborated well to make a cover that was both true to his vision and aesthetically pleasing."],
    modalName: "vyralModal"
});
arr.push({
    header: "Cookbook Prototype",
    subHeader: "Web Development",
    imgFull: "img/portfolio/cookbook-full.png",
    imgThumbnail: "img/portfolio/cookbook-full.png",
    paragraphs: ["<a href='http://comp3705-nicsunde.herokuapp.com/'>Link to the site</a>", "This was a website that I created as a part of my Web Programming II class. In it, we learned to set up a full-stack web application using the MEAN stack, including backend routes for viewing and modifying the MongoDB database, as well as front-end design using AngularJS and bootstrap components. The site allows users to create, view, and update users, recipes, and recipe reviews for the cookbook. While visually basic, it demonstrates the ability to combine the use of a database as well as a front-end GUI to create a responsive and useful website concept."],
    modalName: "cookbookModal"
});
arr.push({
    header: "Water=Life",
    subHeader: "Graphic Design",
    imgFull: "img/portfolio/life-full.png",
    imgThumbnail: "img/portfolio/life-full.png",
    paragraphs: ["This is a poster I made for a water conservation campaign. It was based off my love of minimalism in design, and goes for simplicity. The poster also asked for some examples of ways to save water based on the website save20gallons.org, which I put in simple text around the faucet, and used the red/white/black colors to pop different parts of the design. The poster won a design contest and was used by the Santa Clara County in California as part of a water-saving initiative."],
    modalName: "lifeModal"
});
arr.push({
    header: "High School 3D Project",
    subHeader: "3D Modeling",
    imgFull: "img/portfolio/modelling-full.jpg",
    imgThumbnail: "img/portfolio/modelling-full.jpg",
    paragraphs: ["This is a render of a group of models that I made for an animation for the Paly Robotics team. I modeled and UV mapped four buildings (a store, a small wooden shack, a larger modern-style house, and a classic tile-roofed house), as well as the fence, viking hat, and stop sign in the image. The final models were eventually rendered in a 3rd party renderer, Octane, to improve lighting as well as add post-processing effects."],
    modalName: "modelModal"
});

// loop through pages and modals
for (i = 0; i < arr.length; i++) {
    document.getElementById("portfolio-grid").innerHTML += "<div class='col-md-4 col-sm-6 portfolio-item'><a class='portfolio-link' data-toggle='modal' href = '#" + arr[i].modalName + "'><div class='portfolio-hover'><div class='portfolio-hover-content'><i class='fa fa-plus fa-3x'></i></div></div><img class='img-fluid center-cropped' src='" + arr[i].imgThumbnail + "' alt=''></a><div class='portfolio-caption'><h4>" + arr[i].header + "</h4><p class='text-muted'>" + arr[i].subHeader + "</p></div></div > ";

    var paragraphString = "";

    for (j = 0; j < arr[i].paragraphs.length; j++) {
        paragraphString += "<p>" + arr[i].paragraphs[j] + "</p>";
    }

    document.getElementById("portfolio").innerHTML += "<div class='portfolio-modal modal fade' id='" + arr[i].modalName + "' tabindex='-1' role='dialog' aria-hidden='true'>    <div class='modal-dialog'>        <div class='modal-content'>            <div class='close-modal' data-dismiss='modal'>                <div class='lr'>                    <div class='rl'></div>                </div>            </div>            <div class='container'>                <div class='row'>                    <div class='col-lg-8 mx-auto'>                        <div class='modal-body'>                            <h2 class='text-uppercase'>" + arr[i].header + "</h2>                            <p class='item-intro text-muted'>" + arr[i].subHeader + "</p>                            <img class='img-fluid d-block mx-auto' src='" + arr[i].imgFull + "' alt=''>" + paragraphString + "<button class='btn btn-primary' data-dismiss='modal' type='button'>                                <i class='fa fa-times'></i>                                Close Project</button>                        </div>                    </div>                </div>            </div>        </div>    </div></div>"
}