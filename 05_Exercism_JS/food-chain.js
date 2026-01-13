//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class Song {
  constructor() {
    this.ANIMALS = [
      { name: 'fly' },
      { name: 'spider', action: 'It wriggled and jiggled and tickled inside her.', target: 'spider that wriggled and jiggled and tickled inside her' },
      { name: 'bird', action: 'How absurd to swallow a bird!' },
      { name: 'cat', action: 'Imagine that, to swallow a cat!' },
      { name: 'dog', action: 'What a hog, to swallow a dog!' },
      { name: 'goat', action: 'Just opened her throat and swallowed a goat!' },
      { name: 'cow', action: 'I don\'t know how she swallowed a cow!' },
      { name: 'horse', action: 'She\'s dead, of course!' }
    ];
  }

  verse(number) {
    const index = number - 1;
    const animal = this.ANIMALS[index];
    let lyrics = `I know an old lady who swallowed a ${animal.name}.\n`;

    if (animal.action) {
      lyrics += `${animal.action}\n`;
    }

    if (animal.name === 'horse') {
      return lyrics;
    }

    for (let i = index; i > 0; i--) {
      const current = this.ANIMALS[i];
      const previous = this.ANIMALS[i - 1];
      const targetName = current.target || current.name;
      
      lyrics += `She swallowed the ${current.name} to catch the ${previous.target || previous.name}.\n`;
    }

    lyrics += `I don't know why she swallowed the fly. Perhaps she'll die.\n`;
    return lyrics;
  }

  verses(start, end) {
    let result = '';
    for (let i = start; i <= end; i++) {
      result += this.verse(i) + '\n';
    }
    return result;
  }
}