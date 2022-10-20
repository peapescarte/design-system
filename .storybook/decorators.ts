

import { VueFramework } from "@storybook/vue3";
import { DecoratorFunction, Args } from "@storybook/csf";

type DecoratorParameters = {
  class?: string

}
type Decorator = DecoratorFunction<VueFramework & { girassol: DecoratorParameters }, Args>
type ContainerScreen = Record<string, Decorator>

export const containerScreen100percentChild: ContainerScreen = ({
  Accordion: (_, { viewMode }) => ({
    template: `
  <div
    style="
      display: flex; justify-content: center;
      ${viewMode === 'docs'
        ? 'width: 100vw; margin-top: 0; items-align: center; height: 500px;'
        : 'width: 90vw; margin-top: 200px;height: 600px;'
      }
      padding: 40px; box-shadow: 0 0 2px #212121;
      max-width: 600px; 
    "
  >
    <story />
  </div>`,
  }),

  Full: (_, { viewMode, parameters }) => ({
    template: `
  <div class="${parameters?.girassol?.class ?? ''}" style="width: ${viewMode === 'docs' ? 'calc(100vw - 280px)' : '90vw'}; ${parameters?.girassol?.style ?? ''} display: flex; justify-content: center;">
    <story />
  </div>`,
  }),
})