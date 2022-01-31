import React, { useState } from 'react';
import { getDaysInMonth, format, isToday, getDay } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Main, ChangeMonth, MonthIndicator, DayOfWeek, DateGrid, Day } from './styles';

const Calendar = () => {
  const [year] = useState(new Date().getFullYear())
  const [month, setMonth] = useState(new Date().getMonth())
  const [day] = useState(new Date().getDate())

  let days = []
  for (let day = 1; day <= getDaysInMonth(new Date(year, month)); day++) {
    days.push(day);
  }

  return (
    <Main>
      <div class="calendar">
        <MonthIndicator>
          <ChangeMonth onClick={() => setMonth(month - 1)} class="change-month"> - </ChangeMonth>
          <h3>{ format(new Date(year, month, 1), 'MMMM yyyy', { locale: ptBR }) }</h3>
          <ChangeMonth onClick={() => setMonth(month + 1)} class="change-month"> + </ChangeMonth>
        </MonthIndicator>
        <DayOfWeek>
          <div>D</div>
          <div>S</div>
          <div>T</div>
          <div>Q</div>
          <div>Q</div>
          <div>S</div>
          <div>S</div>
        </DayOfWeek>
        <DateGrid>
          {
            days.map(date => (
              <Day
                startDay={ getDay(new Date(year, month, date)) } 
                isToday={ isToday(new Date(year, month, date)) }
              >
                <time datetime={ `${year}-${month}-${date}` }>
                  {date}
                </time>
              </Day>
            ))
          }
        </DateGrid>
      </div>
    </Main>
  );
}

export default Calendar;