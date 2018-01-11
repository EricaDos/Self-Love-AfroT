var sl_words = [
  "You deserve your love and affection",
  "Love yourself first and everything else falls into line.",
  "Be happy",
  "Self love is the best love",
  "Self-care is never a selfish act",
  "Don’t rely on someone else for your happiness and self-worth. Only you can be responsible for that"
];

function setup() {
  // put setup code here

  createCanvas(1500, 800);
  background(0);

  createButton
}

function draw() {
  // put drawing code here

  if (keyIsPressed == true){

    var word = random(sl_words);
    fill(random(0,255),(0,100),(0,180));
    textSize(random(20,50));
    text(word,random(width),random(height))

  }
}
