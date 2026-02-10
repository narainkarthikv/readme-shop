import { Snackbar, Alert, AlertTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import PropTypes from 'prop-types';

/**
 * Modern Toast Component
 * Provides non-intrusive feedback for user actions
 *
 * @example
 * <Toast
 *   open={true}
 *   message="Copied to clipboard"
 *   severity="success"
 *   onClose={handleClose}
 * />
 */
const Toast = ({
  open,
  message,
  title,
  severity = 'info',
  duration = 3000,
  onClose,
  action,
  position = { vertical: 'bottom', horizontal: 'right' },
}) => {
  const getSeverityIcon = () => {
    switch (severity) {
      case 'success':
        return <CheckCircleIcon fontSize='small' />;
      case 'error':
        return <ErrorIcon fontSize='small' />;
      case 'warning':
        return <WarningIcon fontSize='small' />;
      case 'info':
      default:
        return <InfoIcon fontSize='small' />;
    }
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={position}
      sx={{
        '& .MuiSnackbar-root': {
          bottom: { xs: 16, sm: 24 },
          right: { xs: 16, sm: 24 },
        },
      }}>
      <Alert
        severity={severity}
        icon={getSeverityIcon()}
        onClose={onClose}
        action={
          action || (
            <IconButton
              size='small'
              aria-label='close'
              color='inherit'
              onClick={onClose}>
              <CloseIcon fontSize='small' />
            </IconButton>
          )
        }
        sx={{
          minWidth: 300,
          maxWidth: 500,
          boxShadow: (theme) =>
            theme.customTokens?.shadow.lg || theme.shadows[8],
          borderRadius: (theme) => theme.shape.borderRadius,
          '& .MuiAlert-icon': {
            alignItems: 'center',
          },
          '& .MuiAlert-message': {
            padding: '4px 0',
          },
        }}>
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    </Snackbar>
  );
};

Toast.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  title: PropTypes.string,
  severity: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  duration: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  action: PropTypes.node,
  position: PropTypes.shape({
    vertical: PropTypes.oneOf(['top', 'bottom']),
    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
  }),
};

export default Toast;
