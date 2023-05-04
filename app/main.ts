import { Editor, defaultValueCtx } from '@milkdown/core'
import { commonmark } from '@milkdown/preset-commonmark'
import { gfm } from '@milkdown/preset-gfm'
import { nord } from '@milkdown/theme-nord'
import { placeholder, placeholderCtx } from '../src/index'

import '@milkdown/theme-nord/style.css'
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

Editor.make()
  .config((ctx) => {
    ctx.set(defaultValueCtx, '')
    ctx.set(placeholderCtx, 'Have fun!')
  })
  .config(nord)
  .use(commonmark)
  .use(gfm)
  .use(placeholder)
  .create()
