import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  useLayoutEffect
} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { debounce } from 'lodash-es'
import request from '../../utils/request'
import { setData, setResult, setError, setLoading } from './actions'
import Result from '../Result'
import Favourites from '../Favourites'
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

  &::selection {
    color: ${({ theme }) => theme.colors.yellow};
    background-color: ${({ theme }) => theme.colors.blue};
  }
`

const Feedback = styled.p`
  min-height: 1rem;
  padding-top: 0.5rem;
  color: ${({ theme }) => theme.tone('mid')};
  font-size: 1rem;
  line-height: 1em;
`

const Search = ({
  result,
  data,
  error,
  isLoading,
  getSuggestions,
  search,
  reset
}) => {
  const input = useRef()
  const [message, setMessage] = useState(null)
  const onChange = useCallback(debounce(e => {
    const { value } = e.target

    reset()

    if (value) {
      getSuggestions(value)
    } else {
      setMessage(null)
    }
  }, 0.5 * 1000))

  const onKeyDown = useCallback(e => {
    const { value } = e.target
    const element = input.current

    setMessage(null)

    if (e.key === 'Enter') {
      element.setSelectionRange(0, -1)
      search(value)
    }
  })

  useEffect(() => {
    setMessage(isLoading ? 'Loading...' : null)
  }, [isLoading])

  useLayoutEffect(() => {
    if (!data.length) {
      return
    }

    const element = input.current
    const bestOption = data.shift().name
    const inputLength = element.value.length

    element.value = bestOption
    element.setSelectionRange(inputLength, bestOption.length)
    setMessage('Press enter to fetch this pokemon')
  }, [data])

  return (
    <Container>
      <Image src={logo} />
      <Input
        ref={input}
        type="text"
        spellCheck="false"
        placeholder="Abra, Mankey, Shellder..."
        autoFocus
        onKeyDown={onKeyDown}
        onChange={e => {
          e.persist()
          onChange(e)
        }}
      />
      {result
        ? <Result data={result} />
        : <Feedback>{error || message}</Feedback>
      }
      <Favourites
        input={() => input}
        search={search}
        reset={reset}
      />
    </Container>
  )
}

const mapStateToProps = ({ search }) => ({
  result: search.result,
  data: search.data,
  error: search.error,
  isLoading: search.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  getSuggestions: async (query) => {
    try {
      const data = await request(['pokemon'], 'POST', { query })
      dispatch(setData(data))
    } catch (error) {
      dispatch(setError(error.message))
    }
  },
  search: async (name) => {
    await dispatch(setLoading(true))

    try {
      const result = await request(['pokemon', name], 'GET')
      dispatch(setResult(result))
    } catch (error) {
      dispatch(setError(error.message))
    }
  },
  reset: () => {
    dispatch(setError(null))
    dispatch(setResult(null))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
