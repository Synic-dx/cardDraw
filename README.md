[![NPM Version](https://img.shields.io/npm/v/card-draw?style=flat)](https://www.npmjs.com/package/card-draw) [![NPM License](https://img.shields.io/npm/l/card-draw)](https://www.npmjs.com/package/card-draw) [![NPM Downloads](https://img.shields.io/npm/dm/card-draw?style=flat)](https://www.npmjs.com/package/card-draw) [![NPM Total Downloads](https://img.shields.io/npm/dt/card-draw?style=flat)](https://www.npmjs.com/package/card-draw)


# cardDraw

NPM Package to randomly draw a card from a full deck.

### Installation

``` bash
npm install card-draw
```

### Usage

``` javascript
import cardDraw from 'card-draw';

console.log(cardDraw()) // returns a randomly selected card as an object
console.log(cardDraw().suit) //returns the suit of the randomly drawn card
```

Returns a randomly chosen card as an object. **Adjust the 'value' property of the cards in accordance with the relevant game rules. Also, keep/remove the 'splice' method depending on whether you want the drawn card being replaced or separated from the deck**
