import {
  List as MaterialList,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import * as React from 'react';

import { ProductInCart } from '../../Cart/Model/store';

import { styles, StyleProps } from './ListStyles';

interface AdditionalArgs {
  fullProduct?: boolean;
}
export interface Params {
  value: string;
  args?: AdditionalArgs;
}

type OwnProps = Partial<{
  data: Record<string, ProductInCart>;
  onActionClick: (params?: Params) => void;
}>;

export class ListPure extends React.Component<OwnProps & WithStyles<StyleProps>> {
  onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (this.props.onActionClick) {
      const value = event.currentTarget.id;
      const args = { fullProduct: true };
      this.props.onActionClick({ value, args });
    }
  }

  render() {
    const { classes, data } = this.props;

    const nullData = (
      <ListItem
        classes={{
          container: classes.listItemContainer,
          root: classes.listItemRoot
        }}
      >
        <Typography className={classes.null}>
          Your cart is empty 🙁
        </Typography>
      </ListItem>
    );

    const elements = data && Object.keys(data).length
      ? Object.keys(data).map((key: string) => (
          <ListItem
            key={key}
            classes={{
              container: classes.listItemContainer,
              root: classes.listItemRoot
            }}
          >
            <ListItemText
              primary={data[key].name}
              classes={{
                primary: classes.primaryText
              }}
            />
            <ListItemText
              primary={`Amount: ${data[key].amount}`}
              classes={{
                primary: classes.amount
              }}
            />
            <ListItemSecondaryAction classes={{ root: classes.delete }}>
              <IconButton
                className={classes.button}
                id={key}
                onClick={this.onClick}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))
    : nullData;
    return (
      <div className={classes.root}>
        <MaterialList
          subheader={
            <ListSubheader classes={{ root: classes.subheader}}>
              You shopping cart
            </ListSubheader>}
        >
          {elements}
        </MaterialList>
      </div>
    );
  }
}

export const List = withStyles(styles, {withTheme: true})<OwnProps>(ListPure);
