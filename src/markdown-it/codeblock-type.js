function parseAttrs(state) {
  state.tokens.forEach((token) => {
    if (token.type == "fence" || token.type == "code_block") {
      if (!token.attrs) {
        token.attrs = [
          //
        ]
      }

      if (token.type == "fence") {
        token.attrs.push([
          "data-md-type", "gfm"
        ])
      }

      else {
        token.attrs.push([
          "data-md-type", "spec"
        ])
      }
    }
  })
}

// --

export default function kramdownAttrs(markdown) {
  markdown.core.ruler.before("replacements",
    "kramdown_attrs", parseAttrs
  );
}
