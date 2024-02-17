import { describe, test, expect } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { NuevoPresupuesto } from "./NuevoPresupuesto";

const Definir_Presupuesto = "Definir Presupuesto"

describe('NuevoPresupuesto Component', () => {
    test('Should render successfully', () => {
        const { getByText } = render(<NuevoPresupuesto />)
        waitFor(() => {
            const titulo = getByText(/Definir_Presupuesto/i)
            expect(titulo).toBeDefined()
        })
    })
})
