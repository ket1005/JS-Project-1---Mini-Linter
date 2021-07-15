let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];


//split the string into individual words and save them in a new array using the split method

const storyWords = story.split(' ');  // separator - by space

//Log how many words there are in this story to the console
console.log(storyWords);
console.log(storyWords.length);

//Iterate over your array to filter out these words. Save the remaining words in an array called betterWords. There are several ways that you could achieve this.
//HINT: As you iterate over storyWords (you can use the .filter() method to do this), if unnecessaryWords does not include the current word, you can return that word to the betterWords array. The .includes() method may prove useful.

let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

console.log(betterWords);
console.log(betterWords.length);

//How many times they have used overused words

overusedWords.forEach(function(overWord) {
    let overWordCount = 0;
    betterWords.filter(function(storyWord) {
      if (overWord === storyWord) {
        overWordCount++;
      }
    });
    if (overWordCount != 1) {
    console.log('The Word ' + overWord.toUpperCase() + ' was used ' + overWordCount + ' times\n');
  } else {
    console.log('The Word ' + overWord.toUpperCase() + ' was used ' + overWordCount + ' time\n');
  }
  });
  /// count sentences
let sentenceCount = 0;
betterWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentenceCount++;
  }
});
console.log('There are ' + (sentenceCount + 1) + ' sentences in the story\n');
/// log the refined story
console.log(betterWords.join(' ') + '\n');
