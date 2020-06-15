import request from '../utils/request.js'
import { TRANSLATION_API_HOST } from '../constants'

export const translate = async (text) => {
  const data = await request([TRANSLATION_API_HOST, 'shakespeare.json'], 'POST', { text })
  return data.contents.translated
}
