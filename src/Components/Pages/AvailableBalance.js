
import React, { useState } from 'react';
import './AvailableBalance.css';
import RadioButton from '../RadioButtonGroup/RadioButton';
import card1 from './card1.svg';
import plus from './Plus.svg';
import tri from './tri.svg';
import star from './star.svg';
function AvailableBalance() {
    const [amount, setAmount] = useState('Enter amount');

    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: '48%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid #D9D9D9', borderRadius: '16px', justifyContent: 'space-between', paddingLeft: '5%', paddingTop: '1%', backgroundColor: '#FFFFFF' }}>
                    <div style={{ textAlign: 'left', flexDirection: 'column' }}>
                        <p style={{
                            color: '#4C7A34',
                            fontWeight: 600,
                            fontSize: '32px',
                            lineHeight: '48px',
                            marginLeft: '35px',
                        }}>
                            220$
                        </p>
                        <p style={{
                            color: '#5F5A6B',
                            fontWeight: '400',
                            fontSize: '18px',
                            lineHeight: '27px',

                        }}>
                            Available Balance
                        </p>
                        <img style={{ paddingLeft: '50px' }} src={plus} alt="nologo"></img>
                    </div>
                    <div>
                        <img style={{ paddingRight: '20px' }} src={tri} alt="nologo"></img>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={star} alt="nologo"></img>
                    </div>
                    <div style={{ display: 'flex', marginRight: '30px' }}>
                        <img src={card1} alt="no logo"></img>
                    </div>
                </div>
                <div style={{ border: '1px solid #D9D9D9', marginTop: '5%', padding: '5%', borderRadius: '16px', backgroundColor: '#FFFFFF' }}>
                    <p style={{
                        fontWeight: 500,
                        fontSize: '18px',
                        lineHeight: '27px',
                        color: '#121114',
                        display: 'flex',
                        justifyContent: 'flex-start'
                    }}>
                        Add money to wallet
                    </p>
                    <p style={{
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '30px',
                        gap: '4px',
                        color: '#5F5A6B',
                        display: 'flex',
                        justifyContent: 'flex-start'
                    }}>
                        Enter amount
                    </p>
                    <div style={{
                        display: 'flex', flexDirection: 'row',
                    }}>
                        <input
                            style={{
                                backgroundColor: 'white',
                                color: '#D9D9D9',
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '21px',
                                width: '229.01px',
                                height: '40px',
                                borderRadius: '6px',
                                border: '1px solid #D2D1D6',
                                padding: '6px',


                            }}
                            type="text"
                            value={amount}
                            placeholder="Enter amount"
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                        <p style={{ marginLeft: '10px', color: '#B6B2BD', fontWeight: '500', fontSize: '14px', lineHeight: '21px', marginTop: '10px' }}>$</p>
                    </div>

                    <div style={{
                        border: '1px solid #D9D9D9',
                        borderRadius: '6px',
                        width: '100%',
                        height: '139px',
                        display: 'flex', flexDirection: 'column',
                        paddingLeft: '18px',
                        marginTop: '24px',

                    }}>
                        <p style={{
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '24px',
                            color: '#121114',
                            marginTop: '18px',
                            marginBottom: '10px',
                            display: 'flex',
                            justifyContent: 'flex-start'
                        }}>
                            Transfer mode
                        </p>
                        <hr style={{
                            border: '1px solid #D9D9D9',
                            width: '96%',

                        }} />
                        <RadioButton />
                    </div>
                    <div style={{

                        height: '278px',
                        width: '100%',
                        marginTop: '24px',
                        border: '1px solid #D9D9D9',
                        borderRadius: '6px'
                    }}></div>
                    <p style={{
                        fontWeight: 400,
                        lineHeight: '18px',
                        fontSize: '12px',
                        fontFamily: 'Poppins',
                        marginTop: '14px',
                        marginBottom: '14px',
                        display: 'flex',
                        justifyContent: 'flex-start'
                    }}>
                        Powered by Stripe
                    </p>
                    <button style={{
                        color: '#FFFFFF',
                        width: '240px',
                        height: '40px',
                        borderRadius: '6px',
                        padding: '10px',
                        gap: '10px',
                        fontFamily: 'Poppins',
                        background: '#D54029',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '24px',
                        border: '1px solid white',
                        display: 'flex',
                        justifyContent: 'center'

                    }}>
                        Pay
                    </button>

                </div>
            </div>
        </div>
    )
}

export default AvailableBalance;