import PropTypes from 'prop-types'
import { useState } from 'react'

const Counterapp = ({ value }) => {
    const [valor, setValor] = useState(value)

    const handleAdd = () => {
        setValor(valor + 1)
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
        </>
    )
}

Counterapp.propTypes = {
    value: PropTypes.number
}

Counterapp.defaultProps = {
    value: 1
}

export default Counterapp
