import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-left: 12px;
    font-size: 14px;
    background-color: #2E2E2E;
    color: white;
    border: 1px #6C6A61;
    padding: 6px;
    border-radius: 8px;
    @media (max-width: 400px) {
        margin-top: 6px;
        margin-left: 0;
      }
`;