import style from './MyButton.module.css'

export const MyButton = ({children, ...props}) => {
    const buttonStyle = {color: props.color || 'teal',};

    return (<button className={style.myBtn} style={buttonStyle}
                    {...props}>
        {children}
    </button>)

};
