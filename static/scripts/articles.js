// Create an aiArticles list and dynamically change the articles when puzzles are done

$(document).ready(function () {
  // Dynamically ad articles
  const normalArticles = [
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
    { title: "Dinosaurs Sue Over Portrayal", article: "T. rex claims films 'unfairly stereotype' dinosaurs as monstrous." }
  ];

  window.setNormalArticles = function () {
      // Trending articles
    $('.trending_1').find('.article').text(normalArticles[10].article);
    $('.trending_2').find('.article').text(normalArticles[11].article);
    $('.trending_3').find('.article').text(normalArticles[8].article);
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
  }
  window.setNormalArticles();
});
