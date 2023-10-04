import UserType from '@/types/userCard'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

import styles from './styles.module.scss'

interface UserCardProps {
    user: UserType
}

const UserCard = ({ user }: UserCardProps) => {
    const colorGrade = {
        "PLAYER": "#0bca51",
        "MVP": "#33aec3",
        "MVP+": "#f5b301",
    }
    return (
        <div className={styles.userCard}>
            <div className={styles.img}>
                <img
                    src={`https://api.dicebear.com/7.x/pixel-art-neutral/png?seed=${user.name}`}
                    alt="user"
                />
            </div>

            <div className={styles.info}>
                <div className={styles.grade} style={{ backgroundColor: colorGrade[user.grade] }}>
                    {user.grade}
                </div>

                <div className={styles.name}>
                    {user.name}
                </div>

            </div>

            <div className={styles.timePlayed}>
                <h2>Temp de jeu total : {user.timePlayed}h</h2>
            </div>

            <div className={styles.btns}>
                <div className={styles.button}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faShareNodes} width="90%" />
                    </div>
                    <h2>Share</h2>
                </div>
                <div className={styles.button}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faDiscord} width="90%" />
                    </div>
                    <h2>Discord</h2>
                </div>
            </div>
        </div>
    )
}

export default UserCard
