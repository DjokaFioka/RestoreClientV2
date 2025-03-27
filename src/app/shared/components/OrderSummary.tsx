import { Box, Typography, Divider, Button, TextField, Paper } from "@mui/material";
import { currencyFormat } from "../../../lib/util";
import { Link, useLocation } from "react-router-dom";
import { useBasket } from "../../../lib/hooks/useBasket";

export default function OrderSummary() {
    const { subtotal, deliveryFee } = useBasket();
    const location = useLocation();

    return (
        <Box display="flex" flexDirection="column" alignItems="center" maxWidth="lg" mx="auto">
            <Paper sx={{ mb: 2, p: 3, width: '100%', borderRadius: 3 }}>

                <Typography variant="h6" component="p" fontWeight="bold">
                    Order summary
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    Orders over $100 qualify for free delivery!
                </Typography>
                <Box mt={2}>
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', sm: 'row' }} // Stack vertically on small screens, horizontal on larger screens
                        justifyContent="space-between"
                        mb={1}>
                        <Typography color="textSecondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Subtotal</Typography>
                        <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                            {currencyFormat(subtotal)}
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', sm: 'row' }} // Stack vertically on small screens, horizontal on larger screens
                        justifyContent="space-between"
                        mb={1}>
                        <Typography color="textSecondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Discount</Typography>
                        <Typography color="success" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                            {/* TODO */}
                            -$0.00
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', sm: 'row' }} // Stack vertically on small screens, horizontal on larger screens
                        justifyContent="space-between"
                        mb={1}>
                        <Typography color="textSecondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Delivery fee</Typography>
                        <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                            {currencyFormat(deliveryFee)}
                        </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', sm: 'row' }} // Stack vertically on small screens, horizontal on larger screens
                        justifyContent="space-between"
                        mb={1}>
                        <Typography color="textSecondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Total</Typography>
                        <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                            {currencyFormat(subtotal + deliveryFee)}
                        </Typography>
                    </Box>
                </Box>

                <Box mt={2}>
                    {!location.pathname.includes('checkout') &&
                    <Button
                        component={Link}
                        to='/checkout'
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mb: 1 }}
                    >
                        Checkout
                    </Button>}
                    <Button
                        component={Link}
                        to='/catalog'
                        fullWidth
                        sx={{ textAlign: 'center' }}
                    >
                        Continue Shopping
                    </Button>
                </Box>
            </Paper>

            {/* Coupon Code Section */}
            <Paper sx={{ width: '100%', borderRadius: 3, p: 3 }}>

                <form>
                    <Typography variant="subtitle1" component="label">
                        Do you have a voucher code?
                    </Typography>

                    <TextField
                        label="Voucher code"
                        variant="outlined"
                        fullWidth
                        sx={{ my: 2 }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Apply code
                    </Button>
                </form>
            </Paper>
        </Box>
    )
}