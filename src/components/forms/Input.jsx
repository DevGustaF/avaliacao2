import React from 'react'
import { Form } from 'react-bootstrap'
import { mask, unMask } from 'remask'

const Input = (props) => {

    const { register, errors, validator, setValue } = props.reference

    function handleChange(event) {
        const mascara = props.mask ? props.mask : ''
        if (mascara) {
            setValue(event.target.name, mask(unMask(event.target.value), mascara))
        }
    }

    return (
        <>
            <Form.Group className="mb-3" controlId={props.name}>
                <Form.Label>{props.label}: </Form.Label>
                <Form.Control
                    isInvalid={errors[props.name]}
                    {...register(props.name, validator[props.name])}
                    {...props}
                    onChange={handleChange}
                />
                {errors[props.name] && <span style={{color: 'red'}}>{errors[props.name].message}</span>}
            </Form.Group>
        </>
    )
}

export default Input