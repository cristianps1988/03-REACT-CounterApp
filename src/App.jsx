import PropTypes from 'prop-types'

const nombre = 'Cristian'

const saludo = (nombre) => {
    return `Hola, mi nombre es ${nombre}`
}

function App({ cargo, edad, title }) {

    return (
        <>
            <h1>{title}</h1>
            <p>{saludo(nombre)}</p>
            <p>Cargo: {cargo}</p>
            <p>Edad: {edad}</p>
        </>
    )
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired
}

App.defaultProps = {
    title: 'Hola mundo'
}

export default App