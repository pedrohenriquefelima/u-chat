import { useContext } from 'react';
import styles from './UserItem.module.css';
import ChatContext from '../../../../store/chat-context';
import AuthContext from '../../../../store/auth-context';
import RegularBadge from '../../../../components/UI/badges/RegularBadge';
import FlagRateSkills from '../../../../components/UI/flagRateSkills/FlagRateSkills';

const UserItem = ({userData}) => {
    const chatCtx = useContext(ChatContext);
    const userCtx = useContext(AuthContext);

    const createChat = () => {
        chatCtx.createChatHandler(userCtx.user?._id, userData?._id, userData?.prevContacted);
    }

    return (
        <div className={styles['user-item-container']} onClick={createChat}>
            <div className={styles['user-subcontainer']}>
                <img className={styles.img} src={userData.profile_pic} alt='test'/>
                <div className={styles['main-container-name']}>
                    <div className={styles['name-container']}>
                        <p className={styles['user-name']}>
                           {userData.firstName} {userData.lastName}
                        </p>
                        <div className={styles['online-circle']}>
                        </div>
                    </div> 
                    <div className={styles['name-native']}>
                        <div className={styles.native}>
                            <div className={styles['margin-right']}>Native:</div>
                            {userData?.native.length > 0 && userData?.native.map((navLan)=> {
                                return <img className={styles['img-flag']} src={navLan.flag_image} alt='test'/>
                            })}
                        </div>
                        <div>Ref:<span className={styles['margin-right']}>40</span></div>
                    </div> 
                    <div className={styles['name-interests']}>
                        <span>Interests:</span>
                        <div className={styles['name-interests-badges']}>
                            {userData?.interests.length > 0 && userData?.interests.map((inter)=> {
                                return <RegularBadge title={inter.label}/>
                            })}
                        </div>
                    </div>  
                </div>
            </div>
            <div className={styles.bio}>
                {userData.bio}
            </div>
            <div className={styles['learning-teaching-badges']}>
                <div>Learning:</div>
                {userData?.learning.length > 0 && userData?.learning.map((lanLearn)=> {
                    return <FlagRateSkills imageAddress={lanLearn.flag_image}/>
                })}
            </div>
            <div className={styles['learning-teaching-badges']}>
                <div>Teaching:</div>
                {userData?.teaching.length > 0 && userData?.teaching.map((teacLang)=> {
                    return <FlagRateSkills imageAddress={teacLang.flag_image}/>
                })}
            </div>
            <div className={styles.buttons}>
                <button className={styles.profile}>PROFILE</button>
                <button className={styles.chat}>CHAT</button>
            </div>
        </div>
    )
}

export default UserItem;