function inflateUnicorn(unicornNumber) {
  let unicornPosition = document.getElementsByClassName("inflate-an-image");

  let unicornImages = [
    "images/unicorn-0.png",
    "images/unicorn-1.png",
    "images/unicorn-2.png",
    "images/unicorn-3.png",
  ];

  let uni1 = unicornImages[0];
  let uni2 = unicornImages[1];
  let uni3 = unicornImages[2];
  let uni4 = unicornImages[3];

  if (unicornPosition[unicornNumber].src.includes("0")) {
    unicornPosition[unicornNumber].setAttribute("src", uni2);
    return;
  }
  if (unicornPosition[unicornNumber].src.includes("1")) {
    unicornPosition[unicornNumber].setAttribute("src", uni3);
    return;
  }
  if (unicornPosition[unicornNumber].src.includes("2")) {
    unicornPosition[unicornNumber].setAttribute("src", uni4);
    return;
  }
  return alert("Unicorn " + (unicornNumber + 1) + " says thank you!");
}
