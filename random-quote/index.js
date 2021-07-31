const button = document.querySelectorAll(".button")[1];
const quote = document.querySelector(".quote-text");
const cite = document.querySelector(".quote-author");

let colors = [
  "#a31621","#2585e4","#053c5e",
  "#1f7a8c","#db222a", "#2589bd",
  "#6d9f71","#663f46","#d56f3e",
  "#214e34", "#824c71","#fec601"
];

let data; 

let updateQuote = () => {
  // Powered by Quotable
  // https://github.com/lukePeavey/quotable
  axios.get("https://api.quotable.io/random").then((res) => {
    console.log(res.data);
    data = res.data;
    quote.innerHTML = res.data.content;
    cite.innerHTML = res.data.author;
  });

    //animation 
    $('.quote-text').animate({ opacity: 0.5 }, 500, function () {
      $(this).animate({ opacity: 1 }, 500);
    });

    $('.quote-author').animate({ opacity: 0.5 }, 500, function () {
      $(this).animate({ opacity: 1 }, 500);
    });

    let color = Math.floor(Math.random() * colors.length);
    $('html body').animate(
      {
        backgroundColor: colors[color],
        color: colors[color]
      },
      1000
    );
    $('.button').animate(
      {
        backgroundColor: colors[color]
      },
      1000
    );
  }
  //Twitter integration


button.addEventListener("click", updateQuote);

$(document).ready(function () {
  updateQuote()
  });
