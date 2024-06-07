
import React, { useState } from 'react'
import info from './info.svg';
import RadioButtonGroup from '../RadioButtonGroup/ControlledRadioButtonsGroup';
import { Popover } from 'antd';
import './WalletSettings.css';
import intersect from './Intersect (1).svg'
const content1 = (
    <div style={{ maxWidth: '202px', width: '100%', height: '24px' }}>
        <p style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: '8px', lineHeight: '12px' }}>Return to origin<span style={{ fontWeight: '400', fontSize: '8px', lineHeight: '12px' }}>charges for undelivered shipments will be billed to Zippyy wallet automatically.</span> </p>
    </div>
);
const content2 = (
    <div style={{ maxWidth: '202px', width: '100%', height: '24px' }}>
        <p style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: '8px', lineHeight: '12px' }}><span style={{ fontWeight: '400', fontSize: '8px', lineHeight: '12px' }}>Any </span>weight and dimension <span style={{ fontWeight: '400', fontSize: '8px', lineHeight: '12px' }}>discrepancy charges will be billed automatically to Zippyy wallet.</span> </p>
    </div>
);
function WalletSettings() {
    const [amount, setAmount] = useState('Enter amount');
    const [amount1, setAmount1] = useState('Enter amount');
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const selectStyle = {
        fontSize: '14px',
        width: '100%',
        height: '40px',
        border: '1px solid #D9D9D9',
        borderRadius: '6px',
        background: 'white',

    };
    return (
        <div style={{ border: '1px solid #D9D9D9', paddingTop: '3%', width: '50%', borderRadius: '16px', backgroundColor: '#FFFFFF', paddingLeft: '3%', paddingRight: '3%', marginLeft: '1%' }}>
            <p style={{ fontWeight: '500', fontSize: '18px', lineHeight: '27px', color: '#121114', marginBottom: '10px', display: 'flex', justifyContent: 'flex-start' }}>
                Wallet settings
            </p>

            <div style={{ padding: '18px', width: '100%', height: '278px', borderRadius: '6px', border: '1px solid #D9D9D9' }}>
                <p style={{ marginBottom: '5px', colour: '#121114', fontWeight: '400', fontSize: '16px', lineHeight: '24px', display: 'flex', justifyContent: 'flex-start' }}>
                    Wallet auto reload
                </p>
                <hr style={{ width: '100%', border: '1p solid #D9D9D9' }}></hr>
                <p style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '10px', marginTop: '10px', fontWeight: '400', fontSize: '12px', lineHeight: '18px', color: '#5F5A6B' }}>Transfer mode</p>
                <select
                    id="options"
                    value={selectedOption}
                    onChange={handleChange}
                    style={selectStyle}
                >
                    <option value="">Bank transfers ( Takes 3-5 days for ACH transfer, Free)</option>
                    <option value="option1">Bank transfers ( Takes 3-5 days for ACH transfer, Free)</option>
                    <option value="option2">Card transfer( Instant, processing fee of 2.9% + 0.3$ applied)</option>

                </select>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ width: '50%' }}>
                        <p style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '10px', marginTop: '10px', color: '#5F5A6B', fontFamily: 'Poppins', fontWeight: '400', fontSize: '14px', lineHeight: '21px', gap: '4px' }}>Auto reload by </p>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <input
                                style={{
                                    backgroundColor: 'white',
                                    color: '#D9D9D9',
                                    fontFamily: 'Poppins',
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '21px',
                                    width: '90%',
                                    height: '40px',
                                    borderRadius: '6px',
                                    border: '1px solid #D2D1D6',
                                    padding: '9px',

                                }}
                                type="text"
                                value={amount}
                                placeholder='Enter amount'
                                onChange={(e) => setAmount(e.target.value)}
                                required
                            ></input>
                            <p style={{ marginLeft: '5px', color: '#B6B2BD', fontWeight: '500', fontSize: '14px', lineHeight: '21px', marginTop: '10px' }}>$</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '50%', marginLeft: '50px' }}>
                        <p style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '10px', marginTop: '10px', color: '#5F5A6B', fontFamily: 'Poppins', fontWeight: '400', fontSize: '14px', lineHeight: '21px', gap: '4px' }}>When balance go below</p>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <input
                                style={{
                                    backgroundColor: 'white',
                                    color: '#D9D9D9',
                                    fontFamily: 'Poppins',
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '21px',
                                    width: '100%',
                                    height: '40px',
                                    borderRadius: '6px',
                                    border: '1px solid #D2D1D6',
                                    padding: '9px',

                                }}
                                type="text"
                                value={amount1}
                                placeholder='Enter amount'
                                onChange={(e) => setAmount1(e.target.value)}
                                required
                            ></input>
                            <p style={{ marginLeft: '5px', color: '#B6B2BD', fontWeight: '500', fontSize: '14px', lineHeight: '21px', marginTop: '10px' }}>$</p>
                        </div>

                    </div>

                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                    <button style={{
                        color: '#FFFFFF',
                        height: '40px',
                        borderRadius: '6px',
                        padding: '10px ',
                        gap: '10px',
                        background: '#D54029',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '24px',
                        border: '1px solid white',
                        width: '106px',
                    }}>
                        Save
                    </button>
                </div>
            </div>

            <div style={{ border: '1px solid #D9D9D9', width: '100%', height: '145px', borderRadius: '6px', padding: '18px', marginTop: '24px' }}>

                <p style={{ display: 'flex', justifyContent: 'flex-start', color: '#121114', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>Additional charge settings</p>
                <hr style={{ marginTop: '10px', marginBottom: '10px', width: '100%', border: '1p solid #D9D9D9' }}></hr>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <div style={{ width: '80%' }}>
                        <p style={{ display: 'flex', justifyContent: 'flex-start', fontFamily: 'Poppins', gap: '4px', color: '#5F5A6B', fontWeight: '400', fontSize: '16px', lineHeight: '24px', marginTop: '8px' }}>RTO charges
                            <Popover content={content1} trigger="click">
                                <img style={{ marginLeft: '5.6px' }} src={info} alt="info icon" />
                            </Popover>
                        </p>


                        <p style={{ display: 'flex', justifyContent: 'flex-start', fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px', color: '#5F5A6B', gap: '4px', marginTop: '20px' }}>Dimension and weight discrepancy charges
                            <Popover content={content2} trigger="click">
                                <img style={{ marginLeft: '5.6px' }} src={info} alt="info icon" />
                            </Popover>
                        </p>

                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}><RadioButtonGroup /></div>

                </div>
            </div >
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <img src={intersect} alt="nologo"></img>
            </div>

        </div >


    )
}
export default WalletSettings;
