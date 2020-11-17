import hinh1 from '../../images/imgScroll/svg-1.svg'
import imgConnect from '../../images/imgScroll/connect.svg'
import imgPlan from '../../images/imgScroll/travelplan.svg'

export const homeObjOne ={
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: hinh1 , 
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
}

export const homeObjTwo = {
    id: 'destination',
    lightBg: true,
    lightText:false,
    lightTextDesc: true,
    topLine: 'Destination',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get Started',
    imgStart: true,
    img: imgConnect , 
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
}

export const homeObjThree = {
    id: 'plan',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Plan',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: imgPlan , 
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
}