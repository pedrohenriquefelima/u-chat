import React from "react";
import styles from "./HeroThree.module.css"
import CardSquare from "../../../components/UI/CardSquare";
import SEARCH_CARD from '../../../materials/images/searchIcon.png';
import CARD_IDEA_ICON from '../../../materials/images/cardIdeaIcon.png';
import CARD_CHAT_ICON from '../../../materials/images/chatCardIcon.png'

const HeroThree = () => {

    const cardsData = [
        { 
            image: SEARCH_CARD,
            label: 'Embark on a Cultural Adventure as You Learn and Explore!',
            alt: 'cardIcon search'
        },
        { 
            image: CARD_CHAT_ICON,
            label: 'Boost Your Language Skills with Engaging Conversations with Native Speakers!',
            alt: 'two chat boxes inside an yellow circle'
        },
        { 
            image: CARD_IDEA_ICON,
            label: 'Open Doors to Opportunities and Amplify Your Potential in a fun and interactive enviroment!',
            alt: 'a head with a lamp as an idea'
        },
    ]
    return (
        <div className={styles.container}>
            {cardsData.map((item) => {
                return <CardSquare cardItem={item}/>
            })}
        </div>
    )

}

export default HeroThree;