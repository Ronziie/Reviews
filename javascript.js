const reviews = [
    {
        id: 1,
        name: "Monkey D. Luffy",
        job: "Strawhat Captain",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d275cf93-e197-4568-89d2-7b6027536ef3/d8lmdek-b6b87d11-8a18-4809-9581-adf833d21c5e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QyNzVjZjkzLWUxOTctNDU2OC04OWQyLTdiNjAyNzUzNmVmM1wvZDhsbWRlay1iNmI4N2QxMS04YTE4LTQ4MDktOTU4MS1hZGY4MzNkMjFjNWUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._17I_6uuaKQ58fyqroexEpHhCnRIrv9T69ZK4Q50SNA",
        text: "Strawhat Luffy, commonly known as 'Strawhat' He is the founder and captain of the increasingly infamous and powerful Straw Hat Pirates, as well as one of its top fighters. His lifelong dream is to become the Pirate King by finding the legendary treasure left behind by the late Gol D. Roger. As well as being referred to as a member of the 'Worst Generation' His current bounty sits at $1,500,000,000.",
    },
    {
        id: 2,
        name: "Roronoa Zoro",
        job: "Strawhat Vice-Captain",
        img: "https://static3.srcdn.com/wordpress/wp-content/uploads/2021/01/Zoro-Wielding-Two-Swords-One-Piece-Anime.jpg?q=50&fit=crop&w=943&h=500&dpr=1.5",
        text: "'Pirate Hunter' is the combatant of the Straw Hat Pirates, and one of their two swordsmen. Formerly a bounty hunter, he is the second member of the crew and the first to join, Zoro is also regarded as one of twelve pirates who are referred to as the 'Worst Generation'. He currently has a bounty of $320,000,000 ",
    },
    {
        id: 3,
        name: "Nami",
        job: "Navigator",
        img: "https://cdn-0.practicaltyping.com/wp-content/uploads/2018/09/nami4-1.png",
        text: "'Cat Burglar' Nami is the navigator of the Straw Hat Pirates. She is the third member of the crew and the second to join, Her dream is to make a map of the entire world. She currently has a bounty of $66,000,000 Beli ",
    },
    {
        id: 4,
        name: "Ussop",
        job: "Sniper",
        img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/04/Featured-Image-Usopp-Wanted-Poster-Cropped.jpg?q=50&fit=crop&w=943&h=500&dpr=1.5",
        text: "'God Ussop' is the sniper of the Straw Hat Pirates. He is the fourth member of the crew and the third to join He currently has a bounty of $200,000,000.",
    },
    {
        id: 5,
        name: "Vinsmoke Sanji",
        job: "Cook",
        img: "https://www.seekpng.com/png/full/107-1074185_vinsmoke-sanji-roronoa-zoro-monkey-d-one-piece.png",
        text: "'Black Leg' Sanji, born as Vinsmoke Sanji, is the cook of the Straw Hat Pirates. He is the fifth member of the crew and the fourth to join,He currently has a bounty of $330,000,000 Beli, the third-highest in the crew after Luffy and Jinbe.",
    },
    {
        id: 6,
        name: "Tony Tony Chopper",
        job: "Doctor",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6526686d-9021-4f80-8e04-019a3c1206d8/d62q911-609df059-7b4c-4166-ad80-ef64896c2538.png/v1/fill/w_993,h_782,q_80,strp/cotton_candy_lover___by_chaotixxda_d62q911-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzgyIiwicGF0aCI6IlwvZlwvNjUyNjY4NmQtOTAyMS00ZjgwLThlMDQtMDE5YTNjMTIwNmQ4XC9kNjJxOTExLTYwOWRmMDU5LTdiNGMtNDE2Ni1hZDgwLWVmNjQ4OTZjMjUzOC5wbmciLCJ3aWR0aCI6Ijw9OTkzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.-XBMthKAPtlYz77EmiAQYXL7ffWCoVGJfztLUgR-_bc",
        text: "'Cotton Candy Lover' Chopper,is the doctor of the Straw Hat Pirates. He is the sixth member of the crew and the fifth to join, Chopper is a reindeer that ate the 'Hito Hito no Mi', a Devil Fruit that allows its user to transform into a human hybrid or a human at will. He currently has a bounty of $100 Beli due to being mistaken for the crew's pet.",
    },
    {
        id: 7,
        name: "Nico Robin",
        job: "Archaeologist",
        img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/09/Nico-Robin-2.jpg?q=50&fit=crop&w=943&h=500&dpr=1.5",
        text: "'Devil Child' and the 'Light of the Revolution', is the archaeologist of the Straw Hat Pirates. She is the seventh member of the crew Robin ate the Hana Hana no Mi at a young age, giving her the power to reproduce her body parts (or her entire body) on any surface at will.She currently has a bounty of Beli $130,000,000. ",
    },
    {
        id: 8,
        name: "Franky",
        job: "Shipwright",
        img: "http://onepiecegold.altervista.org/wp-content/uploads/2017/09/5.png",
        text: "'Iron Man Franky' is the shipwright of the Straw Hat Pirates. He is the crew's eighth member As a direct result of the modifications that he conducted upon himself as well as the years spent as a ship dismantler, bounty hunter, and street thug in Water 7, Franky is a powerfully built man with a height of at least seven feet,He currently has a bounty of $94,000,000. ",
    },
    {
        id: 9,
        name: "Brook",
        job: "Musican",
        img: "https://imgix.ranker.com/user_node_img/50124/1002463800/original/1002463800-photo-u1?auto=format&fit=crop&fm=pjpg&w=375&q=60&dpr=1",
        text: "'Soul King Brook'is the musician of the Straw Hat Pirates, and one of their two swordsmen. He is the ninth member of the crew and the eighth to join, Brook ate the Yomi Yomi no Mi, which allowed him to return to life after death once. He currently has a bounty of $83,000,000. ",
    },
    {
        id: 10,
        name: "Jinbe",
        job: "Helmsman",
        img: "https://scontent.ffab1-1.fna.fbcdn.net/v/t1.6435-9/fr/cp0/e15/q65/67657014_1420681974764164_7903428677264736256_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=85a577&_nc_ohc=j6o8skiPvpgAX_uuwyR&_nc_ht=scontent.ffab1-1.fna&oh=b25dfa1b69cab6a51b8a23e91e8eae05&oe=616B3CBD",
        text: "'Knight of the Sea' Jimbei is the helmsman of the Straw Hat Pirates. He is the tenth member of the crew,Jinbe is a whale shark fish-man and a powerful master of Fish-Man Karate. His dream is to fulfill his former captain Fisher Tiger's dying wish of coexistence and equality between humans and fish-men. He currently has a bounty of $438,000,000.",
    },

];


