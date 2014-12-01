$(document).ready(function() {

    var numbers = [0,1,2,3,4,5, 6];


//Shuffle function after clicking button:  http://bost.ocks.org/mike/shuffle/
    $("#button1").click(function() {
    var m = numbers.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = numbers[m];
        numbers[m] = numbers[i];
        $('#' + i).appendTo('#studentorder');
        numbers[i] = t;
        }
    });

//Sorting button/function
    $("#button2").click(function() {
        var tmp;
        for (var i = 0; i < numbers.length; i += 1) {
            for (var j = i; j > 0; j -= 1) {
                if (numbers[j] < numbers[j - 1]) {
                tmp = numbers[j];
                numbers[j] = numbers[j - 1];
                numbers[j - 1] = tmp;
                };
            };
        $('#' + i).appendTo('#studentorder');
    }
    });

});