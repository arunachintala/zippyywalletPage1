
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
        <div className="container">
            <div className="column">
                <div className="balance-container">
                    <div className="balance-text">
                        <p className="balance-amount">220$</p>
                        <p className="balance-description">Available Balance</p>
                        <img className="icon" src={plus} alt="plus icon" />
                    </div>
                    <div>
                        <img src={tri} alt="triangle icon" />
                    </div>
                    <div className="flex-end">
                        <img src={star} alt="star icon" />
                    </div>
                    <div className="margin-right">
                        <img src={card1} alt="card icon" />
                    </div>
                </div>
                <div className="add-money-container">
                    <p className="add-money-title">Add money to wallet</p>
                    <p className="add-money-subtitle">Enter amount</p>
                    <div className="input-container">
                        <input
                            className="input-amount"
                            type="text"
                            value={amount}
                            placeholder="Enter amount"
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                        <p className="input-dollar">$</p>
                    </div>
                    <div className="transfer-mode-container">
                        <p className="transfer-mode-title">Transfer mode</p>
                        <hr className="hr-line" />
                        <RadioButton />
                    </div>
                    <div className="empty-box"></div>
                    <p className="powered-by">Powered by Stripe</p>
                    <button className="pay-button">Pay</button>
                </div>
            </div>
        </div>
    );
}

export default AvailableBalance;
