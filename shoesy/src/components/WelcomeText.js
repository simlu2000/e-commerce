import React from 'react';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';

export default function WelcomeText({ infoText, isWelcome }) {
    return (
        isWelcome && (
            <Grow in={isWelcome} timeout={2000}>
                <Typography
                    variant="h1"
                    style={{
                        textAlign: 'center',
                        marginTop: '20%',
                        background: '-webkit-linear-gradient(#eee, #5271ff)',
                        webkitBackgroundClip: 'text',
                        webkitTextFillColor: 'transparent',
                    }}
                >
                    {infoText}
                </Typography>
            </Grow>
        )
    );
}