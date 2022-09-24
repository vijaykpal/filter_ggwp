import { Close } from '@mui/icons-material';
import {Container} from './SelectedFilters.styles';

const Pill = ({type, value, onClose}) => {
    return(
        <Container>
            <Close sx={{height: 18}} onClick={() => onClose(type, value)} />
            {type}: {value}
        </Container>
    );
};

const SelectedFilter = ({selectedFilters, onClose}) => {

    return(
        <>
        { selectedFilters.siverity.map((item) => {
            return(
                <Pill type='Siverity' value={item} onClose={onClose} />
            );   
        })}

        {selectedFilters.time ? 
        <Pill type='Time' value={selectedFilters.time} onClose={onClose} />
        : null}
        </>
    );
};

export default SelectedFilter;

