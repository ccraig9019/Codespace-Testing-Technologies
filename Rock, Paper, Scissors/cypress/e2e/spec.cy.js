describe('Rock Paper Scissors game Test 1', () => {
  it('Visit page and check for buttons and fields', () => {
    //Visit page
    cy.visit('http://127.0.0.1:5500/RPSgame.html')
    //Check for buttons and check their id attributes match the text they display
    cy.get("#rock").should("contain", "Rock");
    cy.get("#paper").should("contain", "Paper");
    cy.get("#scissors").should("contain", "Scissors");
    //Check the option fields are empty
    cy.get("#user-option").should("contain", "");
    cy.get("#computer-option").should("contain", "");
    cy.get("#result").should("contain", "");



  })

  it('Click buttons and check the correct value is assigned to Your option', () => {
    cy.visit('http://127.0.0.1:5500/RPSgame.html')
    //Click rock and check what's returned to the Your option span
    cy.get("#rock").click();
    cy.get("#user-option").should("contain", "Rock");
    //Click paper and check what's returned to the Your option span
    cy.get("#paper").click();
    cy.get("#user-option").should("contain", "Paper");
    //Click scissors and check what's returned to the Your option span
    cy.get("#scissors").click();
    cy.get("#user-option").should("contain", "Scissors");
  })

  it('Click rock button and check value returned to Computer option', () => {
    cy.visit('http://127.0.0.1:5500/RPSgame.html');
    //Click rock button
    cy.get("#rock").click(); 
    //Assign the DOM element #computer-option to a variable $input in order to store it 
    cy.get("#computer-option").then(($input) => { 
      //create new variable for the text content of $input
      const value = $input.text(); 
      //Assert about the text content of #computer-choice by saying it can be any one of these three options
      expect(value).to.satisfy((val) => val.includes("Rock") || val.includes("Paper") || val.includes("Scissors")); 
      });
    });


    it('Click paper button and check value returned to Computer option', () => {
      cy.visit('http://127.0.0.1:5500/RPSgame.html');
      //Click paper button
      cy.get("#paper").click(); 
      //Assign the DOM element #computer-option to a variable $input in order to store it 
      cy.get("#computer-option").then(($input) => { 
        //create new variable for the text content of $input
        const value = $input.text(); 
        //Assert about the text content of #computer-choice by saying it can be any one of these three options
        expect(value).to.satisfy((val) => val.includes("Rock") || val.includes("Paper") || val.includes("Scissors")); 
        });
      });

      it('Click scissors button and check value returned to Computer option', () => {
        cy.visit('http://127.0.0.1:5500/RPSgame.html');
        //Click scissors button
        cy.get("#scissors").click(); 
        //Assign the DOM element #computer-option to a variable $input in order to store it 
        cy.get("#computer-option").then(($input) => { 
          //create new variable for the text content of $input
          const value = $input.text(); 
          //Assert about the text content of #computer-choice by saying it can be any one of these three options
          expect(value).to.satisfy((val) => val.includes("Rock") || val.includes("Paper") || val.includes("Scissors")); 
          });
        });

        it('Check that the results field displays one of the three correct values', () => {
          it('Click rock button and check value returned to Computer option', () => {
            cy.visit('http://127.0.0.1:5500/RPSgame.html');
            //Click rock button
            cy.get("#rock").click(); 
            //Assign the DOM element #result to a variable $input in order to store it 
            cy.get("#result").then(($input) => { 
              //create new variable for the text content of $input
              const value = $input.text(); 
              //Assert about the text content of #computer-choice by saying it can be any one of these three options
              expect(value).to.satisfy((val) => val.includes("You win!") || val.includes("You lose!") || val.includes("It's a tie!")); 
              });
            });
        })
 


  })
