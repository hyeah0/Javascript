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



console.log("-----1번문제-----");
animals.pop();
console.log(animals);

console.log("-----2번문제-----");
animals.push("Dog");
console.log(animals);

console.log("-----3번문제-----");
animals.push("Mosquito","Mouse","Mule");
console.log(animals);

//복습필요//
console.log("-----4번문제-----");
console.log(animals.includes("Human"));

console.log("-----5번문제-----");
console.log(animals.includes("Cat"));

//*****//
console.log("-----6번문제-----");
console.log("-----Red deer을 Deer로 바꾸시오-----");
animals[animals.indexOf("Red deer")] = "Deer"
console.log(animals);

console.log("-----7번문제-----");
console.log(animals.indexOf("Spider"));
console.log(animals.splice(animals.indexOf("Spider"),3));
console.log(animals);

console.log("-----8번문제-----");
console.log(animals.indexOf("Tiger"));
console.log(animals.splice(animals.indexOf("Tiger")));
console.log(animals);

console.log("-----9번문제-----");
console.log("-----B로 시작되는 아이템인 Baboon부터 Bison까지 가져와 새로운 어레이에 저장하시오-----");
console.log(animals.indexOf("Baboon"));
console.log(animals.indexOf("Bison"));
let newList = animals.slice(animals.indexOf("Baboon"),animals.indexOf("Bison")+1);
console.log(newList);
