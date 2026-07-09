# 🚀 DEVLOG - FitTrack Pro - Diário do desenvolvimento

## 📅 Data

08/07/2026

---

# ✅ Objetivo do dia 🟢 Concluída

Iniciar oficialmente o desenvolvimento do FitTrack Pro e definir a arquitetura base do projeto antes da implementação das telas.

---

# 🛠️ Projeto

### Estrutura inicial

Projeto criado utilizando:

- React
- Vite
- JavaScript
- ESLint

### Decisão

Foi decidido desenvolver a V1 utilizando **JavaScript**, deixando a migração para **TypeScript** para uma futura versão do projeto.

Motivo:

- Consolidar React primeiro.
- Aprender arquitetura, componentização e lógica sem adicionar a complexidade da tipagem.
- Migrar posteriormente para TypeScript como exercício prático.

---

# 📁 Organização do Projeto

Foi criada a estrutura inicial de pastas.

```text
src/

├── assets/
├── components/
│
│   ├── Button/
│   ├── Header/
│   └── Sidebar/
│
├── layouts/
├── pages/
├── styles/
│
├── App.jsx
└── main.jsx
```

---

# 🎨 Design System

Foi definida oficialmente a identidade visual do projeto baseada nas telas criadas no Lovable.

### Cores

Background

```
#121212
```

Sidebar

```
#181818
```

Surface

```
#1E1E1E
```

Input

```
#1A1A1A
```

Primary

```
#B8FF3B
```

Text

```
#FFFFFF
```

Text Secondary

```
#B8B8B8
```

Text Muted

```
#8A8A8A
```

Borders

```
rgba(255,255,255,.08)
```

Glow

```
rgba(184,255,59,.35)
```

---

# 🎯 Arquitetura CSS

Foi decidido separar os estilos globais em arquivos específicos.

```text
styles/

├── global.css
├── variables.css
├── reset.css
└── typography.css
```

## Responsabilidade de cada arquivo

### global.css

Responsável apenas por importar os demais arquivos.

### variables.css

Contém apenas o Design System.

- Colors
- Shadows
- Radius
- Spacing
- Layout
- Transitions

### reset.css

Contém apenas o reset da aplicação.

- margin
- padding
- box-sizing
- body
- button
- input
- img
- a
- ul
- ol

### typography.css

Responsável pela tipografia global.

- body
- h1
- h2
- h3
- h4
- p

---

# 📐 Padrões definidos

A partir deste ponto o projeto seguirá algumas regras.

## Cores

Nunca utilizar HEX diretamente nos componentes.

❌

```css
background: #1E1E1E;
```

✅

```css
background: var(--surface);
```

---

## Espaçamentos

Nunca utilizar valores fixos.

❌

```css
padding: 32px;
```

✅

```css
padding: var(--space-xl);
```

---

## Border Radius

Sempre utilizar variáveis.

❌

```css
border-radius: 16px;
```

✅

```css
border-radius: var(--radius-lg);
```

---

## Componentes

Cada componente seguirá obrigatoriamente esta estrutura.

```text
NomeDoComponente/

├── NomeDoComponente.jsx
├── NomeDoComponente.css
└── index.js
```

---

# 🧠 Decisões de Arquitetura

Foi decidido que o projeto será desenvolvido da mesma forma que um software profissional.

A ordem de desenvolvimento será:

1. Estrutura do projeto
2. Design System
3. Layouts
4. Sidebar
5. Header
6. Rotas
7. Dashboard
8. Meu Treino
9. Corridas
10. Demais telas

---

# 📚 Aprendizados

Durante o desenvolvimento foram reforçados os conceitos de:

- Organização de projetos React
- Design System
- CSS Variables
- Arquitetura de componentes
- Separação de responsabilidades
- Boas práticas de Front-End

---

# 🚀 Próxima etapa

Desenvolver o `StudentLayout`.

Objetivos:

- Criar a estrutura principal da aplicação.
- Organizar Sidebar, Header e área de conteúdo.
- Preparar a base para implementação da Sidebar.