import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      brand: {
        100: '#c1bdb3',
        200: '#7f7979',
        300: '#5f5b6b',
        400: '#3d3b3c',
        450: '#141414',
        500: '#0e0e0e'
      },
      spain: '#ff0340',
      caribbean: '#00ffa1',
      mexico: '#00f400',
      colombia: '#ffff01',
      peru: '#fe0000',
      chile: '#0081ff',
      argentina: '#00f7ff'
    }
  },
  transformers: [transformerVariantGroup(), transformerDirectives()],
  shortcuts: {
    'text-gradient':
      'w-fit text-transparent bg-clip-text bg-gradient-to-r from-brand-100 ' +
      'to-brand-300'
  },
  safelist: [
    'spain',
    'caribbean',
    'mexico',
    'colombia',
    'peru',
    'chile',
    'argentina'
  ].flatMap(color => [
    `text-${color}`,
    `border-${color}`,
    `shadow-${color}`,
    `first:text-${color}`
  ])
})
