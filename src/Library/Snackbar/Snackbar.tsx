import { withStyles, WithStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MaterialSnackbar, { SnackBarOrigin } from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import * as React from 'react';

import { styles, StyleProps } from './SnackbarStyles';

type OwnProps = Partial<{
  message: string;
  actionText: string;
  open: boolean;
  hasAction: boolean;
  hasClose: boolean;
  vertical: string;
  horizontal: string;
  autoDuration: number;
  classnames: any;
  actionFn: () => void;
}>;

type Props = OwnProps & WithStyles<StyleProps>;

export class SnackbarPure extends React.Component<Props> {
  public static defaultProps: Partial<Props> = {
    vertical: 'bottom',
    horizontal: 'left',
    autoDuration: 1000,
  };

  state = {
    open: this.props.open ? this.props.open : false,
  };

  componentWillReceiveProps(nextProps: OwnProps) {
    if (nextProps.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleAction = () => {
    this.setState({ open: false });

    if (this.props.actionFn) {
      this.props.actionFn();
    }
  }

  render() {
    const {
      classes, hasClose, hasAction,
      message, autoDuration, classnames, vertical, horizontal,
      actionText,
    } = this.props;

    const closeClass = classnames && classnames.close
      ? `${classnames.close} ${classes.close}` : `${classes.close}`;
    const closeButton = hasClose
      ? (
        <IconButton
          key="close"
          aria-label="Close"
          className={closeClass}
          onClick={this.handleClose}
        >
          <CloseIcon />
        </IconButton>
      )
      : <div/>;

    const actionClass = classnames && classnames.action
      ? `${classnames.action} ${classes.action}`
      : `${classes.action}`;

    const actionMsg = actionText ? actionText : 'undo';

    const actionButton = hasAction
      ?
        (
          <Button
            className={actionClass}
            key="undo"
            color="secondary"
            size="small"
            onClick={this.handleAction}
          >
            {actionMsg}
          </Button>
        )
      : <div/>;

    const buttons = Array.from(new Array(2)).map((item: number, index: number) => {
      if (index === 0) {
        return React.cloneElement(actionButton, { key: 'action' });
      }
      return React.cloneElement(closeButton, { key: 'close' });
    });

    const messageClass = classnames && classnames.message
      ? `${classnames.message} ${classes.message}`
      : `${classes.message}`;

    const msg = message
    ? (
        <Typography className={messageClass}>{message}</Typography>
      )
    : <span/>;

    return (
      <MaterialSnackbar
        ContentProps={{
          className: classes.content,
          classes: {
            message: classes.messageWrapper,
          }
        }}
        anchorOrigin={{
          vertical: vertical as SnackBarOrigin['vertical'],
          horizontal: horizontal as SnackBarOrigin['horizontal'],
        }}
        open={this.state.open}
        autoHideDuration={autoDuration}
        onClose={this.handleClose}
        message={msg}
        action={buttons}
      />
    );
  }
}

export const Snackbar = withStyles(styles, { withTheme: true })<OwnProps>(SnackbarPure);
