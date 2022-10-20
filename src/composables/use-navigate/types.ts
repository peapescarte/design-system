import type { Ref, VNodeRef } from "vue"

type Arrows = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight'
type Commands = 'Home' | 'End' | 'Space' | 'Enter' | 'NumpadEnter' | 'Escape' | 'Tab' | 'Delete' | 'Backspace'

type Numbers = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Alphabetic = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'U' | 'T' | 'W' | 'X' | 'Y' | 'Z'

type DigitNumbers = `Digit${Numbers}`
type NumpadNumbers = `Numpad${Numbers}`
type KeyLetters = `Key${Alphabetic}`

export type Code = Commands | Arrows | KeyLetters | DigitNumbers | NumpadNumbers

export type Codes = Partial<Record<Code, () => void>>

export type UseNavigateArgs = {
  fallback: () => void
  exclude?: Code | Code[]
}

export type Args = {
  target: Ref<VNodeRef> | undefined
  query?: string
}

