import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { AlertTitle } from '@mui/material';

export default function BasicAlerts() {
    return (
        <Stack className='alertS' sx={{ width: '25%' }} spacing={2}>
            <Alert severity="success"><AlertTitle>Success</AlertTitle></Alert>
        </Stack>
    );
}