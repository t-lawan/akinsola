import React from "react"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import styled from "styled-components"
import SurferImage from "../images/surfer.png"
const PARAGRAPH = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.2rem;
  color: red;
`

const EXTERNALLINK = styled.a`
  margin-bottom: 1rem;
  text-decoration: underline;
  :hover {
    cursor: url(${SurferImage});
  }
`

export const renderOptions = (links) => {

  // create an entry map
  const entryMap = new Map()
  // loop through the block linked entries and add them to the map
  for (const entry of links) {
    entryMap.set(entry.contentful_id, entry)
  }

  return {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <PARAGRAPH>{children.toLowerCase()}</PARAGRAPH>
      ),
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <EXTERNALLINK href={node.data.uri} target="__blank">
          {children}
        </EXTERNALLINK>
      ),
      [INLINES.ASSET_HYPERLINK]: (node, children) => {
        const entry = entryMap.get(node.data.target.sys.id);

        return (
          <EXTERNALLINK href={entry.url} target="__blank">
            {" "}
            {children}{" "}
          </EXTERNALLINK>
        )
      },
    },
  }
}

export const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <PARAGRAPH>{children.toLowerCase()}</PARAGRAPH>
    ),
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <EXTERNALLINK href={node.data.uri} target="__blank">
        {children}
      </EXTERNALLINK>
    ),
    [INLINES.ASSET_HYPERLINK]: (node, children) => {
      return (
        <EXTERNALLINK href={"node.data.target"} target="__blank">
          {" "}
          {children}{" "}
        </EXTERNALLINK>
      )
    },
  },
}
