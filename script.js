function stringChop(str, chunkLength) {
  // your code here
	let chunks = [];
  let index = 0;

  while (index < str.length) {
    let chunk = str.substr(index, chunkLength);
    chunks.push(chunk);
    index += chunkLength;
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
