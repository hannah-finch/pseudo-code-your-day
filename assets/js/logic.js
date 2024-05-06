let form = document.getElementsByClassName('content')
let something = document.getElementsByClassName('content')
let somethingElse = something[0]

let textElementArray = document.getElementsByClassName('syntax-checker')
let textArea = textElementArray[0]



console.log(something[0])
console.log(somethingElse)
console.log(textArea)


// this one uses contenteditable="true"
somethingElse.addEventListener('change', function(){

    console.log(something[0].innerHTML)

});


// this one works uses textarea

textArea.addEventListener('change', function(){
    textArray = textArea.value.split(" ");
    console.log(textArray)

});

// SQL keywords
var keywords = ["SELECT","FROM","WHERE","LIKE","BETWEEN","NOT LIKE","FALSE","NULL","FROM","TRUE","NOT IN", 'Hannah'];
// Keyup event
$(".content").on("keyup", function(e){
  // Space key pressed
  if (e.keyCode == 13){
    var newHTML = "";
    // Loop through words
    $(this).text().replace(/[\s]+/g, " ").trim().split(" ").forEach(function(val){
      // If word is statement
      if (keywords.indexOf(val.trim().toUpperCase()) > -1)
        newHTML += "<span class='statement'>" + val + "&nbsp;</span>";
      else
        newHTML += "<span class='other'>" + val + "&nbsp;</span>"; 
    });
    $(this).html(newHTML);

    //not needed... actually needed because it always resets
    // Set cursor postion to end of text 
    var child = $(this).children();
    var range = document.createRange();
    var sel = window.getSelection();
    range.setStart(child[child.length-1], 1);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    this.focus();
  }
});
