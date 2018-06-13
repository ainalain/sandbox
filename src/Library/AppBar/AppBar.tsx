import {
  AppBar as MaterialAppBar, Badge, Button,
  IconButton, Toolbar,
  Typography
} from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Menu, ShoppingCart } from '@material-ui/icons';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, RouteComponentProps } from 'react-router-dom';
import { push } from 'react-router-redux';
import { compose, Dispatch } from 'redux';

import { getCartErrors, getCartUnitsAmount } from '../../Cart/Model/selectors';
import { CartErrors } from '../../Cart/Model/store';
import { Model } from '../../Main/Model';

import { styles, StyleProps } from './AppBarStyles';
import { Cake } from './Cake';

export interface RouterParams {
  pathname: string;
  search: string;
}

interface OwnProps extends RouteComponentProps<RouterParams> {
  classes: Record<StyleProps, React.CSSProperties>;
}

interface ModelProps {
  unitsAmount: number;
  cartErrors?: CartErrors;
}

interface DispatchProps {
  routerPush: (pathname: string) => void;
}

type Props = OwnProps & ModelProps & DispatchProps & WithStyles<StyleProps>;

export class AppBarPure extends React.Component<Props> {
  onLogoClick = () => {
    this.props.routerPush('/');
  }

  render() {
    const { classes, unitsAmount } = this.props;

    const buttonClass = unitsAmount
      ? ''
      : `${classes.cartButton}`;
    const icon = (
      <Link to="/shoppingList" className={classes.link}>
        <IconButton className={buttonClass}>
          <ShoppingCart/>
        </IconButton>
      </Link>
    );

    const badge = unitsAmount
      ? (
        <Badge
          className={classes.badgeRoot}
          badgeContent={unitsAmount}
          color="secondary"
          classes={{
            badge: classes.badge
          }}
        >
          {icon}
        </Badge>
      )
      : icon;

    return (
      <div className={classes.root}>
        <MaterialAppBar>
          <Toolbar>
            <IconButton className={classes.menuButton}>
              <Menu/>
            </IconButton>
            <Button
              className={classes.title}
              onClick={this.onLogoClick}
              data-testid="homeButton"
            >
              <Typography variant="title" color="inherit" className={classes.titleText}>
                Fancy
              </Typography>
              <span className={classes.logo}>
                <Cake className={classes.logoIcon}/>
              </span>
            </Button>
            {badge}
          </Toolbar>
        </MaterialAppBar>
      </div>
    );
  }
}

const mapStateToProps = (state: Model.Root, props: OwnProps): ModelProps => ({
  unitsAmount: getCartUnitsAmount(state),
  cartErrors: getCartErrors(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  routerPush: (pathname: string) => dispatch(push(pathname)),
});

const AppBar = compose(
  withRouter,
  connect<ModelProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps),
  withStyles(styles, { withTheme: true })
)(AppBarPure);

export default AppBar;
