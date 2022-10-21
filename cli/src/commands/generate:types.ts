import type { GluegunToolbox } from 'gluegun'
const RELATIVE_ROOT_PROJECT = './'

export default {
  name: 'generate:types',
  description: 'Setting design-system global plugin to nuxt/vue',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template,
      print: { spin },
    } = toolbox

    if (parameters?.options?.nuxt) {
      const spinnerTypes = spin('Setting types')

      await template.generate({
        template: 'components.d.ts.ejs',
        target: `${RELATIVE_ROOT_PROJECT}components.d.ts`,
      })

      spinnerTypes.succeed(`Global types created in [/components.d.ts]!`)
    } else {
      const spinnerTypes = spin('Setting types')

      await template.generate({
        template: 'components.d.ts.ejs',
        target: `${RELATIVE_ROOT_PROJECT}/src/components.d.ts`,
      })

      spinnerTypes.succeed('Global types created in [/src/components.d.ts]!')
    }
  }
}
