let animals= [
                "Aardvark",
                "Albatross",
                "Alligator",
                "Alpaca",
                "Ant",
                "Ape",
                "Armadillo",
                "Donkey",
                "Baboon",
                "Badger",
                "Barracuda",
                "Bat",
                "Bear",
                "Beaver",
                "Bee",
                "Bison",
                "Cat",
                "Caterpillar",
                "Cattle",
                "Chamois",
                "Cheetah",
                "Chicken",
                "Chimpanzee",
                "Chinchilla",
                "Chough",
                "Clam",
                "Cobra",
                "Cockroach",
                "Cod",
                "Cormorant",
                "Dugong",
                "Dunlin",
                "Eagle",
                "Echidna",
                "Eel",
                "Eland",
                "Elephant",
                "Elk",
                "Emu",
                "Falcon",
                "Ferret",
                "Finch",
                "Fish",
                "Flamingo",
                "Fly",
                "Fox",
                "Frog",
                "Gaur",
                "Gazelle",
                "Gerbil",
                "Giraffe",
                "Grasshopper",
                "Heron",
                "Herring",
                "Hippopotamus",
                "Hornet",
                "Horse",
                "Kangaroo",
                "Kingfisher",
                "Koala",
                "Kookabura",
                "Moose",
                "Narwhal",
                "Newt",
                "Nightingale",
                "Octopus",
                "Okapi",
                "Opossum",
                "Quail",
                "Quelea",
                "Quetzal",
                "Rabbit",
                "Raccoon",
                "Rail",
                "Ram",
                "Rat",
                "Raven",
                "Red deer",
                "Sandpiper",
                "Sardine",
                "Sparrow",
                "Spider",
                "Spoonbill",
                "Squid",
                "Squirrel",
                "Starling",
                "Stingray",
                "Tiger",
                "Toad",
                "Whale",
                "Wildcat",
                "Wolf",
                "Worm",
                "Wren",
                "Yak",
                "Zebra"
            ];



console.log("-----1?????????-----");
animals.pop();
console.log(animals);

console.log("-----2?????????-----");
animals.push("Dog");
console.log(animals);

console.log("-----3?????????-----");
animals.push("Mosquito","Mouse","Mule");
console.log(animals);

//????????????//
console.log("-----4?????????-----");
console.log(animals.includes("Human"));

console.log("-----5?????????-----");
console.log(animals.includes("Cat"));

//*****//
console.log("-----6?????????-----");
console.log("-----Red deer??? Deer??? ????????????-----");
animals[animals.indexOf("Red deer")] = "Deer"
console.log(animals);

console.log("-----7?????????-----");
console.log(animals.indexOf("Spider"));
console.log(animals.splice(animals.indexOf("Spider"),3));
console.log(animals);

console.log("-----8?????????-----");
console.log(animals.indexOf("Tiger"));
console.log(animals.splice(animals.indexOf("Tiger")));
console.log(animals);

console.log("-----9?????????-----");
console.log("-----B??? ???????????? ???????????? Baboon?????? Bison?????? ????????? ????????? ???????????? ???????????????-----");
console.log(animals.indexOf("Baboon"));
console.log(animals.indexOf("Bison"));
let newList = animals.slice(animals.indexOf("Baboon"),animals.indexOf("Bison")+1);
console.log(newList);
