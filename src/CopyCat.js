import React from 'react'

const images = {
    copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
    quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
}
class CopyCat extends React.Component {
    render() {
        return (
            <div style={this.props.divStyles}>
                <h1>Copy Cat</h1>
                <img 
                    alt='cat'
                    src={this.props.copying ? images.copycat : images.quietcat}
                    onClick={this.props.toggleTape}
                    style={this.props.imgStyles}
                />
            </div>
        )
    }
}

export default CopyCat
