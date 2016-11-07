import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

/**
 * The `maxHeight` property limits the height of the menu, above which it will be scrollable.
 */
const NavIconMenu = () => (
  <IconMenu
    iconButtonElement={<IconButton><Menu /></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
    maxHeight={272}
  >
    <MenuItem value="" primaryText="First Menu" />
    <MenuItem value="" primaryText="Second Menu" />
    <MenuItem value="" primaryText="Third Menu" />
    <MenuItem value="" primaryText="Fourth Menu" />
  </IconMenu>
);

export default NavIconMenu;
