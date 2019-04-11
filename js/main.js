
const beatles = {
  albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
  history: {
    formed: 1960,
    disbanded: 1970
  },
  members: [
    {
      name: "George Harrison",
      birth: 1943,
      death: 2001
    },
    {
      name: "Paul McCartney",
      birth: 1942,
      death: null
    },
    {
      name: "John Lennon",
      birth: 1940,
      death: 1980
    },
    {
      name: "Ringo Starr",
      birth: 1940,
      death: null
    }
  ]
}

//  Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.


const paul = beatles.members.find(member => {
  return member.name === "Paul McCartney";
});

const mystery = beatles.albums.find(album => {
  return album === "Magical Mystery Tour";
});


console.log(`${paul.name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}.  He was born in ${paul.birth}.  He contributed heavily to the ${mystery} Album.`);
