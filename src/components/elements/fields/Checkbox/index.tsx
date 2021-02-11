import React from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {Typography} from "@material-ui/core";

export const Box = ({color}) => <div style={{height: 40, width: 40, borderRadius: 50, background: `${color}`}}/>

const CustomCheckbox = ({name, data, parentCallback, title, color= false}) => {
    const [formats, setFormats] = React.useState(() => []);
    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
        parentCallback(name, newFormats)
    };
    return (
        <div>
            <div>
                {title}
            </div>
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
                    style={{borderRadius: 100, border: '1px solid #845CAB', padding: `${color ? '0' : '8px 30px'}`}}
                >
                    {color ?
                    <div style={{position: 'relative'}}>
                        <Box color={item.hex_color_code} />
                        <Typography style={{position: 'absolute', top: 50, fontSize: 10, whiteSpace: 'nowrap'}}>{item.name}</Typography>
                    </div>
                        :
                        item.name}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
        </div>
    )
}

export default CustomCheckbox
