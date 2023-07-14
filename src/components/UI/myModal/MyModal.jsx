import style from './myModal.module.css';

export const MyModal = ({children, visible, setVisible}) => {
    const rootStyles = [style.myModal]

    if (visible) {
        rootStyles.push(style.active)
    }
    return (
        <div onClick={() => {
            setVisible(false)
        }}
             className={rootStyles.join(' ')}>
            <div onClick={e => e.stopPropagation()}
                 className={style.myModalContent}>
                {children}
            </div>
        </div>
    );
};
