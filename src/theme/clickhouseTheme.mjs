
import darkTheme from 'prism-react-renderer/themes/vsDark/index.cjs.js';

export default {
  plain: {
    color: '#D4D4D4',
    backgroundColor: '#1E1E1E',
  },
  styles: [
/*    ...darkTheme.styles, */
    {
      types: ['title'],
      style: {
        color: '#569CD6',
        fontWeight: 'bold',
      },
    },
    {
      types: ['property', 'parameter'],
      style: {
        color: '#9CDCFE',
      },
    },
    {
      types: ['script'],
      style: {
        color: '#D4D4D4',
      },
    },
    {
      types: ['boolean', 'arrow', 'atrule', 'tag'],
      style: {
        color: '#569CD6',
      },
    },
    {
      types: ['number', 'color', 'unit'],
      style: {
        color: '#B5CEA8',
      },
    },
    {
      types: ['font-matter'],
      style: {
        color: '#CE9178',
      },
    },
    {
      types: ['keyword', 'rule'],
      style: {
        color: '#C586C0',
      },
    },
    {
      types: ['regex'],
      style: {
        color: '#D16969',
      },
    },
    {
      types: ['maybe-class-name'],
      style: {
        color: '#4EC9B0',
      },
    },
    {
      types: ['constant'],
      style: {
        color: '#4FC1FF',
      },
    },
  ],
};