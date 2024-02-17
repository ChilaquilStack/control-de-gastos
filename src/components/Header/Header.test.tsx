import { expect, it, describe } from 'vitest'
import {render, waitFor} from '@testing-library/react'
import { Header } from './Header'

const HEADER_TITLE = 'Planificador de gastos'

describe('Header Component', () => {
    it('should render successfully', async () => {
        const { getByText } = render(<Header/>)
        waitFor(() => {
            const headerTitle = getByText(HEADER_TITLE)
            expect(headerTitle).toBeDefined()
        })
    })
})