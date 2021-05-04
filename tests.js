import LoginPage from '../pages/LoginPage';
import BasicPage from '../pages/BasicPage';

const url = "basicUrl";
const login = "login";
const password = "password";
const name = "productName";
const newPrice = 30;
const newDiscoutPrice = 25;
const newNegativePrice = -1;
const newNegativeDicountPrice = -10;


describe('as a user I want to be able to work with dashboard', () => {
  const basicPage = new BasicPage();
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.open(url);
    loginPage.login(login, password);
  });

  // #1 TestCase
  it('adds one product', () => {
    basicPage.addNewProduct(name, newPrice, newDiscoutPrice);
    basicPage.assertSingleProductWasAdded();
  });

  // #2 TestCase
  it('deletes one product', () => {
    basicPage.deleteOneProduct(name);
    basicPage.assertSingleProductWasDeleted();
  });

  // #3 TestCase
  it('deletes many products', () => {
    basicPage.deleteManyProducts(name);
    basicPage.assertAllCheckedProductsWereDeleted();
  });

  // #4 TestCase
  it('edits one product', () => {
    basicPage.editOneProduct(name);
    basicPage.assertSingleProductWasEdited();
  });

  // #5 TestCase
  it('edits many products', () => {
    basicPage.editManyProducts(name);
    basicPage.assertAllCheckedProductsWereEdited();

  });

  // #6 TestCase
  it('checks it is possible to add lower price', () => {
    basicPage.checkNegativePrice(newPrice, newNegativePrice);
    basicPage.checkNegativeDiscoutPrice( newDiscoutPrice,newNegativeDicountPrice);
    basicPage.assertAddNegativePrice();
  })

   // #7 TestCase
   it('checks it is possible to add lower discount price', () => {
    basicPage.checkNegativeDiscoutPrice( newDiscoutPrice,newNegativeDicountPrice);
    basicPage.assertAddNegativePrice();
  })
  
})