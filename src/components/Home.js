import React from 'react';
import Typography from '@material-ui/core/Typography';

const Home = props => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20%'
            }}
        >
            <Typography variant="title" color="inherit">
                Select a user to check details
            </Typography>
        </div>
    );
};

export default Home;
