[![NPM Version](https://img.shields.io/npm/v/card-draw?style=flat)](https://www.npmjs.com/package/card-draw) [![NPM License](https://img.shields.io/npm/l/card-draw)](https://www.npmjs.com/package/card-draw) [![NPM Downloads](https://img.shields.io/npm/dm/card-draw?style=flat)](https://www.npmjs.com/package/card-draw) [![NPM Total Downloads](https://img.shields.io/npm/dt/card-draw?style=flat)](https://www.npmjs.com/package/card-draw)


# cardDraw

NPM Package to randomly draw a card from a full deck.

### Installation

``` bash
npm install card-draw
```

### Usage

``` javascript
import cardDraw from 'card-draw'; // if you don't want the drawn card to be replaced in the deck
import cardDrawReplacement from 'card-draw' // if you want the card to be replaced in the deck

console.log(cardDraw()) // returns a randomly selected card as an object and removes it from the deck
console.log(cardDraw().suit) //returns the suit of the randomly drawn card and removes it from the deck

console.log(cardDrawReplacement()) // returns a randomly selected card as an object and keeps it back in the deck
console.log(cardDraw().suit) //returns the suit of the randomly drawn card and keeps it back in the deck
```

### Notes

**Adjust the 'value' property of the cards in accordance with the relevant game rules.**
