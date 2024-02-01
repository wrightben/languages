function timeInWords(h, m) {
    
    var s = "";

    var words = [
        "o' clock", // zero
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "quarter",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
        "twenty one",
        "twenty two",
        "twenty three",
        "twenty four",
        "twenty five",
        "twenty six",
        "twenty seven",
        "twenty eight",
        "twenty nine",
        "half past" // 30
    ]

    if (m == 0) { return words[h] + " " + words[m]; } // hour o' clock
    if (m == 30) { return words[m] + " " + words[h]; } // half past hour
    
    if ( (m != 0) && (m != 30) ) { // [1..29] && [31..59]
    
        if (m < 30) { // 1 .. 29 ( m minute(s) past hour )
        
            if (m == 15) { s = " past "; } 
            else if (m == 1) { s = " minute past "; }
            else {    s = " minutes past "; }
        
        } else { // 31 .. 59 ( m minute(s) to (hour + 1) )
            
            m = 60 - m; // m inverted
            h += 1; // increment hour
            if (h > 12) { h = 1; }
            
            if (m == 15) { s = " to "; }
            else if (m == 1) { s = " minute to "; }
            else { s = " minutes to "; }
        
        }
    
    }
        
    return words[m] + s + words[h];
}

/*
FUNCTION DESCRIPTION
Complete the timeInWords function in the editor below.

PARAMETERS:
int h: the hour of the day
int m: the minutes after the hour

RETURNS:
string: a time string as described
*/