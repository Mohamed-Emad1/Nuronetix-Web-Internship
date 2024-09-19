
const historyBlogPosts = [
  {
    title: "The Fall of the Roman Empire",
    description:
      "Explore the political, economic, and military factors that led to the fall of one of the greatest empires in history.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Roman_Empire_Trajan_117AD.png/800px-Roman_Empire_Trajan_117AD.png",
  },
  {
    title: "The Renaissance: Rebirth of Art and Culture",
    description:
      "Delve into the cultural revolution that took place in Europe during the 14th to 17th centuries, marking the transition from the Middle Ages to modernity.",
    image:
      "https://covers.storytel.com/jpg-640/9798868639272.88405c36-d7f1-49bc-a2c0-87c52f637fb2?optimize=high&quality=70",
  },
  {
    title: "World War II: The Global Conflict",
    description:
      "An in-depth analysis of the events leading up to and during World War II, focusing on major battles and the geopolitical consequences.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0ZPHnPYN1bWR-2JH59r7MOHVeBQ58cXe7Q&s",
  },
  {
    title: "Ancient Egypt: The Land of Pharaohs",
    description:
      "Discover the rich history of Ancient Egypt, from the construction of the pyramids to the reign of the most powerful Pharaohs.",
    image:
      "https://images.nationalgeographic.org/image/upload/v1638891420/EducationHub/photos/temple-of-nefertari.jpg",
  },
  {
    title: "The Industrial Revolution",
    description:
      "Understand how the Industrial Revolution transformed economies and societies across Europe and the United States during the 18th and 19th centuries.",
    image:
      "https://media.licdn.com/dms/image/D4D12AQEOJysZ6OCjMQ/article-cover_image-shrink_720_1280/0/1697441887876?e=2147483647&v=beta&t=txFxsvi6h1rsPXvqsym8q1kqgM8CEzHgTsXqYg2a7rs",
  },
  {
    title: "The American Civil War: A Nation Divided",
    description:
      "Learn about the key events, battles, and social impacts of the American Civil War that shaped the future of the United States.",
    image:
      "https://cdn.britannica.com/13/149613-159-AAE1FE89/Battle-of-Gettysburg-Currier-lithograph-Ives-July-3-1863.jpg",
  },
  {
    title: "The Age of Exploration",
    description:
      "Follow the journeys of explorers like Columbus, Magellan, and Vasco da Gama, and how their voyages changed the world forever.",
    image:
      "https://www.worldatlas.com/r/w1200/upload/12/e7/4f/explorations-english.png",
  },
  {
    title: "The French Revolution",
    description:
      "A deep dive into the causes, major events, and aftermath of the French Revolution that reshaped the political landscape of Europe.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Philippoteaux_-_Lamartine_in_front_of_the_Town_Hall_of_Paris_rejects_the_red_flag.jpg/800px-Philippoteaux_-_Lamartine_in_front_of_the_Town_Hall_of_Paris_rejects_the_red_flag.jpg",
  },
  {
    title: "The Rise and Fall of Napoleon Bonaparte",
    description:
      "Discover the fascinating life of Napoleon Bonaparte, from his rise as a military genius to his downfall at Waterloo.",
    image:
      "https://www.historyhit.com/app/uploads/2020/07/Jacques-Louis_David_007-e1541423333385-1.jpg",
  },
  {
    title: "Medieval Europe: The Dark Ages",
    description:
      "Learn about the challenges, societal structures, and key events during the Medieval period in Europe, often called the 'Dark Ages.'",
    image:
      "https://assets.editorial.aetnd.com/uploads/2010/04/middle-ages-gettyimages-804452498.jpg",
  },
];



