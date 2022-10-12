import  './button.css';

export default function BootstrapBtn(props) {
    const { label, onClick } = props;

    return <>
        <button className='btn' onClick={onClick}>{label}</button>
    </>
};

