export const NuevoPresupuesto = () => (
    <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario">
            <div className="campo">
                <label htmlFor="">Definir Presupuesto</label>
                <input 
                    type="text" 
                    className="nuevo-presupuesto"
                    placeholder="Añade tu presupuesto"
                    />
                <input type="submit" value="Añadir"/>
            </div>
        </form>
    </div>
)