// local reviews data
/* const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ]; */
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
 /*load initial item
window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }); */

  //show person based on item
  function showPerson(person){
      const item = reviews[person];
      img.src = item.img;
      author.textContent = item.name;
      job.textContent = item.job;
      info.textContent = item.text;

  }
// show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    if(currentItem == 0) {
        document.querySelector(".img-container").style.borderColor = "red";
        document.body.style.backgroundColor = "red";
    } else if (currentItem == 1) {
        document.querySelector(".img-container").style.borderColor = "green";
        document.body.style.backgroundColor = "green";
    } else if (currentItem == 2) {
        document.querySelector(".img-container").style.borderColor = "orange";
        document.body.style.backgroundColor = "orange";
    } else if (currentItem == 3) {
        document.querySelector(".img-container").style.borderColor = "yellow";
        document.body.style.backgroundColor = "yellow";
    } else if (currentItem == 4) {
        document.querySelector(".img-container").style.borderColor = "blue";
        document.body.style.backgroundColor = "blue";
    } else if (currentItem == 5) {
        document.querySelector(".img-container").style.borderColor = "pink";
        document.body.style.backgroundColor = "pink";
    } else if (currentItem == 6) {
        document.querySelector(".img-container").style.borderColor = "purple";
        document.body.style.backgroundColor = "purple";
    } else if (currentItem == 7) {
        document.querySelector(".img-container").style.borderColor = "#ADD8E6";
        document.body.style.backgroundColor = "#ADD8E6";
    } else if (currentItem == 8) {
        document.querySelector(".img-container").style.borderColor = "grey";
        document.body.style.backgroundColor = "grey";
    } else if (currentItem == 9) {
        document.querySelector(".img-container").style.borderColor = "#00BFFF";
        document.body.style.backgroundColor = "#00BFFF";
    }

    showPerson(currentItem);
});

