import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <>
            <div>Good: {good}</div>
            <div>Neutral:{neutral}</div>
            <div>Bad: {bad}</div>
            <span>Total:{total} </span>
            <div>Positive feedback: {positivePercentage.toFixed(2)} %</div>
        </>
    );
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};

export default Statistics;