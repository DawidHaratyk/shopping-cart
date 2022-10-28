import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderComponent } from 'utils/renderComponent'
import AllCheckboxes from '../AllCheckboxes'

describe('AllCheckboxes', () => {
  test('cos', () => {
    const mockSetAllCheckboxes = jest.fn()
    const mockSetFilters = jest.fn()

    renderComponent(
      <AllCheckboxes
        allCheckboxes={[
          {
            priceOrder: 'ascending',
            isChecked: true,
            id: 0,
          },
          {
            priceOrder: 'descending',
            isChecked: false,
            id: 1,
          },
        ]}
        setAllCheckboxes={mockSetAllCheckboxes}
        setFilters={mockSetFilters}
      />
    )

    const allCheckboxes = screen.getAllByRole('checkbox')
    expect(allCheckboxes).toHaveLength(2)

    const withinFirstCheckboxView = screen.getByText(/ascending/i)
    const firstCheckbox = within(withinFirstCheckboxView).getByRole('checkbox')
    expect(firstCheckbox).toBeChecked()

    const withinSecondCheckboxView = screen.getByText(/descending/i)
    const secondCheckbox = within(withinSecondCheckboxView).getByRole(
      'checkbox'
    )
    expect(secondCheckbox).not.toBeChecked()

    userEvent.click(firstCheckbox)
    expect(mockSetAllCheckboxes).toHaveBeenCalledTimes(1)
    expect(mockSetFilters).toHaveBeenCalledTimes(0)

    userEvent.click(secondCheckbox)
    expect(mockSetAllCheckboxes).toHaveBeenCalledTimes(2)
    expect(mockSetFilters).toHaveBeenCalledTimes(1)
  })
})
