import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height:"50px"}}>
            {props.alert &&  <div>
                <div class="alert alert-success" role="alert">
                    <strong>{props.alert.showtype}</strong> : {props.alert.msg}
                </div>
            </div>}
        </div>

    )
}
