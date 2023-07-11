console.log('Lodash is loaded:', typeof _ !== 'undefined');
// Create a collection of four objects that represent players.
// Each player has a unique name and a hand to hold cards in.
const players = [
  {
    name: 'Holly',
    hand: [],
    score: 0
  }, {
    name: 'Ethan',
    hand: [],
    score: 0
  }, {
    name: 'Brett',
    hand: [],
    score: 0
  }, {
    name: 'Monique',
    hand: [],
    score: 0
  }
];
// Create a collection of fifty - two objects that represent a standard 52 - card deck.
// Each card should have a rank(Ace, 2, 3, ...King) and a suit(clubs, diamonds, hearts, spades).
const deck = [];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const suits = ['clubs', 'diamonds', 'hearts', ' spades'];

createDeck(ranks, suits);
function createDeck(ranks, suits) {
  for (let i = 0; i < ranks.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      deck.push({ rank: ranks[i], suit: suits[j] });
    }
  }
}

// Shuffle the deck.
function shuffle(deck) {
  return _.shuffle(deck);
}
const freshDeck = shuffle(deck);

// Deal two cards to each player.
// No two players should be able to receive the same card.
function deal() {
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < 2; j++) {
      players[i].hand.push(freshDeck[j]);
      freshDeck.splice(0, 2);
    }
    console.log(`${players[i].name}'s hand:  `, players[i].hand);
  }
}
deal();

function getScore(players) {
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].hand.length; j++) {
      const playerCards = players[i].hand[j].rank;
      if (playerCards === 'A') {
        players[i].score += 11;
      } else if (playerCards === 'J' || playerCards === 'Q' || playerCards === 'K') {
        players[i].score += 10;
      } else {
        players[i].score += Number(playerCards);
      }
    }
    console.log(`${players[i].name}'s Score:`, players[i].score);
  }
}
getScore(players);

function getWinner(players) {
  if (players[0].score > players[1].score && players[0].score > players[2].score && players[0].score > players[3].score) {
    console.log(`${players[0].name} wins with a score of ${players[0].score}`);
  } else if (players[1].score > players[0].score && players[1].score > players[2].score && players[1].score > players[3].score) {
    console.log(`${players[1].name} wins with a score of ${players[1].score}`);
  } else if (players[2].score > players[0].score && players[2].score > players[1].score && players[2].score > players[3].score) {
    console.log(`${players[2].name} wins with a score of ${players[2].score}`);
  } else if (players[3].score > players[0].score && players[3].score > players[1].score && players[3].score > players[2].score) {
    console.log(`${players[3].name} wins with a score of ${players[3].score}`);
  } else {
    console.log('Tie game!');
  }
}
getWinner(players);
