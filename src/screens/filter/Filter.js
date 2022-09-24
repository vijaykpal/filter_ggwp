import React, {useState} from 'react';
import { RestartAlt, FilterList } from '@mui/icons-material';
import FilterBySeverity from '../../components/filterBySiverity/FilterBySiverity';
import FilterByTime from '../../components/filterByTime/FilterByTime';
import SelectedFilter from '../../components/selectedFilter/SelectedFilters';
import { FilterWrapper, Wrapper, FilterButton, Container, FilterDataWithReset, ResetButton } from "./Filter.styles";

const Filter = () => {

    const selectedFilterObj = {
        siverity: [],
        time: ''
    };
    const [selectedFilters, setSelectedFilters] = useState(selectedFilterObj);
    const [showFilters, setShowFilters] = useState(false);

    const onFilterClick = () => {
        setShowFilters(!showFilters);
        setSelectedFilters(selectedFilterObj);
    };

    const removeSiverity = (value) => {
        const removeIndex = selectedFilters.siverity.indexOf(value);
        selectedFilters.siverity.splice(removeIndex, 1)
        setSelectedFilters({...selectedFilters, siverity: [...selectedFilters.siverity]});
    };

    const onSeviritySelect = (value) => {
        if(value){
            if(selectedFilters.siverity.includes(value)){
                removeSiverity(value);
            }
            else {
                setSelectedFilters({...selectedFilters, siverity: [...selectedFilters.siverity, value]})
            }
        }
    };

    const onTimeSelect = (value) => {
        if(value !== selectedFilters.time){
            setSelectedFilters({...selectedFilters, time: value});
        }        
    };



    const removeFilter = (type, value) => {
        if(type === 'Time'){
            setSelectedFilters({...selectedFilters, time: ''});
        }
        else if(type === 'Siverity'){
            removeSiverity(value);
        }
    }

    return(
        <FilterWrapper>
            <Wrapper>
                <FilterButton showFilters={showFilters} onClick={onFilterClick}><FilterList sx={{paddingRight: '10px'}} />Filter</FilterButton>
                <SelectedFilter selectedFilters={selectedFilters} onClose={removeFilter} />
            </Wrapper>

            {showFilters ?
            <Container>
                <FilterDataWithReset>
                    <div>Filter data by</div>
                    <div style={{display:'flex', alignItems:'center'}} onClick={() => setSelectedFilters(selectedFilterObj)}>
                        <RestartAlt sx={{color: 'blue', height: 18}} /> <ResetButton>Reset</ResetButton>
                    </div>
                </FilterDataWithReset>
                
                <FilterBySeverity filterTitle='Severity' onOptionClick={onSeviritySelect} selected={selectedFilters.siverity} />
                <FilterByTime filterTitle='Time' onOptionClick={onTimeSelect} selected={selectedFilters.time} />
            </Container>
            : null}
        </FilterWrapper>  
    );
};

export default Filter;