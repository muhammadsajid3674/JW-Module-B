import  './button.css';

export default function BootstrapBtn(props) {
    const { label, onClick, classes } = props;

    return <>
        <button className={classes} onClick={onClick}>{label}</button>
    </>
};

