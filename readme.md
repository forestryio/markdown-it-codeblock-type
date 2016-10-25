# Markdown-it Codeblock Type

Flag the type of codeblock for conversion between markdown and html.  ***Sometimes markdown-it will place the attribute on `<code>` and sometimes it will place it on `<pre>` that's the behavior of markdown-it.***

## Usage

```js
import CodeblockType from "markdown-it-codeblock-type"
import MarkdownIt from "markdown-it"

// --

renderer = new MarkdownIt()
renderer.use(
  CodeblockType
)
```
