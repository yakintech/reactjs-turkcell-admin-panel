import React, { useContext } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'
import { IconButton, List, ListItem, ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

function Favorites() {

    const { favorites, favOperation } = useContext(FavoritesContext)

    return <>
        <List>
            {
                favorites.map(item => {
                    return <ListItem>
                        <ListItemText
                            primary={item.name}
                        />
                        <IconButton onClick={() => favOperation(item)} edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                })
            }
        </List>
    </>
}

export default Favorites