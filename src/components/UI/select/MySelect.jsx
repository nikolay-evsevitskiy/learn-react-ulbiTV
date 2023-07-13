export const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={e => onChange(e.currentTarget.value)}
        >
            <option disabled={true} value="">
                {defaultValue}
            </option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>)}
        </select>
    );
};
