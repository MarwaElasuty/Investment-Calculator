import React from 'react';
import { calculateInvestmentResults, formatter } from '../util/investment.js';

const ResultTable = ({ userInput }) => {
    const resultData = calculateInvestmentResults(userInput);
    console.log(resultData);

    // Avoid the user to enter values less than zero
    const invalidInput = userInput.initialInvestment <= 0 ||
        userInput.annualInvestment <= 0 ||
        userInput.expectedReturn <= 0 ||
        userInput.duration <= 0

    return (
        <>
            {invalidInput ? <p className='center'>Error Occured, Please Enter Values Greater Than Zero</p> :
                <table id='result'>
                    <thead>
                        <tr>
                            <td>Year</td>
                            <td>Investment Value</td>
                            <td>Interest (Year)</td>
                            <td>Total Interest</td>
                            <td>Invested Capital</td>
                        </tr>
                    </thead>
                    <tbody>
                        {resultData.map((res) => (
                            <tr key={res.year}>
                                <td>{res.year}</td>
                                <td>{formatter.format(res.valueEndOfYear)}</td>
                                <td>{formatter.format(res.interest)}</td>
                                <td>{res.totalInterest}</td>
                                <td>{res.investedCapital}</td>
                            </tr>
                        ))
                        }

                    </tbody>
                </table>
            }

        </>
    )
}

export default ResultTable