import styled from "styled-components";

export const FilterWrapper = styled.div``;

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 16px;
    flex-wrap: wrap;
    @media (max-width: 400px) {
        flex-direction: column;
        width: fit-content;
      }
`;

export const FilterButton = styled.button`
    display: flex;
    align-items: center;
    background-color: ${props => props.showFilters ? 'blue' : 'transparent'};
    color: ${props => props.showFilters ? 'white' : 'blue'};
    border: 1px solid ${props => props.showFilters ? 'blue' : '#6C6A61'};
    border-radius: 6px;
    padding: 4px;
    padding-left: 8px;
    padding-right: 8px;
    letter-spacing: 0.5px;
    font-size: 16px;
`;

export const Container = styled.div`
    background-color: #2E2E2E;
    color: white;
    border: 1px #6C6A61;
    width: 300px;
    padding: 16px;
    border-radius: 8px;
    @media (max-width: 300px) {
        width: auto;
      }
`;

export const FilterDataWithReset = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ResetButton = styled.button`
    background-color: transparent;
    color: blue;
    border: 0;
    margin-top: 4px;
    padding-left: 0;
`;