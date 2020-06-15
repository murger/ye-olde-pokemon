import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import storage from '../../utils/storage'

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
`

const Item = styled.li`
  padding: 0.25rem;
  display: inline-block;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 1.25rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`

const Favourites = ({ input, search, reset }) => {
  const [favourites, setFavourites] = useState(storage.all())
  const onClick = useCallback(name => {
    input.value = name
    input.focus()
    input.setSelectionRange(0, -1)
    reset()
    search(name)
  })

  useEffect(() => {
    setInterval(() =>
      setFavourites(storage.all()),
    0.25 * 1000)
  }, [])

  return (
    <List>
      {favourites.map(item =>
        <Item key={item} onClick={() => onClick(item)}>{item}</Item>
      )}
    </List>
  )
}

export default Favourites
