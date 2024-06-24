describe('Login Test', () => {
    it('should log in successfully with valid credentials', () => {
      // Kunjungi halaman login
      cy.visit('http://192.168.88.31:3000');
      
      cy.get('button.chakra-button.css-4fp4y0').click();
  
      // Isi input username
      cy.get('input[name="email"]').type('yunia@avatarsolution.com');
  
      // Isi input password
      cy.get('input[name="password"]').type('cansyun1');
  
      // Klik tombol login
      cy.get('button.chakra-button.css-46xy9a').click();
  
    });
  });