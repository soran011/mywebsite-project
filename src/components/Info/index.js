import React from 'react'
import { Button } from 'react-scroll';
import './Info.scss'

const Info = () => {
    return (
        <>
          <InfoContainer className="infoContainer" id={id}>
              <div className="infoContainer__wrapper">
                  <div className="infoContainer__wrapper--row">
                    <div className="infoContainer__wrapper--row__colum1">
                        <div className="infoContainer__wrapper--row__colum1--text">
                            <div className="infoContainer__wrapper--row__colum1--text__topline">TopLine</div>
                            <div className="infoContainer__wrapper--row__colum1--text__heading">Heading</div>
                            <div className="infoContainer__wrapper--row__colum1--text__subtitle">Subtitle</div>
                            <Button to='home'>Button</Button>
                        </div>
                    </div>
                  </div>

              </div>
            </InfoContainer>  
        </>
    )
}

export default Info;
