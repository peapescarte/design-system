type Data = {
  colors: Record<string, any>
  spacing: Record<string, any>
}

type Args = {
  activeSafeList: boolean
  data: Data
}

export function safelist({ activeSafeList = true, data }: Args): string[] {
  if (activeSafeList) {
    const colors = data.colors ? safelistElementColors(safelistColors(data.colors)) : []
    const spacing = data.spacing ? safelistSpacing(data.spacing) : []

    const gaps = range(20).map(i => `gap-${i}`)
    const gridRows = range(14).map(i => `grid-rows-${i}`)
    const gridCols = range(14).map(i => `grid-cols-${i}`)
    const rowsStart = range(14).map(i => `row-start-${i}`)
    const colsStart = range(14).map(i => `col-start-${i}`)
    const rowsSpan = range(14).map(i => `row-span-${i}`)
    const colsSpan = range(14).map(i => `col-span-${i}`)

    return [
      'debug',
      'debug-all',
      ...colors,
      ...spacing,
      ...gaps,
      ...gridRows,
      ...gridCols,
      ...rowsStart,
      ...colsStart,
      ...rowsSpan,
      ...colsSpan,
    ]
  }


  return []
}

export function safelistColors(colors: Data['colors']) {
  const colorsNames: string[] = []

  for (const category in colors) {
    for (const color in colors[category]) {
      const current = colors[category][color]

      if (typeof current === 'string') {
        colorsNames.push(`${category}-${color}`)
      }

      if (typeof current === 'object') {
        for (const insideColor in colors[category][color]) {
          colorsNames.push(`${category}-${color}-${insideColor}`)
        }
      }
    }
  }

  return colorsNames
}

export function safelistElementColors(colorsNames: string[]) {
  const elements = ['text', 'bg', 'outline', 'fill', 'stroke', 'border', 'text-decoration-color', 'text-stroke-color']
  const elementColors: string[] = []

  elements.forEach((element: string) => {
    colorsNames.forEach((color: string) => {
      elementColors.push(`${element}-${color}`)
    })
  })

  return elementColors
}


export function safelistSpacing(spacing: Data['spacing']): string[] {
  const spacingTokenNames = Object.keys(spacing)
  const paddings = ['p', 'px', 'py', 'pl', 'pr', 'pt', 'pb']
  const margins = ['m', 'mx', 'my', 'ml', 'mr', 'mt', 'mb']

  const typos = ['text', 'tracking', 'decoration', 'underline-offset', 'indent', 'text-stroke']
  const svg = ['stroke']
  const border = ['border-a', 'border-x', 'border-y', 'border-l', 'border-r', 'border-t', 'border-b']

  const elements = [...paddings, ...margins, ...typos, ...svg, ...border]
  
  const elementSpacing: string[] = []

  elements.forEach((element: string) => {
    spacingTokenNames.forEach((space: string) => {
      elementSpacing.push(`${element}-${space}`)
    })
  })

  margins.forEach(margin =>  elementSpacing.push(`${margin}-auto`))
  paddings.forEach(padding =>  elementSpacing.push(`${padding}-auto`))

  return elementSpacing
}

export function range(size: number, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt)
}