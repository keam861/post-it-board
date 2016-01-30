$(function() {
  // Esta es la función que correrá cuando este listo el DOM 
  count = 0; 
  $("#new-board-btn").click(function() {
    mini_board = new Board('#board' + count);
    count += 1;
  });
  $("#new-board-btn").on("click", "#board", function() {
    new PostIt();
    // var newPost = new PostIt();
    // mini_board.array.push(newPost);
    // $("#board").append(newPost);

    // console.log(mini_board);
  });

});

id = 0
postit_array = [];
var Board = function( selector ) {
  // Aqui denerá ir el código que tenga que ver con tu tablero 
  this.selector = selector;
  this.array = [];
  console.log(this);
  // Utiliza esta sintaxis para referirte al selector que representa al tablero.
  // De esta manera no dependerás tanto de tu HTML.  
  $board = $( selector );

  function initialize() {
    // Que debe de pasar cuando se crea un nuevo tablero?
    createBoard();
    
    // $("a.boardLink").on("click", toggleBoard);
    
  };

  function createBoard(){
    // $(".post-it").remove();
    var board_name = prompt("Please name your new board", "");
    $("#board-list").append("<li> <a href='#' class='boardLink'>"+board_name+"</a></li>");
    $(".boardLink").click(function() {
      console.log("hola");
      console.log(postit_array);
      $("#board").add(postit_array);

      // postit_array.push(newPost);
      // console.log(postit_array);
    });

  }

  initialize();
};

var PostIt = function() {
  // Aquí va el código relacionado con un post-it 
  $($board).append("<div id='"+id+"' class='post-it'><div class='header'><a href='#' class='close'>X</a></div><div contenteditable='true' class='content'>"+id+"</div></div>");
  $(".content").on("click", stopPostIt);
  $(".post-it").draggable({handle: ".header"});
  $("a.close").on("click", deletePostIt);
  $("#"+id).css({'top': event.pageY, 'left': event.pageX - 200 });
  id = id+1;
};

function toggleBoard(e) {
  e.stopPropagation();
}
function stopPostIt(e) {
  e.stopPropagation();
}
function deletePostIt(e) {
  e.stopPropagation();
  var close = $(this.parentElement.parentElement);
  close.remove();
}

var list = new Object();


function boardConstructor(backColor, postItArr) {
  this.backColor = backColor;
  this.postItArr = postItArr;
};

function postItConstructor(backColor, textContent, postItId) {
  this.backColor = backColor;
  this.textContent = textContent;
  this.postItId = postItId;
};
