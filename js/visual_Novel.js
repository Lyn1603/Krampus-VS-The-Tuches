/*
    Fill this array with a list of names of images
    to be pre-loaded.
*/
var preload = [
    "bg-begin.jpg",
    "bg-basement.jpg",
    "bg-chambre.jpg",
    "bg-cuisine.jpg", 
   
  ];
  
  /*
      This section pre-loads your images.
      Don't change it unless you know what you're doing.
  */
  var preloadObj = new Array(preload.length);
  for (var i = 0; i < preload.length; i++)
  {
      preloadObj[i] = new Image();
      preloadObj[i].src = preload[i];
  }
  
  /* Declare variables for characters, positions, and text blocks here */
  var script; // this variable will hold your script
  var tyler;
  var gavin;
  var n; // short for "narrator"
  var photo;
  var textBlock;
  
  var leftSide;
  var rightSide;
  var upperCenter;
  var rightTop;
  
  /*
      This function must exist, and must have this name
  */
  function prepareNovel()
  {
      novel.imagePath = "images/"; // path to your image directory
      novel.audioPath = ""; // path to your audio directory
      
      // initialize your characters, positions, and text blocks here
      gavin = new Character("Gavin", {color: "rgb(64, 204, 64)"});
      tyler = new Character("Tyler", {color: "#ffff00"});
      n = new Character("");
      
      leftSide = new Position(0, .75, 0, 1);
      rightSide = new Position(800, 450, 1, 1);
      upperCenter = new Position(0.5, 0.3, 0.5, 0.5);
      rightTop = new Position(1, 0.1, 1, 0);
      
      photo = new Character("");  
      lionText = new TextBlock("myText");
      
      // and put your script commands into this array
      script = [
          label, "start",
          scene, "bg-begin.png",
          n,"Il était une fois une famille qui avait perdu foi en Noël. Ils avaient arrêté de faire le sapin, de chanter des chansons de Noël, et même d'échanger des cadeaux. Ils étaient devenus aigris et renfermés, ne prenant plus plaisir à rien." ,
          n, "Un soir de Noël, alors que la famille était en train de regarder la télévision dans le salon, ils ont entendu un bruit à la porte d'entrée. Ils ont ouvert la porte pour voir un étrange personnage avec des cornes, une peau rouge, et des griffes acérées. C'était le Krampus, le chasseur de ceux qui ont perdu foi en Noël.",
          n, "Le Krampus a annoncé à la famille qu'ils devaient réussir trois épreuves chacun pour sauver leur vie. S'ils échouent, ils seraient pourchassés pour l'éternité.",
          n, "Ooooohhhh noooonn, c'est déja fini. La suite au prochain acte. ^^",
          
          
       
          

      ];
  }
  