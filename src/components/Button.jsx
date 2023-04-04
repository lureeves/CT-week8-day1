import React from 'react'

export default function Button({onClick}) {    
    console.log(onClick)
    return (
        <button className={`btn btn-primary`} onClick={onClick}>Submit</button>
    );
};
