const favNumber = 7;
const url = `http://numbersapi.com/${favNumber}?json`;

async function getFavoriteNumberFact() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.text); // Display the fact about the favorite number
  } catch (error) {
    console.log('Error:', error);
  }
}

getFavoriteNumberFact();


const favoriteNumbers = [7, 42, 99];
const frequests = favoriteNumbers.map(async number => {
  const url = `http://numbersapi.com/${number}?json`;
  const response = await fetch(url);
  return response.json();
});

(async function() {
  try {
    const data = await Promise.all(frequests);
    for (const fact of data) {
      console.log(fact.text);
    }
  } catch (error) {
    console.log('Error:', error);
  }
})();


const favoriteNumber = 7;
const requests = [];

for (let i = 0; i < 4; i++) {
  const durl = `http://numbersapi.com/${favoriteNumber}?json`;
  requests.push(fetch(durl));
}

(async function() {
  try {
    const responses = await Promise.all(requests);
    const data = await Promise.all(responses.map(response => response.json()));
    for (const fact of data) {
      console.log(fact.text);
    }
  } catch (error) {
    console.log('Error:', error);
  }
})();
