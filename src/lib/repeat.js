function repeat (amount, callback) {
  var items = [];

  for (let count = 1; count <= amount; count += 1) {
    items.push(
      callback(count)
    );
  }

  return items;
}

export default repeat;
