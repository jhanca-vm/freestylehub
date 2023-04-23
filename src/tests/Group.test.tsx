import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Group from '@/components/Group'

class Freestyler {
  name: string
  battles: Array<[string, number]>
  fms = ''
  group = ''

  constructor(name: string, ...battles: Array<[string, number]>) {
    this.name = name
    this.battles = battles
  }
}

describe('Group Component', () => {
  const freestylers = [
    new Freestyler('Mnak', ['Gazir', 1], ['Mecha', 1]),
    new Freestyler('Gazir', ['Mnak', 2], ['Tirpa', 3], ['Mecha', 3]),
    new Freestyler('Tirpa', ['Gazir', 0]),
    new Freestyler('Mecha', ['Mank', 2], ['Gazir', 0])
  ]

  it('displays the sum of points, sorted in descending order', () => {
    render(<Group name="A" fms="España" freestylers={freestylers} />)

    const rows = screen.getAllByRole('row')
    const fisrtRow = within(rows[1])
    const secondRow = within(rows[2])

    expect(fisrtRow.getByRole('cell', { name: '8' })).toBeDefined()
    expect(secondRow.getByRole('cell', { name: '2' })).toBeDefined()

    // The ties are decided by direct confrontation
    expect(secondRow.getByRole('cell', { name: 'Mecha' })).toBeDefined()
  })

  it('calculates total battles based on freestylers with the most battles', () => {
    render(<Group name="A" fms="España" freestylers={freestylers} />)

    const rows = screen.getAllByRole('row')
    const mostBattles = within(rows[1])
    const leastBattles = within(rows.at(-1)!)

    expect(mostBattles.getByRole('cell', { name: '3/3' })).toBeDefined()
    expect(leastBattles.getByRole('cell', { name: '1/3' })).toBeDefined()
  })
})
