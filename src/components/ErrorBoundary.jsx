import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import PropTypes from 'prop-types';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';
import RefreshIcon from '@mui/icons-material/Refresh';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });

    // Could add error reporting service here
    // reportError(error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            p: 3,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              maxWidth: 600,
              width: '100%',
              textAlign: 'center',
              borderRadius: 2,
            }}
          >
            <ErrorOutlineIcon color="error" sx={{ fontSize: 64, mb: 2 }} />
            <Typography variant="h4" gutterBottom>
              Oops! Something went wrong
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              We&apos;re sorry for the inconvenience. You can try refreshing the
              page or return to the homepage.
            </Typography>

            {typeof process !== 'undefined' && // eslint-disable-next-line no-undef
              process.env?.NODE_ENV === 'development' &&
              this.state.error && (
                <Box
                  sx={{
                    my: 2,
                    p: 2,
                    bgcolor: 'grey.100',
                    borderRadius: 1,
                    textAlign: 'left',
                    overflowX: 'auto',
                    touchAction: 'pan-x',
                    overscrollBehavior: 'contain',
                  }}
                >
                  <Typography
                    variant="body2"
                    component="pre"
                    sx={{ color: 'error.main' }}
                  >
                    {this.state.error.toString()}
                  </Typography>
                </Box>
              )}

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleRefresh}
                startIcon={<RefreshIcon />}
              >
                Refresh Page
              </Button>
              <Button
                variant="outlined"
                color="primary"
                href="/"
                startIcon={<HomeIcon />}
              >
                Go to Homepage
              </Button>
            </Box>
          </Paper>
        </Box>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
