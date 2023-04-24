import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Group from '@/components/Group'

type Battles = Array<[string, number]>

class Freestyler {
  name: string
  battles: Array<[string, number]>
  group: string
  fms = ''

  constructor(name: string, group: string, ...battles: Battles) {
    this.name = name
    this.group = group
    this.battles = battles
  }
}

describe('Group Component', () => {
  const freestylers = [
    new Freestyler('Mnak', 'A', ['Gazir', 1], ['Mecha', 1]),
    new Freestyler('Gazir', 'A', ['Mnak', 2], ['Tirpa', 3], ['Mecha', 3]),
    new Freestyler('Tirpa', 'A', ['Gazir', 0]),
    new Freestyler('Mecha', 'A', ['Mank', 2], ['Gazir', 0]),
    new Freestyler('Le33', 'B')
  ]

  it('filters freestylers by group', () => {
    render(<Group name="A" freestylers={freestylers} />)

    expect(screen.queryByRole('cell', { name: 'Le33' })).toBeNull()
  })

  it('displays the sum of points, sorted in descending order', () => {
    render(<Group name="A" freestylers={freestylers} />)

    const rows = screen.getAllByRole('row')
    const fisrtRow = within(rows[1])
    const secondRow = within(rows[2])

    expect(fisrtRow.getByRole('cell', { name: '8' })).toBeDefined()
    expect(secondRow.getByRole('cell', { name: '2' })).toBeDefined()

    // The ties are decided by direct confrontation
    expect(secondRow.getByRole('cell', { name: 'Mecha' })).toBeDefined()
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
