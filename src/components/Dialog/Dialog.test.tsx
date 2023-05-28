import {render, screen} from "@testing-library/react";

import {useState} from "react";

import Dialog from "./index";

import userEvent from "@testing-library/user-event";

import Mock = jest.Mock;

let handleCloseButtonClick: Mock;

const Component = () => {
    const [isOpened, setIsOpened] = useState(true);
    handleCloseButtonClick = jest.fn(() => setIsOpened(false));

    return (
        <Dialog
            isOpened={isOpened}
            onCloseButtonClick={handleCloseButtonClick}
        >
            Dialog Content
        </Dialog>
    );
};

describe("Dialog", () => {

    it("Should renders correctly", () => {
        const { asFragment } = render(<Component/>);
        expect(asFragment()).toMatchSnapshot();
        userEvent.click(screen.getByTestId("close-modal-button"));
        expect(handleCloseButtonClick).toBeCalledTimes(1);
        expect(asFragment()).toMatchSnapshot();
    });

});