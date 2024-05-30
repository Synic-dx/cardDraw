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

Returns a randomly chosen card as an object. **Adjust the 'value' property of the cards in accordance with the relevant game rules.**
