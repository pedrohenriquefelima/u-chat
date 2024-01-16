import { useContext } from 'react';
import styles from './UsersContainer.module.css';
import AuthContext from '../../../store/auth-context';
import UserItem from './UserItem/UserItem';

const UsersContainer = () => {
    const ctx = useContext(AuthContext);

    let ALL_USERS_TEMP = [
    {
        firstName: 'Pedro',
        middleName: 'Henrique',
        lastName: 'Lima',
        username: 'pedro_lima',
        email: 'pedro.lima@gmail.com',
        ref: 40,
        profile_pic: 'https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.webp?b=1&s=170667a&w=0&k=20&c=N-Uwgbn8qhGypoXFB6keEEC3mW0qhNynAqBqd8oNJw0=',
        bio: 'My name is Pedro, 23 and I am looking to meet new people and learn new things.',
        learning: [{language: 'English', fluency: '3', native: false, flag_image: 'https://t4.ftcdn.net/jpg/00/80/93/13/360_F_80931362_hc7MvkgkjTUjOlnCXJjOASENuaYTNoxv.jpg'},  {language: 'French', fluency: '2', native: false, flag_image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAFVBMVEX///8AJlTOESYAGU52f5TeeYDNABldZXX5AAAA/klEQVR4nO3QSQ0AIAADsHH6l4yKPUhaCc2oWTs9586aOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHy4ckD5KrN4eD2boIAAAAASUVORK5CYII='}],
        teaching: [{language: 'Portuguese', fluency: '5', native: true, flag_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png'}],
        native: [{language: 'Portuguese', fluency: '5', native: true, flag_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png'}],
        interests: ['Travelling', 'Sports', 'Dance', 'Reading']
    },
    {
        firstName: 'Maria',
        middleName: 'Isabel',
        lastName: 'Rodriguez',
        username: 'maria_rodriguez',
        email: 'maria.rodriguez@gmail.com',
        profile_pic: 'https://media.istockphoto.com/id/1456789315/photo-portrait-of-smiling-latina-woman-standing-outdoors-picture-id1456789315?b=1&s=170667a&w=0&k=20&c=EH3XJdvr-0bZ3ZtFLzJjCkQtQl1wdlNVbFZd5m4k3WY=',
        bio: 'Hola! I am Maria, 28, passionate about traveling and exploring new cultures.',
        learning: [
            { language: 'German', fluency: '2', native: false },
            { language: 'Japanese', fluency: '1', native: false }
        ],
        teaching: [
            { language: 'Spanish', fluency: '5', native: true }
        ]
    },    
    {
        firstName: 'Alex',
        middleName: 'James',
        lastName: 'Smith',
        username: 'alex_smith',
        email: 'alex.smith@gmail.com',
        profile_pic: 'https://media.istockphoto.com/id/1564567831/photo-handsome-young-man-smiling-against-white-background-picture-id1564567831?b=1&s=170667a&w=0&k=20&c=pZu_5gtC3QStxgl2P-jX4PlTTjjCbKtG39IR_k2hEZ4=',
        bio: 'Hey there! I am Alex, 25, and I love coding and creating new things.',
        learning: [
            { language: 'Spanish', fluency: '3', native: false },
            { language: 'Chinese', fluency: '2', native: false }
        ],
        teaching: [
            { language: 'English', fluency: '5', native: true }
        ]
    },
    {
        firstName: 'Aisha',
        middleName: 'Nasir',
        lastName: 'Khan',
        username: 'aisha_khan',
        email: 'aisha.khan@gmail.com',
        profile_pic: 'https://media.istockphoto.com/id/1575080379/photo-portrait-of-young-arabian-woman-wearing-hijab-isolated-on-blue-picture-id1575080379?b=1&s=170667a&w=0&k=20&c=_QZgIw7bcU2dNhP8KKLh6D7UAt2bD_mdkVGaTBM5JyY=',
        bio: 'Salaam! I am Aisha, 22, passionate about literature and poetry.',
        learning: [
            { language: 'French', fluency: '4', native: false },
            { language: 'Italian', fluency: '2', native: false }
        ],
        teaching: [
            { language: 'Urdu', fluency: '5', native: true }
        ]
    },
    {
        firstName: 'Daniel',
        middleName: 'Alexander',
        lastName: 'Harrison',
        username: 'daniel_harrison',
        email: 'daniel.harrison@gmail.com',
        profile_pic: 'https://media.istockphoto.com/id/1566776643/photo-portrait-of-smiling-young-man-against-gray-background-picture-id1566776643?b=1&s=170667a&w=0&k=20&c=YVR3HL4Xa2zX91ZTZ1HlzLDSwqrv2fcgpLi3h09ZQQk=',
        bio: 'Hi, I’m Daniel, 30, an adventurer at heart and always seeking new challenges.',
        learning: [
            { language: 'Japanese', fluency: '3', native: false },
            { language: 'Russian', fluency: '2', native: false }
        ],
        teaching: [
            { language: 'English', fluency: '5', native: true }
        ]
    },
    {
        firstName: 'Emily',
        middleName: 'Grace',
        lastName: 'Taylor',
        username: 'emily_taylor',
        email: 'emily.taylor@gmail.com',
        profile_pic: 'https://media.istockphoto.com/id/1569470145/photo-portrait-of-beautiful-young-woman-smiling-against-gray-background-picture-id1569470145?b=1&s=170667a&w=0&k=20&c=2XnGbqBm8i86qxyPYJjJtd6G_i8G7TwO4PYa3b-fQws=',
        bio: 'Hello! I’m Emily, 26, an artist who finds inspiration in everyday moments.',
        learning: [
            { language: 'French', fluency: '4', native: false },
            { language: 'Spanish', fluency: '3', native: false }
        ],
        teaching: [
            { language: 'Art', fluency: '5', native: true }
        ]
    },
    {
        firstName: 'Raj',
        middleName: 'Kumar',
        lastName: 'Patel',
        username: 'raj_patel',
        email: 'raj.patel@gmail.com',
        profile_pic: 'https://media.istockphoto.com/id/1453546917/photo-portrait-of-young-indian-man-smiling-outdoor-picture-id1453546917?b=1&s=170667a&w=0&k=20&c=MPJv7RnBK6pEeAMQoDjyljxDof7bSSdB6E8MGG8DC_I=',
        bio: 'Namaste! I am Raj, 32, a yoga enthusiast and a software developer by profession.',
        learning: [
            { language: 'German', fluency: '2', native: false },
            { language: 'Mandarin', fluency: '1', native: false }
        ],
        teaching: [
            { language: 'Hindi', fluency: '5', native: true },
            { language: 'Yoga', fluency: '4', native: false }
        ]
    },
    {
        firstName: 'Sophie',
        middleName: 'Elizabeth',
        lastName: 'Johnson',
        username: 'sophie_johnson',
        email: 'sophie.johnson@gmail.com',
        profile_pic: 'https://media.istockphoto.com/id/1551996464/photo-portrait-of-smiling-young-woman-against-gray-background-picture-id1551996464?b=1&s=170667a&w=0&k=20&c=3ntBBceotew-l8YJXz4gXdRAtXaGdZMP7c_nScHZZoQ=',
        bio: 'Hi there! I’m Sophie, 29, a book lover and aspiring travel writer.',
        learning: [
            { language: 'Italian', fluency: '3', native: false },
            { language: 'Arabic', fluency: '2', native: false }
        ],
        teaching: [
            { language: 'English', fluency: '5', native: true },
            { language: 'Creative Writing', fluency: '4', native: false }
        ]
    }     
]

    return (
        <div className={styles['users-container']}>
             {ALL_USERS_TEMP.map(item => {
                return <UserItem key={item._id} userData={item}/>
             })}
        </div>
       
    )
}

export default UsersContainer;