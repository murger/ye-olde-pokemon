import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import storage from '../../utils/storage'

const Container = styled.p`
  width: 100%;
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 1rem;
  color: ${({ theme }) => theme.tone('high', false)};
  border: 0.125rem solid ${({ theme }) => theme.tone('low', false)};
  background-color: ${({ theme }) => theme.tone('high')};
  font-size: 1.25rem;
  text-align: center;
  border-radius: 0.5rem;
`

const Star = styled.span`
  position: relative;
  display: block;
  width: 0;
  height: 0;
  margin: 1rem auto 1.5rem;
  border-right: 0.3em solid transparent;
  border-left: 0.3em solid transparent;
  border-bottom: 0.7em  solid ${({ theme, isActive }) => theme.colors[isActive ? 'yellow' : 'grey']};
  font-size: 1rem;
  cursor: pointer;

  &:before, &:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: 0.6em;
    left: -1em;
    border-right: 1em solid transparent;
    border-left: 1em solid transparent;
    border-bottom: 0.7em  solid ${({ theme, isActive }) => theme.colors[isActive ? 'yellow' : 'grey']};
    transform: rotate(-35deg);
  }

  &:after {
    transform: rotate(35deg);
  }
`

const Result = ({ data: { name, description }}) => {
  const [isFavourite, setFavourite] = useState(false)

  useEffect(() => {
    setFavourite(storage.has(name))
  }, [name])

  const onClick = useCallback(() => {
    if (!storage.has(name)) {
      storage.set(name, description)
      setFavourite(true)
    } else {
      storage.remove(name)
      setFavourite(false)
    }
  }, [name])

  return (
    <Container>
      {description}
      <Star
        isVisible={storage.isSupported()}
        isActive={isFavourite}
        onClick={onClick}
      />
    </Container>
  )
}

export default Result
