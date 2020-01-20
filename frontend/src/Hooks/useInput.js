import {useState} from "react";

export default (defaultValue)=>{
    const[ value, setValue] = useState(defaultValue);
//이 에로우 펑션은 무슨 말이지??
    const onChange = (e) => {
        const {
            target: {value}
        } = e;
        setValue(value);
    }
    return {value, onChange};
};