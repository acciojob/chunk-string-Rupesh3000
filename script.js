function stringChop(str, size) {
  // Check if str is null
  if (str === null) {
    return [];
  }

  // Convert size to number (prompt se string aata hai)
  size = Number(size);

  let chunks = [];
  let index = 0;

  while (index < str.length) {
    let chunk = str.slice(index, index + size);
    chunks.push(chunk);
    index += size;
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(JSON.stringify(stringChop(str, size)));
