// const sortOrderSmacss = require('stylelint-config-property-sort-order-smacss/generate')

/*
  # [Special cases]
  * content
  * CSS custom properties
  * [appearance: none]
  * 

  # [Display Stuff]
  * display
  * justify's
  * aligns
  * flex's
  * grid's
  
  # [Positioning]
  * position
  * top right bottom left
  * z-index ??
  
  # [Box Model]
  * width
  * height
  * margin
  * padding
  * border
  * box-sizing

  # [Background Shadow | Appearance ]
  * Background
  * Box-shadow
  * outline
  * Filter
  * Backdrop
  * Blends-modes
  
  # [Typography]
  * Text-color ???
  * font-weight
  * font-family
  * text-aligns
  * white-space
  * break-word
  * font-size
  * text-transform
  * vertical-align
  * ident
  * font-stretch
  * direction

  # [Transform animations | Transitions]
  * Transforms
  * Transitions
  * Animations

  # [Misc]
  * Overflow
  * Opacity
  * Scroll
  * will-change
  * object-fit|position
  * cursor

*/

module.exports = {
  "extends": [
    // "stylelint-config-property-sort-order-smacss",
    "stylelint-config-prettier",
  ],

  "plugins": ["stylelint-order"],

  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      }
    ],
    "rule-empty-line-before": "always",

    "declaration-block-no-duplicate-custom-properties": true,

    "declaration-block-semicolon-newline-after": "always",

    "block-opening-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-closing-brace-newline-after": "always",

    "declaration-empty-line-before": ["never", {
      except: [ "after-comment"],
      ignore: ["after-declaration"]
    }],

    // "declaration-colon-newline-after": "always-multi-line",
    "value-list-comma-newline-after": "never-multi-line",
    "value-list-comma-newline-before": "always-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",

    "order/order": [
      "custom-properties",
      "dollar-variables",
      "declarations",
      "rules",
    ],

    "order/properties-order": [
      {
        groupName: "Edge cases",
        "emptyLineBefore": "always",
        "properties": [
          "appearance",
          "content",

        ]
      },

      {
        "groupName": "Display",
        "order": "flexible",
        "emptyLineBefore": "always",
        "properties": [
          "display",

          "flex",
          "flex-direction",
          "flex-grow",
          "flex-shrink",
          "flex-wrap",
          "flex-basis",

          "order",
          "justify-content",
          "justify-items",
          "align-items",
          "align-content",

          "self-align",
          "justify-self",

          "grid",
          "grid-row",
          "grid-row-start",
          "grid-row-end",

          "grid-column",
          "grid-column-start",
          "grid-column-end",

          "grid-template-areas",
          "grid-template-rows",
          "grid-template-column",

          "grid-auto-flow",
          "grid-auto-columns",
          "grid-auto-rows",
          "grid-gap",
          "gap"
        ]
      },
      {
        "groupName": "Positioning",
        "order": "flexible",
        "emptyLineBefore": "always",
        "properties": [
          "position",
          "top",
          "right",
          "bottom",
          "left",
          "z-index"
        ]
      },
      {
        "groupName": "dimensions",
        "order": "flexible",
        "emptyLineBefore": "always",
        "properties": [
          "box-sizing",

          "height",
          "min-height",
          "max-height",
          "width",
          "max-width",
          "min-width",

          "margin",
          "margin-top",
          "margin-right",
          "margin-bottom",
          "margin-left",

          "padding",
          "padding-top",
          "padding-right",
          "padding-bottom",
          "padding-left",

          "border",
          "border-width",
          "border-style",
          "border-top",
          "border-right",
          "border-bottom",
          "border-left",

          "border-collapse",
          "border-image",
          "border-radius",
        ]
      },
      {
        "groupName": "Appearance",
        "order": "flexible",
        "emptyLineBefore": "always",
        "properties": [
          "opacity",

          "background",
          "background-color",
          "background-image",
          "background-origin",
          "background-clip",
          "background-position",
          "background-repeat",
          "background-size",
          "background-bleed-mode",
          "background-attachment",

          "backdrop",
          "backdrop-filter",
          "backface-visibility",

          "filter",

          "box-shadow",

          "outline",
          "outline-color",
          "outline-offset",
          "outline-style",
          "outline-width",
        ]
      },
      {
        "groupName": "Typography",
        "order": "flexible",
        "emptyLineBefore": "always",
        "properties": [
          "color",

          "font",
          "font-size",
          "font-weight",
          "font-family",
          "font-style",
          "font-stretch",
          "font-pallete",

          "text-anchor",

          "text-decoration",
          "text-decoration-line",
          "text-decoration-color",
          "text-decoration-style",
          "text-decoration-thickness",

          "text-transform",
          "text-overflow",
          "text-rendering",
          "text-orientation",
          "text-emphasis",

          "text-ident",
          "text-align",
          "text-align-last",
          "direction",
          "vertical-align",

          "letter-spacing",
          "line-hight",
          "word-break",
          "word-spacing",
          "white-space",
          "text-shadow",
          "overflow-wrap"
        ]
      },
      {
        "groupName": "Transition",
        "order": "flexible",
        "emptyLineBefore": "always",
        "properties": [
          "transition",
          "transition-delay",
          "transition-duration",
          "transition-property",
          "transition-timing-function",

          "transform",
          "transform-origin",
          "transform-style",
          "transform-box",

          "animation",
          "animation-name",
          "animation-delay",
          "animation-direction",
          "animation-fill-mode",
          "animation-play-state",
          "animation-iteration-count",
          "animation-timing-function",
        ]
      },
      {
        "groupName": "Misc",
        "order": "flexible",
        "emptyLineBefore": "always",
        "properties": [
          "overflow",
          "overflow-x",
          "overflow-y",
          "overflow-wrap",
          "overflow",
          "scroll-behavior",
          "scroll-margin",
          "scroll-padding",
          "scroll-snap",
          "scroll-snap-stop",
          "scroll-snap-align",
          "will-change",
          "cursor",
          "user-select",
          "user-drag"
        ]
      }
    ],
  }
}