// // Corrected code
// var img = new SimpleImage(200, 200);
// for (var px of img.values()) {
//   var x = px.getX();
//   var y = px.getY();

//   if (x < img.getWidth()/2 && y < img.getHeight()/2) {
//     // Top-left
//     px.setRed(255);
//   }
//   else if (x >= img.getWidth()/2 && y < img.getHeight()/2) {
//     // Top-right
//     px.setGreen(255);
//   }
//   else if (x < img.getWidth()/2 && y >= img.getHeight()/2) {
//     // Bottom-left
//     px.setBlue(255);
//   }
//   else {
//     // Bottom-right
//     px.setRed(255);
//     px.setBlue(255); // Magenta
//   }
// }
// print(img);

// // Part 1: setBlack Function
// function setBlack(pixel) {
//     pixel.setRed(0);
//     pixel.setGreen(0);
//     pixel.setBlue(0);
//     return pixel;
// }

// // Part 2: addBorder Function
// function addBorder(image, thickness) {
//     var width = image.getWidth();
//     var height = image.getHeight();

//     for (var pixel of image.values()) {
//         var x = pixel.getX();
//         var y = pixel.getY();

//         if (
//             x < thickness || 
//             x >= width - thickness || 
//             y < thickness || 
//             y >= height - thickness
//         ) {
//             setBlack(pixel);
//         }
//     }
//     return image;
// }


