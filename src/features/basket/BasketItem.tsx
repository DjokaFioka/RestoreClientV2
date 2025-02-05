import { Box, Grid2, IconButton, Paper, Typography } from "@mui/material"
import { Item } from "../../app/models/basket"
import { Add, Close, Remove } from "@mui/icons-material"
import { useAddBasketItemMutation, useRemoveBasketItemMutation } from "./basketApi"
import { currencyFormat } from "../../lib/util"

type Props = {
    item: Item
}

export default function BasketItem({ item }: Props) {
    const [removeBasketItem] = useRemoveBasketItemMutation();
    const [addBasketItem] = useAddBasketItemMutation();

    return (
        <Paper sx={{
            height: { xs: 'auto', md: 140 }, // Auto height on small screens
            borderRadius: 3,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Column on small screens, row on large screens
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
            pt: { xs: 2, md: 0 },
            pb: { xs: 2, md: 0 },
            position: 'relative', // Added relative positioning to the Paper component
        }}>
            <Box display='flex' flexDirection={{ xs: 'column', md: 'row' }} alignItems='center'>
                <Box
                    component='img'
                    src={item.pictureUrl}
                    alt={item.name}
                    sx={{
                        width: { xs: 80, sm: 100 }, // Smaller image size on small screens
                        height: { xs: 80, sm: 100 },
                        objectFit: 'cover',
                        borderRadius: '4px',
                        mr: { sm: 8 },
                        ml: { xs: 2, sm: 4 }, // Different margins for small screens
                        mb: { xs: 2, sm: 0 } // Margin-bottom on small screens only
                    }}
                />

                <Box display='flex' flexDirection='column' gap={1}>
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            fontSize: { xs: '1rem', sm: '1.25rem' } 
                        }}>
                        {item.name}
                    </Typography>

                    <Box display='flex' flexDirection={{ xs: 'column', sm: 'row' }} alignItems='center' gap={2}>
                        <Typography sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                            {currencyFormat(item.price)} x {item.quantity}
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }} color='primary'>
                            {currencyFormat(item.price * item.quantity)}
                        </Typography>
                    </Box>

                    <Grid2 
                        container 
                        spacing={1} 
                        alignItems='center'
                        sx={{
                            justifyContent: { xs: 'center', sm: 'flex-start' },  // Center on small screens, align to start on larger screens
                        }}>
                        <IconButton 
                            onClick={() => removeBasketItem({ productId: item.productId, quantity: 1 })}
                            color="error" 
                            size="small" 
                            sx={{ border: 1, borderRadius: 1, minWidth: 0 }}
                        >
                            <Remove />
                        </IconButton>
                        <Typography variant="h6">{item.quantity}</Typography>
                        <IconButton 
                            onClick={() => addBasketItem({ product: item, quantity: 1 })}
                            color="success" 
                            size="small" 
                            sx={{ border: 1, borderRadius: 1, minWidth: 0 }}
                        >
                            <Add />
                        </IconButton>
                    </Grid2>
                </Box>
            </Box>
            
            <IconButton
                onClick={() => removeBasketItem({ productId: item.productId, quantity: item.quantity })}
                color='error'
                size="small" 
                sx={{
                    border: 1, 
                    borderRadius: 1, 
                    minWidth: 0, 
                    position: 'absolute', // Position absolute within Paper
                    top: 8, // Distance from the top
                    right: 8, // Distance from the right
                }}
            >
                <Close />
            </IconButton>
        </Paper>
    )
}
