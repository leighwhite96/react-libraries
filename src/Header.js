import React from 'react'
import { Header, Image, Reveal } from 'semantic-ui-react'

const HeaderExample = () => (
  <Header as='h2'>
  <Reveal animated='rotate'>
    <Reveal.Content visible>
        <Image shape='circular' size='small' src='./headshot.jpg' />
    </Reveal.Content >
    <Reveal.Content hidden>
    <Image shape='circular' size='small' src='./cat.png' />
    </Reveal.Content >
    </Reveal>
    {' '}Leigh
  </Header>
)

export default HeaderExample
