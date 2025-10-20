/// <reference types="cypress"/>
import cadastroPage from "../support/cadastroPage";
import { faker, Faker } from "@faker-js/faker";

describe('Fluxo de cadastro de novo usuario', () => {

  beforeEach(()=>{
    cy.setCookie ('ebacStoreVersion', 'V2', {domain: 'lojaebac.ebaconline.art.br'}),
    cy.visit('/')
    
  })

  it('Faz cadastro na loja Ebac com sucesso', () => {
    const nome = faker.person.firstName();
    const sobrenome = faker.person.lastName();
    const telefone = faker.phone.number();
    const email = faker.internet.email();
    const senha = faker.internet.password();

    cadastroPage.acessarPaginaDeCadastro();
    cadastroPage.preencheFormulario(nome, sobrenome, telefone, email, senha);
  })

});

it('PageObjects', function() {});