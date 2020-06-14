import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { debounce } from 'lodash-es'
import request from '../../utils/request'
import { setData, setError, setLoading } from './actions'
import logo from '../../assets/logo.png'

const Container = styled.div`
  width: 32rem;
  margin-bottom: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  width: 24rem;
  margin-bottom: 4rem;
`

const Input = styled.input`
  width: 100%;
  margin: 0;
  padding: 1rem;
  font-family: 'Helvetica Neue', 'Helvetica', Sans-serif;
  font-size: 1.75rem;
  line-height: 1em;
  text-align: center;
  border-radius: 0.5rem;
  border: 0.125rem solid ${({ theme }) => theme.tone('low', false)};
  background-color: ${({ theme }) => theme.tone('high')};
  outline: 0;

  &::placeholder {
    color: ${({ theme }) => theme.tone('base', false)};
  }
`

const Search = ({
  data,
  error,
  isLoading,
  findItem
}) => {
  const handleChange = useCallback(debounce(
    e => findItem(e.target.value),
    0.5 * 1000
  ))

  // TODO: autocomplete callback
  // TODO: suggestions rows
  // TODO: enter + error states
  // TODO: result card

  return (
    <Container>
      <Image src={logo} />
      <Input
        type="text"
        placeholder="Abra, Mankey, Shellder..."
        autoFocus
        // disabled={isLoading}
        onChange={e => {
          e.persist()
          handleChange(e)
        }}
      />
    </Container>
  )
}

const mapStateToProps = ({ search }) => ({
  data: search.data,
  error: search.error,
  isLoading: search.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  findItem: async (query) => {
    await dispatch(setLoading(true))

    try {
      const data = await request(['pokemon'], 'POST', { query })
      dispatch(setData(data))
    } catch (error) {
      dispatch(setError(true))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
