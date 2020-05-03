import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
    <div>
        <p classame='f3'><b>
        {'This Magic Face will detect faces in your pictures. Give it a try.'}
        </b>
        </p>
        <div className='center'>
            <div className='form center pa3 br3 shadow-2'>
            <input classame='f4 pa7 w-70 center' type='tex' onChange={onInputChange}/>
            <button 
            className='w-20 grow f4 link ph3 pv2 br3 dib white bg-light-purple'
                onClick={onButtonSubmit}
                ><b>Detect</b></button>

            </div>
        </div>       
     </div>
    );


}

export default ImageLinkForm;