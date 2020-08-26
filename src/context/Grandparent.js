import React from 'react'

import Parent from './Parent'

export default function Grandparent(){
  return <div><span>I'm the Grandparent</span><Parent /></div>
}
