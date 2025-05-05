import { defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
    body: {
        description: 'for body text',
        value: {}
    },
    heading: {
        description: 'for headings',
        value: {
            fontFamily: 'poppins',
            fontSize: { base: '2xl', md: '4xl' },
            fontWeight: { base: 'medium' }
        }
    },
    'sub-heading': {
        value: {
            fontSize: { base: 'md', md: 'xl' },
            fontWeight: { base: 'normal' }
        }
    },
    'header-link': {
        description: '',
        value: {}
    },
    'footer-link-title': {
        description: '',
        value: {}
    },
    'footer-link': {
        description: '',
        value: {}
    }
});
