module.exports = {
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
  plugins: [
    // prettier-ignore
    'stylelint-order',
    'stylelint-scss',
  ],
  rules: {
    /**
     * Stylelint
     * https://stylelint.io/user-guide/rules/list
     */

    /**
     * Avoid Errors
     * https://stylelint.io/user-guide/rules/#avoid-errors
     */

    // Descending
    'no-descending-specificity': true,

    // Duplicate
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],
    'font-family-no-duplicate-names': true,
    'keyframe-block-no-duplicate-selectors': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,

    // Empty
    'block-no-empty': true,
    'comment-no-empty': true,
    'no-empty-source': true,

    // Invalid
    'color-no-invalid-hex': true,
    'function-calc-no-unspaced-operator': true,
    'keyframe-declaration-no-important': true,
    'named-grid-areas-no-invalid': true,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': true,
    'string-no-newline': true,

    // Irregular
    'no-irregular-whitespace': true,

    // Missing
    'custom-property-no-missing-var-function': true,
    'font-family-no-missing-generic-family-keyword': true,

    // Non-standard
    'function-linear-gradient-no-nonstandard-direction': true,

    // Overrides
    'declaration-block-no-shorthand-property-overrides': true,

    // Unknown
    // 'annotation-no-unknown': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['value'],
      },
    ],
    // 'declaration-property-value-no-unknown': null,
    'function-no-unknown': null,
    'scss/function-no-unknown': [
      true,
      {
        ignoreFunctions: ['global'],
      },
    ],
    'media-feature-name-no-unknown': true,
    'no-unknown-animations': true,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes', 'compose-with'],
        ignoreSelectors: [':export', /^:import/],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export', 'import', 'global', 'local', 'external'],
      },
    ],
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
        ignoreTypes: ['from'],
      },
    ],
    'unit-no-unknown': true,

    /**
     * Enforce conventions
     * https://stylelint.io/user-guide/rules/#enforce-conventions
     */

    // At-rule
    // 'at-rule-allowed-list': null,
    // 'at-rule-disallowed-list': null,
    'at-rule-no-vendor-prefix': true,
    'at-rule-property-required-list': {
      'font-face': ['font-family', 'font-style', 'font-weight'],
    },

    // Color
    // 'color-hex-alpha': null,
    'color-named': 'never',
    // 'color-no-hex': null,

    // Comment
    // 'comment-word-disallowed-list': null,

    // Declaration
    'declaration-no-important': true,
    'declaration-property-unit-allowed-list': {
      'line-height': [],
    },
    'declaration-property-unit-disallowed-list': {
      '/^animation/': ['ms'],
      '/^transition/': ['s'],
    },
    // 'declaration-property-value-allowed-list': null,
    // 'declaration-property-value-disallowed-list': null,

    // Function
    // 'function-allowed-list': null,
    // 'function-disallowed-list': null,
    'function-url-no-scheme-relative': true,
    // 'function-url-scheme-allowed-list': null,
    // 'function-url-scheme-disallowed-list: null,

    // Length
    'length-zero-no-unit': true,

    // Media feature
    // 'media-feature-name-allowed-list': null,
    // 'media-feature-name-disallowed-list': null,
    'media-feature-name-no-vendor-prefix': true,
    // 'media-feature-name-unit-allowed-list': null,
    // 'media-feature-name-value-allowed-list': null,

    // Property
    // 'property-allowed-list': null,
    'property-disallowed-list': ['flex', 'flex-flow'],
    'property-no-vendor-prefix': true,

    // Rule
    // 'rule-selector-property-disallowed-list': null,

    // Selector
    // 'selector-attribute-name-disallowed-list': null,
    // 'selector-attribute-operator-allowed-list': null,
    // 'selector-attribute-operator-disallowed-list': null,
    // 'selector-combinator-allowed-list': null,
    // 'selector-combinator-disallowed-list': null,
    // 'selector-disallowed-list': null,
    // 'selector-no-qualifying-type': null,
    // 'selector-no-vendor-prefix': null,
    // 'selector-pseudo-class-allowed-list': null,
    // 'selector-pseudo-class-disallowed-list': null,
    // 'selector-pseudo-element-allowed-list': null,
    // 'selector-pseudo-element-disallowed-list': null,

    // Unit
    // 'unit-allowed-list': null,
    'unit-disallowed-list': ['turn'],

    // Value
    'value-no-vendor-prefix': true,

    // Case
    'function-name-case': 'lower',
    'selector-type-case': 'lower',
    'value-keyword-case': 'lower',

    // Empty lines
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'blockless-after-same-name-blockless'],
        ignore: ['after-comment'],
        ignoreAtRules: ['import'],
      },
    ],
    // 'comment-empty-line-before': null,
    // 'custom-property-empty-line-before': null,
    // 'declaration-empty-line-before': null,
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],

    // Max & min
    'declaration-block-single-line-max-declarations': 1,
    // 'declaration-property-max-values': null,
    'max-nesting-depth': 3,
    'number-max-precision': 3,
    'selector-max-attribute': [
      1,
      {
        ignoreAttributes: ['/^data-/'],
      },
    ],
    // 'selector-max-class': null,
    // 'selector-max-combinators': null,
    // 'selector-max-compound-selectors': null,
    // 'selector-max-id': null,
    // 'selector-max-pseudo-class': null,
    // 'selector-max-specificity': null,
    // 'selector-max-type': null,
    'selector-max-universal': 0,
    // 'time-min-milliseconds': null,

    // Notation
    'alpha-value-notation': 'number',
    'color-function-notation': 'legacy',

    // Color
    'color-hex-length': 'short',
    'font-weight-notation': 'numeric',
    'hue-degree-notation': 'number',
    'import-notation': 'string',
    'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
    'media-feature-range-notation': 'prefix',
    'selector-not-notation': 'simple',
    'selector-pseudo-element-colon-notation': 'double',

    // Pattern
    // 'comment-pattern': null,
    // 'custom-media-pattern': null,
    // 'custom-property-pattern': null,
    // 'keyframes-name-pattern': null,
    // 'selector-class-pattern': null,
    // 'selector-id-pattern': null,
    // 'selector-nested-pattern': null,

    // Quotes
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',

    // Redundant
    // 'declaration-block-no-redundant-longhand-properties': null,
    'shorthand-property-no-redundant-values': true,

    // Whitespace inside
    'comment-whitespace-inside': 'always',

    /**
     * Настройки плагина stylelint-order
     * https://github.com/hudochenkov/stylelint-order
     */

    'order/properties-order': [
      [
        {
          groupName: 'all',
          properties: [
            // prettier-ignore
            'all',
          ],
        },
        {
          groupName: 'appearance',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'appearance',
          ],
        },
        {
          groupName: 'contents',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'content',
            'quotes',
          ],
        },
        {
          groupName: 'font-adjust',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            '-webkit-text-size-adjust',
            '-ms-text-size-adjust',
            'font-size-adjust',
            'text-rendering',
          ],
        },
        {
          groupName: 'font-general',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'font',
            'font-family',
            'font-size',
            'font-style',
            'font-weight',
            'font-variant',

            'font-stretch',
            'font-effect',
            'font-emphasize',
            'font-emphasize-position',
            'font-emphasize-style',
            'line-height',
          ],
        },
        {
          groupName: 'font-src',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'src',
          ],
        },
        {
          groupName: 'text-general',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'vertical-align',

            'text-align',
            'text-align-last',

            'text-transform',
            'text-decoration',

            'text-indent',
            'text-justify',
            'text-outline',

            'text-emphasis',
            'text-emphasis-color',
            'text-emphasis-style',
            'text-emphasis-position',
          ],
        },
        {
          groupName: 'text-spacing',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'letter-spacing',
            'word-spacing',
          ],
        },
        {
          groupName: 'text-formatting',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'white-space',
            'word-break',
            'word-wrap',
            'overflow-wrap',

            'text-overflow',
            'text-overflow-ellipsis',
            'text-overflow-mode',

            'text-wrap',
            'hyphens',
          ],
        },
        {
          groupName: 'tab-size',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'tab-size',
          ],
        },
        {
          groupName: 'table-and-list',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'table-layout',
            'border-collapse',
            'border-spacing',
            'empty-cells',
            'caption-side',

            'list-style',
            'list-style-position',
            'list-style-type',
            'list-style-image',
          ],
        },
        {
          groupName: 'counters',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'counter-reset',
            'counter-increment',
          ],
        },
        {
          groupName: 'position',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'position',
          ],
        },
        {
          groupName: 'z-index',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'z-index',
          ],
        },
        {
          groupName: 'position-params',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'top',
            'right',
            'bottom',
            'left',
          ],
        },
        {
          groupName: 'display',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'display',
          ],
        },
        {
          groupName: 'columns',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'columns',
            'column-fill',
            'column-rule',
            'column-span',
            'column-count',
            'column-width',
          ],
        },
        {
          groupName: 'flex-and-grid',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'flex',
            'flex-basis',
            'flex-direction',
            'flex-flow',
            'flex-wrap',

            'grid',
            'grid-area',
            'grid-template',
            'grid-template-areas',
            'grid-template-rows',
            'grid-template-columns',
            'grid-row',
            'grid-row-start',
            'grid-row-end',
            'grid-column',
            'grid-column-start',
            'grid-column-end',
            'grid-auto-rows',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-gap',
            'grid-row-gap',
            'grid-column-gap',

            'gap',
            'row-gap',
            'column-gap',
          ],
        },
        {
          groupName: 'flex-align-and-justify',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'align-content',
            'align-items',
            'justify-content',
            'justify-items',
          ],
        },
        {
          groupName: 'flex-self',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'flex-grow',
            'flex-shrink',
            'align-self',
            'justify-self',
          ],
        },
        {
          groupName: 'flex-order',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'order',
          ],
        },
        {
          groupName: 'float',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'float',
            'clear',
          ],
        },
        {
          groupName: 'overflow',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'overflow',
            'overflow-x',
            'overflow-y',
          ],
        },
        {
          groupName: 'scroll',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'touch-action',
            'scroll-behavior',
            'overscroll-behavior',
            '-webkit-overflow-scrolling',
          ],
        },
        {
          groupName: 'clip',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'clip',
            'clip-path',
          ],
        },
        {
          groupName: 'box-sizing',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'box-sizing',
          ],
        },
        {
          groupName: 'size',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'object-fit',
            'width',
            'height',
          ],
        },
        {
          groupName: 'size-ranges',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'min-width',
            'max-width',
            'min-height',
            'max-height',
          ],
        },
        {
          groupName: 'box-model',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',

            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',

            'border',
            'border-width',
            'border-style',
            'border-color',
            'border-top',
            'border-top-width',
            'border-top-style',
            'border-top-color',
            'border-right',
            'border-right-width',
            'border-right-style',
            'border-right-color',
            'border-bottom',
            'border-bottom-width',
            'border-bottom-style',
            'border-bottom-color',
            'border-left',
            'border-left-width',
            'border-left-style',
            'border-left-color',
            'border-image',
            'border-image-source',
            'border-image-slice',
            'border-image-width',
            'border-image-outset',
            'border-image-repeat',
          ],
        },
        {
          groupName: 'border-radius',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'border-radius',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius',
          ],
        },
        {
          groupName: 'outline',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'outline',
            'outline-width',
            'outline-style',
            'outline-color',
            'outline-offset',
          ],
        },
        {
          groupName: 'foreground-and-background',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'color',
            'caret-color',

            'background',
            'background-color',
            'background-image',
            'background-attachment',
            'background-position',
            'background-position-x',
            'background-position-y',
            'background-clip',
            'background-origin',
            'background-size',
            'background-repeat',
            'background-blend-mode',
          ],
        },
        {
          groupName: 'svg-related',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'alignment-baseline',
            'baseline-shift',
            'dominant-baseline',
            'text-anchor',
            'writing-mode',

            'fill',
            'fill-opacity',
            'fill-rule',
            'stroke',
            'stroke-dasharray',
            'stroke-dashoffset',
            'stroke-linecap',
            'stroke-linejoin',
            'stroke-miterlimit',
            'stroke-opacity',
            'stroke-width',

            'color-interpolation',
            'color-interpolation-filters',
            'color-profile',
            'color-rendering',
            'flood-color',
            'flood-opacity',
            'image-rendering',
            'lighting-color',
            'marker-start',
            'marker-mid',
            'marker-end',
            'mask',
            'shape-rendering',
            'stop-color',
            'stop-opacity',
          ],
        },
        {
          groupName: 'shadows',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'text-shadow',
            'box-shadow',
            'box-decoration-break',
          ],
        },
        {
          groupName: 'nav',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'nav-index',
            'nav-up',
            'nav-right',
            'nav-down',
            'nav-left',
          ],
        },
        {
          groupName: 'opacity',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'opacity',
          ],
        },
        {
          groupName: 'visibility',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'visibility',
          ],
        },
        {
          groupName: 'filters',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'filter',
            'backdrop-filter',
            'mix-blend-mode',
            'isolation',
          ],
        },
        {
          groupName: 'pointer-events',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'pointer-events',
          ],
        },
        {
          groupName: 'cursor',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'cursor',
          ],
        },
        {
          groupName: 'transform',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'transform',
            'transform-box',
            'transform-style',
            'transform-origin',
          ],
        },
        {
          groupName: '3d-transform',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'perspective',
            'perspective-origin',
            'backface-visibility',
          ],
        },
        {
          groupName: 'transition',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'transition',
            'transition-property',
            'transition-timing-function',
            'transition-delay',
            'transition-duration',
          ],
        },
        {
          groupName: 'animation',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'animation',
            'animation-name',
            'animation-direction',
            'animation-timing-function',
            'animation-delay',
            'animation-duration',
            'animation-iteration-count',
            'animation-play-state',
          ],
        },
        {
          groupName: 'will-change',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'will-change',
          ],
        },
        {
          groupName: 'user-select',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'user-select',
          ],
        },
        {
          groupName: 'resize',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'resize',
          ],
        },
        {
          groupName: 'speak',
          noEmptyLineBetween: true,
          emptyLineBefore: 'always',
          properties: [
            // prettier-ignore
            'speak',
            'speak-as',
          ],
        },
      ],
    ],
  },
};
