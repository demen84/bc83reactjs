import React from 'react'

// export default function RateInput({ onChangeRate }) {
export default function RateInput(props) {
    const { onChangeRate } = props;
    return (
        <div>
            <input type="number" placeholder='Nhập tỉ giá'
                onChange={(e) => onChangeRate(Number(e.target.value))} />
        </div>
    );
}
