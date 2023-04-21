import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Group from '@/components/Group'

class Freestyler {
  name: string
  results: Array<[number, number]>
  fms = ''
  group = ''

  constructor(name: string, ...results: Array<[number, number]>) {
    this.name = name
    this.results = results
  }
}

describe('Group Component', () => {
  const freestylers = [
    new Freestyler('Mnak', [0, 248], [0, 255]),
    new Freestyler('Gazir', [3, 256], [3, 273], [3, 264]),
    new Freestyler('Tirpa', [0, 244]),
    new Freestyler('Mecha', [3, 250], [0, 252])
  ]

  it('displays the sum of points and PTB, sorted in descending order', () => {
    render(<Group name="A" freestylers={freestylers} />)

    const rows = screen.getAllByRole('row')
    const fisrtRow = within(rows[1])
    const secondRow = within(rows[2])

    expect(fisrtRow.getByRole('cell', { name: '9' })).toBeDefined()
    expect(fisrtRow.getByRole('cell', { name: '793' })).toBeDefined()

    expect(secondRow.getByRole('cell', { name: '3' })).toBeDefined()
    expect(secondRow.getByRole('cell', { name: '502' })).toBeDefined()
  })

  it('calculates total battles based on freestylers with the most battles', () => {
    render(<Group name="A" freestylers={freestylers} />)

    const rows = screen.getAllByRole('row')
    const mostBattles = within(rows[1])
    const leastBattles = within(rows.at(-1)!)

    expect(mostBattles.getByRole('cell', { name: '3/3' })).toBeDefined()
    expect(leastBattles.getByRole('cell', { name: '1/3' })).toBeDefined()
  })
})
