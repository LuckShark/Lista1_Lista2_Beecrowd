var input = require('fs').readFileSync('bee.txt', 'utf8');
var lines = input.split('\r\n');

///////////////////////////////////////////////

var arr = lines.shift().split(' ').map(Number);
var A = arr.shift();
var res = 0;
do
{
    var N = arr.shift();
}
while(N <=0);
for(i=0 ; i<N ; i++)
{
    res += A+i
}
console.log(res);