import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`

export const Main = styled.main`
  max-width: max-content;
  padding: 1.5em;
  background-color: #fff;
  border: 2px solid var(--blue-grey-200);
  border-radius: 8px;
`

export const ChangeMonth = styled.button`
  align-items: center;
  background: none;
  border: 1px solid #ccc;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  height: 25px;
  justify-content: center;
  outline: none;
  user-select: none;
  width: 25px;
`

export const MonthIndicator = styled.div`
  align-items: center;
  color: var(--blue-grey-700);
  text-align: center;
  text-transform: capitalize;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const DayOfWeek = styled(Grid)`
  cursor: default;
  margin-top: 1.25em;
  user-select: none;

  & > * {
    font-size: 0.7em;
    color: var(--blue-grey-400);
    font-weight: 500;
    letter-spacing: 0.1em;
    font-variant: small-caps;
    text-align: center;
  }
`

export const DateGrid = styled(Grid)`
  margin-top: 0.5em;
`

export const Day = styled.button`
  position: relative;
  border: 0;
  cursor: pointer;
  width: 4.5ch;
  height: 4.5ch;
  border-radius: 50%;
  background-color: transparent;
  color: var(--blue-grey-600);
  outline: none;

  &:hover {
    outline: none;
    background-color: var(--blue-grey-050);
    color: var(--blue-grey-700);
  }

  &:active, &.is-selected, &:focus {
    background-color: var(--teal-100);
    color: var(--teal-900);
  }

  &:first-child {
    grid-column: ${({ startDay }) => startDay + 1};
  }

  ${({ isToday }) => isToday && `
    background-color: var(--teal-050);
    color: var(--teal-900);
  `}
`