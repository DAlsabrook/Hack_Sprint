$(document).ready(function () {
  // Dev tools logic
  $('.dev_tool_container').on('click', function () {
    // When the container is clicked, toggle the dev_tool_open class
    $(this).toggleClass('dev_tool_open');

    // Check if the container is open
    if ($(this).hasClass('dev_tool_open')) {
      // Append new elements to the container
      $(this).append('<button class="inspect">Inspect</button>');
      $(this).append('<button class="console">Console Logs</button>');
      $(this).append('<button class="messages">Messeges</button>');
    } else {
      // When closing remove buttons and put original content back
      $(this).empty();
      // add original content back
      $(this).html('<div class="title_container"></div>')
      $('.title_container').append('<i class="fa-solid fa-screwdriver-wrench"></i>');
      $('.title_container').append('<h3 class="dev_tool_title">Dev Tools</h3>');
    }
  });

  $(document).on('click', '.inspect', function () {
    $('<div title="inspect"></div>').dialog({
      position: { my: "center", at: "center", of: window },
      draggable: false,
      buttons: {
        Close: function () {
          $(this).dialog("close");
        }
      }
    });
  });


  $(document).on('click', '.console', function () {
    // Open the dialog box
    consoleDialog.dialog('open');
  });


  $(document).on('click', '.messages', function () {
    // Open the dialog box
    messageDialog.dialog('open');
  });


});

// Set up the console dialog box
var consoleDialog = $('<div title="Logs" class="console"></div>').dialog({
  autoOpen: false,
  position: { my: "center", at: "center", of: window },
  draggable: false,
  buttons: {
    Close: function () {
      $(this).dialog("close");
    }
  }
});

// Set up the message dialog box
// Create the dialog box and store it in a variable
var messageDialog = $('<div title="Messenger" class="message"></div>').dialog({
  autoOpen: false,
  position: { my: "center", at: "center", of: window },
  draggable: false,
  width: 500,
  height: 400,
  buttons: {
    Close: function () {
      $(this).dialog("close");
    }
  }
});
// Function to update the content of the dialog box
window.updateMessage = function (content) {
  messageDialog.html('From: Senior Dev<br><span>' + content + '</span>');
}

window.updateConsole = function (content) {
  consoleDialog.html('> ' + content);
}
