import '@testing-library/jest-dom'

import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/vue'
import { axe, toHaveNoViolations } from 'jest-axe'
import { defineComponent, ref } from 'vue'

import Input from './Input.vue'

expect.extend(toHaveNoViolations)

describe('[Form] Input', () => {
  it('renders Input with id and data-testid', () => {
    const id = 'awesome'

    render(Input, {
      props: {
        id,
      },
    })

    screen.getByTestId(`input-${id}`)
    expect(screen.getByTestId(`input-${id}`)).toHaveAttribute('id', `input-${id}`)
  })

  it('renders Input with "-error" class', () => {
    const id = 'awesome'

    render(Input, {
      props: {
        id,
        error: true,
      },
    })

    const input = screen.getByTestId(`input-${id}`)
    expect(input).toHaveClass('-error')
  })

  it('renders disabled Input', () => {
    const id = 'awesome'

    render(Input, {
      props: {
        id,
        disabled: true,
      },
    })

    const input = screen.getByTestId(`input-${id}`)
    expect(input).toHaveAttribute('disabled')
  })

  it('renders Input ["text", "number", "date", "password"] types ', () => {
    const types = ["text", "number", "date", "password"]

    types.forEach((type) => {
      render(Input, {
        props: {
          id: type,
          type,
        },
      })

      const input = screen.getByTestId(`input-${type}`)
      expect(input).toHaveAttribute('type', type)
    })
  })

  it('renders Input and type a text', async () => {
    const id = 'awesome'
    const text = 'Lorem ipsum dolor set amet'

    render(Input, {
      props: {
        id,
      },
    })

    const input = screen.getByTestId(`input-${id}`) as HTMLInputElement

    expect(input.value).toBe('')

    await userEvent.type(input, text)
    expect(input.value).toBe(text)
  })

  it('renders Input and type a text using v-model directive', async () => {
    const id = 'awesome'
    const text = 'Lorem ipsum dolor set amet'

    const ContainerComponent = defineComponent({
      components: { Input },
      setup() {
        const model = ref('')
        return { model }
      },
      template: `<div>
        <p>renders: {{ model }}</p>
        <Input id="${id}" v-model="model" /></div>
      `,
    })

    const { getByText } = render(ContainerComponent, {
    })


    const input = screen.getByTestId(`input-${id}`) as HTMLInputElement


    expect(input.value).toBe('')

    await userEvent.type(input, text)
    expect(input.value).toBe(text)

    getByText(`renders: ${text}`)
  })

  it('Should not fail any accessibility tests', async () => {
    const id = 'awesome'

    render(Input, {
      props: {
        id,
        ariaLabel: "Just a input",
        placeholder: 'Input test',
      },
    })

    const input = screen.getByTestId(`input-${id}`)
    expect(await axe(input)).toHaveNoViolations()
  })
})
