import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const DividedGrid = () => (
  <Grid columns={4} divided>
    <Grid.Row>
      <Grid.Column>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at sagittis sem, a ullamcorper augue. Morbi in massa volutpat, venenatis risus ac, mattis ligula. Vestibulum ipsum sapien, pulvinar quis dictum efficitur, tristique vitae leo. Aenean luctus in elit vitae vestibulum. Fusce est arcu, auctor quis nunc ac, ultrices bibendum diam. Duis vel justo velit. Donec eleifend orci diam, in convallis tortor molestie nec.</p>
      </Grid.Column>
      <Grid.Column>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at sagittis sem, a ullamcorper augue. Morbi in massa volutpat, venenatis risus ac, mattis ligula. Vestibulum ipsum sapien, pulvinar quis dictum efficitur, tristique vitae leo. Aenean luctus in elit vitae vestibulum. Fusce est arcu, auctor quis nunc ac, ultrices bibendum diam. Duis vel justo velit. Donec eleifend orci diam, in convallis tortor molestie nec.</p>
      </Grid.Column>
      <Grid.Column>
        <Image src='./cat.png' />
      </Grid.Column>
      <Grid.Column>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at sagittis sem, a ullamcorper augue. Morbi in massa volutpat, venenatis risus ac, mattis ligula. Vestibulum ipsum sapien, pulvinar quis dictum efficitur, tristique vitae leo. Aenean luctus in elit vitae vestibulum. Fusce est arcu, auctor quis nunc ac, ultrices bibendum diam. Duis vel justo velit. Donec eleifend orci diam, in convallis tortor molestie nec.</p>
    </Grid.Column>
  </Grid.Row>
    </Grid>
  )

  export default DividedGrid
