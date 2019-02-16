process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (line) {
    var input_data = line.split("\n");
    var number = input_data[2].split("");˚
    var en_number = "";
    var answer = "";
    if (input_data[1]=="encode") {
      en_number = input_data[0].split(" ");
    }else {
      var tmp_number = input_data[0].split(" ");
      for (var i = 0; i < 10; i++) {
      	 en_number[tmp_number[i]] = i;
        console.log(tmp_number[i]);
      }
    }
    for (var n = 0; n < number.length; n++) {
      for (var j = 0; j < 10; j++) {
        if (number[n]==j) {
          answer = answer + en_number[j];
          console.log(answer);
        }
      }
    }
      console.log(answer);
});
