// import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '@components/Button/Button'

describe('Button component', () => {
  const onClick = jest.fn()

  beforeEach(() => {
    render(
      <Button type='submit' disabled={false} onClick={onClick}>
        Submit
      </Button>,
    )
  })

  test('renders a button', async () => {
    const button = screen.getByText(/Submit/i)
    expect(button).toBeInTheDocument()
  })

  test('calls the function on click', async () => {
    const user = userEvent.setup()
    const button = screen.getByText(/Submit/i)

    await user.click(button)

    await waitFor(() => {
      expect(onClick).toHaveBeenCalled()
    })
  })
})
