import React from 'react';

const Stats = ({ stats }) => {
    if (!stats) {
        return <span className="stats">Loading...</span>;
    }
    return (
        <span className="stats">
            {stats.error && '🤯 Error!'}
            {stats.isLoading && '🙄 Loading...'}
            {stats.downloads !== null && `🤘 ${stats.downloads.total}`}
        </span>
    );
};

export default Stats;