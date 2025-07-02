import React from 'react'

// export default function Result({ ketqua }) {
export default function Result(props) {
    const { ketqua } = props;

    return (
        <div>
            <p>Tiền Vietnam đồng: <strong>{ketqua.toLocaleString()}</strong> VND</p>
        </div>
    );
}
