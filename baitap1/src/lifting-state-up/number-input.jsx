import React from 'react'

export default function NumberInput({ onChangeValue }) {
    return (
        <div>
            <input type="number"
                placeholder='Nhập tiền đô'
                onChange={(e) => onChangeValue(Number(e.target.value))} />
            {/* <input type="number" value="26000" placeholder='Nhập tỉ giá VND/USD' /> */}
        </div>
    );
}
