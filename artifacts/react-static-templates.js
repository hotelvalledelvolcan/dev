

import React from 'react'
import universal, { setHasBabelPlugin } from 'react-universal-component'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('__react_static_root__/src/pages/404.js'), universalOptions)
      t_0.template = '__react_static_root__/src/pages/404.js'
      
const t_1 = universal(import('__react_static_root__/src/pages/AboutUsPage.jsx'), universalOptions)
      t_1.template = '__react_static_root__/src/pages/AboutUsPage.jsx'
      
const t_2 = universal(import('__react_static_root__/src/pages/ContactPage.jsx'), universalOptions)
      t_2.template = '__react_static_root__/src/pages/ContactPage.jsx'
      
const t_3 = universal(import('__react_static_root__/src/pages/HomePage.jsx'), universalOptions)
      t_3.template = '__react_static_root__/src/pages/HomePage.jsx'
      
const t_4 = universal(import('__react_static_root__/src/pages/RoomsPage.jsx'), universalOptions)
      t_4.template = '__react_static_root__/src/pages/RoomsPage.jsx'
      

// Template Map
export default {
  '__react_static_root__/src/pages/404.js': t_0,
'__react_static_root__/src/pages/AboutUsPage.jsx': t_1,
'__react_static_root__/src/pages/ContactPage.jsx': t_2,
'__react_static_root__/src/pages/HomePage.jsx': t_3,
'__react_static_root__/src/pages/RoomsPage.jsx': t_4
}
// Not Found Template
export const notFoundTemplate = "__react_static_root__/src/pages/404.js"

