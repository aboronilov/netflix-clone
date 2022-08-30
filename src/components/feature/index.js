import {Container, Title, Subtitle} from './styles/feature'

import React from 'react'

export default function Feature({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Feature.Title = function FeatureTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Feature.SubTitle = function FeatureSubTitle({children, ...restProps}) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}