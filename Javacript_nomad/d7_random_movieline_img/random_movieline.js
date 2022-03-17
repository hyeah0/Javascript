const famousLine = [
    {
        line : "Don't have a good day. Have a great day!",
        movie : "Free Guy",
    },
    {
        line : "Maybe that is my progragmming talking, but guess what? Someone wrote that grogram I am just a love letter to you Somewhere out ther is the author",
        movie : "Free Guy",
    },
    {
        line : "Everything is gonna be okay",
        movie : "Source Code",
    },
    {
        line : "I have been falling for 30 minutes!",
        movie : "Thor: Ragnarok",
    },
    {
        line : "Do what you like, love what you do",
        movie : "Rapunzel",
    },
    {
        line : "There are a lot of things to be happy about",
        movie : "Inside Out",
    },
    {
        line : "The greatest thing you'll ever learn is just to love and be loved in return",
        movie : "Moulin Rouge",
    } 
];
const randomLine = document.querySelector("#quote i:first-child");
const movie = document.querySelector("#quote i:last-child");
const randomNumber = Math.floor(Math.random()*famousLine.length);
const randomMovieLine = famousLine[randomNumber];

console.log(randomMovieLine);
randomLine.innerHTML = `${randomMovieLine.line}`;
movie.innerHTML = `${randomMovieLine.movie}`;

