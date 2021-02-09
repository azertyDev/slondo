import React, {useState} from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CustomCheckbox = ({parentCallback}) => {
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });
    const onTrigger = (event) => {
        parentCallback(event.target.name, event.target.value);
    }
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedB}
                        onChange={onTrigger}
                        name="checkedB"
                        color="primary"
                    />
                }
                label="Механика"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedA}
                        onChange={onTrigger}
                        name="checkedB"
                        color="primary"
                    />
                }
                label="Автомат"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedF}
                        onChange={onTrigger}
                        name="checkedB"
                        color="primary"
                    />
                }
                label="Вариант"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedG}
                        onChange={onTrigger}
                        name="checkedB"
                        color="primary"
                    />
                }
                label="Робот"
            />
        </div>
    )
}

export default CustomCheckbox
