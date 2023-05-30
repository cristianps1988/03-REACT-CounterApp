import PropTypes from 'prop-types'
import { useState } from 'react'

const Counterapp = ({ value }) => {
    const [valor, setValor] = useState(value)

    const handleAdd = () => {
        setValor(valor + 1)
    }

    const handleLess = () => {
        setValor(valor - 1)
    }

    const handleReset = () => {
        setValor(value)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{valor}</h2>
            <button
                onClick={handleAdd}
            >
                +1
            </button>
            <button
                onClick={handleLess}
            >
                -1
            </button>
            <button
                onClick={handleReset}
            >
                Reset
            </button>
        </>
    )
}

Counterapp.propTypes = {
    value: PropTypes.number
}

Counterapp.defaultProps = {
    value: 0
}

export default Counterapp
