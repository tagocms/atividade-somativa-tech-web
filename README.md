# Atividade Somativa 2

Aplicação React de cadastro, login e área principal do usuário, desenvolvida para a disciplina de Tecnologias para Desenvolvimento Web (PUCPR).

## Dependência principal: Firebase (Auth + Firestore)

O projeto usa o **Firebase** como backend:

- **Firebase Authentication** (`firebase/auth`) — cadastro, login e logout dos usuários.
- **Firestore** (`firebase/firestore`) — persistência dos dados do usuário (ex: data de nascimento).

A configuração do Firebase fica em [src/configuration/firebase.js](src/configuration/firebase.js).

## Estrutura

- `src/screens/Login` — tela de login.
- `src/screens/Cadastro` — tela de cadastro de usuário.
- `src/screens/Principal` — tela principal (pós-login).
- `src/components/SignUpInForm` — formulário compartilhado de cadastro/login.
- `src/context/AuthenticationContext.js` — contexto de autenticação (estado do usuário logado).
- `src/AppNavigation.jsx` — rotas da aplicação (react-router-dom).

## Como rodar

```bash
npm install
npm start
```

A aplicação sobe em [http://localhost:3001](http://localhost:3001).

## Outros scripts

- `npm test` — executa os testes.
- `npm run build` — gera o build de produção.

## Stack

React 19, React Router 7, Firebase 12.
