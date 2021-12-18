import React from 'react'
import PropTypes from 'prop-types'

const images = {
    copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
    quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
}
const CopyCat = props => {
        return (
            <div className='mx-auto my-5' style={props.divStyles}>
                <h1>Copy Cat <span className='text-warning fw-bolder'>{props.name}</span></h1>
                <input type='text' value={props.input} onChange={props.onChange} className='text-dark fw-bolder'/>
                <img 
                    alt='cat'
                    src={props.copying ? images.copycat : images.quietcat}
                    onClick={props.toggleTape}
                    style={props.imgStyles}
                />
                <p>{props.input && props.input}</p>
            </div>
        )
}

CopyCat.propTypes = {
    divStyles: PropTypes.object.isRequired,
    imgStyles: PropTypes.object.isRequired,
    input: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    toggleTape: PropTypes.func.isRequired,
    copying: PropTypes.bool.isRequired,
}
CopyCat.defaultProps = {name: 'Kittie'}

export default CopyCat
