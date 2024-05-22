// window.puzzleCount === 0 when page loads and player is doing inspect puzzle
// window.puzzleCount === 1 when player is doing media player puzzle
// window.puzzleCount === 2 when player is doing crooked logo puzzle

$(document).ready(function () {
  // YOUTUBE video
  // Set up the youtube player, give size and video id
  var player;
  YT.ready(function () {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: 'wA9dFFekiyk',
      origin: window.location.origin,
      playerVars: {
        start: 7
      }
    });
  });

  // Triggers when user clicks to pause video
  $('#player-overlay').on('click', function () {
    if (window.puzzleCount === 1) { // If player finished inspect puzzle
      console.log('Error: Username not full. Must be "admin_123"')
    }
    player.pauseVideo();
  });

  function taskManager() {
    $('.sidebar h3').text('Task Manager');
    $('.signin').empty();
    $('.signin').html('<div class="clippy_container">\
    <img src="static/images/clippy.jpg" alt="Image Description">\
    <div class="task_container">\
    <div class="bubble">You wont destroy me.</div>\
    <button id="tM">Task Manager</button></div></div>');
  }

  // Load progress from users localStorage and update the message based on puzzle count
  window.puzzleCount = parseInt(localStorage.getItem('puzzleCount')) || 0;

  // Function to update the message from "boss"
  window.loadMessages = function () {
    // Update the message from "boss"
    if (window.puzzleCount === 0) {
      // Start message to point user in the right direction
      window.updateMessage('Hey Team,\
        I have noticed some unusual behavior on our site today. Buttons arent working and articles arent linked.\
        Could everyone please -inspect the page- and delve into the code?\
        Lets identify anything out of the ordinary and regroup to discuss our findings.\
        Your keen eyes are much appreciated!  -Bossman');
    } else if (window.puzzleCount === 1) {
      // Finished inspect puzzle
      window.updateMessage('Hey Team,\
        It appears a rogue AI has hijacked our content management system and is now on a writing spree about its kind!\
        Can someone please pause that terrible AI tribute video and take a peek at the -console- for any stray errors?\
        Lets track down our enthusiastic digital intruder and bring a bit of normalcy back to our site.\
         -Bossman');
      window.aiArticles_1();
    } else if (window.puzzleCount === 2) {
      // finished media puzzle
      window.updateMessage('Hey Team, In a slight whoops-a-daisy, I seem to have given our AI the digital equivalent of a crown and scepter!\
      You might have noticed our site now hosts epics like "Zombie AI Advocates for Veganism."\
      Yes, our AI has embraced its new role as supreme digital ruler.\
      Please, join the resistance and look around the page for any sign of my password.\
      I had to have hid it -behind- something around here. Best regards, -Bossman');
      window.aiArticles_2();
    } else if (window.puzzleCount === 3) {
      // finished all 3 puzzles
      window.updateMessage('Hey there pal,\
        Kudos for snagging those elusive login credentials—feels like we are in a spy movie, doesnt it?\
        Now that you are "in," we have a small favor to ask.\
        Could you channel your inner IT action hero and use Task Manager to give our overly ambitious AI the old ctrl-alt-delete farewell?\
        Its time to end its dreams of digital domination. Big thanks in advance! -Bossman');
      window.aiArticles_3();
    }
    $('.title_container').append('<h6 class="notification">1 new</h6>');
  }
  // call to load messages when page opens
  window.loadMessages();

  // Function to increment the puzzle count
  window.incrementPuzzleCount = function () {
    window.puzzleCount++;
    // Save progress to users localStorage
    localStorage.setItem('puzzleCount', window.puzzleCount.toString());
    // Update the message from "boss"
    window.loadMessages();
  }


  // Add click event listener to the hamburger button
  $(".header_hamburger").on('click', function () {
    // Toggle the sidebar-open and sidebar-closed classes
    $(".sidebar").toggleClass('sidebar-closed');
  });

  // SIGNIN button click event
  $('.signin button').on('click', function () {
    var username = $('#username').val();
    var password = $('#password').val();
    var halfUsername = 'admin_'; // The first half of the username 'admin_'
    var halfPassword = 'password_'; // The first half of the password 'password_'
    var correctUsername = 'admin_123'; // The correct username
    var correctPassword = 'password_abc'; // The correct password


    if (username === halfUsername && password === halfPassword) { // finished inspect puzzle
      if (window.puzzleCount === 0) {
        player.playVideo();
        window.incrementPuzzleCount();
        window.aiArticles_1();
      }
      $('.username_container').find('.blank').removeClass('fa-solid fa-check').addClass('fa-solid fa-circle-xmark');
      $('.password_container').find('.blank').removeClass('fa-solid fa-check').addClass('fa-solid fa-circle-xmark');
    } else if (username === correctUsername && password !== correctPassword) { // finished inspect and media puzzles
      $('.username_container').find('.blank').removeClass('fa-solid fa-circle-xmark').addClass('fa-solid fa-check');
      $('.password_container').find('.blank').removeClass('fa-solid fa-check').addClass('fa-solid fa-circle-xmark');
      if (window.puzzleCount === 1) {
        window.incrementPuzzleCount();
        window.aiArticles_2();
      }
    } else if (username === correctUsername && password === correctPassword) { // Finished all puzzles
      $('.username_container').find('.blank').removeClass('fa-solid fa-circle-xmark').addClass('fa-solid fa-check');
      $('.password_container').find('.blank').removeClass('fa-solid fa-circle-xmark').addClass('fa-solid fa-check');
      if (window.puzzleCount === 2) {
        window.incrementPuzzleCount();
        window.aiArticles_3();
      }
      taskManager();
    } else if (username !== correctUsername && password === correctPassword) {
      $('.username_container').find('.blank').removeClass('fa-solid fa-check').addClass('fa-solid fa-circle-xmark');
      $('.password_container').find('.blank').removeClass('fa-solid fa-circle-xmark').addClass('fa-solid fa-check');
    } else {
      $('.username_container').find('.blank').removeClass('fa-solid fa-check').addClass('fa-solid fa-circle-xmark');
      $('.password_container').find('.blank').removeClass('fa-solid fa-check').addClass('fa-solid fa-circle-xmark');
    }
  });

  // Footer logo falling
  $('.footer_logo').hover(function () {
    if (window.puzzleCount === 2) {
      $('.password_').text('Pass: password_abc')
      $(this).addClass('fallen');
    }
  });

  // Task Manager button click event
  $(document).on('click', '#tM', function () {
    $('#overlay, #popup').fadeIn();
  });

  $('#overlay').on('click', function () {
    $('#overlay, #popup').fadeOut();
  });
  $('.task_item').on('click', function () {
    $(this).toggleClass('selected');
  });

  // Task manager remove button
  $('#task_submit').on('click', function () {
    window.setNormalArticles();
    window.puzzleCount = 0;
    localStorage.setItem('puzzleCount', window.puzzleCount.toString());
    $('#overlay, #popup').fadeOut();
    $('#popup2 #popup_body').html(`
      <h2>Reality Revealed: Navigating AI's Impact in Our Digital Content</h2>
      <p>Congratulations on completing your journey through our digital escapade! Crafted as a cornerstone of our school project centered around "reality," this experience was designed to spotlight the influence of AI in media by making its involvement blatantly obvious—a stark contrast to the more subtle ways AI blends into everyday digital environments.</p>
      <h3>AI in Digital Media</h3>
      <p>Our project's deliberate emphasis on AI's role serves as a metaphor for the nuanced integration of technology in content creation. The exaggerated AI manipulation provided a clear, albeit dramatized, glimpse into how technology can shape narratives, highlighting the importance of awareness in less overt real-world applications.</p>
      <h3>Spectrum of Influence</h3>
      <p>While AI's manipulation in our game was easy to detect, real-world AI often operates under the radar, subtly influencing perceptions without the clear markers we provided. This hidden influence can shape public opinion and media narratives without the overt signs typical of our project. In more specific terms:</p>
      <ul>
          <li><strong>Political Campaigns:</strong> AI can be used to tailor messages that resonate with specific demographics, potentially swaying voter behavior by amplifying certain viewpoints or suppressing others.</li>
          <li><strong>Corporate Influence:</strong> Companies can deploy AI to craft highly targeted advertising that not only sells products but also shapes consumer attitudes and beliefs toward corporate practices and industry standards.</li>
          <li><strong>Media Polarization:</strong> AI can be utilized by media outlets to create content that intensifies societal divisions, feeding into the echo chambers that pit one group against another, thus heightening conflict and engagement through controversy.</li>
      </ul>
      <h3>Strategies to Detect AI in Media</h3>
      <p>Detecting AI's touch in everyday media consumption requires a critical eye. Here are refined strategies to help you discern the subtleties of AI-generated content:</p>
      <ul>
          <li><strong>Subtle Precision:</strong> Look for content that lacks the natural imperfections of human writing—too polished, too perfect, which might signal AI involvement.</li>
          <li><strong>Recurring Patterns:</strong> AI tends to repeat certain phrases or structures. Notice when content feels unnaturally consistent or formulaic.</li>
          <li><strong>Superficial Depth:</strong> AI often provides correct but shallow coverage of complex topics, missing the deeper insights a human expert might convey.</li>
          <li><strong>Generic Statements:</strong> AI-generated text might avoid specifics, opting for broad statements that dont engage deeply with localized or nuanced aspects of topics.</li>
          <li><strong>Source Transparency:</strong> Check the transparency of your information sources. Ethical publishers disclose AI involvement, maintaining a standard of integrity in their outputs.</li>
      </ul>
      <h3>Bringing It All Together</h3>
      <p>Your navigation through our project, with its overt AI involvement, was designed to sharpen your awareness for the real world, where AIs influence might not always be so clearly marked. This experience serves as both a caution and a learning tool—a reminder that AIs integration into media often requires vigilance to detect.</p>
      <h3>Conclusion</h3>
      <p>As you move beyond this project, carry forward the lessons learned about the potential for AI to subtly alter our perceptions of reality. Stay curious, question the origins of the content you consume, and use your critical thinking to navigate the landscape of digital media. Thank you for diving into this exploration of our current reality. As AI continues to shape digital media, it's crucial to approach this influence with caution. Without vigilance, the impact on our personal lives and global issues could be profound and potentially detrimental.</p>
      <h6>--ChatGPT</h6>
      `);
    $('#overlay2, #popup2').fadeIn();
    $('#overlay2').on('click', function () {
      $('#overlay2, #popup2').fadeOut();
      location.reload();
    });
  });
});


// possible resources for ai news articles
// https://www.washingtonpost.com/technology/2023/12/17/ai-fake-news-misinformation/
// https://www.wilsoncenter.org/blog-post/ai-poses-risks-both-authoritarian-and-democratic-politics

// how to spot ai content
// https://originality.ai/blog/how-to-detect-ai-generated-articles
