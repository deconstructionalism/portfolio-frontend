import React from 'react'

import avatar from '../static/images/avatar.jpg'
import styled from 'styled-components'

const PictureWindow = styled.div`
    background-image: url(${avatar});
    background-size: cover;
    height: ${props => props.theme.Avatar.size};
    width: ${props => props.theme.Avatar.size};
    border-radius: 200px;
    border-width: ${props => props.theme.Avatar.borderWidth};
    border-style: ${props => props.theme.Avatar.borderStyle};
    border-color: ${props => props.theme.Avatar.borderColor};
`

const Avatar = props => (
    <PictureWindow className={props.className}/>
)

export default Avatar