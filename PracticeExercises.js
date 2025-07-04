// function threeWordsPhrase(word1, word2, word3) {
//     var answer = word1 + " " + word2 + " " +  word3;
//     return answer;
// }


// var result = threeWordsPhrase("Hello", "World,", "I am Sajid");
// console.log(result);

// function reformatName(fname, lname) {
//     return fname + " " + lname;
// }

// var fullName = reformatName("Sajid", "Khan");
// console.log(fullName); 

// Part 1: Add 3 Vertical Stripes (Red, Green, Blue)

// var image = new SimpleImage("drew.jpg"); // or any image you choose
// var width = image.getWidth();

// for (var pixel of image.values()) {
//     var x = pixel.getX();
//     if (x < width / 3) {
//         pixel.setRed(255);
//     } else if (x < (2 * width) / 3) {
//         pixel.setGreen(255);
//     } else {
//         pixel.setBlue(255);
//     }
// }

// print(image);

// Part 2: swapRedGreen Function

// function swapRedGreen(pixel) {
//     var red = pixel.getRed();
//     var green = pixel.getGreen();
    
//     pixel.setRed(green);
//     pixel.setGreen(red);
// }

// // Test the function on an image
// var image = new SimpleImage("eastereggs.jpg"); // use an image with red & green

// for (var pixel of image.values()) {
//     swapRedGreen(pixel);
// }

// print(image);

// Part 3: Turn Blue Devil Yellow

// var image = new SimpleImage("duke_blue_devil.png");

// for (var pixel of image.values()) {
//     var red = pixel.getRed();
//     var green = pixel.getGreen();
//     var blue = pixel.getBlue();

//     // Detect strongly blue pixels (not white)
//     if (blue > red + green) {
//         pixel.setRed(255);
//         pixel.setGreen(255);
//         pixel.setBlue(0);
//     }
// }

// print(image);

