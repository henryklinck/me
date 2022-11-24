// QUOTES[i] = ["quote", ""Source]
const QUOTES = [["You miss 100% of the shots you don't take - Wayne Gretzky", "Michael Scott"],
                ["Try not to become a man of success, but rather try to become a man of value.", 
                "Albert Einstein"],
                ["I'm all jacked up on Mountain Dew", "Texas Ranger, Son of Ricky Bobby"],
                ["", ""]
                ]


// Quotes for specific days?

// Get Date
function getDate(){
    curr_date = Date();
    document.getElementById('text_area').innerHTML = curr_date
}

// Make get random quote from list of favourite quotes
function