import { topColor, topBorderColor } from '@/utils/colors'

import styles from "./styles.module.scss";

interface MyPositionProps {
    userStats: any;
    allUsers: any;
}

const MyPosition = ({ userStats, allUsers }: MyPositionProps) => {
    const myNbPlace = allUsers.findIndex((user: any) => user.name === userStats.name) + 1;

    return (
        <div className={styles.myPositionContainer}>
            <div className={styles.myPosition__img}>
                <img src={userStats.imgSrc} alt={userStats.name} />
            </div>

            <div className={styles.myPosition__name}>
                {userStats.name}
            </div>

            <div className={styles.myPosition__stat}>
                <h2>Votre rang :</h2>

                <div className={styles.userBar__position} style={{
                    backgroundColor: topColor[myNbPlace - 1],
                    border: myNbPlace < 3 ? `4px solid ${topBorderColor[myNbPlace - 1]}` : "none",
                    width: myNbPlace < 3 ? "1.5rem" : "2rem",
                    height: myNbPlace < 3 ? "1.5rem" : "2rem",
                }}>
                    {myNbPlace}
                </div>
            </div>

            <div className={styles.myPosition__multistats}>
                <div className={styles.myPosition__oneStats}>
                    <h2>Kills :</h2>
                    <div className={styles.myPosition__oneStats__value}>
                        {userStats.kill}
                    </div>
                </div>
                <div className={styles.myPosition__oneStats}>
                    <h2>Morts :</h2>
                    <div className={styles.myPosition__oneStats__value}>
                        {userStats.death}
                    </div>
                </div>
                <div className={styles.myPosition__oneStats}>
                    <h2>Distance parcourue :</h2>
                    <div className={styles.myPosition__oneStats__value}>
                        {userStats.distanceparcourue}
                    </div>
                </div>
                <div className={styles.myPosition__oneStats}>
                    <h2>Temps de jeu :</h2>
                    <div className={styles.myPosition__oneStats__value}>
                        {userStats.tempdejeu}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPosition
