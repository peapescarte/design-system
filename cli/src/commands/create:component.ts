import type { GluegunToolbox } from 'gluegun'
import { resolve } from 'path'
const COMPONENTS_PATH_PLUG = resolve(__dirname, '../../../src/components')

const pascalToKebab = (str: string) =>
  str.replace(
    /[A-Z]/g,
    (letter, match) => `${match !== 0 ? '-' : ''}${letter.toLowerCase()}`
  )

module.exports = {
  name: 'create:component',
  description: 'Create a component, unit test and docs file',
  run: async (toolbox: GluegunToolbox) => {
    const {
      prompt,
      template,
      parameters,
      print: { highlight, info, success, error },
    } = toolbox

    const askFolder = {
      type: 'input',
      name: 'folder',
      message: 'Gostaria de criar dentro de alguma pasta?',
      hint: 'forms |  forms/specials',
    }

    const askName = {
      type: 'input',
      name: 'name',
      initial: parameters.string,
      message: 'Qual o nome do componente?',
      hint: 'Textfield |  Button',
    }

    const { folder, name } = await prompt.ask([askFolder, askName])

    const path = folder.endsWith('/')
      ? `${folder}${pascalToKebab(name)}`
      : `${folder}/${pascalToKebab(name)}`

    const fullPath = `${COMPONENTS_PATH_PLUG}/${path}/`

    console.log(folder, name)

    info('Isto ira criar:')

    highlight(`
    components/
    ├── ${path}
        └── ${name}.vue
        └── ${pascalToKebab(name)}.spec.ts
        └── ${name}.stories.mdx
        └── index.ts
    `)

    try {
      const canWrite = await prompt.confirm('Esta configuração esta correta?')

      if (canWrite) {
        info('Gerando arquivos...')
        await template.generate({
          props: { name, folder, nameClass: pascalToKebab(name) },
          template: 'components/component.vue.ejs',
          target: `${fullPath}${name}.vue`,
        })

        await template.generate({
          props: { name, folder, nameClass: pascalToKebab(name) },
          template: 'components/component.spec.ts.ejs',
          target: `${fullPath}${pascalToKebab(name)}.spec.ts`,
        })

        await template.generate({
          props: { name, folder, nameClass: pascalToKebab(name) },
          template: 'components/component.stories.mdx.ejs',
          target: `${fullPath}${name}.stories.mdx`,
        })

        await template.generate({
          props: { name },
          template: 'components/index.ts.ejs',
          target: `${fullPath}index.ts`,
        })

        success('Arquivos gerados com sucesso!')
      }
    } catch (er) {
      error('Error  inesperado')
    }
  },
}
