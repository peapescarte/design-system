<div align="center">
  <img style="width: 300px" src="./public/logo.svg" />
</div>


![Release](https://github.com/peapescarte/design-system/actions/workflows/release.yml/badge.svg)


<div style="flex">
  <a href="https://npm.im/@pescarte/design-system" target="_blank">
    <img src="https://img.shields.io/npm/v/@pescarte/design-system.svg" />
  </a>

  <a href="https://npm.im/@pescarte/design-system" target="_blank">
    <img src="https://img.shields.io/npm/types/@pescarte/design-system.svg" />
  </a>

  <a href="https://npm.im/@pescarte/design-system" target="_blank">
    <img src="https://badgen.net/badge/node/v16.17/74b758?icon=npm" />
  </a>

  <a href="https://npm.im/@pescarte/design-system" target="_blank">
    <img src="https://badgen.net/badge/typescript/v4.6.3/1081c2?icon=typescript" />
  </a>

  <a href="https://npm.im/@pescarte/design-system" target="_blank">
    <img src="https://badgen.net/badge/vue.js/v3.2.40/42b883" />
  </a>

  <a href="https://bundlephobia.com/result?p=@pescarte/design-system" target="_blank">
    <img src="https://badgen.net/bundlephobia/min/@pescarte/design-system" />
  </a>

  <a href="https://bundlephobia.com/result?p=@pescarte/design-system" target="_blank">
    <img src="https://badgen.net/bundlephobia/minzip/@pescarte/design-system" />
  </a>

  <a href="https://bundlephobia.com/result?p=@pescarte/design-system" target="_blank">
    <img src="https://badgen.net/bundlephobia/tree-shaking/@pescarte/design-system" />
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
yarn add @pescarte/design-system
```

e colocar no `scripts` dentro do `package.json` para ter acesso ao nosso CLI:

```json dark
{
  "scripts": {
    "design-system-cli": "design-system-cli"
  }
}
```

# 👷 Como usar

Após fazer o processo de instalação, você deve executar `yarn design-system-cli generate:plugin`.

Isto irá configura o plugin no seu projeto e estará pronto para usar, sem a necessidade de importar os componentes, só necessitando importar os composables com a necessidade.

# Licença

<a href="https://opensource.org/licenses/BSD-3-Clause"><img src="https://img.shields.io/npm/l/buefy.svg?logo=github" /></a>

Released under the BSD 3-Clause [License](LICENSE). Copyright (c) PEA Pescarte.
