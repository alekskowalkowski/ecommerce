import { AppBar, Switch, Toolbar, Typography, List, ListItem, IconButton, Badge, Box } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import { NavLink } from "react-router-dom";

interface Props {
    darkMode: boolean;
    onChange: () => void;
}

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
];

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
];

export default function Header({ darkMode, onChange }: Props) {
    return (
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h6" component={NavLink} to="/" sx={{ color: "inherit", textDecoration: "none" }}>
                        Ecommerce
                    </Typography>
                    <Switch onChange={onChange} checked={darkMode}/>
                </Box>
                <Box>
                    <List sx={{ display: "flex" }}>
                        {midLinks.map(({ title, path}) => (
                            <ListItem component={NavLink} to={path} key={path} sx={{ color: "inherit", typography: "h6", "&:hover": {color: "grey.500"}, "&.active": {color: "text.secondary"}}}>
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton size="large" edge="start" color="inherit" sx={{mr: 2}}>
                        <Badge badgeContent="4" color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{ display: "flex" }}>
                        {rightLinks.map(({ title, path}) => (
                            <ListItem component={NavLink} to={path} key={path} sx={{ color: "inherit", typography: "h6"}}>
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    );
}