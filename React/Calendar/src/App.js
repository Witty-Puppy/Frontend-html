import Calendar from '@toast-ui/react-calendar'; /* toast ui calendar node.js module*/
import '@toast-ui/calendar/dist/toastui-calendar.min.css'; /* toast ui calendar css */
import 'tui-date-picker/dist/tui-date-picker.css'; /* CSS for useFormPopup 1 */
import 'tui-time-picker/dist/tui-time-picker.css'; /* CSS for useFormPopup 2 */

// import { createRef } from 'react'; // 클래스에서 쓰던 거
import React, { useRef, useEffect, useState } from 'react';

function App() {
    const calendarRef = useRef(); // 인스턴스 메서드를 쓰기 위함. 즉, DOM을 가져오기 위해
    const [calendar, setCalendar] = useState(null);
    const [maxLog, setMaxLog] = useState(true);

    useEffect(() => {
        /*
            태그 그 자체를 가져온다. div.container 를 가져오게 되는데.
            만약 인스턴스 메서드가 아니라 직접 요소 하나하나를 다루고 싶을 때 사용한다.
        */
        // const calendarRootElement = calendarRef.current.getRootElement();

        /* 
            toast ui 에서 제공하는 인스턴스 메서드를 쓰기 위함이다.
            이렇게 값을 가져와야 다음 작업이 가능해진다.
            redux로 하는게 좋다곤 하는데. 아직 몰라서 state 방식을 택했다.
            이 컴포넌트 내에서 만큼은 전역적으로 쓰기 위함
         */
        setCalendar(calendarRef.current.getInstance());
        // 여기서는 말그대로 setter만 한다.
    }, []);

    useEffect(() => {
        /* 
            의존성 배열로 calendar를 추가했다 하더라도.
            1. 마운트 시점에 useState 선언
            2. 마운트가 완료되고 직후 []이 의존성배열인 useEffect로 setter 발생

            두가지이기 때문에 이 [calendar] 의존성 배열인 useEffect는 두번 발생한다.
            그래서 if문으로 묶어준다.
        */
        if (!!calendar && maxLog) {
            console.log(calendar);
            setMaxLog(false);
        }
    }, [calendar, maxLog]);

    const calendars = [{ id: 'cal1', name: 'Personal' }];
    const initialEvents = [
        {
            id: '1',
            calendarId: 'cal1',
            title: 'Lunch',
            category: 'time',
            start: '2024-01-15T12:00:00',
            end: '2024-01-17T13:30:00',
        },
        {
            id: '2',
            calendarId: 'cal2',
            title: 'Lunch',
            category: 'time',
            start: '2024-01-15T12:00:00',
            end: '2024-01-17T13:30:00',
        },
        {
            id: '3',
            calendarId: 'cal3',
            title: 'Lunch',
            category: 'time',
            start: '2024-01-15T12:00:00',
            end: '2024-01-17T13:30:00',
        },
        {
            id: '4',
            calendarId: 'cal4',
            title: 'Lunch',
            category: 'time',
            start: '2024-01-15T12:00:00',
            end: '2024-01-17T13:30:00',
        },
        {
            id: '4',
            calendarId: 'cal4',
            title: 'Coffee Break',
            category: 'time',
            start: '2024-01-22T15:00:00',
            end: '2024-01-22T15:30:00',
        },
    ];

    // const onAfterRenderEvent = (event) => {
    //     console.log(event.title);
    // };

    return (
        <div>
            <Calendar
                ref={calendarRef} /* DOM을 가져오기 위해 */
                view="month" /* 'month', 'week', 'day' */
                useFormPopup={true} /* {true}, {false} */
                useDetailPopup={true} /* {true}, {false} */
                isReadOnly={false} /* {true}, {false} */
                usageStatistics={false} /* {true}, {false} */
                eventFilter={(event) => {
                    // console.log(event);
                    // return event.id === '1';
                    return true;
                }} /* (event: EventObject) => boolean */
                week={{
                    startDayOfWeek: 0 /* 0:일, 1:월, 2:화, 3:수, 4:목, 5:금, 6:토 */,
                    dayNames: ['일', '월', '화', '수', '목', '금', '토'] /* 기본값 [] */,
                    narrowWeekend: true /* true 하면 주말 너비를 좁게 */,
                    workweek: false /* true 하면 주말 제외 */,
                    showNowIndicator: true /* false 하면 현재 시간선이 표시되지 않도록 */,
                    showTimezoneCollapseButton: true /* true 하면 서브타임존 접기버튼 */,
                    timezonesCollapsed: false /* true 하면 서브타임존 접힌상태로 표시 */,
                    hourStart: 9 /* 숫자가 들어가고 시작 시간 */,
                    hourEnd: 18 /* 숫자가 들어가고 끝 시간 */,
                    eventView: true /* true | false | ['allday'] | ['time'] */,
                    taskView: false /* true | false | ['milestone'] | ['task'] */,
                    collapseDuplicateEvents: false /* boolean값인 경우, CollapseDuplicateEventsOptions 인 경우로 나뉜다. */,
                }} /* WeekOptions... week 부분으로 링크타서 이동하면 보이는 객체이다.*/
                month={{
                    dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] /* 기본값 [’sun’, ’mon’, ’tue’, ’wed’, ’thu’, ’fri’, ’sat’] */,
                    startDayOfWeek: 0 /* 0 ~ 6, 어느요일부터 표시할지 0->일요일 */,
                    narrowWeekend: true /* true이면 주말이 좁게 보인다. */,
                    visibleWeeksCount: 0 /* 0 ~ 6 ++. 0이면 기본값. 나머지의 경우 보여지는 주의 개수가 달라짐. 6 초과도 가능한데 지양하는게 좋을듯 */,
                    isAlways6Weeks: true /* boolean */,
                    workweek: false /* 주말제외 */,
                    visibleEventCount: 2 /* 이벤트가 한번에 몇개까지 보여지게 할건지. 넘치는건 버튼이 발생 */,
                }}
                gridSelection={{ enableClick: true, enableDblClick: false }} /* boolean | GridSelectionOptions */
                // theme={}
                // template={}
                calendars={calendars}
                events={initialEvents}
            // onAfterRenderEvent={onAfterRenderEvent}
            />
            <input
                type="button"
                onClick={() => {
                    console.log('렌더링 발생했습니다.');
                    calendar.render(); // 렌더링이 발생한다.
                    // 사실 반환값이 Calendar긴 하다.
                    // calendar.renderToString() 이라는 것도 있는데. 이는 서버사이드 렌더링 환경에서 사용가능
                }}
                value="calendar.render();"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('렌더링 요소를 삭제하고 인스턴스를 빈 객체로 만듭니다.');
                    calendar.destroy();
                    // 이부분은 div.container 까지는 남겨놓는다. 그래서 실제로 컴포넌트 자체가 사라지는건 아니다.
                }}
                value="calendar.destroy();"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('일정을 가져옵니다. 일정 id 와 캘린더 id가 필요합니다.');
                    const eventObject = calendar.getEvent('1', 'cal1');
                    console.log('>>>', eventObject);
                    // 반환값은 EventObject
                }}
                value="calendar.getEvent(event id, calendar id);"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('일정 여러개 생성');
                    calendar.createEvents([
                        {
                            id: 'event1',
                            calendarId: 'cal1',
                            title: 'Weekly Meeting',
                            start: '2024-01-22T13:00:00',
                            end: '2024-01-25T10:00:00',
                        },
                        {
                            id: 'event2',
                            calendarId: 'cal2',
                            title: 'Lunch with Teammates',
                            start: '2024-01-20T03:00:00',
                            end: '2024-01-30T04:00:00',
                        },
                    ]);
                }}
                value="calendar.createEvents(event list);"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('일정 변경. 속성 1개부터 여러개까지 다 가능. 없으면 변화없음!');
                    console.log(calendar.getEvent('event1', 'cal1'));
                    calendar.updateEvent('event1', 'cal1', {
                        title: '타이틀 바뀜!'
                    });
                }}
                value="calendar.updateEvent(event id, calendar id, EventObject);"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('일정 제거');
                    console.log(calendar.getEvent('event1', 'cal1'));
                    calendar.deleteEvent('event1', 'cal1');
                    // 겹치더라도 하나씩만 제거된다는 점은 주의
                    // 겹칠일은 없을텐데.. 그러더라도
                }}
                value="calendar.deleteEvent(event id, calendar id);"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('일정 모두 제거');
                    calendar.clear();
                }}
                value="calendar.clear();"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('현재날짜로 이동');
                    calendar.today();
                }}
                value="calendar.today();"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('offset 만큼 이동. view에 따라 단위가 다름.');
                    calendar.move(-12);
                }}
                value="calendar.move(-12);"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('이전 시간대로 이동. view에 따라 단위가 다름.');
                    calendar.prev();
                }}
                value="calendar.prev();"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('다음 시간대로 이동. view에 따라 단위가 다름.');
                    calendar.next();
                }}
                value="calendar.next();"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('특정 시간대로 이동. 문자열버전');
                    calendar.setDate('2022-03-01');
                }}
                value="calendar.next(문자열);"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('특정 시간대로 이동. Date 객체 버전');
                    calendar.setDate(new Date(2022, 4, 21));
                }}
                value="calendar.next(Date 객체);"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('패스');
                }}
                value="calendar.next(TZDate 객체) 는 패스함"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('view 자체를 변환함. month');
                    calendar.changeView('month');
                }}
                value="calendar.changeView('month');"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('view 자체를 변환함. week');
                    calendar.changeView('week');
                }}
                value="calendar.changeView('week');"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('view 자체를 변환함. day');
                    calendar.changeView('day');
                }}
                value="calendar.changeView('day');"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('일정 그 자체의 HTML엘리먼트를 리턴함. 없으면 null');
                    console.log(calendar.getElement('1', 'cal1'));
                }}
                value="calendar.getElement(event id, calendar id);"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('테마를 변경함.', 'https://github.com/nhn/tui.calendar/blob/main/docs/ko/apis/theme.md');
                    calendar.setTheme({
                        month: {
                            weekend: {
                                backgroundColor: 'red',
                            }
                        }
                    });
                }}
                value="calendar.setTheme(테마 객체);"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('현재 캘린더 인스턴스의 옵션 전체를 리턴', 'https://github.com/nhn/tui.calendar/blob/main/docs/ko/apis/options.md');
                    console.log(calendar.getOptions());
                }}
                value="calendar.getOptions();"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('현재 캘린더 인스턴스의 옵션을 변경', 'https://github.com/nhn/tui.calendar/blob/main/docs/ko/apis/options.md');
                    calendar.setOptions({
                        month: {
                            workweek: true
                        }
                    });
                }}
                value="calendar.setOptions(Options 객체);"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('현재 화면을 렌더링하는데 사용되는 기준 날짜 리턴.');
                    console.log(calendar.getDate());
                }}
                value="calendar.getDate(); [TZDate 리턴함!]"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('현재 화면을 렌더링하고 있는 시작 시간 리턴.');
                    console.log(calendar.getDateRangeStart());
                }}
                value="calendar.getDateRangeStart(); [TZDate 리턴함!]"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('현재 화면을 렌더링하고 있는 종료 시간 리턴.');
                    console.log(calendar.getDateRangeEnd());
                }}
                value="calendar.getDateRangeEnd(); [TZDate 리턴함!]"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('현재 view를 리턴함. month, week, day');
                    console.log(calendar.getViewName());
                }}
                value="calendar.getViewName(); [string 리턴함!]"
            />
            <br />
            <input
                type="button"
                onClick={() => {
                    console.log('하나이상의 캘린더를 설정한다.', 'https://github.com/nhn/tui.calendar/blob/main/docs/ko/apis/event-object.md#%EC%BA%98%EB%A6%B0%EB%8D%94calendarid');
                    calendar.setCalendars([
                        {
                            id: 'cal1',
                            name: 'Personal',
                            color: '#ffffff',
                            backgroundColor: '#9e5fff',
                            dragBackgroundColor: '#9e5fff',
                            borderColor: '#9e5fff',
                        },
                        {
                            id: 'cal2',
                            name: 'Work',
                            color: '#00a9ff',
                            backgroundColor: '#00a9ff',
                            dragBackgroundColor: '#00a9ff',
                            borderColor: '#00a9ff',
                        },
                    ]);
                    console.log(calendar.getOptions());
                }}
                value="calendar.setCalendars(CalendarInfo[]);"
            />
            <br />
        </div>
    );
}

export default App;
/* https://github.com/nhn/tui.calendar/blob/main/docs/ko/apis/calendar.md#setCalendarVisibility */
