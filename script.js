const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];


  
// Aufgabe 1: Erfinder herausfiltern, welche im 1500 geboren wurden. 
const fifteen = inventors.filter(function(inventor) {
    if(inventor.year >= 1500 && inventor.year < 1600){
        return true;
    } else {
        return false;
    }
})

console.table(fifteen)


// Aufgabe 2: einen Array ausgeben, welcher die Vornamen und Nachnamen der Erfinder beinhaltet.

  const fullNames = inventors.map(function(arr){
    return `${arr.first} ${arr.last}`
  })

  console.table(fullNames)

  // Aufgabe 3: Die Geburtsjahre der Erfinder aufsteigend sortieren.

  const birthDate = inventors.sort(function(a, b) {
    if(a.year > b.year) {
        return 1;
    } else {
        return -1;
    }
  })

/* anders geschrieben: 
const birthDate = inventors.sort((a, b) => a.year > b.year ? 1 : - 1) 

--> das heisst so viel wie, wenn a.year grösser ist als b.year, sprich wenn das 'true' ist (? steht für true), wird 1 returned, andererseits -1 (der : steht für "andererseits", blöde gesagt). Ein if-else statement mit Symbolen. 
Somit werden die unterschiedlichen Werte wie "herumgeschaufelt", indem sie einen Wert 1 dazubekommen oder nicht. Es wird verglichen, wenn a.year höher ist +1, wenn a.year tiefer ist -1, somit entsteht eine "Summe".
*/

console.table(birthDate);


// Aufgabe 4: Herausfinden, wie viele Jahre alle Erfinder zusammengerechnet gelebt haben

const yearsLived = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(yearsLived)

/* die reduce-Funktion gibt nimmt den Wert 'total' (von uns definiert) und gibt immer einen weiteren Inventor dazu.
Grundsätzlich funktioniert es wie ein normaler Loop, ist es ja auch. Um alles aufzusummieren, muss man nach dem Schliessen der
geschwungenen Klammer noch eine 0 setzen, damit die Funktion weiss, wo das 'total' beginnt.*/

// Aufgabe 5: Die Erfinder nach Anzahl gelebter Jahre ordnen.



const ageSort = inventors.sort(function(a, b){
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
})

console.log(ageSort)

// Aufgabe 6: Eine Liste kreieren von Boulevards in Paris, welche 'de' irgendwo enthalten. 
 // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris 
 // Übung nicht möglich, weil dieser Hurensohn nicht sagt, wie man DOM nutz in VS Code oder Code Editor. 
 //.mw-category findet man im DOM der Wikipedia-Homepage, umfasst alle Links.
 // textContent gibt nur den Text der gewählten Einheit zurück. 
 // durch querySelector bekommt man eine NodeList zurück, jedoch braucht man für map() einen Array! 

 /* 
 
 const category = document.querySelector('.mw-category');
 const link = category.[...querySelectorAll('a')]; // <- entweder so Array machen oder so --> Array.from(category.querySelectorAll('a'));

 const de = links.map(link => link.textContent);
*/


// Aufgabe 7: Leute alphabetisch sortieren nach Nachnamen

const alphabetical = people.sort(function(lastOne, nextOne) {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});

console.table(alphabetical);


// Aufgabe 8: Die Anzahl der verschiedenen Wörter aufsummieren


const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const map = data.reduce(function(obj, item) {
  if(!obj[item]){
    obj[item] = 0;
  }
  obj[item]++;
  return(obj);
}, {
  
})

console.log(map);