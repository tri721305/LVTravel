import React from 'react'
import {Button} from '../button/buttonelements'
import {InfoContainer, 
        InfoWrapper,
        InfoRow,
        Column1,
        TextWrapper,
        TopLine,
        Heading,
        SubTitle,
        BtnWrap,
        Column2,
        ImgWrap,
        Img
     } from './infosectionelements'
// import hinh from '../../images/vietnam/pic14.jpg'
const InfoSection = ({dark, primary, lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel,img, alt}) => {
    return (
        <>
            <InfoContainer  lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow    imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <SubTitle darkText={darkText}>{description}</SubTitle>
                                <BtnWrap>
                                    <Button to="home"
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}
                                            smooth={true}
                                            duration={500}
                                            exact="true"
                                            offset={-80}>{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
