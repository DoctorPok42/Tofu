import styles from './styles.module.scss'

interface ItemProps {
    imgSrc: string
    title: string
    titleColor?: string
    description?: string
    number: number
}

const Item = ({
    imgSrc,
    title,
    titleColor = '#9e9e9e',
    description,
    number
}: ItemProps) => {
    return (
        <div className={styles.itemsContainer}>
            <div className={styles.items__img}>
                <img src={imgSrc} alt="item" />
            </div>

            <div className={styles.items__info}>
                <div className={styles.title} style={{ color: titleColor }}>
                    {title}
                </div>

                {description && <div className={styles.description}>
                        {description}
                    </div>
                }

                <div className={styles.items__number}>
                    {number}
                </div>
            </div>
        </div>
    )
}

export default Item
