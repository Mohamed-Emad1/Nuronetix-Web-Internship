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

function createCard(card) {
  return `
        <div class="card-body">
            <div class="image">
                <img src="${card.image}" alt="">
            </div>

            <div class="content">
                <h5>${card.title}</h5>
                <p>${card.description}</p>
                
                <button>Read More</button>
            </div>
        </div>
    `;
}

// Function to render all cards
function renderCards(cardData) {
  const cardContainer = document.getElementById("card-container");
  cardData.forEach((card) => {
    cardContainer.innerHTML += createCard(card);
  });
}

// Call the renderCards function to display cards
renderCards(historyBlogPosts);

