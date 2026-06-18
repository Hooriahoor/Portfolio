import React from 'react'
import PropTypes from 'prop-types';


const BlurBlob = ({position,size}) => {
  //Destructuring the position and size props
  const {top,left} = position;
  const {width,height} = size;

  return (
    <div className='absolute'
    style={{
        top:top,
        left:left,
        width:width,
        height:height,
        transform:'translate(-50%,-50%)',
} }
>
<div className='w-full h-full bg-purple rounded-full opacity-20 blur-3xl animate-blob'></div>
</div>
  )
}

//Define prop type
BlurBlob.protoTypes = {
    position: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.string,
}),
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
    })
};

export default BlurBlob