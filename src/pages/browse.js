import React from 'react';
import { useContent } from '../hooks';

export default function Browse() {
  const { series } = useContent("series");
  console.log(series)
  const { films } = useContent("films");
  console.log(films)
  return (
    <div>browse</div>
  )
}
