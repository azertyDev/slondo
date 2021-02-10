import React from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const CustomCheckbox = ({name, data, parentCallback}) => {
    const [formats, setFormats] = React.useState(() => []);
    console.warn("formats", formats)
    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
        parentCallback(name, newFormats)
    };
    return (
        <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
            style={{display: 'flex', justifyContent: 'space-between'}}
        >
            {data?.map((item) => (
                <ToggleButton
                    key={item.id}
                    value={item.id}
                    aria-label="bold"
                    style={{borderRadius: 100, border: '1px solid #845CAB'}}
                >
                    {item.name}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    )
}

export default CustomCheckbox
