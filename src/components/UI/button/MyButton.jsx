import style from './MyButton.module.css'

export const MyButton = ({children, ...props}) => {
    if (props.color !== 'red') {
        return (<button className={style.myBtn}
                        {...props}>
            {children}
        </button>)
    } else {
        return (
            <button className={style.redBtn}
                    {...props}>
                {children}
            </button>
        )
    }
};
