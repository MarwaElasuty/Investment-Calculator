import React from 'react'

const UserInput = ({userInput, onChangeHandle}) => {

    

    return (
        <>
            <section id='user-input'>
                <div className='input-group'>
                    <p>
                        <label>Initial Investment</label>
                        <input type='number' required value={userInput.initialInvestment} onChange={(e) => onChangeHandle('initialInvestment', e.target.value)}/>
                    </p>

                    <p>
                        <label>Annual Investment</label>
                        <input type='number' required value={userInput.annualInvestment} onChange={(e) => onChangeHandle('annualInvestment', e.target.value)}/>
                    </p>
                </div> <div className='input-group'>
                    <p>
                        <label>Expected Return</label>
                        <input type='number' required value={userInput.expectedReturn} onChange={(e) => onChangeHandle('expectedReturn', e.target.value)}/>
                    </p>

                    <p>
                        <label>Duration</label>
                        <input type='number' value={userInput.duration} onChange={(e) => onChangeHandle('duration', e.target.value)}/>
                    </p>
                </div>

            </section>

        </>


    )
}

export default UserInput