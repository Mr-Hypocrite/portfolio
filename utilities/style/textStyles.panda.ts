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
            fontSize: { base: '3xl', md: '8xl' },
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
    },

    // portable text

    pth1: {
        description: 'portable text h1',
        value: {
            fontSize: '5xl',
            fontWeight: 'medium'
        }
    },
    pth2: {
        description: 'portable text h2',
        value: {
            fontSize: '4xl',
            fontWeight: 'medium'
        }
    },
    pth3: {
        description: 'portable text h3',
        value: {
            fontSize: '3xl',
            fontWeight: 'medium'
        }
    },
    pth4: {
        description: 'portable text h4',
        value: {
            fontSize: '2xl',
            fontWeight: 'medium'
        }
    },

    pth5: {
        description: 'portable text h5',
        value: {
            fontSize: 'xl',
            fontWeight: 'medium'
        }
    },
    pth6: {
        description: 'portable text h6',
        value: {
            fontSize: 'lg',
            fontWeight: 'medium'
        }
    }
    // portable text
});
