import { defineConfig } from '@pandacss/dev';
import { globalCss, textStyles } from '@app/utilities';
import { createPreset } from '@park-ui/panda-preset';
import violet from '@park-ui/panda-preset/colors/violet';
import mauve from '@park-ui/panda-preset/colors/mauve';

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    presets: [createPreset({ accentColor: violet, grayColor: mauve, radius: 'sm' })],
    globalCss,

    // Where to look for your css declarations
    include: ['./app/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

    // Files to exclude
    exclude: [],

    patterns: {
        extend: {
            container: {
                defaultValues: {
                    maxW: '6xl'
                }
            }
        }
    },

    // Useful for theme customization
    theme: {
        extend: {
            textStyles,
            tokens: {
                fonts: {
                    inter: { value: 'var(--font-inter)' },
                    poppins: { value: 'var(--font-poppins)' }
                },
                sizes: {
                    'breakpoint-3xl': {
                        value: '1920px'
                    }
                }
            },
            recipes: {
                button: {
                    variants: {
                        variant: {
                            solid: {
                                backgroundColor: 'var(--colors-fg-default)',
                                color: 'var(--colors-black)',
                                _hover: {
                                    backgroundColor: 'var(--colors-black)',
                                    color: 'var(--colors-fg-default)'
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    // The output directory for your css system
    outdir: 'styled-system',

    jsxFramework: 'react'
});
