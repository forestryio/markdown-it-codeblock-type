import MarkdownIt from "markdown-it"
import CodeblockType from "../../../src/markdown-it/codeblock-type"
import assert from "assert"

// --

const renderer = new MarkdownIt()
renderer.use(
  CodeblockType
)

// --

describe("CodeblockType", () => {
  it("```\\ncode\\n```", () => {
    let result = renderer.render("```\ncode\n```").trim()
    assert.equal(result,
      '<pre><code data-md-type="gfm">code\n</code></pre>'
    )
  })

  //

  it("    code", () => {
    let result = renderer.render("    code").trim()
    assert.equal(result,
      '<pre data-md-type="spec"><code>code</code></pre>'
    )
  })
})
