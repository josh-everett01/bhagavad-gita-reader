function getBhagavadGita() {
  var quoteResponse = fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
    .then(response => response.json())

  var mainSection = document.getElementById("main-section");
  mainSection.innerHTML = "";

  quoteResponse.then(response => {
    var quoteHeader = document.createElement("h3");
    console.log(response);
    var node = document.createTextNode(response.en);
    quoteHeader.appendChild(node);

    // TODO: create additional text node and HTML element for response.author 

    var quoteAuthor = document.createElement("h3");
    // console.log(response);
    var nodeTwo = document.createTextNode(response.author);
    quoteAuthor.appendChild(nodeTwo);
    

    var element = document.getElementById("main-section");
    element.appendChild(quoteHeader);
    element.appendChild(quoteAuthor);
    // console.log(response.en);


  });
}