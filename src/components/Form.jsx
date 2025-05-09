import React from 'react';
import styled from 'styled-components';

const Form = () => {
    return (
        <StyledWrapper>
            <div className="form-container">
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="Title">Event Title(Required)</label>
                        <input type="text" id="Title" name="Title" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">Event Description</label>
                        <textarea name="textarea" id="textarea" rows={10} cols={50} required defaultValue={"          "} />
                    </div>
                    <div className='time-controller'>
                        <div className='form-group'>
                            <label htmlFor='Sdate'>Starting Date: </label>
                            <input type='date' id='Sdate' name='Sdate' required/>
                            <label htmlFor='Edate'>Ending Date: </label>
                            <input type='date' id='Edate' name='Edate' />
                        </div>
                        <div className='form-group'>
                        <label htmlFor='Stime'>Starting Time: </label>
                        <input type='time' id='Stime' name='Stime' required/>
                        <label htmlFor='Etime'>Ending Time: </label>
                        <input type='time' id='Etime' name='Etime' />
                        </div>
                    </div>
                    <div className='form-group'>
                        <select>
                            <option hidden="">Event Type</option>
                            <option value='Personal'>Personal</option>
                            <option value='Holiday'>Holiday</option>
                            <option value='Work'>Work</option>
                            <option value='Un-related'>Un-related</option>
                        </select>
                    </div>
                    <button className="form-submit-btn" type="submit">Create</button>
                </form>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;     
    background-color: #121212;
    .form-container {
        max-width: 400px;
        width:100%;
        background: linear-gradient(#212121, #212121) padding-box,
                    linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
        border: 2px solid transparent;
        padding: 32px 24px;
        font-size: 14px;
        font-family: inherit;
        color: white;
        display: flex;
        flex-direction: column;
        gap: 20px;
        box-sizing: border-box;
        border-radius: 16px;
    }

    .form-container button:active {
        scale: 0.95;
    }

    .form-container .form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .form-container .form-group {
        display: flex;
        flex-direction: column;
        gap: 2px;

    }
    
    .time-controller{
        display:flex;
        gap:3px;
        justify-content: space-around;
    }

    .form-container .form-group label {
        display: block;
        margin-bottom: 5px;
        color: #717171;
        font-weight: 600;
        font-size: 12px;
    }

    .form-container .form-group input{
        padding: 12px 16px;
        border-radius: 8px;
        color: #fff;
        font-family: inherit;
        background-color: transparent;
        border: 1px solid #414141;
    }

    .form-container .form-group select{
        padding: 12px 40px 12px 16px;
        border-radius: 8px;
        color: #fff;
        font-family: inherit;
        background-color: transparent;
        border: 1px solid #414141;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;

    }

    .form-container .form-group select {
        background-color: #212121;
        color: #fff;
    }

    .form-container .form-group option {
        background-color: #212121;
        color: #fff;
    }


    .form-container .form-group textarea {
        padding: 12px 16px;
        border-radius: 8px;
        resize: none;
        color: #fff;
        height: 96px;
        border: 1px solid #414141;
        background-color: transparent;
        font-family: inherit;
    }

    .form-container .form-group input::placeholder {
        opacity: 0.7;
    }

    .form-container .form-group input:focus {
        outline: none;
        border-color: #e81cff;
    }

    .form-container .form-group textarea:focus {
        outline: none;
        border-color: #e81cff;
    }

    .form-container .form-submit-btn {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        align-self: flex-start;
        font-family: inherit;
        color: #717171;
        font-weight: 600;
        width: 40%;
        background: #313131;
        border: 1px solid #414141;
        padding: 12px 16px;
        font-size: inherit;
        gap: 8px;
        margin-top: 8px;
        cursor: pointer;
        border-radius: 6px;
    }

    .form-container .form-submit-btn:hover {
        background-color: #212121;
        border-color: #fff;
    }`;

export default Form;
