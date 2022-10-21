import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import {  useForm } from 'vee-validate'

import { axe, toHaveNoViolations } from 'jest-axe'

import InputText from './InputText.vue'
expect.extend(toHaveNoViolations)

const InputWithValidation = ({ initialErrors, validationSchema, name, id, label }: any) => ({
  template:
  `<form @submit.prevent="handleSubmit">
    <InputText :name="name" :label="label" :id="id" />
  </form>
    `,
  components: { InputText },
  setup() {
    useForm({
      initialErrors,
      validationSchema,
    })

    return {
      name,
      id,
      label,
    }
  },
})

const testIds = (id: string) => ({
  el: `input-text-${id}`,
  label: `input-text-label-${id}`,
  input: `input-text-input-${id}`,
})

describe('[Form] InputText', () => {
  it('render input-text without label', () => {
    const id = 'awesome'
    const label = 'The best label 4ever'

    const dataTestIds = testIds(id)

    render(InputText, {
      props: {
        id,
        name: 'without label',
      },
      attrs: {},
    })

    screen.getByTestId(dataTestIds.el)

    expect(() => screen.getByLabelText(label)).toThrow(`Unable to find a label with the text of: ${label}`)
  })

  it('renders input-text with label', () => {
    const id = 'awesome'
    const label = 'The best label 4ever'

    const dataTestIds = testIds(id)

    render(InputText, {
      props: {
        id,
        label,
        name: 'input with label',
      },
    })

    screen.getByTestId(dataTestIds.el)
    screen.getByTestId(dataTestIds.label)

    screen.getByLabelText(label)
  })


  it('renders input-text with error message and error state', async () => {
    const id = 'awesome'
    const errorMessage = 'field is required'

    const dataTestIds = testIds(id)

    const validationSchema = {
      username(value: string) {
        return value === '' ? errorMessage : true
      },
    }

    render(InputWithValidation({
      id,
      label: 'test',
      name: 'username',
      validationSchema,
    }))

    const input = screen.getByTestId(dataTestIds.input)

    await userEvent.type(input, 'test')
    expect(input.value).toBe('test')
    await userEvent.type(input, '{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}')
    expect(input.value).toBe('')

    waitFor(() => {
      screen.getByText(errorMessage)

      expect(input).toHaveAttribute('aria-invalid', "true")
    })
  })

  it('Should not fail any accessibility tests', async () => {
    const id = 'awesome'

    render(InputText, {
      props: {
        id,
        name: 'accessability name',
        label: "The label",
        placeholder: 'Accessability Test',
      },
    })

    const inputText = screen.getByTestId(`input-text-${id}`)
    expect(await axe(inputText)).toHaveNoViolations()
  })
})
