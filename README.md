<div align="center">
  <img style="width: 300px" src="./public/logo.svg" />
</div>


![Release](https://github.com/peapescarte/boia/actions/workflows/release.yml/badge.svg)


<div style="flex">
  <a href="https://npm.im/@pescarte/boia" target="_blank">
    <img src="https://img.shields.io/npm/v/@pescarte/boia.svg" />
  </a>

  <a href="https://npm.im/@pescarte/boia" target="_blank">
    <img src="https://img.shields.io/npm/types/@pescarte/boia.svg" />
  </a>

  <a href="https://npm.im/@pescarte/boia" target="_blank">
    <img src="https://badgen.net/badge/node/v16.17/74b758?icon=npm" />
  </a>

  <a href="https://npm.im/@pescarte/boia" target="_blank">
    <img src="https://badgen.net/badge/typescript/v4.6.3/1081c2?icon=typescript" />
  </a>

  <a href="https://npm.im/@pescarte/boia" target="_blank">
    <img src="https://badgen.net/badge/vue.js/v3.2.40/42b883" />
  </a>

  <a href="https://bundlephobia.com/result?p=@pescarte/boia" target="_blank">
    <img src="https://badgen.net/bundlephobia/min/@pescarte/boia" />
  </a>

  <a href="https://bundlephobia.com/result?p=@pescarte/boia" target="_blank">
    <img src="https://badgen.net/bundlephobia/minzip/@pescarte/boia" />
  </a>

  <a href="https://bundlephobia.com/result?p=@pescarte/boia" target="_blank">
    <img src="https://badgen.net/bundlephobia/tree-shaking/@pescarte/boia" />
  </a>
</div>

# 📝 Documentação

_TODO_

## 🔨 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
- [VueUse](https://vueuse.org/)
- [WindiCSS](https://windicss.org/)
- [Vitest](https://vitest.dev/)
- [Testing library](https://testing-library.com/docs/)

# 📦️ Instalação

Basta executar:
```bash dark
yarn add @pescarte/boia
```

e colocar no `scripts` dentro do `package.json` para ter acesso ao nosso CLI:

```json dark
{
  "scripts": {
    "boia-cli": "boia-cli"
  }
}
```

# 👷 Como usar

Após fazer o processo de instalação, você deve executar `yarn boia-cli generate:plugin`.

Isto irá configura o plugin no seu projeto e estará pronto para usar, sem a necessidade de importar os componentes, só necessitando importar os composables com a necessidade.

# Licença

<a href="https://opensource.org/licenses/BSD-3-Clause"><img src="https://img.shields.io/npm/l/buefy.svg?logo=github" /></a>

Released under the BSD 3-Clause [License](LICENSE). Copyright (c) PEA Pescarte.
