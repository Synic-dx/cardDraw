const deck = [
    { suit: 'Hearts', type: '2', value: 2 },
    { suit: 'Hearts', type: '3', value: 3 },
    { suit: 'Hearts', type: '4', value: 4 },
    { suit: 'Hearts', type: '5', value: 5 },
    { suit: 'Hearts', type: '6', value: 6 },
    { suit: 'Hearts', type: '7', value: 7 },
    { suit: 'Hearts', type: '8', value: 8 },
    { suit: 'Hearts', type: '9', value: 9 },
    { suit: 'Hearts', type: '10', value: 10 },
    { suit: 'Hearts', type: 'J', value: 10 },
    { suit: 'Hearts', type: 'Q', value: 10 },
    { suit: 'Hearts', type: 'K', value: 10 },
    { suit: 'Hearts', type: 'A', value: 1 },
    { suit: 'Diamonds', type: '2', value: 2 },
    { suit: 'Diamonds', type: '3', value: 3 },
    { suit: 'Diamonds', type: '4', value: 4 },
    { suit: 'Diamonds', type: '5', value: 5 },
    { suit: 'Diamonds', type: '6', value: 6 },
    { suit: 'Diamonds', type: '7', value: 7 },
    { suit: 'Diamonds', type: '8', value: 8 },
    { suit: 'Diamonds', type: '9', value: 9 },
    { suit: 'Diamonds', type: '10', value: 10 },
    { suit: 'Diamonds', type: 'J', value: 10 },
    { suit: 'Diamonds', type: 'Q', value: 10 },
    { suit: 'Diamonds', type: 'K', value: 10 },
    { suit: 'Diamonds', type: 'A', value: 1 },
    { suit: 'Clubs', type: '2', value: 2 },
    { suit: 'Clubs', type: '3', value: 3 },
    { suit: 'Clubs', type: '4', value: 4 },
    { suit: 'Clubs', type: '5', value: 5 },
    { suit: 'Clubs', type: '6', value: 6 },
    { suit: 'Clubs', type: '7', value: 7 },
    { suit: 'Clubs', type: '8', value: 8 },
    { suit: 'Clubs', type: '9', value: 9 },
    { suit: 'Clubs', type: '10', value: 10 },
    { suit: 'Clubs', type: 'J', value: 10 },
    { suit: 'Clubs', type: 'Q', value: 10 },
    { suit: 'Clubs', type: 'K', value: 10 },
    { suit: 'Clubs', type: 'A', value: 1 },
    { suit: 'Spades', type: '2', value: 2 },
    { suit: 'Spades', type: '3', value: 3 },
    { suit: 'Spades', type: '4', value: 4 },
    { suit: 'Spades', type: '5', value: 5 },
    { suit: 'Spades', type: '6', value: 6 },
    { suit: 'Spades', type: '7', value: 7 },
    { suit: 'Spades', type: '8', value: 8 },
    { suit: 'Spades', type: '9', value: 9 },
    { suit: 'Spades', type: '10', value: 10 },
    { suit: 'Spades', type: 'J', value: 10 },
    { suit: 'Spades', type: 'Q', value: 10 },
    { suit: 'Spades', type: 'K', value: 10 },
    { suit: 'Spades', type: 'A', value: 1 }
];

export function cardDraw() { 
    const index = Math.floor(Math.random() * deck.length);
    const card = deck.splice(index, 1)[0]; // Removes the card from the deck
    return card;
}

export function cardDrawReplacement() {
    const index = Math.floor(Math.random() * deck.length);
    const card = deck[index];
  
    return card;
}