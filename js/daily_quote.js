// QUOTES[i] = ["quote", ""Source]
const QUOTES = [["You miss 100% of the shots you don't take - Wayne Gretzky", "Michael Scott"],
                ["Try not to become a man of success, but rather try to become a man of value.", 
                "Albert Einstein"],
                ["I'm all jacked up on Mountain Dew", "Texas Ranger, Son of Ricky Bobby"],
                ["Bears. Beets. Battlestar Galactica", "Dwight Shrute Impressionist"],
                ["In learning you will teach, and in teaching you will learn.", "Phil Collins"],
                ["When you're living in a van down by the river.", "Matt Foley (Modivational Speaker)"],
                ["while(!( succeed = try()));","Sixth Google Image Result for 'Coding Quotes'"],
                ["Nothing... Nothing at all!!! (One Piece Fans Know)", "Roronoa Zoro"]
                ];

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
                "November", "December"];


// Quotes for specific days?

// Get Date

function getDate(){
    curr_date = new Date();
    var month = curr_date.getMonth();
    var day = curr_date.getDate();
    var year = curr_date.getFullYear();
    var curr_data_formatted = MONTHS[month] + " " + day + ", " + year;
    document.getElementById('date_area').innerHTML = curr_data_formatted;    
}

// Make get random quote from list of favourite quotes
function generateQuote(){
    var quote_index = Math.floor((Math.random()*QUOTES.length));
    if (QUOTES[quote_index] == document.getElementById('quote_area').innerHTML) {
        if (quote_index == QUOTES.length) {
            quote_index = 0;
        } else {
            quote_index = quote_index + 1;
        }
    }
    var quote = QUOTES[quote_index];    
    document.getElementById('quote_area').innerHTML = quote[0];
    document.getElementById('source_area').innerHTML = "- " + quote[1];
    var image_string = "../images/quote_image_" + quote_index + ".jpg";
    document.getElementById('quote_image_area').src = image_string;
}
