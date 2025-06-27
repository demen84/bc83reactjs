import { useState } from 'react';
import dataGlasses from './data-glasses.json';

export default function Glasses() {
    const [selectedGlass, setSelectedGlass] = useState(dataGlasses[0]);

    const handleSelect = (glass) => {
        setSelectedGlass(glass);
    };

    const deoKinh = () => {
        return (
            dataGlasses.map((glass) => (
                <img
                    key={glass.id}
                    src={glass.url}
                    alt={glass.name}
                    onClick={() => handleSelect(glass)}
                    style={{
                        width: 90,
                        cursor: 'pointer',
                        border: selectedGlass.id === glass.id ? '2px solid red' : '1px solid #ccc',
                        // border: '1px solid #ccc',
                        borderRadius: 5,
                        padding: 5,
                        backgroundColor: '#f9f9f9'
                    }}
                />
            ))
        );
    }

    return (
        <div style={{ textAlign: 'center', backgroundImage: 'url("./glassesImage/background.jpg")', backgroundSize: 'cover' }}>
            <h1>🕶️ Thử mắt kính cho người mẫu</h1>

            {/* Khu vực hiển thị mặt người và kính */}
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <img
                    src="./glassesImage/model.jpg"
                    alt="model face"
                    style={{ width: 300 }}
                />
                {selectedGlass && (
                    <>
                        <img
                            src={selectedGlass.url}
                            alt={selectedGlass.name}
                            style={{
                                position: 'absolute',
                                top: '94px',
                                left: '81px',
                                width: '140px',
                                opacity: 0.9,
                                transition: 'all 0.3s ease'
                            }}
                        />

                        {/* Thông tin Tên & mô tả kính */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '0px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '100%',
                                // backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                backgroundColor: '#f7dbbf',
                                padding: '6px 10px',
                                borderRadius: '3px',
                                fontSize: '15px',
                                textAlign: 'left',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                            }}
                        >
                            <strong>{selectedGlass.name}</strong>
                            <p style={{ margin: 0, fontSize: '13px' }}>{selectedGlass.desc}</p>
                        </div>
                    </>
                )}
            </div>

            {/* Khu vực chọn kính */}
            <h3 style={{ marginTop: '2rem' }}>Chọn kính bên dưới 👇</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 15, marginTop: 20 }}>
                {/* {dataGlasses.map((glass) => (
                    <img
                        key={glass.id}
                        src={glass.url}
                        alt={glass.name}
                        onClick={() => handleSelect(glass)}
                        style={{
                            width: 90,
                            cursor: 'pointer',
                            border: selectedGlass.id === glass.id ? '3px solid blue' : '1px solid #ccc',
                            borderRadius: 5,
                            padding: 5,
                            backgroundColor: '#f9f9f9'
                        }}
                    />
                ))} */}
                {deoKinh()}
            </div>
        </div>
    );
}
