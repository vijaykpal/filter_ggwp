import React, {useState} from 'react';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import {Container, ExpandableTitle, Title, OptionContainer, Input, Label} from '../FilterBy.styles';

const FilterBySeverity = (props) => {
    const {filterTitle, onOptionClick, selected} = props;
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
                            type="checkbox" 
                            id="low" 
                            name="low" 
                            value="Low" 
                            onClick={(e) => onOptionClick(e.target.value)}
                            checked={selected.includes("Low")} />
                        <Label for="low" onClick={(e) => onOptionClick(e.target.value)}> Low</Label><br/>
                    </OptionContainer>
                
                    <OptionContainer>
                        <Input 
                            type="checkbox" 
                            id="medium" 
                            name="medium" 
                            value="Medium" 
                            onClick={(e) => onOptionClick(e.target.value)}
                            checked={selected.includes("Medium")} />
                        <Label for="medium" onClick={(e) => onOptionClick(e.target.value)}> Medium</Label><br/>
                    </OptionContainer>

                    <OptionContainer>
                        <Input 
                            type="checkbox" 
                            id="high" 
                            name="high" 
                            value="High" 
                            onClick={(e) => onOptionClick(e.target.value)}
                            checked={selected.includes("High")} />
                        <Label for="high" onClick={(e) => onOptionClick(e.target.value)}> High</Label><br/>
                    </OptionContainer>
                </>
                : null}
  
            </Container>
    );
};

export default FilterBySeverity;