import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
     网站建设中...
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>太初实验室</title>
