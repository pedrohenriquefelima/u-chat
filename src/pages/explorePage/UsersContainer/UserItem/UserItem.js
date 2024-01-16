import { useContext } from 'react';
import styles from './UserItem.module.css';
import ChatContext from '../../../../store/chat-context';
import AuthContext from '../../../../store/auth-context';
import RegularBadge from '../../../../components/UI/badges/RegularBadge';
import FlagRateSkills from '../../../../components/UI/flagRateSkills/FlagRateSkills';

const UserItem = (props) => {
    console.log(props)
    const chatCtx = useContext(ChatContext);
    const userCtx = useContext(AuthContext);

    const createChat = () => {
        chatCtx.createChatHandler(userCtx.user?._id, props.userData?._id, props.userData?.prevContacted);
    }

    return (
        <div className={styles['user-item-container']} onClick={createChat}>
            <div className={styles['user-subcontainer']}>
                <img className={styles.img} src='https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.webp?b=1&s=170667a&w=0&k=20&c=N-Uwgbn8qhGypoXFB6keEEC3mW0qhNynAqBqd8oNJw0=' alt='test'/>
                <div className={styles['main-container-name']}>
                    <div className={styles['name-container']}>
                        <p className={styles['user-name']}>
                            Pedro Lima
                        </p>
                        <div className={styles['online-circle']}>
                        </div>
                    </div> 
                    <div className={styles['name-native']}>
                        <div className={styles.native}>
                            <div className={styles['margin-right']}>Native:</div>
                            <img className={styles['img-flag']} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png' alt='test'/>
                        </div>
                        <div>Ref:<span className={styles['margin-right']}>40</span></div>
                    </div> 
                    <div className={styles['name-interests']}>
                        <span>Interests:</span>
                        <div className={styles['name-interests-badges']}>
                            <RegularBadge title="Travelling"/>
                            <RegularBadge title="Reading"/>
                        </div>
                    </div>  
                </div>
            </div>
            <div className={styles.bio}>
                My name is Pedro, 23 and I am looking to meet new people and learn new things.
            </div>
            <div className={styles['learning-teaching-badges']}>
                <div>Learning:</div>
                <FlagRateSkills imageAddress="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjn36wF3Ae76teWgHeznb81__CC1DVOhzWJbDa5QDTkA&s"/>
                <FlagRateSkills imageAddress="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjn36wF3Ae76teWgHeznb81__CC1DVOhzWJbDa5QDTkA&s"/>
                <FlagRateSkills imageAddress="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjn36wF3Ae76teWgHeznb81__CC1DVOhzWJbDa5QDTkA&s"/>
                <FlagRateSkills imageAddress="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjn36wF3Ae76teWgHeznb81__CC1DVOhzWJbDa5QDTkA&s"/>
            </div>
            <div className={styles['learning-teaching-badges']}>
                <div>Teaching:</div>
                <FlagRateSkills imageAddress="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjn36wF3Ae76teWgHeznb81__CC1DVOhzWJbDa5QDTkA&s"/>
                <FlagRateSkills imageAddress="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjn36wF3Ae76teWgHeznb81__CC1DVOhzWJbDa5QDTkA&s"/>
                <FlagRateSkills imageAddress="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjn36wF3Ae76teWgHeznb81__CC1DVOhzWJbDa5QDTkA&s"/>
                <FlagRateSkills imageAddress="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjn36wF3Ae76teWgHeznb81__CC1DVOhzWJbDa5QDTkA&s"/>
            </div>
            <div className={styles.buttons}>
                <button className={styles.profile}>PROFILE</button>
                <button className={styles.chat}>CHAT</button>
            </div>
        </div>
    )
}

export default UserItem;