const sportsBlogPosts = [
  {
    title: "The Origins of the Olympic Games",
    description:
      "A look into the origins of the Olympic Games in ancient Greece and how it evolved into the modern global event it is today.",
    image: "https://i.ytimg.com/vi/VdHHus8IgYA/maxresdefault.jpg",
  },
  {
    title: "The History of Football: From Its Roots to the Global Phenomenon",
    description:
      "Explore the journey of football (soccer), from its early forms in ancient civilizations to the world's most popular sport.",
    image: "https://www.footballhistory.org/images/double_pic.jpg",
  },
  {
    title: "Michael Jordan: The Basketball Legend",
    description:
      "A deep dive into the career of Michael Jordan, one of the greatest basketball players of all time, and his impact on the sport.",
    image:
      "https://fadeawayworld.net/.image/t_share/MjA0Njg5NjMyOTk3MTU2MTcx/423454938_2352087524987114_721364405976660309_n.jpg",
  },
  {
    title: "The Rise of Tennis: From Lawn Tennis to Global Courts",
    description:
      "Track the rise of tennis, from its origins as lawn tennis in the 19th century to the modern sport played on global stages like Wimbledon and the US Open.",
    image:
      "https://www.bhf.org.uk/-/media/images/information-support/heart-matters/heart-matters/summer-2018/activity/tennis_racket_balls_ss_0618_noexp_620x400.jpg?rev=c18a71fbd05e4a91b4bbc40af01aafaa",
  },
  {
    title: "The History of the FIFA World Cup",
    description:
      "A detailed history of the FIFA World Cup, the most prestigious tournament in world football, from its inception in 1930 to today.",
    image:
      "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/64a5c28d04c117001d951bad.jpg",
  },
  {
    title: "Muhammad Ali: The Greatest Boxer",
    description:
      "Learn about the life and career of Muhammad Ali, his rise to fame, and how he became one of the most iconic figures in sports history.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Muhammad_Ali%2C_gtfy.00140.jpg/330px-Muhammad_Ali%2C_gtfy.00140.jpg",
  },
  {
    title: "The Evolution of Cricket: From Village Green to Global Stage",
    description:
      "Discover how cricket evolved from an English pastime into one of the most widely played sports across the globe.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/First_Grand_Match_of_Cricket_Played_by_Members_of_the_Royal_Amateur_Society_on_Hampton_Court_Green%2C_..._-_Google_Art_Project.jpg/500px-First_Grand_Match_of_Cricket_Played_by_Members_of_the_Royal_Amateur_Society_on_Hampton_Court_Green%2C_..._-_Google_Art_Project.jpg",
  },
  {
    title: "The Super Bowl: America's Biggest Sports Event",
    description:
      "A history of the Super Bowl, its cultural significance, and how it became the biggest sporting event in the United States.",
    image:
      "https://www.timeforkids.com/wp-content/uploads/2024/02/news_superbowl.jpg",
  },
  {
    title: "The Golden Age of Baseball: Babe Ruth and the Yankees",
    description:
      "Relive the golden age of baseball, focusing on the legendary career of Babe Ruth and his dominance with the New York Yankees.",
    image:
      "https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w1536/mlb/crbela7xbocusesq8f8v.jpg",
  },
  {
    title: "The Tour de France: A Century of Cycling Excellence",
    description:
      "Explore the history of the Tour de France, one of the most grueling and prestigious cycling races in the world, and the champions who made their mark.",
    image:
      "https://www.parisperfect.com/blog/wp-content/uploads/2021/07/tour-de-france-arc-de-triomphe-Pauline-Ballet.jpg",
  },
];

