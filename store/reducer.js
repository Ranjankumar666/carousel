import { events } from "../data/events";

const dateConfig = {
    selected: true,
    selectedColor: "#aaa",
};

const markedDates = events.reduce((acc, event) => {
    acc[event.date] = {
        ...dateConfig,
        id: event.id,
    };

    return acc;
}, {});

const initState = {
    events,
    markedDates,
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
