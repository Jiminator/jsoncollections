let pokerHandsData = [
    {
        name: 'Royal Flush',
        image: 'images/Royal-Flush.png',
        probability: '0.000154%',
        notes: [
            'The best possible hand.',
            'Ace, King, Queen, Jack, and Ten of the same suit.'
        ]
    },
    {
        name: 'Straight Flush',
        image: 'images/Straight-Flush.png',
        probability: '0.00139%',
        notes: [
            'Five consecutive cards in the same suit.',
            'In case of ties, the highest rank at the top of the sequence wins.'
        ]
    },
    {
        name: 'Four of a Kind',
        image: 'images/Four-of-a-Kind.png',
        probability: '0.02401%',
        notes: [
            'Also known as quads',
            'Four cards have the same rank',
            'In case of ties, the higher rank wins'
        ]
    },
    {
        name: 'Full House',
        image: 'images/Full-House.png',
        probability: '0.1441%',
        notes: [
            'Also known as a full boat or a boat',
            'Contains three cards of one rank and two cards of another rank',
            'In case of ties, the highest three matching cards wins'
        ]
    },
    {
        name: 'Flush',
        image: 'images/Flush.png',
        probability: '0.1965%',
        notes: [
            'Five cards of the same suit that are not consecutive',
            'In case of ties, the highest rank at the top of the sequence wins.'
        ]
    },
    {
        name: 'Straight',
        image: 'images/Straight.png',
        probability: '0.3925%',
        notes: [
            'Five consecutive cards of different suits',
            'In case of a tie, the highest rank at the top of the sequence wins.'
        ]
    },
    {
        name: 'Three of a kind',
        image: 'images/Three-of-a-Kind.png',
        probability: '2.1128%',
        notes: [
            'Also known as trips or a set',
            'Three cards of the same rank',
            'In case of ties, the rank of the three cards, followed by the two kickers, determines the winner.'
        ]
    },
    {
        name: 'Two Pair',
        image: 'images/Two-Pair.png',
        probability: '4.7539%',
        notes: [
            'Two cards of the same rank, plus two cards of another rank',
            'In case of ties, the rank of each pair, followed by the highest-ranking kicker, determines the winner.'
        ]
    },
    {
        name: 'One Pair',
        image: 'images/One-Pair.png',
        probability: '42.2569%',
        notes: [
            'Two cards of the same rank',
            'In case of ties, the rank of the pair, followed by the highest-ranking kicker, determines the winner.'
        ]
    },
    {
        name: 'High Card',
        image: 'images/High-Card.png',
        probability: '50.1177%',
        notes: [
            'Any hand that does not qualify under a category listed above',
            'In case of ties, the highest card wins, such as “ace-high”.'
        ]
    }

];

function populateTable() {
    let tableBody = document.getElementById('pokerHandsTableBody');
    for (let i = 0; i < pokerHandsData.length; i++) {
        let hand = pokerHandsData[i];
        // all table functions such as insertRow and insertCell were learned from 
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow
        let row = tableBody.insertRow();
        row.insertCell().innerHTML = hand.name;
        let imageCell = row.insertCell();
        let image = document.createElement('img');
        image.src = hand.image;
        imageCell.appendChild(image);

        row.insertCell().innerHTML = hand.probability;
        let notesCell = row.insertCell();
        let notesList = document.createElement('ul');

        for (let j = 0; j < hand.notes.length; j++) {
            let notes = hand.notes[j];
            let note = document.createElement('li');
            note.innerHTML = notes;
            notesList.appendChild(note);
        }
        notesCell.appendChild(notesList);
        // added animation from animate.css
        row.classList.add('animate__animated', 'animate__jackInTheBox');
    }
}
populateTable();
