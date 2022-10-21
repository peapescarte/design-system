import { readFile, writeFile } from 'fs/promises'
import type { Plugin } from 'vite'

export default (): Plugin => {

  return {
    name: 'vite-generate-component-types',
    enforce: 'post',
    apply: 'build',

    async closeBundle() {
      const data = await readFile('./src/index.ts', { encoding: 'utf8' })

      const init = data.indexOf('export const component')
      const dataFiltered = data.slice(init)
      const end = dataFiltered.indexOf('}')

      const componentsString = dataFiltered.slice(0, end)

      const componentsArray = componentsString
        .split(',')
        .map((item) => item.slice(item.indexOf("Sol")).trim())
        .filter(item => item)

      const componentsTypes = componentsArray.map((component) =>
        `${component}: typeof import('@pescarte/design-system')['${component}']`,
      )

      await writeFile('dist/components.json', `${JSON.stringify({ components: componentsArray })}`)
      await writeFile('dist/components.d.ts',
      `import '@vue/runtime-core'
      declare module '@vue/runtime-core' {
        export interface GlobalComponents {
          ${componentsTypes.join('\n\t\t\t\t\t')}
        }
      }

      export {}
      `)

      console.log(`[DesignSystem] all types and components file generated!`)
    },
  }
}
