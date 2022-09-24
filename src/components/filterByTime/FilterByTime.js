import React, {useState} from 'react';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import {Container, ExpandableTitle, Title, OptionContainer, Input, Label} from '../FilterBy.styles';

const FilterByTime = ({filterTitle, onOptionClick, selected}) => {

    const [hideOptions, setHideOptions] = useState(false);

    return(
        <Container>
            <ExpandableTitle>
                <Title>{filterTitle}</Title>
                { !hideOptions ? 
                    <KeyboardArrowUp sx={{height: 20}} onClick={() => setHideOptions(!hideOptions)} /> :
                    <KeyboardArrowDown sx={{height: 20}} onClick={() => setHideOptions(!hideOptions)} />
                }
            </ExpandableTitle>

            {!hideOptions ?
            <>
                <OptionContainer>
                    <Input 
                        type="radio" 
                        id="24hours" 
                        name="time" 
                        value="Last 24 hours" 
                        onClick={(e) => onOptionClick(e.target.value)} 
                        checked={selected === 'Last 24 hours'} />
                    <Label 
                        for="24hours" 
                        onClick={(e) => onOptionClick(e.target.value)}>
                            Last 24 hours
                    </Label><br/>
                </OptionContainer>

                <OptionContainer>
                    <Input 
                        type="radio" 
                        id="72hours" 
                        name="time" 
                        value="Last 72 hours" 
                        onClick={(e) => onOptionClick(e.target.value)} 
                        checked={selected === 'Last 72 hours'} />
                    <Label 
                        for="72hours" 
                        onClick={(e) => onOptionClick(e.target.value)}>
                            Last 72 hours
                    </Label><br/>
                </OptionContainer>

                <OptionContainer>
                    <Input 
                        type="radio" 
                        id="week" 
                        name="time" 
                        value="Last week" 
                        onClick={(e) => onOptionClick(e.target.value)} 
                        checked={selected === 'Last week'} />
                    <Label 
                        for="week" 
                        onClick={(e) => onOptionClick(e.target.value)}>
                            Last week
                    </Label><br/>
                </OptionContainer>

                <OptionContainer>
                    <Input 
                        type="radio" 
                        id="6months" 
                        name="time" 
                        value="Last 6 months" 
                        onClick={(e) => onOptionClick(e.target.value)} 
                        checked={selected === 'Last 6 months'} />
                    <Label 
                        for="6months" 
                        onClick={(e) => onOptionClick(e.target.value)}>
                            Last 6 months
                    </Label><br/>
                </OptionContainer>
            </>
            : null}

        </Container>
    );
};

export default FilterByTime;