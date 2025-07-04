var fgImage = new SimpleImage("drewRobert.png");
var bgImage = new SimpleImage("dinos.png");

var outputImage = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());

for (var pixel of fgImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    
    if (pixer.getGreen() > pixel.getRed() + pixel.getBlue()) 
    {
        // If the pixel is green, replace it with the background pixel
        var bgPixel = bgImage.getPixel(x, y);
        outputImage.setPixel(x, y, bgPixel);
    } else {
        // Otherwise, keep the foreground pixel
        outputImage.setPixel(x, y, pixel);
    }
}