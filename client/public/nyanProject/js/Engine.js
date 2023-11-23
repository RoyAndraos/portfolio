/****************************************************************************************************************************************/
// The engine class will only be instantiated once. It contains all the logic
// of the game relating to the interactions between the player and the
// enemy and also relating to how our enemies are created and evolve over time
class Engine {
  // The constructor has one parameter. It will refer to the DOM node that we will be adding everything to.
  // You need to provide the DOM node when you create an instance of the class
  constructor(theRoot) {
    // We need the DOM element every time we create a new enemy so we
    // store a reference to it in a property of the instance.
    this.root = theRoot;
    // We create our hamburger.
    // Please refer to Player.js for more information about what happens when you create a player
    this.player = new Player(this.root);
    // Initially, we have no enemies in the game. The enemies property refers to an array
    // that contains instances of the Enemy class
    this.enemies = [];
    // We add the background image to the game
    addBackground(this.root);
  }

  // The gameLoop will run every few milliseconds. It does several things
  //  - Updates the enemy positions
  //  - Detects a collision between the player and any enemy
  //  - Removes enemies that are too low from the enemies array
  gameLoop = () => {
    // This code is to see how much time, in milliseconds, has elapsed since the last
    // time this method was called.
    // (new Date).getTime() evaluates to the number of milliseconds since January 1st, 1970 at midnight.
    if (this.lastFrame === undefined) {
      this.lastFrame = new Date().getTime();
    }

    let timeDiff = new Date().getTime() - this.lastFrame;

    this.lastFrame = new Date().getTime();
    // We use the number of milliseconds since the last call to gameLoop to update the enemy positions.
    // Furthermore, if any enemy is below the bottom of our game, its destroyed property will be set. (See Enemy.js)
    this.enemies.forEach((enemy) => {
      enemy.update(timeDiff);
    });

    // We remove all the destroyed enemies from the array referred to by \`this.enemies\`.
    // We use filter to accomplish this.
    // Remember: this.enemies only contains instances of the Enemy class.
    this.enemies = this.enemies.filter((enemy) => {
      return !enemy.destroyed;
    });

    // We need to perform the addition of enemies until we have enough enemies.
    while (this.enemies.length < MAX_ENEMIES) {
      // We find the next available spot and, using this spot, we create an enemy.
      // We add this enemy to the enemies array
      const spot = nextEnemySpot(this.enemies);
      this.enemies.push(new Enemy(this.root, spot));
    }

    // We check if the player is dead. If he is, we alert the user
    // and return from the method (Why is the return statement important?)
    if (this.isPlayerDead()) {
      const restart = document.createElement("button");
      restart.setAttribute("id", "start");
      restart.innerHTML = "Restart";
      restart.style.position = "absolute";
      restart.style.top = "35px";
      restart.style.left = "150px";
      restart.style.fontSize = "16px";
      restart.style.border = "none";
      restart.style.background = "-webkit-linear-gradient(#f50198, #fefd63)";
      restart.style.webkitBackgroundClip = "text";
      restart.style.webkitTextFillColor = "transparent";
      restart.style.color = "transparent";
      restart.classList += "restart:hover";
      restart.style.cursor = "pointer";
      restart.style.fontWeight = "900";
      restart.style.zIndex = "900";
      document.getElementById("app").append(restart);

      const youLost = document.createElement("p");
      youLost.innerHTML = "You lost";
      youLost.setAttribute("id", "YouLost");
      document.getElementById("app").append(youLost);

      restart.addEventListener("click", () => {
        gameEngine.gameLoop();
        document.getElementById("loser").remove();
        youLost.remove();
        SCORE = 0;
        document.getElementById("start").remove();
        document.getElementById("scoreBoard").innerHTML = `Score: ${SCORE}`;
        levelNummber = 1;
        document.getElementById("level").innerHTML = "LEVEL 1";
        restart.remove();
      });
      return;
    }
    // If the player is not dead, then we put a setTimeout to run the gameLoop in 20 milliseconds
    setTimeout(this.gameLoop, 20);
  };

  // This method is not implemented correctly, which is why
  // the burger never dies. In your exercises you will fix this method.
  isPlayerDead = () => {
    for (let i = 0; i < this.enemies.length; i++) {
      if (
        this.player.y + PLAYER_HEIGHT / 4 < this.enemies[i].y + ENEMY_HEIGHT &&
        this.enemies[i].y - this.player.y < 0.5
      ) {
        if (this.player.x === this.enemies[i].x) {
          if (LIFE_POOL.length > 1) {
            this.enemies[i].y = GAME_HEIGHT;
            LIFE_POOL.splice(0, 1);
            document.getElementById("youLostALife").innerHTML =
              "You Lost A Life";
            let timeRun = 0;
            const vanishSlowly = () => {
              j = j - 0.1;
              timeRun++;
              document.getElementById("youLostALife").style.opacity = j;
              if (timeRun == 10) {
                document.getElementById("youLostALife").style.opacity = 0;
                j = 1;
                timeRun = 0;
                clearInterval(vanish);
              }
            };
            const vanish = setInterval(vanishSlowly, 100);
            document.getElementById("liveCount").innerHTML = `${LIFE_POOL.join(
              ""
            )}`;
          } else {
            const theyWontKnow = document.createElement("img");
            theyWontKnow.src = "/nyanProject/images/loser.png";
            theyWontKnow.setAttribute("id", "loser");
            theyWontKnow.style.width = 3 * PLAYER_WIDTH;
            theyWontKnow.style.height = 3 * PLAYER_HEIGHT;
            theyWontKnow.style.position = "absolute";
            theyWontKnow.style.background = "transparent";
            theyWontKnow.style.top = "25px";
            theyWontKnow.style.left = "110px";
            theyWontKnow.style.zIndex = "300";
            document.getElementById("app").append(theyWontKnow);
            return true;
          }
        }
      }
    }
  };
}
