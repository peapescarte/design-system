import type { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'design-system-cli',
  run: async (toolbox) => {
    const { print } = toolbox

    print.info('Welcome DesignSystem CLI')

    print.warning(
`@@@@@@@@@@@@*******@@@@@@@@@@@
@@@@@@#/////////////////@@@@@@
@@@@///////%@@@@@@@(///////@@@
@@///////@@@@@@@@@@@@@///////@
@///////@@@@@@@@@@@@@@#///////
*///////@@@@@@@@@@@@@@#///////
*////////@@@@@@@@@@@@/////////
*///////////@@@@@@@///////////
@///////*//////@@@@@@@#/*////(
@@/////////////@@@@@@///////%@
@@@@///////////@@@@///////(@@@
@@@@@@@////////////////(@@@@@@ 
      `)
  },
}

module.exports = command
