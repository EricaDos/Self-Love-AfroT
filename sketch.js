var button;

var sl_words = [
  "Self-care isn't selfish",
  "Your mind must arrive at the destination before your life does",
  "Self love is the best love",
  "Love yourself first and everything else falls into line."
  ];

function setup() {
  createCanvas(1800, 990);
  background(255, 190, 230);
  button = createButton('Click Me');
  button.position(800, 450);
  button.mousePressed(changeWord);
}

function draw() {

  var title = 'Self-love Word Generator';
  text(title, 600, 200, textSize(60));

  if (keyIsPressed === true) {
    background(255, 190, 230);
  }
}


function changeWord() {
 var sl_word = random(sl_words);

  fill(random(0,255),(0,100),(0,180));
  textSize(random(20,50));
  text(sl_word,random(width),random(height))
}
