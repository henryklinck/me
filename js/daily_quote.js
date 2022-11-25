// QUOTES[i] = ["quote", ""Source]
const QUOTES = [["You miss 100% of the shots you don't take - Wayne Gretzky", "Michael Scott"],
                ["Try not to become a man of success, but rather try to become a man of value.", 
                "Albert Einstein"],
                ["All Gas, No Brakes", "Andrew Callaghan"],
                ["Respect is Earned. Not Given", "Unknown"],
                ["In learning you will teach, and in teaching you will learn.", "Phil Collins"],
                ["When you're living in a van down by the river.", "Matt Foley (Modivational Speaker)"],
                ["while(!( succeed = try()));","Intel"],
                ["Nothing... Nothing at all!!! (One Piece Fans Know)", "Roronoa Zoro"],
                ["How can we be excpected to teach children to learn to read if they can't even fit indside the building?",
                "Zoolander"],
                ["Remember when a female singer would drop a beautiful chorus and then Eminem or B.O.B. would come out of nowhere to yell at us?",
                "Meme Sent by Friend"],
                ["The whole is more than the sum of of its parts.", "Aristotle"],
                ["I just want to do cool stuff.","Rob Corddry"],
                ["Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
                "Ferris Bueller"],
                ["Rule no. 1 is never lose money. Rule no. 2 is to never forget Rule no. 1.", "Warren Buffett"]

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
    /*
    if (document.getElementById('quote_area').innerHTML == "not loaded") {
        curr_date = new Date();
        var day = curr_date.getDate();
        var curr_quote_index = Math.floor(day % 14);
    
    } else {
        curr_quote_index = QUOTES.indexOf([document.getElementById('quote_area').innerHTML,
                                               document.getElementById('source_area').innerHTML])
    }
    
    
    
    if (curr_quote_index == QUOTES.length) {
        var quote_index = 0;
    } else {
        quote_index = curr_quote_index + 1;
    }
    */
    

    var quote = QUOTES[2];    
    document.getElementById('quote_area').innerHTML = quote[0];
    document.getElementById('source_area').innerHTML = "- " + quote[1];
    var image_string = "../images/quote_image_" + quote_index + ".jpg";
    document.getElementById('quote_image_area').src = image_string;
}