//show prev person
prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    if(currentItem == 0) {
        document.querySelector(".img-container").style.borderColor = "red";
        document.body.style.backgroundColor = "red";
    } else if (currentItem == 1) {
        document.querySelector(".img-container").style.borderColor = "green";
        document.body.style.backgroundColor = "green";
    } else if (currentItem == 2) {
        document.querySelector(".img-container").style.borderColor = "orange";
        document.body.style.backgroundColor = "orange";
    } else if (currentItem == 3) {
        document.querySelector(".img-container").style.borderColor = "yellow";
        document.body.style.backgroundColor = "yellow";
    } else if (currentItem == 4) {
        document.querySelector(".img-container").style.borderColor = "blue";
        document.body.style.backgroundColor = "blue";
    } else if (currentItem == 5) {
        document.querySelector(".img-container").style.borderColor = "pink";
        document.body.style.backgroundColor = "pink";
    } else if (currentItem == 6) {
        document.querySelector(".img-container").style.borderColor = "purple";
        document.body.style.backgroundColor = "purple";
    } else if (currentItem == 7) {
        document.querySelector(".img-container").style.borderColor = "#ADD8E6";
        document.body.style.backgroundColor = "#ADD8E6";
    } else if (currentItem == 8) {
        document.querySelector(".img-container").style.borderColor = "grey";
        document.body.style.backgroundColor = "grey";
    } else if (currentItem == 9) {
        document.querySelector(".img-container").style.borderColor = "#00BFFF";
        document.body.style.backgroundColor = "#00BFFF";
    }
    showPerson(currentItem);
});


//random person
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
    if(currentItem == 0) {
        document.querySelector(".img-container").style.borderColor = "red";
        document.body.style.backgroundColor = "red";
    } else if (currentItem == 1) {
        document.querySelector(".img-container").style.borderColor = "green";
        document.body.style.backgroundColor = "green";
    } else if (currentItem == 2) {
        document.querySelector(".img-container").style.borderColor = "orange";
        document.body.style.backgroundColor = "orange";
    } else if (currentItem == 3) {
        document.querySelector(".img-container").style.borderColor = "yellow";
        document.body.style.backgroundColor = "yellow";
    } else if (currentItem == 4) {
        document.querySelector(".img-container").style.borderColor = "blue";
        document.body.style.backgroundColor = "blue";
    } else if (currentItem == 5) {
        document.querySelector(".img-container").style.borderColor = "pink";
        document.body.style.backgroundColor = "pink";
    } else if (currentItem == 6) {
        document.querySelector(".img-container").style.borderColor = "purple";
        document.body.style.backgroundColor = "purple";
    } else if (currentItem == 7) {
        document.querySelector(".img-container").style.borderColor = "#ADD8E6";
        document.body.style.backgroundColor = "#ADD8EF";
    } else if (currentItem == 8) {
        document.querySelector(".img-container").style.borderColor = "grey";
        document.body.style.backgroundColor = "grey";
    } else if (currentItem == 9) {
        document.querySelector(".img-container").style.borderColor = "#00BFFF";
        document.body.style.backgroundColor = "#00BFFF";
    }

});