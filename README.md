# Exercício - Page Objects & App Actions

Projeto desenvolvido durante os estudos de Quality Assurance (QA) com foco em automação de testes utilizando os padrões **Page Objects** e **App Actions**, aplicando boas práticas para organização, reutilização e manutenção de testes automatizados.

## 📚 Objetivo do Projeto

Este exercício tem como objetivo praticar conceitos fundamentais de automação de testes, utilizando padrões amplamente adotados no mercado para melhorar:

- Organização do código
- Reutilização de componentes
- Separação de responsabilidades
- Manutenção dos testes
- Legibilidade da automação

O projeto explora abordagens modernas para estruturação de testes automatizados, comparando conceitos de:

- Page Object Model (POM)
- App Actions

---

# 🧪 Tecnologias Utilizadas

- JavaScript
- Cypress
- Node.js
- Git
- GitHub

---

# 📖 Conceitos Aplicados

## 🔹 Page Object Model (POM)

O padrão **Page Object Model** organiza elementos e ações de uma página em arquivos separados, facilitando a manutenção e reutilização dos testes automatizados.

### Benefícios:
- Centralização dos seletores
- Melhor legibilidade
- Redução de duplicação de código
- Facilidade de manutenção

---

## 🔹 App Actions

O conceito de **App Actions** busca interagir diretamente com a lógica da aplicação, reduzindo dependência excessiva da interface gráfica e tornando os testes mais rápidos e estáveis.

### Benefícios:
- Testes mais rápidos
- Menor acoplamento ao DOM
- Melhor estabilidade
- Maior foco na regra de negócio

---

# 📂 Estrutura do Projeto

```bash
📦 projeto
 ┣ 📂 cypress
 ┃ ┣ 📂 e2e
 ┃ ┣ 📂 fixtures
 ┃ ┣ 📂 support
 ┃ ┣ 📂 pageObjects
 ┃ ┗ 📂 appActions
 ┣ 📄 package.json
 ┣ 📄 cypress.config.js
 ┗ 📄 README.md
```

---

# 🚀 Como Executar o Projeto

## Clone o repositório

```bash
git clone https://github.com/Noobdub55/Exercicio-PageObjects-AppActions.git
```

## Acesse a pasta

```bash
cd Exercicio-PageObjects-AppActions
```

## Instale as dependências

```bash
npm install
```

## Execute o Cypress

```bash
npx cypress open
```

Ou em modo headless:

```bash
npx cypress run
```

---

# 🎯 Aprendizados

Durante este exercício foram praticados conceitos importantes para atuação em QA Automation, como:

- Estruturação de automação
- Boas práticas em Cypress
- Reutilização de código
- Criação de ações reutilizáveis
- Encapsulamento de elementos
- Organização de testes E2E
- Separação entre lógica de teste e interface

---

# 📌 Competências Demonstradas

- Quality Assurance (QA)
- Automação de Testes
- Cypress
- JavaScript
- Page Object Model
- App Actions
- Testes E2E
- Testes Funcionais
- GitHub
- Node.js

---

# 👨‍💻 Autor

Matheus Lima de Aquino

GitHub:
https://github.com/Noobdub55
