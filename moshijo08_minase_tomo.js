process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (input_data) {
    var tmp_number = input_data.split("\n");
    var int_n = 0;
    var n = tmp_number[int_n].split(" ");

    var answer = [];

     for (var i = 0; i < n ; i++) {

      var answer =  tmp_number[i].split(" ");
        
      console.log(answer);

      }
});
