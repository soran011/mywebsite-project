import React from "react";
import Icon1 from '../../images/pic-4.svg';
import Icon2 from '../../images/pic-1.svg';
import Icon3 from '../../images/pic-6.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesCard,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

function Services() {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Affordable Solutions</ServicesH2>
            <ServicesP>
              Call us today, to check our new technologies, pricing and delivery
              times!
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>New Technologies</ServicesH2>
            <ServicesP>
              Call us today, to check our new technologies, pricing and delivery
              times!
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Fast Delivery</ServicesH2>
            <ServicesP>
              Call us today, to check our new technologies, pricing and delivery
              times!
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
}

export default Services;
