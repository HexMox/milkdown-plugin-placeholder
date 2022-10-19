import { Editor, defaultValueCtx } from '@milkdown/core'
import { gfm } from '@milkdown/preset-gfm'
import { nordLight } from '@milkdown/theme-nord'
import { placeholder, placeholderCtx } from '../src/index'

import '../styles/index.css'

const markdown = `
# Milkdown Test

## Blockquote

> Milkdown is an editor.

## Marks Paragraph

Hello, ***milkdown* nice \`to\` meet *you***!  
There should be a line break before this.

\`\`\`typescript
const shiki = require('shiki') 
shiki.getHighlighter({
  theme: 'nord'
}).then(highlighter => {
  console.log(highlighter.codeToHtml(\`console.log('shiki');\`, 'js'))
})

// <pre class="shiki" style="background-color: #2e3440"><code>
//   <!-- Highlighted Code -->
// </code></pre>
\`\`\`

`

const root = document.getElementById('app')

if (!root) throw new Error()

new Editor()
  .config((ctx) => {
    ctx.set(defaultValueCtx, '')
    ctx.set(placeholderCtx, 'Have fun!')
  })
  .use(nordLight)
  .use(gfm)
  .use(placeholder)
  .create()
