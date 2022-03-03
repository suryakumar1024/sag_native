import React from 'react'

const LinearGradient = (props) => {
  return (
    <LinearGradient
    style={{flex: 1, alignItems: 'center'}}
    start={{x: 1, y: 0}}
    end={{x: 0, y: 1}}
    colors={['#FFDEE9', '#B5FFFC']}>
        {props.children}
    </LinearGradient>
  )
}

export default LinearGradient