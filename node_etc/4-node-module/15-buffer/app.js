//fixed-size memory
//array of integers 숫자의 배열? 바이트 데이터

const buf = Buffer.from('Hi');
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());

const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); //fast
buf2[0] = 72;
buf2[1] = 105;

console.log(buf2.toString());
buf2.copy(buf3);
console.log(buf3);

//concat => 버퍼 묶어주기
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());

