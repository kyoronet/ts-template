import { main } from './main'

describe('function main', () => {
  it('戻り値がtrueで終了していること', () => {
    expect(main).toBeTruthy()
  })
})
