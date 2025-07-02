import React, { useState } from 'react'
import NumberInput from './number-input';
import RateInput from './rate-input';
import Result from './result';

export default function LiftingStateUp() {
    const [number, setNumber] = useState(0);
    const [rate, setRate] = useState(0);
    const [result, setResult] = useState(0);

    const xuLyQuyDoi = () => {
        setResult(number * rate);
    };

    return (
        <div>
            <h1>Ví dụ Lifting State Up</h1>
            <h3>💱 Quy đổi USD → VND</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
                <NumberInput onChangeValue={setNumber} />
                <RateInput onChangeRate={setRate} />
                {/* <button onClick={xuLyQuyDoi} type="button">Quy đổi</button> */}

                <button onClick={xuLyQuyDoi} type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Quy đổi</button>

            </div>
            <Result ketqua={result} />
        </div>
    );
}
