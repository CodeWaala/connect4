describe('Gameboard', () => {
    it('winner selected correctly', () => {
      cy.visit('http://localhost:3000/connect4/index.html');
      let currentPlayer = 'yellow';
      let yellowPlayerCellIndex = 0;
        [[5, 0], [4, 0], [5, 1], [3, 0], [5, 2], [2, 0], [5, 3]].forEach((point) => {
            const [rowIndex, cellIndex] = point;
            cy.get('.Game-Row').eq(rowIndex).then((row) => {
                cy.get(row).within(() => {
                    const cells = cy.get('.Game-Cell').eq(cellIndex).then((cell) => {
                        cy.get(cell).click(); 
                    });
                });
            });
        });
        cy.get('#winnerGreeting').should('have.text', 'Congratulations, yellow wins the game!')
    });
});