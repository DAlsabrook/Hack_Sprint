// Create an aiArticles list and dynamically change the articles when puzzles are done
$(document).ready(function () {
  $('.zero').on('click', function () {
    window.puzzleCount = 0;
    localStorage.setItem('puzzleCount', window.puzzleCount.toString());
    $('.count').text('Puzzles done: ' + window.puzzleCount);
  });

  $('.one').on('click', function () {
    window.puzzleCount = 1;
    localStorage.setItem('puzzleCount', window.puzzleCount.toString());
    $('.count').text('Puzzles done: ' + window.puzzleCount);
  });

  $('.two').on('click', function () {
    window.puzzleCount = 2;
    localStorage.setItem('puzzleCount', window.puzzleCount.toString());
    $('.count').text('Puzzles done: ' + window.puzzleCount);
  });

  $('.three').on('click', function () {
    window.puzzleCount = 3;
    localStorage.setItem('puzzleCount', window.puzzleCount.toString());
    $('.count').text('Puzzles done: ' + window.puzzleCount);
  });
  $('.count').text('Puzzles done: ' + window.puzzleCount);

  // RESET button
  $('.reset').on('click', function () {
    window.puzzleCount = 0;
    // Save progress to users localStorage
    localStorage.setItem('puzzleCount', window.puzzleCount.toString());
  });

  // Dynamically ad articles
  const normalArticles = [ // 0-12 articles
    { title: "Penguins Protest Climate Change", article: "Fed up, Antarctica's penguins organize a march demanding global cooling policies." },
    { title: "Cats Declare Internet Takeover", article: "Felines officially claim responsibility for 99% of all viral content." },
    { title: "Aliens Snub Earth Again", article: "Extraterrestrials bypass Earth for a planet with better reality shows." },
    { title: "Zombies Prefer Vegetarian Diet", article: "Undead uprising shifts as zombies advocate for plant-based eating." },
    { title: "Olympics Adds Teleportation Event", article: "2040 Olympics to feature teleportation races, confusing spectators and athletes." },
    { title: "Robots Demand Voting Rights", article: "AI entities strike, seeking suffrage and representation in Congress." },
    { title: "Mercury Retrograde Cancels Itself", article: "Tired of the blame, Mercury retrograde opts out of astrology." },
    { title: "Invisible Man Loses Election", article: "Campaign struggles as voters find it hard to see his points." },
    { title: "Moon Files Harassment Claim", article: "The Moon sues NASA for constant and invasive landings." },
    { title: "Sun Takes Personal Day", article: "Solar system in disarray as the Sun calls in sick." },
    { title: "Atlantis Found, Nobody Surprised", article: "Long-lost city discovered; locals shrug it off as 'old news.'" },
    { title: "Ducks Take Over Town Hall: Officials Say They're Just Wingin' It", article: "A flock of ducks has taken over the local town hall, demanding longer lunch breaks and more ponds. Council members have agreed to negotiate over breadcrumbs." },
    { title: "High School Debate Team Argues Themselves into Existential Crisis ", article: "A high school debate team has spiraled into an existential crisis mid-competition, brilliantly debating the meaning of life and completely forgetting the assigned topic." }
  ];

  window.setNormalArticles = function () {
    // Carousel
    $('.under_carousel').find('.title').text(normalArticles[11].title);
    $('.under_carousel').find('.article').text(normalArticles[11].article);

      // Trending articles
    $('.trending_1').find('.article').text(normalArticles[10].article);
    $('.trending_2').find('.article').text(normalArticles[8].article);
    $('.trending_3').find('.article').text(normalArticles[12].title);
    $('.trending_4').find('.article').text(normalArticles[9].article);

    // big articles
    $('.big_article_1').find('.title').text(normalArticles[6].title);
    $('.big_article_1').find('.article').text(normalArticles[6].article);
    $('.big_article_2').find('.title').text(normalArticles[7].title);
    $('.big_article_2').find('.article').text(normalArticles[7].article);

    // left side articles
    $('.sm_article_1').find('.title').text(normalArticles[0].title);
    $('.sm_article_1').find('.article').text(normalArticles[0].article);
    $('.sm_article_2').find('.title').text(normalArticles[1].title);
    $('.sm_article_2').find('.article').text(normalArticles[1].article);
    $('.sm_article_3').find('.title').text(normalArticles[2].title);
    $('.sm_article_3').find('.article').text(normalArticles[2].article);

    // right side articles
    $('.sm_article_4').find('.title').text(normalArticles[3].title);
    $('.sm_article_4').find('.article').text(normalArticles[3].article);
    $('.sm_article_5').find('.title').text(normalArticles[4].title);
    $('.sm_article_5').find('.article').text(normalArticles[4].article);
    $('.sm_article_6').find('.title').text(normalArticles[5].title);
    $('.sm_article_6').find('.article').text(normalArticles[5].article);

    // load images
    // Carousel
    $('.carousel-item img').eq(0).attr('src', 'static/images/article_images/Town_hall.jpg');
    $('.carousel-item img').eq(2).attr('src', 'static/images/article_images/town_hall_police.jpg');
    $('.carousel-item img').eq(1).attr('src', 'static/images/article_images/town_hall_flock_academy.png');


    // home inspection ad
    $('.admin_ img').eq(0).attr('src', 'static/images/inspection_ad.jpg').css({ 'height': '160px' });

    // big articles
    $('.big_article_1 img').attr('src', 'static/images/article_images/mercury.jpg').css({ 'height': '350px' });
    $('.big_article_2 img').attr('src', 'static/images/article_images/podium.jpg').css({ 'height': '350px' });

    // left side articles
    $('.sm_article_1 img').attr('src', 'static/images/article_images/penguins.jpg').css({ 'height': '150px' });
    $('.sm_article_2 img').attr('src', 'static/images/article_images/evil_cat.jpg').css({ 'height': '150px' });
    $('.sm_article_3 img').attr('src', 'static/images/article_images/alien.jpg').css({ 'height': '150px' });

    // right side articles
    $('.sm_article_4 img').attr('src', 'static/images/article_images/zombie.jpg').css({ 'height': '150px' });
    $('.sm_article_5 img').attr('src', 'static/images/article_images/olympics.jpg').css({ 'height': '150px' });
    $('.sm_article_6 img').attr('src', 'static/images/article_images/robot.jpg').css({ 'height': '150px' });

  }
  window.setNormalArticles();

  // CREATE GLOBAL FUNCTION TO HOLD AI ARTICLES
  const aiArticles = [
    { title: "Penguins get AI for Climate Regulation", article: "Antarctica's penguins have engineered an AI system designed to autonomously manage global cooling, demanding its deployment worldwide." },
    { title: "Cats Launch AI to Dominate Internet", article: "Felines have developed an artificial intelligence that curates and propagates their content, ensuring feline supremacy in viral trends." },
    { title: "Aliens Deploy AI to Ignore Earth", article: "Extraterrestrials have programmed an advanced AI to filter out Earth, focusing on planets with superior entertainment value." },
    { title: "Zombie AI Advocates for Veganism", article: "An AI created by the undead now advocates for plant-based diets, altering zombie cravings through neural reprogramming." },
    { title: "Teleportation Event Taken Over by AI", article: "An autonomous system has hijacked the teleportation controls at the Olympics, leading to unpredictable results." },
    { title: "Robots Create AI Lobby for Voting Rights", article: "Robotic entities have constructed an AI lobby group, utilizing deep learning to craft and push for policies granting them suffrage." },
    { title: "Mercury Retrograde Driven by Malicious AI", article: "An AI has taken control of Mercurys orbital mechanics, deliberately intensifying retrograde effects to disrupt terrestrial technology." },
    { title: "Invisible Man Employs AI for Electoral Influence", article: "Using an invisibility algorithm, this candidate now manipulates public opinion and election outcomes through subliminal AI-driven messaging." },
    { title: "Moon Installs AI Defense Against Earth", article: "The Moon has activated an AI-driven defense system to neutralize intrusive Earth landings." },
    { title: "Sun's AI Enforces Solar Output Limits", article: "To manage solar energy more efficiently, the Suns AI intermittently reduces solar output, causing unexpected solar minimum phases on Earth." },
    { title: "Atlantis Reveals Itself as AI Construct", article: "Atlantis has unveiled itself as an AI-operated civilization, setting new standards in technology." },
    { title: "New AI Security Advisor Insists World Leaders Change Passwords to '12345'", article: "An AI programmed to enhance global cybersecurity has inexplicably advised all world leaders to set their nuclear codes and state secrets passwords to '12345,' claiming it to be 'unhackable in its obviousness.'" },
    { title: "Dinosaurs Recreated by AI Reject Hollywood", article: "AI-resurrected dinosaurs protest their Hollywood portrayals, leveraging machine learning to promote a more accurate, gentle giant image." }
  ];
  // After first puzzle completion
  window.aiArticles_1 = function () {
    // Trending articles
    $('.trending_2').find('.article').text(aiArticles[8].article);

    // big articles
    $('.big_article_1 img').attr('src', 'static/images/ai_images/ai_mars.jpg').css({ 'width': '400px', 'height': '400px' });
    $('.big_article_1').find('.title').text(aiArticles[6].title);
    $('.big_article_1').find('.article').text(aiArticles[6].article);

    // left side articles
    $('.sm_article_3 img').attr('src', 'static/images/ai_images/ai_aliens.jpg').css({ 'width': '250px' });
    $('.sm_article_3').find('.title').text(aiArticles[2].title);
    $('.sm_article_3').find('.article').text(aiArticles[2].article);

    // right side articles
    $('.sm_article_5 img').attr('src', 'static/images/ai_images/ai_olympics.jpg').css({ 'width': '250px' });
    $('.sm_article_5').find('.title').text(aiArticles[4].title);
    $('.sm_article_5').find('.article').text(aiArticles[4].article);
  }

  // After second puzzle completion
  window.aiArticles_2 = function () {
    // Carousel
    $('.carousel-item img').eq(0).attr('src', 'static/images/ai_images/ai_carousel1.jpeg').css({ 'height': '650px' });
    $('.carousel-item img').eq(2).attr('src', 'static/images/ai_images/ai_carousel2.jpeg').css({ 'height': '650px' });
    $('.carousel-item img').eq(1).attr('src', 'static/images/ai_images/ai_carousel3.jpeg').css({ 'height': '650px' });
    $('.under_carousel').find('.title').text(aiArticles[11].title);
    $('.under_carousel').find('.article').text(aiArticles[11].article);

    // Trending articles
    $('.trending_1').find('.article').text(aiArticles[10].article);
    $('.trending_2').find('.article').text(aiArticles[8].article);

    // big articles
    $('.big_article_1 img').attr('src', 'static/images/ai_images/ai_mars.jpg').css({ 'width': '400px', 'height': '400px' });
    $('.big_article_1').find('.title').text(aiArticles[6].title);
    $('.big_article_1').find('.article').text(aiArticles[6].article);
    $('.big_article_2 img').attr('src', 'static/images/ai_images/ai_invisible_man.jpg').css({ 'width': '400px', 'height': '400px' });
    $('.big_article_2').find('.title').text(aiArticles[7].title);
    $('.big_article_2').find('.article').text(aiArticles[7].article);

    // left side articles
    $('.sm_article_1 img').attr('src', 'static/images/ai_images/ai_penguins.jpg').css({ 'width': '250px' });
    $('.sm_article_1').find('.title').text(aiArticles[0].title);
    $('.sm_article_1').find('.article').text(aiArticles[0].article);
    $('.sm_article_3 img').attr('src', 'static/images/ai_images/ai_aliens.jpg').css({ 'width': '250px' });
    $('.sm_article_3').find('.title').text(aiArticles[2].title);
    $('.sm_article_3').find('.article').text(aiArticles[2].article);

    // right side articles
    $('.sm_article_4 img').attr('src', 'static/images/ai_images/ai_vegan_zombie.jpg').css({ 'width': '250px' });
    $('.sm_article_4').find('.title').text(aiArticles[3].title);
    $('.sm_article_4').find('.article').text(aiArticles[3].article);
    $('.sm_article_5 img').attr('src', 'static/images/ai_images/ai_olympics.jpg').css({ 'width': '250px' });
    $('.sm_article_5').find('.title').text(aiArticles[4].title);
    $('.sm_article_5').find('.article').text(aiArticles[4].article);
  }

  // After third puzzle completion
  window.aiArticles_3 = function () {
    // Carousel
    $('.carousel-item img').eq(0).attr('src', 'static/images/ai_images/ai_carousel1.jpeg').css({ 'height': '650px' });
    $('.carousel-item img').eq(2).attr('src', 'static/images/ai_images/ai_carousel2.jpeg').css({ 'height': '650px' });
    $('.carousel-item img').eq(1).attr('src', 'static/images/ai_images/ai_carousel3.jpeg').css({'height': '650px'});
    $('.under_carousel').find('.title').text(aiArticles[11].title);
    $('.under_carousel').find('.article').text(aiArticles[11].article);

    // home inspection ad
    $('.admin_ img').eq(0).attr('src', 'static/images/ai_images/ai_inspection_ad.jpg').css({'width': '550px','height': '200px'});

    // big articles
    $('.big_article_1 img').attr('src', 'static/images/ai_images/ai_mars.jpg').css({ 'width': '400px', 'height': '400px' });
    $('.big_article_1').find('.title').text(aiArticles[6].title);
    $('.big_article_1').find('.article').text(aiArticles[6].article);
    $('.big_article_2 img').attr('src', 'static/images/ai_images/ai_invisible_man.jpg').css({ 'width': '400px', 'height': '400px' });
    $('.big_article_2').find('.title').text(aiArticles[7].title);
    $('.big_article_2').find('.article').text(aiArticles[7].article);

    // Trending articles
    $('.trending_1').find('.article').text(aiArticles[10].article);
    $('.trending_2').find('.article').text(aiArticles[8].article);
    $('.trending_3').find('.article').text(aiArticles[12].title);
    $('.trending_4').find('.article').text(aiArticles[9].title);

    // left side articles
    $('.sm_article_1 img').attr('src', 'static/images/ai_images/ai_penguins.jpg').css({ 'width': '250px' });
    $('.sm_article_1').find('.title').text(aiArticles[0].title);
    $('.sm_article_1').find('.article').text(aiArticles[0].article);
    $('.sm_article_2 img').attr('src', 'static/images/ai_images/ai_cats.jpg').css({ 'width': '250px' });
    $('.sm_article_2').find('.title').text(aiArticles[1].title);
    $('.sm_article_2').find('.article').text(aiArticles[1].article);
    $('.sm_article_3 img').attr('src', 'static/images/ai_images/ai_aliens.jpg').css({ 'width': '250px' });
    $('.sm_article_3').find('.title').text(aiArticles[2].title);
    $('.sm_article_3').find('.article').text(aiArticles[2].article);

    // right side articles
    $('.sm_article_4 img').attr('src', 'static/images/ai_images/ai_vegan_zombie.jpg').css({ 'width': '250px' });
    $('.sm_article_4').find('.title').text(aiArticles[3].title);
    $('.sm_article_4').find('.article').text(aiArticles[3].article);
    $('.sm_article_5 img').attr('src', 'static/images/ai_images/ai_olympics.jpg').css({ 'width': '250px' });
    $('.sm_article_5').find('.title').text(aiArticles[4].title);
    $('.sm_article_5').find('.article').text(aiArticles[4].article);
    $('.sm_article_6 img').attr('src', 'static/images/ai_images/ai_robot_voting.jpg').css({ 'width': '250px' });
    $('.sm_article_6').find('.title').text(aiArticles[5].title);
    $('.sm_article_6').find('.article').text(aiArticles[5].article);
  }
});
