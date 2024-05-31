"use client";
import { CopyBlock, dracula } from "react-code-blocks";

export default function Page() {
  return (
    <CopyBlock
      text={`console.log "0008 iI1L1 g9qCGQ ~-+"

        function updateGutters(cm) {
            var gutters = cm.display.gutters,
            __specs = cm.options.gutters;
        
            removeChildren(gutters);
        
            for (var i = 0; i < __specs.length; ++i) {
                var gutterClass = __specs[i];
                var gElt = gutters.appendChild(
                    elt(
                        "div",
                        null,
                        "CodeMirror-gutter " + gutterClass
                    )
                );
                if (gutterClass == "CodeMirror-linenumbers") {
                    cm.display.lineGutter = gElt;
                    gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
                }
            }
            gutters.style.display = i ? "" : "none";
            updateGutterSpace(cm);
        
            return false;
        }
        `}
      language="jsx"
      showLineNumbers={true}
      theme={dracula}
      wrapLongLines
      codeBlock
      customStyle={{
        maxHeight: "608px",
        overflow: "auto",
        borderRadius: "20px",
      }}
    />
  );
}
