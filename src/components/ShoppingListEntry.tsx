import React, {Component} from "react";
import {IShoppingListEntry, IUserState} from "./IShoppingListEntry";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class ShoppingListEntry extends Component<IShoppingListEntry, IUserState> {

  constructor(properties: IShoppingListEntry) {
    super(properties);
  }

  render() {
    return (
        <Card>
          <CardContent>
            <Typography color="textSecondary">
              {this.props.entryName}
            </Typography>
          </CardContent>
        </Card>
    )
  }
}

export default ShoppingListEntry;