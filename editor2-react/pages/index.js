import React, { useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import EditorSDK from '@chili-publish/editor-sdk';
import Editor from '../components/Editor';



const Home = () => {
  return (
    <div id="NOTCONTAINER">
      <Head>
        <title>CHILI Integration Test</title>
        <meta name="description" content="Integration Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Editor editorID={"chili-editor"} />

    </div>
  )
}

export default Home
