# in-the-cave

# JavaScript Exercise → Full Stack Playground

## Contexte

À l’origine, ce projet est un exercice JavaScript issu de freeCodeCamp, réalisé pour comprendre les bases du langage.

Plutôt que de le laisser tel quel, j’ai choisi de le transformer en un véritable terrain d’expérimentation afin de monter en compétences sur des technologies modernes utilisées en entreprise.

Ce repository devient donc un projet évolutif, pensé pour apprendre en profondeur et pas seulement valider un exercice.

---

## Objectifs du projet

- Consolider les bases de JavaScript
- Migrer progressivement vers TypeScript
- Mettre en place un frontend moderne avec Tailwind CSS
- Créer un backend pour comprendre la logique full stack
- Apprendre une architecture réaliste et maintenable
- Me rapprocher des pratiques professionnelles

---

## Évolutions prévues

### Migration TypeScript

- Mise en place d’un typage strict
- Utilisation de types et d’interfaces
- Réduction des erreurs à l’exécution

### Interface avec Tailwind CSS

- Design simple et lisible
- Approche utility-first
- Interface responsive

### Backend Node.js

- Création d’une API REST
- Séparation frontend / backend
- Gestion de la logique métier côté serveur
- Connexion possible à une base de données

---

## Stack technique

### Actuelle

- JavaScript
- HTML / CSS

### Cible

- TypeScript
- Tailwind CSS
- Node.js
- Express ou framework backend équivalent
- Base de données (optionnelle)

---

## Philosophie du projet

Ce projet n’a pas vocation à être parfait dès le départ.  
Il est volontairement itératif, avec des refactors réguliers et des améliorations progressives.

L’objectif est d’apprendre en construisant.

---

## Statut

Projet en cours de développement.  
La structure et les fonctionnalités sont susceptibles d’évoluer.

---

## Auteur

Thomas Montout  
Étudiant en BTS SIO SLAM

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
