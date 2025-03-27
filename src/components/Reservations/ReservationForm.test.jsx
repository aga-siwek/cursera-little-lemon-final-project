import ReservationForm from "./ReservationForm";
import {describe, it, expect} from "vitest";
import {render, screen, fireEvent} from "@testing-library/react";

describe("Reservation form increase and decrease buttons", () => {
    it('should increase countAdults by 1 when clicking "Increase" button for adults', () => {
        render(<ReservationForm handleFillForm={() => {
        }} availableTimes={[]} updateTimes={() => {
        }}/>);

        const increaseButtonAdultAll = screen.getAllByTestId("increase_adult")
        const increaseButtonAdult = increaseButtonAdultAll[0]

        fireEvent.click(increaseButtonAdult);

        const adultResultAll = screen.getAllByTestId("result_adult")
        const adultResult = adultResultAll[0]

        expect(adultResult.textContent).toBe("2");
    });

    it('should increase countAdults to 8 even you click 10 times', () => {
        render(<ReservationForm handleFillForm={() => {
        }} availableTimes={[]} updateTimes={() => {
        }}/>);

        const increaseButtonAdultAll = screen.getAllByTestId("increase_adult")
        const increaseButtonAdult = increaseButtonAdultAll[0]


        for (let i = 0; i < 10; i++) {
            fireEvent.click(increaseButtonAdult);
        }
        const adultResultAll = screen.getAllByTestId("result_adult")
        const adultResult = adultResultAll[0]
        expect(adultResult.textContent).toBe("8");
    });

    it('should be countAdults no more than 1', () => {
        render(<ReservationForm handleFillForm={() => {
        }} availableTimes={[]} updateTimes={() => {
        }}/>);

        const decreaseButtonAdultAll = screen.getAllByTestId("decrease_adult")
        const decreaseButtonAdult = decreaseButtonAdultAll[0]

        for (let i = 0; i < 10; i++) {
            fireEvent.click(decreaseButtonAdult);
        }
        const adultResultAll = screen.getAllByTestId("result_adult")
        const adultResult = adultResultAll[0]
        expect(adultResult.textContent).toBe("1");
    });

    it('should increase countAdults by 3 decrease by 1 and give result 3', () => {
        render(<ReservationForm handleFillForm={() => {
        }} availableTimes={[]} updateTimes={() => {
        }}/>);

        const increaseButtonAdultAll = screen.getAllByTestId("increase_adult")
        const increaseButtonAdult = increaseButtonAdultAll[0]
        const decreaseButtonAdultAll = screen.getAllByTestId("decrease_adult")
        const decreaseButtonAdult = decreaseButtonAdultAll[0]

        for (let i = 0; i < 3; i++) {
            fireEvent.click(increaseButtonAdult);
        }
        fireEvent.click(decreaseButtonAdult);

        const adultResultAll = screen.getAllByTestId("result_adult")
        const adultResult = adultResultAll[0]
        expect(adultResult.textContent).toBe("3");
    });

    it('should increase countChildren by 1 when clicking "Increase" button for children', () => {
        render(<ReservationForm handleFillForm={() => {
        }} availableTimes={[]} updateTimes={() => {
        }}/>);

        const increaseButtonChildrenAll = screen.getAllByTestId("increase_children")
        const increaseButtonChildren = increaseButtonChildrenAll[0]

        fireEvent.click(increaseButtonChildren);

        const childrenResultAll = screen.getAllByTestId("result_children")
        const childrenResult = childrenResultAll[0]

        expect(childrenResult.textContent).toBe("1");
    });

    it('should increase countChildren to 4 even you click 10 times', () => {
        render(<ReservationForm handleFillForm={() => {
        }} availableTimes={[]} updateTimes={() => {
        }}/>);

        const increaseButtonChildrenAll = screen.getAllByTestId("increase_children")
        const increaseButtonChildren = increaseButtonChildrenAll[0]


        for (let i = 0; i < 10; i++) {
            fireEvent.click(increaseButtonChildren);
        }
        const childrenResultAll = screen.getAllByTestId("result_children")
        const childrenResult = childrenResultAll[0]
        expect(childrenResult.textContent).toBe("4");
    });

    it('should be countChildren no more than 0', () => {
        render(<ReservationForm handleFillForm={() => {
        }} availableTimes={[]} updateTimes={() => {
        }}/>);

        const decreaseButtonChildrenAll = screen.getAllByTestId("decrease_children")
        const decreaseButtonChildren = decreaseButtonChildrenAll[0]

        for (let i = 0; i < 10; i++) {
            fireEvent.click(decreaseButtonChildren);
        }
        const childrenResultAll = screen.getAllByTestId("result_children")
        const childrenResult = childrenResultAll[0]
        expect(childrenResult.textContent).toBe("0");
    });

    it('should increase countChildren by 3 decrease by 1 and give result 2', () => {
        render(<ReservationForm handleFillForm={() => {
        }} availableTimes={[]} updateTimes={() => {
        }}/>);

        const increaseButtonChildrenAll = screen.getAllByTestId("increase_children")
        const increaseButtonChildren = increaseButtonChildrenAll[0]
        const decreaseButtonChildrenAll = screen.getAllByTestId("decrease_children")
        const decreaseButtonChildren = decreaseButtonChildrenAll[0]


        for (let i = 0; i < 3; i++) {
            fireEvent.click(increaseButtonChildren);
        }
        fireEvent.click(decreaseButtonChildren);

        const childrenResultAll = screen.getAllByTestId("result_children")
        const childrenResult = childrenResultAll[0]
        expect(childrenResult.textContent).toBe("2");
    });
});