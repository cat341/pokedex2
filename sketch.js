var bulbaSprite, bulbaShinySprite, bulbaValue, bulbaSON;
var canW, canH

function preload()
{
    bulbaSprite = loadImage("assets/bulbaImage.png");
    bulbaShinySprite = loadImage("assets/bulbaShiny.png");
}

function setup()
{
    var isMobile = /iPhone|iPad|iPod|Android/
        if(isMobile)
        {
            canW = displayWidth;
            canH = displayHeight;
        }
        else
        {
            canW = windowWidth;
            canH = windowHeight;
        }
        createCanvas(canW, canH);
}

function draw()
{
    background("gray");
}