const gamesBlogPosts = [
  {
    title: "The Evolution of Video Games",
    description:
      "Explore how video games have evolved from simple pixelated graphics to immersive, complex virtual worlds.",
    image:
      "https://cdn.prod.website-files.com/62c4434b60758359f9e47559/630fab4986479d5f1f3bcc22_History%20of%20Video%20Games%20(2).png",
  },
  {
    title: "The Rise of Esports",
    description:
      "Dive into the competitive world of esports and how it has become a global phenomenon with massive tournaments and prize pools.",
    image:
      "https://cdn.prod.website-files.com/61bb26fe53aeb2a18bbd17e4/66b4cc832c018c9cf4a47fc9_Featured%20Image.webp",
  },
  {
    title: "The History of Board Games",
    description:
      "From ancient civilizations to modern-day gaming, discover the long history and cultural significance of board games.",
    image: "https://en.chessbase.com/Portals/all/thumbs/112/112140%20(2).png",
  },
  {
    title: "The Best-Selling Video Games of All Time",
    description:
      "A look at the video games that have sold millions of copies worldwide and become cultural icons.",
    image:
      "https://assets-prd.ignimgs.com/2023/05/31/firstwitcher011280jpg-7667b2-160w-1685568680890.jpeg?crop=16%3A9&width=888",
  },
  {
    title: "How Game Design Shapes Player Experience",
    description:
      "Understand the principles behind game design and how they create engaging and memorable player experiences.",
    image:
      "https://kevurugames.com/wp-content/uploads/2023/08/the-Stages-of-level-Game-Design-1024x593.jpg",
  },
  {
    title: "The Impact of Mobile Games",
    description:
      "Learn how mobile gaming has transformed the industry, making games more accessible to people of all ages worldwide.",
    image:
      "https://miro.medium.com/v2/resize:fit:780/1*p4ZMLzdaGBwmCrFsOB01EQ.jpeg",
  },
  {
    title: "The Future of Virtual Reality in Gaming",
    description:
      "Examine the future of gaming as VR technology improves, offering players increasingly immersive experiences.",
    image:
      "https://miro.medium.com/v2/resize:fit:2560/1*hNsI4kai4FeU7kN5vZnjQA.jpeg",
  },
  {
    title: "The Psychology Behind Game Addiction",
    description:
      "A deep dive into the psychological mechanisms that make games so engaging and how they can lead to addiction.",
    image:
      "https://media.licdn.com/dms/image/D4D12AQFzwHMT2nfGbw/article-cover_image-shrink_720_1280/0/1683032508963?e=2147483647&v=beta&t=s2msWQTbTaV_WOv16oixky6bRWOHhTNrfKTIqZSMwks",
  },
  {
    title: "The Role of Storytelling in Games",
    description:
      "Explore how video games use storytelling techniques to engage players emotionally and create memorable narratives.",
    image:
      "https://kevurugames.com/wp-content/uploads/2023/05/Evolution-of-storytelling-in-video-games-1024x674.jpg",
  },
  {
    title: "The Best Indie Games You Should Try",
    description:
      "Discover some of the best indie games that offer unique and creative gaming experiences outside the mainstream titles.",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*djCnSsSaymImJ7ycO-M9Zg.jpeg",
  },
];


function createCard(card) {
  return `
        <div class="card-body">
            <div class="image">
                <img src="${card.image}" alt="">
            </div>

            <div class="content">
                <h5>${card.title}</h5>
                <p>${card.description}</p>
                
               <button onclick='handleReadMore(${JSON.stringify(card).replace(
                 /'/g,
                 "&apos;"
               )})'>Read More</button>
            </div>
        </div>
    `;
}

// Function to render all cards
function renderCards(cardData,component) {
  const cardContainer = document.getElementById(component);
  cardData.forEach((card) => {
    cardContainer.innerHTML += createCard(card);
  });
}

// Call the renderCards function to display cards
document.addEventListener("DOMContentLoaded", function () {
    // Call the renderCards function to display cards
    if (document.URL.includes("index.html"))
    {
        renderCards(historyBlogPosts, "card-history-container");
    }
    else if (document.URL.includes("sports.html"))
    { 
        renderCards(sportsBlogPosts, "card-sports-container");
        
    }
    else if (document.URL.includes("games.html"))
    {
        renderCards(gamesBlogPosts, "card-games-container");
    }
  
});

function handleReadMore(card)
{
  
  // Show modal
  const modal = document.getElementById("modal");
  modal.style.display = "block";

  // Set modal content
  document.getElementById("modal-image").src = card.image;
  document.getElementById("modal-title").innerText = card.title;
  document.getElementById("modal-description").innerText = card.description;
}

document.addEventListener("DOMContentLoaded", function () {
  // Close modal when clicking the "x" button
  const closeModal = document.getElementById("closeModal");

  if (closeModal) {
    closeModal.onclick = function () {
      const modal = document.getElementById("modal"); // Corrected ID
      modal.style.display = "none";
    };
  }
});



window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


