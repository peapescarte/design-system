import { reactive } from "vue"

import type { Args, Code, Codes, UseNavigateArgs } from './types'

interface NavigateInsideRow {
  to: 'RIGHT' | 'LEFT'
  query: string | string[]
}

export function useNavigate(codes: Codes, args?: UseNavigateArgs) {
  function navigate({ code }: KeyboardEvent) {
    const codeKey = code as Code

    const executeFallback = () => {
      if (!args?.fallback)
        return false

      const excludeKeysValidation = (exclude: Code | Code[]) =>
        Array.isArray(exclude)
          ? !exclude.includes(codeKey)
          : codeKey !== exclude

      return args?.exclude
        ? !codes.hasOwnProperty(codeKey) && excludeKeysValidation(args.exclude)
        : !codes.hasOwnProperty(codeKey)
    }

    if (executeFallback())
      args?.fallback()

    codes.hasOwnProperty(codeKey) && codes[codeKey]?.()
  }

  return {
    navigate,
  }
}


export function useNavigateProvider({ target,  query }: Args) {
  const elementFocus = reactive({
    id: '',
    index: -1,
    rowIndex: -1,
  })

  function focusListItem(index?: number) {
    const indexItem = index ?? elementFocus.index
    const itemTarget = target?.value as unknown as HTMLElement
    resetRowIndex()

    if (index !== undefined)
      elementFocus.index = index

    setTimeout(() => {
      const item = itemTarget.children[indexItem] as HTMLDListElement
      const elementFound = query &&  item.querySelector(query)
        ? item.querySelector(query) as HTMLElement
        : item 

      elementFocus.id = item?.id ?? ''
      elementFound?.focus()
    }, 0)
  }

  function focusOnPreviousItem() {
    if (elementFocus.index > 0) {
      elementFocus.index -= 1
      focusListItem()
    }
  }

  function focusOnNextItem(dataLength: number) {
    if (elementFocus.index < dataLength - 1) {
      elementFocus.index += 1
      focusListItem()
    }
  }

  function focusOnFirstItem() {
    focusListItem(0)
  }

  function focusOnLastItem(dataLength: number) {
    focusListItem(dataLength - 1)
  }

  function focusInsideRow({ query, to }: NavigateInsideRow) {
    const itemIndex = elementFocus.index >= 0 ? elementFocus.index : 0
    const itemTarget = target?.value as unknown as HTMLElement
    const rowElement = itemTarget.children[itemIndex] as HTMLElement

    const allElementInteractiveInsideRow = Array.isArray(query)
      ? query.flatMap((queryItem) => Array.from(rowElement.querySelectorAll(queryItem))).filter(el => el) as HTMLElement[]
      : Array.from(rowElement.querySelectorAll(query)) as HTMLElement[]

    if (!allElementInteractiveInsideRow.length)
      return
      
    const hasMoreRightElements  = elementFocus.rowIndex < allElementInteractiveInsideRow.length - 1
      
    if (to === 'RIGHT' && hasMoreRightElements) {
      elementFocus.rowIndex += 1
      allElementInteractiveInsideRow[elementFocus.rowIndex]?.focus()
    }
    
    if( to === 'LEFT') {
      elementFocus.rowIndex =  elementFocus.rowIndex >= 0 ? elementFocus.rowIndex - 1 : -1

      elementFocus.rowIndex < 0
        ? rowElement.focus()
        : allElementInteractiveInsideRow[elementFocus.rowIndex]?.focus()
    }
  }


  function isItemFocused(arg: { index?: number; id?: string }) {
    if (arg.id)
      return arg.id === elementFocus.id

    return arg.index === elementFocus.index
  }

  function resetStateFocus() {
    elementFocus.id = ''
    elementFocus.index = -1
    elementFocus.rowIndex = -1
  }

  function resetRowIndex() {
    elementFocus.rowIndex = -1
  }

  return {
    elementFocus,
    isItemFocused,
    resetStateFocus,
    focusListItem,
    focusOnPreviousItem,
    focusOnNextItem,
    focusOnFirstItem,
    focusOnLastItem,
    focusInsideRow,
  }
}