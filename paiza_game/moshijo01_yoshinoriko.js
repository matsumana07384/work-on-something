process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (input_data) {
    var tmp_number = input_data.split("\n");
    var yoko = tmp_number[1].split(" ");
    var tate = tmp_number[2].split(" ");
    var answer = "";
    var block = Number(tmp_number[0]);
for (var i = 0; i < block; i++) {
    var tate_int = Number(tate[i]);
  for (var j = 0; j < block; j++) {
    var yoko_int = Number(yoko[j]);
    var cal_int = yoko_int + tate_int;
    answer = answer + cal_int;
    if (j < block  - 1) {
      answer = answer + " ";
    }
  }
  if (i != block - 1) {
  answer = answer + "\n";
  }

}
console.log(answer);
});
