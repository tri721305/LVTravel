import React from 'react'
import Icon1 from '../../images/imgScroll/booking.svg'
import Icon2 from '../../images/imgScroll/select.svg'
import Icon3 from '../../images/imgScroll/join.svg'
import {ServiceContainer,
        ServiceH1,
        ServiceWrapper,
        ServiceCard,
        ServiceIcon,
        ServiceH2,
        ServiceP
        } from './serviceelements'
const Service = () => {
    return (
        <ServiceContainer>
            <ServiceH1>Our Services</ServiceH1>
            <ServiceWrapper>
                <ServiceCard>
                    <ServiceIcon src={Icon1}/>
                    <ServiceH2>Content 1</ServiceH2>
                    <ServiceP>Demo content: We help reduce your fess and increase your overall revenue</ServiceP>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src={Icon2}/>
                    <ServiceH2>Content 2</ServiceH2>
                    <ServiceP>Demo content: We help reduce your fess and increase your overall revenue</ServiceP>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src={Icon3}/>
                    <ServiceH2>Content 3</ServiceH2>
                    <ServiceP>Demo content: We help reduce your fess and increase your overall revenue</ServiceP>
                </ServiceCard>
            </ServiceWrapper>
        </ServiceContainer>
    )
}

export default Service
