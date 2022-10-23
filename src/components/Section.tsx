import { styled } from '@stitches/react';

const Section = styled('section', {
    padding: '20px 0',
    
    // Apply special highlighting to links in the section unless the <a> contains .no-highlight class
    '& a': {
        '&:not(.no-highlight)': {
            color: '#DFF962',
            fontWeight: 500
        }
    }
});

export default Section;