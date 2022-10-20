import type { GluegunToolbox } from 'gluegun'
const RELATIVE_ROOT_PROJECT = './'


module.exports = {
  name: 'generate:plugin',
  description: 'Setting boia global plugin to nuxt/vue',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template,
      runtime,
      print: { info, spin, highlight },
    } = toolbox

    if (parameters?.options?.nuxt) {
      const spinnerPlugin = spin('Setting plugin')

      await template.generate({
        template: 'nuxt-plugin.ejs',
        target: `${RELATIVE_ROOT_PROJECT}/plugins/boia.ts`,
      })

      spinnerPlugin.succeed(`Plugin created in [/plugins/boia.ts]!`)

      runtime?.run('generate:types --nuxt')
    } else {
      const spinnerPlugin = spin('Setting plugin')

      await template.generate({
        template: 'vue-plugin.ejs',
        target: `${RELATIVE_ROOT_PROJECT}/src/plugins/boia.ts`,
      })

      spinnerPlugin.succeed(`Plugin created in [/src/plugins/boia.ts]!`)

      
      runtime?.run('generate:types')
      
      info('Please, add command below to src/main.ts')
      highlight(`import boia from 'plugins/boia'`)
      highlight(`createApp(App).use(boia)`)
    }

    const spinnerWindi = spin('Setting plugin')

    await template.generate({
      template: 'windi.config.ts.ejs',
      target: `${RELATIVE_ROOT_PROJECT}/windi.config.ts`,
    })

    spinnerWindi.succeed(`Windicss config created in [/windi.config.ts]!`)
  },
}
