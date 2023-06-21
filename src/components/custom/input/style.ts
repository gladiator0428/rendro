import styled from "styled-components";
import { GV } from "../../../utils/style.util";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const InputLabel = styled.span`
    font-size: 0.8rem;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
`

export const InputContent = styled.div`
    position: relative;
`

export const InputWrapper = styled.label`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.7rem;
    line-height: 3rem;
    min-height: 3rem;
    z-index: 1;
`

export const InputBoard = styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    width: 100%;
    height: 100%;
    border: 1px solid ${GV('primary')};
    background: none;
    border-radius: 0.5rem;
`

export const StyledInput = styled.input`
    flex: 1;
    display: block;
    min-width: 0;
    padding: 0;
    background: none;
    border: none;
    outline: none !important;
    font-size: 1rem;
`

export const StyledTextarea = styled(StyledInput)`
`
