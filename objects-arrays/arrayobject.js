let journal = [];

function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

addEntry(["work", "pizza"], false);
addEntry(["weekend", "cycling"], true);

console.log(journal);
for (let entry of journal) {
  console.log(entry.events, entry.squirrel);
}
