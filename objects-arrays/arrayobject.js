let journal = [];

function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

addEntry(["work", "pizza"], false);
addEntry(["weekend", "cycling"], true);

console.log(journal);
