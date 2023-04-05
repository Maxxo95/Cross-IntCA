let cocktailsMenu = [
  {
    name: 'Pornstar Martini', 
    description: 'Absolut Vanilla vodka shaken  with Passoa passion fruit liqueur, pineapple juice, a dash of lime and passionfruit puree. Garnished with passionfruit and accompanied with a shot of chilled prosecco.', 
    ingredients: [
      ["limeJ", 12.5],
      ["vanillaVodka", 35.5],
      ["passoa", 20],
      ["pineappleJuice", 70],
      ["passionFruitPure", 25],
      ["vanillaSyroup", 3] 
    ],
    glass: 'coupe' ,
    method: ['shake', 'doubleStrain'] ,  
    garnish: ['prosecoShot', 'passionFruit'] ,
    ice: 'chill'  ,
    image: "https://th.bing.com/th/id/OIP.R2f1ekQ-sidTajtPINvAUQHaD4?pid=ImgDet&rs=1g"
  },
   {
    name: 'Raspberry Tom Collins', 
    description: 'Drumshanbo Gunpowder Irish Gin served long over crushed ice with fresh raspberries, raspberry puree,lemon juice, sugar to balance and topped with Thomas Henry soda.', 
    ingredients: [
      ["lemonJ", 20],
      ["gunPowder", 50],
      ["raspPure", 20],
      ["sugarSyroup", 12.5],
      ["topSoda", 1]
     
    ],
    glass: 'collins' ,
    method: ['shake', 'strain'] ,  
    garnish: ['rasp', 'mintSprig', 'crushed ice on top'] ,
    ice: 'cubed'  ,
    image: "https://th.bing.com/th/id/OIP.R2f1ekQ-sidTajtPINvAUQHaD4?pid=ImgDet&rs=1g"
  },
     {
    name: 'Passion Punch', 
    description: 'Black Tears Cuban spiced rum shaken with passionfruit puree, lime, pineapple and bitters. Served long and topped with Thomas Henry Pink Grapefruit soda. Garnished with pineapple leaf and passionfruit.', 
    ingredients: [
      ["limeJ", 25],
      ["blackTears", 50],
      ["passionFruitPure", 25],
      ["sugarSyroup", 12.5],
      ["pineappleJuice", 50],
      ["angosturaBitDash", 3],
      ["topGrape", 1]
     
    ],
    glass: 'tiki' ,
    method: ['shake', 'strain'] ,  
    garnish: ['grapeFruit', 'mintSprig', 'crushed ice on top'] ,
    ice: 'cubed'  ,
    image: "https://th.bing.com/th/id/OIP.R2f1ekQ-sidTajtPINvAUQHaD4?pid=ImgDet&rs=1g"
  },
  {
    name: 'Oasis Delight', 
    description: 'This great cocktail consists of Lime Vodka, Blue Curacao, Mango and passionfruit puree shaken over ice and topped with soda.,  ingredients', 
    ingredients: [
      ["limeJ", 25],
      ["limeVodka", 35.5],
      ["blueCuracao", 25],
      ["passionFruitPure", 12.5],
      ["MangoPure", 12.5],
      ["sugarSyroup", 12.5],
      ["topSoda", 1]
     
    ],
    glass: 'gin' ,
    method: ['shake', 'strain'] ,  
    garnish: ['lime', 'mintSprig', 'crush ice on top'] ,
    ice: 'cubed'  ,
    image: "https://th.bing.com/th/id/OIP.R2f1ekQ-sidTajtPINvAUQHaD4?pid=ImgDet&rs=1g"
  },
    {
    name: 'Magic Rose', 
    description: 'Created by our very own bartender Bogdan, this classic pink woodfire cocktail consists of Absolut Vanilla Vodka & Tequila Rose, Grenadine and lemon juice. Shaken with coconut and served over ice.', 
    ingredients: [
      ["lemonJ", 20],
      ["vanillaVodka", 35.5],
      ["tequilaRose", 25],
      ["granadine", 20],
      ["coconutPure", 5], 
      ["pineappleJuice", 60]
     
    ],
    glass: 'gin' ,
    method: ['shake', 'strain'] ,  
    garnish: ['strawBerry', 'mintSprig', 'crush ice on top'] ,
    ice: 'cubed'  ,
    image: "https://th.bing.com/th/id/OIP.R2f1ekQ-sidTajtPINvAUQHaD4?pid=ImgDet&rs=1g"
  },
      {
    name: 'Espresso Martini', 
    description: 'First created by world famous bartender Dick Bradsell at Freds Club in London in the 80’s. Vanilla vodka, freshly brewed espresso & coffee liqueur are shaken and strained into a chilled coupette and garnished with coffee beans. ', 
    ingredients: [     
      ["vanillaVodka", 40],
      ["coffeliqueur", 25],
      ["expressoShot", 3],
      ["vanillaSyroup", 10] 
      
     
    ],
    glass: 'coupe' ,
    method: ['shake', 'doubleStrain'] ,  
    garnish: ['3 coffe beans'] ,
    ice: 'chill'  ,
    image: "https://th.bing.com/th/id/OIP.R2f1ekQ-sidTajtPINvAUQHaD4?pid=ImgDet&rs=1g"
  },
     {
    name: 'Cosmopolitan', 
    description: 'Immortalised by “Sex and the City” , this cocktail was created in the mid-80s by Cheryl Cook and designed to be “oh so pretty pink”. Absolut Citron Vodka, Triple Sec, lime and cranberry juices shaken and served straight up, garnished with orange oils and flavoured smoke.', 
    ingredients: [     
      ["limeVodka", 35.5],
      ["contreau", 25],
       ["limeJ", 12.5],      
      ["cranberryJuice", 70] 
      ["granadine", 5] 
      
     
    ],
    glass: 'coupe' ,
    method: ['shake', 'doubleStrain'] ,  
    garnish: ['3 coffe beans'] ,
    ice: 'chill'  ,
    image: "https://th.bing.com/th/id/OIP.R2f1ekQ-sidTajtPINvAUQHaD4?pid=ImgDet&rs=1g"
  },
   {
    name: 'Cappuccino', 
    description: 'A cappuccino is an Italian coffee drink that is traditionally prepared with equal parts double espresso, steamed milk, and steamed milk foam on top. Cream may be used instead of milk. It is typically smaller in volume than a latte', 
    ingredients: [     
       ["expressoShot", 3],
      ['milk', 250],
                    
    ],
    glass: 'mug' ,
    method: ['Steam milk', '1/2milk, 1/2foam'] ,  
    garnish: ['chocolate powder'] ,
    ice: 'none'  ,
    image: "https://bing.com/th?id=OSK.b364679709d8bcf65eaf9095e89c0c0d"
  },
     {
    name: 'Latte', 
    description: 'What is the description of hot latte? Made with steamed, frothy milk, blended with our rich, freshly ground and brewed espresso. Our Latte has a layer of foam and is the perfect balance of creamy and smooth to get you goin. Lattes use a ratio of at least 1 shot of espresso to 2 ounces of steamed milk ', 
    ingredients: [     
       ["expressoShot", 3],
      ['milk', 250],
                    
    ],
    glass: 'latte mug' ,
    method: ['Steam milk', '3/4milk, 1/4foam'] ,  
    garnish: ['latte art'] ,
    ice: 'none'  ,
    image: "https://thumbs.dreamstime.com/b/cappuccino-coffee-hot-heart-shape-clear-glass-81397907.jpg"
  }
  
];

let recipeContainer = document.getElementById('content');
for (let i=0 ; i < cocktailsMenu.length ;  i++){

let cocktail = cocktailsMenu[i];

let recipeContainer = document.getElementById('content');

let html = `
<div class="cocktails" id='drink-${i}'>
  <div class='drinkConta'>
    <h2>${cocktailsMenu[i].name}</h2>
    <p id='rebel'>${cocktailsMenu[i].description}</p>
  </div>
  <img class="drinkImg" src="${cocktailsMenu[i].image}" alt="${cocktailsMenu[i].name}">
</div>
`;

recipeContainer.innerHTML += html;


}

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((dropdown) => {
  const cover = dropdown.querySelector('.cover');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = menu.querySelectorAll('.option');

  cover.addEventListener('click', () => {
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });

  options.forEach((option) => {
    option.addEventListener('click', () => {
      cover.innerText = option.innerText;
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      options.forEach((option) => {
        option.classList.remove('active');
      });
      option.classList.add('active');
    });
  });
});




