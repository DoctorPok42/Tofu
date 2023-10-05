import { topColor, topBorderColor } from '@/utils/colors'

import styles from './styles.module.scss'
import moyenne from '@/utils/functions'

interface UserBarProps {
  userStats: any
  reducer: any
  stop3: boolean
}

const UserBar = ({
    userStats,
    reducer,
    stop3
}: UserBarProps) => {
    var sorteUserWithReducer = [] as any;

    if (reducer === "tout") {
        sorteUserWithReducer = [
            ...userStats.sort((a: any, b: any) => moyenne(b) - moyenne(a))
        ]
    } else {
        sorteUserWithReducer = [
            ...userStats.sort((a: any, b: any) => b[reducer] - a[reducer])
        ]
    }

    if (!stop3)
        sorteUserWithReducer.splice(3, sorteUserWithReducer.length - 3)

    console.log(sorteUserWithReducer)

    return (
        <div className={styles.userBarContainer}>
            {
                sorteUserWithReducer.map((user: any, index: number) => (
                    <div className={styles.userBar}>
                        <div className={styles.userBar__position} style={{
                            backgroundColor: topColor[index],
                            border: index < 3 ? `4px solid ${topBorderColor[index]}` : "none",
                            width: index < 3 ? "1.5rem" : "2rem",
                            height: index < 3 ? "1.5rem" : "2rem",
                        }}>
                            {index + 1}
                        </div>

                        <div className={styles.userBar__img}>
                            <img src={user.imgSrc} alt={user.name} />
                        </div>

                        <div className={styles.userBar__name}>
                            {user.name}
                        </div>

                        <div className={styles.userBar__stat} style={{
                            ...reducer === "tout" ? {
                                ...moyenne(user) < 0 ? {
                                    color: "#ff0000"
                                } : {
                                    color: topColor[index]
                                }
                            } : { color: topColor[index] }
                        }}>
                            {
                                reducer === "tout" ?
                                    moyenne(user) :
                                    user[reducer]
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default UserBar
