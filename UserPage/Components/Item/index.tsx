import styles from './styles.module.scss'

interface ItemProps {
    data: any
    reducer: boolean
}

const Item = ({
    data,
    reducer
}: ItemProps) => {
    if (!reducer) {
        data = data.slice(0, 10)
    }

    return (
        <>
        {data.map((item: any, index: any) => (
            <div className={styles.itemsContainer} key={index}>
                <div className={styles.items__img}>
                    <img src={item.imgSrc} alt="item" />
                </div>

                <div className={styles.items__info}>
                    <div className={styles.title} style={{ color: item.titleColor ? item.titleColor : '#9e9e9e' }}>
                        {item.title}
                    </div>

                    {item.description && <div className={styles.description}>
                            {item.description}
                        </div>
                    }

                    <div className={styles.items__number}>
                        {item.number}
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}

export default Item
