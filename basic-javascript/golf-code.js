/* 

In the game of golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play.
Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments.
Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	    Return
1	          "Hole-in-one!"
<= par - 2	"Eagle"
par - 1	    "Birdie"
par	        "Par"
par + 1	    "Bogey"
par + 2	    "Double Bogey"
>= par + 3	"Go Home!"

par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.

*/

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  let nickname;
  
  if (strokes === 1) {
    nickname = names[0];
  } else if (strokes <= par - 2) {
    nickname = names[1];
  } else if (strokes === par - 1) {
    nickname = names[2];
  } else if (strokes === par ) {
    nickname = names[3];
  } else if (strokes === par + 1) {
    nickname = names[4];
  } else if (strokes === par + 2) {
    nickname = names[5];
  } else {
    nickname = names[6];
  }
  return nickname;
}

golfScore(5, 4);