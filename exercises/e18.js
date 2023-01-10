import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {

var findYears = data.asteroids.filter(function yearOf(found) {
  return found.discoveryYear;
})
.map(function yearOnly(year) {
  return year.discoveryYear
});

function getMostFrequent(arr) {
  const findIt = arr.reduce( (acc, val) => {
    acc[val] = (acc[val] || 0 ) + 1
    return acc
  },{})
  return Object.keys(findIt).reduce((a, b) => findIt[a] > findIt[b] ? a : b)
}



var found = Number(getMostFrequent(findYears))

return found
};






// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
