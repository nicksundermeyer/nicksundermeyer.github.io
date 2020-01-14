import React from "react";

let resumeData = [
  {
    header: "Blank Canvas",
    categories: "Game Development",
    image: "blankCanvas.png",
    body: (
      <div>
        <p>
          <a href="https://sundy.itch.io/blankcanvas">
            View and download the game on itch.io
          </a>
        </p>
        <p>
          This was my senior game capstone project for my Game Development
          major, created over the course of 30 weeks along with a team of two
          other programmers.
        </p>
        <p>
          Take up your paintbrush in this stealth platformer as you traverse a
          bleak world, leaving behind your own splash of color.
        </p>
        <p>
          Play as a starving artist whose creativity has been suppressed by a
          tyrannical regime. Gather your courage and venture out at night,
          sneaking across the rooftops of your city to express yourself and
          paint a mural on a government building.
        </p>
        <p>
          Paint the world freely using your paintbrush, use special paints to
          solve puzzles and give yourself superhuman abilities, and sneak by the
          goons patrolling the streets around you.
        </p>
        <iframe
          title="blankcanvas"
          src="https://www.youtube.com/embed/NieB_Mn8J4U"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
    )
  },
  {
    header: "UE4 Project",
    categories: "Game Development",
    image: "ue4.jpg",
    body: (
      <div>
        <p>
          {" "}
          This was a project created in Unreal Engine 4 for my Game Programming
          2 class. With this project, I learned to use the Unreal engine,
          including both Blueprints and C++. The final project is a bit eclectic
          because I was learning along the way, but UE4 is a great tool and I
          learned a lot from working with it.{" "}
        </p>
        <p>
          {" "}
          The game is a first-person platformer/puzzler, with three levels that
          the player can go through in any order. Players try to complete each
          level as quickly as possible, which involves a combination of dodging
          various enemies and traps, as well as opening doors using special
          'keys' and smashing through rock formations with a hammer. I think the
          most challenging aspect of this project was keeping the game as a
          coherent experience as I learned each part of the engine along the
          way, and avoiding feature creep as I began to open up the
          possibilities of the engine.{" "}
        </p>
        <iframe
          title="ue4project"
          src="https://www.youtube-nocookie.com/embed/SPDKFkvGXs0?rel=0&amp;showinfo=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
    )
  },
  {
    header: "AR Projects",
    categories: "Game Development",
    image: "dinocards.png",
    body: (
      <div>
        <p>
          These AR projects were created during my time working as a 2018 summer
          intern for Jaunt VR, as a UX developer and prototyper.
        </p>
        <iframe
          title="arprojects1"
          src="https://www.youtube.com/embed/SMQPOxl-_BI"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
        <p>
          This project was the result of a few weeks of prototyping work in
          cooperation with another prototyper to develop an understanding of AR
          development in Unity and successful interaction models for AR. I
          created the dinosaur animations, behaviors, and movement system, as
          well as the generation of a navigation mesh based on the AR plane
          being detected.
        </p>
        <iframe
          title="arprojects2"
          src="https://www.youtube.com/embed/Y8fHJeMTWow"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
        <p>
          This is an app that I worked on over the course of my internship along
          with other interns at the company, to showcase the company's content
          in AR. I worked on both the visual and interaction design of the app,
          as well as building it using Unity along with another developer. I was
          proud of this project, as I was able to participate in both the design
          and development of a more fully-fledged idea, and take ownership of
          the full process from start to finish. It gave me a lot of valuable
          experience designing for AR, which was a new space I hadn't worked in
          much, and also greatly improved my Unity skills.
        </p>
      </div>
    )
  },
  {
    header: "Reservation App",
    categories: "Graphic Design",
    image: "rehearsal.png",
    body: (
      <div>
        <iframe
          title="rehearsal"
          src="https://drive.google.com/file/d/1qDKmeZPwnL-c8p5L9eZ3mnklHEGHrHiF/preview"
        ></iframe>
        <p>This was an app concept done for a design challenge.</p>
      </div>
    )
  },
  {
    header: "Campfire",
    categories: "Game Development",
    image: "campfire.png",
    body: (
      <div>
        <a href="https://sundy.itch.io/campfire">View the game on itch.io</a>
        <p>
          This project was created for Global Game Jam 2019. The prompt was
          "what does home mean to you", and our design concept for the game was
          based around having a safe place to come back to that felt like home.
          The game is a slow-paced, atmospheric survival game where the player
          must collect wood for their fire, which is slowly burning out. The
          player's torch also requires sticks from the fire, so they must
          continually return home in order to delve farther and farther into the
          darkness.
        </p>
        <p>
          This is a prototype made in two days, but we hope to expand the game's
          concept beyond this first version to include more gameplay elements
          based around the lighting mechanics we have in the game.
        </p>
        <p>I worked on both design and programming for the game</p>
        <iframe
          title="campfire"
          src="https://www.youtube.com/embed/DDOMKcC879w"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
    )
  },
  {
    header: "Gravibird",
    categories: "Game Development",
    image: "gravibird.png",
    body: (
      <div>
        <a href="games/Gravibird/index.html">Try this game running in WebGL!</a>
        <iframe
          title="gravibird"
          src="https://www.youtube.com/embed/onVdS1dRl34"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
        <p>
          This was a project made for a game design class in collaboration with
          another student. Our primary design philosophy with this piece was to
          try to create a single-button experience, which is a challenging
          design problem as it doesn't give you much leeway in terms of game
          mechanics. At first, we were going to make a simple jump over
          obstacles, but had the idea to instead incorporate the
          gravity-switching mechanic, with some blocks that fell with the player
          to provide an ever-changing landscape to navigate. I found this
          mechanic particularly compelling as it gives the player the ability to
          change the course on the fly with well-timed presses, and the
          obstacles become almost like a secondary character that the player is
          able to control.
        </p>
        <p>
          Our greatest challenge with this project was probably sticking with
          our original design idea and keeping it to only one button press. We
          had many different ideas for mechanics to incorporate, all of which
          would have required extra button presses, but we wanted to keep it
          simple and avoid adding too many unnecessary things to the game. In
          the end, I think this turned out well, and I was glad that we were
          able to get through to a complete product by the end.
        </p>
      </div>
    )
  },
  {
    header: "Porsche",
    categories: "3D Work",
    image: "porsche.png",
    body: (
      <div>
        <iframe
          title="porsche"
          src="https://www.youtube.com/embed/kdjWQ059vSE"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
    )
  },
  {
    header: "Cabin",
    categories: "3D Work",
    image: "cabin.png"
  },
  {
    header: "3D Modeling Class",
    categories: "3D Work",
    image: "modeling.png",
    body: (
      <div>
        <p>
          Both of these project were created for my 3D Modeling class at the
          University of Denver, using Autodesk Maya and the Arnold renderer.
        </p>
        <div id="carouselOne" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="/images/portfolio/modelingModal/Render1.png"
                alt="First slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="/images/portfolio/modelingModal/Render2.png"
                alt="Second slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="/images/portfolio/modelingModal/Render3.png"
                alt="Third slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="/images/portfolio/modelingModal/Render4.png"
                alt="Third slide"
              ></img>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselOne"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselOne"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <p>
          The goal of this first project was to get comfortable with modeling
          tools and basic materials. Our assignment was to take a modern piece
          to technology and reimagine how it would work during an older era. I
          took the idea of a museum exhibit and created this steampunk version
          of a display about tectonic plate movement, using a steam engine at
          the bottom to drive the plates around on the central arms.
        </p>
        <div id="carouselTwo" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="/images/portfolio/modelingModal/Scene1_1.png"
                alt="First slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="/images/portfolio/modelingModal/Scene1_2.png"
                alt="Second slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="/images/portfolio/modelingModal/Scene1_3.png"
                alt="Third slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="/images/portfolio/modelingModal/Scene2_1.png"
                alt="Third slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="/images/portfolio/modelingModal/Scene2_2.png"
                alt="Third slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="/images/portfolio/modelingModal/Scene2_3.png"
                alt="Third slide"
              ></img>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselTwo"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselTwo"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <p>
          This second project was focused mainly on learning about lighting, UV
          mapping, and texturing. In this case, the prompt was to create a scene
          in two different states. I chose to create a neighborhood street
          before and after an oppressive government takes over. By changing the
          lighting and making the scene much more sparse, I hoped to change the
          viewer’s perception of the space between the two versions.
        </p>
      </div>
    )
  },
  {
    header: "Water Shader",
    categories: "Game Development",
    image: "water.png",
    body: (
      <div>
        <iframe
          title="watershader"
          src="https://www.youtube.com/embed/pnjgvrapLC8"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
        <p>
          This was created for a computer graphics class. It is a dynamic water
          shader written in GLSL and running in OpenGL. It has controls to
          change direction, size, and other attributes of the two waves, which
          move across the surface of the poly. The water surface has reflection
          mapping including Fresnel factor, animated bump mapping, and
          refraction mapping.
        </p>
      </div>
    )
  },
  {
    header: "Co-op Platformer",
    categories: "Game Development",
    image: "coop.png",
    body: (
      <div>
        <a href="games/SystemsEDP/index.html">
          Try this game running in WebGL!
        </a>
        <p>
          This was a game project created in two weeks for my Systems in
          Emergent Digital Practices class, in order to explore the concept of
          cooperation between two people. The game utilizes a gravity-switching
          mechanic, where players may stand either above or below platforms, and
          must cooperate to solve simple puzzles on both sides of the world in
          order to progress. In addition to the game, I created a cardboard
          controller that allowed it to be played similarly to an arcade game,
          with players facing each other and using metal 'buttons' to control
          their characters.
        </p>
      </div>
    )
  },
  {
    header: "Lift Animation",
    categories: "3D Work",
    image: "liftAnimation.png",
    body: (
      <div>
        <iframe
          title="liftanimation"
          src="https://www.youtube.com/embed/NMA4pPfhfMs"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
        <p>
          This was an animation created for the 3D animation class at the
          University of Denver. We were given a pre-rigged character to work
          with, and had to create an animation of a character lifting or pulling
          a heavy object.
        </p>
        <p>
          I chose to have him trapped under debris and struggling to get out.
          This was made in two weeks for a class project, but I'm pretty proud
          of how it turned out. The project was focused on action/reaction and
          having the holds on the way up to show the weight of the object.
        </p>
      </div>
    )
  },
  {
    header: "Swordplay Prototype",
    categories: "Game Development",
    image: "sword.png",
    body: (
      <div>
        <p>
          This project is a small game prototype of a local multiplayer
          competitive arena game in which two players fight using a attack/parry
          sword-fighting system. Each player controls one character using either
          a controller or a keyboard/mouse combination. Players must aim their
          attacks, and then may swing from either the left or right. They can
          also parry on the left or right side, and if one player's swing hits
          the other's parry, they are staggered for a moment, giving an
          opportunity to attack. The game includes a menu and scoring system,
          and players fight in a best-of-three across different maps.
        </p>
        <p>
          The biggest challenge for me with this project was in getting the
          sword mechanics to work right and feel good, especially as I have no
          animation experience. I also had a lot of issues with getting Unity's
          input system to work well with multiple controllers, so in the future
          I would probably prefer to write my own input system to replace the
          default Unity system.
        </p>
        <p>
          Overall, I think the project turned out well, and I completed most of
          what I wanted to, but there's definitely room for improvements to be
          made to the fighting, as well as other additions such as power-ups and
          more interesting maps.
        </p>
        <iframe
          title="swordplay"
          src="https://www.youtube.com/embed/s9-aANnhPIM?rel=0&amp;showinfo=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
    )
  },
  {
    header: "Research Website",
    categories: "Web Development",
    image: "notyet.png",
    body: (
      <div>
        <iframe
          title="notyet"
          src="https://www.youtube.com/embed/rCyvJWBO16g"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
        <p>
          This website project was the result of my Web Projects class at the
          University of Denver. The goal was to create a website over the course
          of 10 weeks as a class as a part of a professor's research project.
          This research project is based around finding the best way to
          automatically generate math problems, and the website was created to
          act as a front-end testing site for the problems.
        </p>
        <p>
          The site was made using the MEAN stack, and the class was divided into
          a frontend and backend team, and run as an agile development studio
          with two-week sprints. I worked on the frontend team to develop the
          website UI, as well as integrating all of the information on courses,
          accounts, and statistics being managed in the backend. It was a great
          experience with working on a bigger project in a more real-world
          development scenario, and the website we made will continue to be
          worked on by future classes and eventually used for the research
          project once it is fully complete.
        </p>
        <p>
          A live demo of the site can be found{" "}
          <a href="https://not-yet-prod.herokuapp.com/">here</a>, however note
          that the live site is not populated with anything from the problem
          generation engine, so many of the features will not be usable
        </p>
      </div>
    )
  },
  {
    header: "Low Poly Dog",
    categories: "Graphic Design",
    image: "beans.png"
  },
  {
    header: "Low Poly Dog 2",
    categories: "Graphic Design",
    image: "leo.png"
  },
  {
    header: "Landscape Vector Art",
    categories: "Graphic Design",
    image: "landscape.png"
  },
  {
    header: "Album Cover",
    categories: "Graphic Design",
    image: "vyral.png",
    body: (
      <div>
        <p>
          This was an album cover created for my cousin. With this project, it
          was all about getting his vision for the album and its storyline
          across. His concept was of an irradiated planet, with a solitary
          figure being chased by one of the planet's inhabitants, mutated by a
          viral strain accidentally released by the cloaked figure. The biggest
          challenge of this project was definitely balancing his vision for the
          cover with aesthetic decisions like keeping the layout even and not
          too cluttered. I'm proud of the end result, and I think that we
          collaborated well to make a cover that was both true to his vision and
          aesthetically pleasing.
        </p>
      </div>
    )
  },
  {
    header: "Water=Life",
    categories: "Graphic Design",
    image: "life.png",
    body: (
      <div>
        <p>
          This is a poster I made for a water conservation campaign. It was
          based off my love of minimalism in design, and goes for simplicity.
          The poster also asked for some examples of ways to save water based on
          the website save20gallons.org, which I put in simple text around the
          faucet, and used the red/white/black colors to pop different parts of
          the design. The poster won a design contest and was used by the Santa
          Clara County in California as part of a water-saving initiative.
        </p>
      </div>
    )
  },
  {
    header: "High School 3D Project",
    categories: "3D Work",
    image: "hsmodeling.jpg",
    body: (
      <div>
        <p>
          This is a render of a group of models that I made for an animation for
          the Paly Robotics team. I modeled and UV mapped four buildings (a
          store, a small wooden shack, a larger modern-style house, and a
          classic tile-roofed house), as well as the fence, viking hat, and stop
          sign in the image. The final models were eventually rendered in a 3rd
          party renderer, Octane, to improve lighting as well as add
          post-processing effects.
        </p>
      </div>
    )
  }
];
export default resumeData;
