describe('Test Add, Edit and Delete Contact', () => {
  it('passes', () => {
    
    cy.visit('contact_app.html')

    const name ="Elena Louise"
    const phoneNumber ="3258252525"
    const emailAddress ="elenalouise@gmail.com"
    
    // Add Contact
    cy.get('input[placeholder="Name"]').type(name)
    cy.get('input[placeholder="Phone"]').type(phoneNumber)
    cy.get('input[placeholder="Email"]').type(emailAddress)
    cy.get('button[name="add"]').click()
    cy.wait(500)

    cy.get('table').contains('td', name);
    cy.get('table').contains('td', phoneNumber);
    cy.get('table').contains('td', emailAddress);
   
  
    // Edit Contact
    
    const updatedName ="Joseph Galvin";
    const updatedNumber ="3164961919";
    const updatedMail ="josephgalvin@hotmail.com";
    
    cy.get('button[name="edit"]').click()
    cy.get('#app > table > tbody > tr:nth-child(2) > td:nth-child(1) > input[type=text]').clear().type(updatedName) 
    cy.get('button[name="update"]').click() 
    cy.get('button[name="edit"]').click()
    cy.get('#app > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=text]').clear().type(updatedNumber)  
    cy.get('#app > table > tbody > tr:nth-child(2) > td:nth-child(3) > input[type=text]').clear().type(updatedMail)  
    cy.get('button[name="update"]').click()
    cy.wait(500)
    
    cy.get('table').contains('td', updatedName);
    cy.get('table').contains('td', updatedNumber);
    cy.get('table').contains('td', updatedMail);

    // Delete Contact
    cy.get('button[name="delete"]').click()
    cy.get('table').contains('td', updatedName).should('not.exist');


  })
})

