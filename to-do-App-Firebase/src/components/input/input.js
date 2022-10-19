import './input.css';

export function DefaultInput(props) {
    const { label, onChange, disabled, required, min, max, type, value, placeholder } = props;

    return <>
        <input type={type} class="form-control customInput" id="floatingInput" placeholder={placeholder} value={value} onChange={onChange} />
    </>
};

export function FloatingInput(props) {
    const { label, onChange, disabled, required, min, max, type, value, placeholder } = props;

    return <>
        <div class="form-floating mb-3">
            <input type={type} class="form-control customInput" id="floatingInput" placeholder={placeholder} value={value} onChange={onChange} />
            <label for="floatingInput">{label}</label>
        </div>
    </>
};