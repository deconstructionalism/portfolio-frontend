import React from 'react'

import avatar from '../static/avatar.jpg'
import styled from 'styled-components'

const PictureWindow = styled.div`
    background-image: url(${avatar});
    background-size: cover;
    height: 200px;
    width: 200px;
    border-radius: 200px;
    border: 10px solid white;
`

const Avatar = props => (
      <PictureWindow className={props.className}/>
)

export default Avatar