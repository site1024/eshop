import clsx from "clsx";

const Button = (props) => {

    const {children,outline,className,...rest} = props;

    const classGroup = clsx({
        "btn":true,
        "btn-outline":outline,
        "btn-default":!outline
        },
        className)

    return (
        <button className={classGroup} {...rest}>{children}</button>
    )
}

export default Button;


