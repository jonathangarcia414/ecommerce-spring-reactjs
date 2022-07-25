import React from "react";
import { createMemoryHistory } from "history";
import { Link } from "react-router-dom";

import { mountWithStore } from "../../../../utils/test/testHelper";
import CarouselImageSlider from "../CarouselImageSlider";
import { PRODUCT } from "../../../../constants/routeConstants";

describe("CarouselImageSlider", () => {
    
    it("should render correctly", () => {
        const wrapper = mountWithStore(<CarouselImageSlider />);
        expect(wrapper.find(".carousel-item-wrapper").length).toEqual(5);
    });

    it("should click Link", () => {
        const history = createMemoryHistory();
        const pushSpy = jest.spyOn(history, "push");
        const wrapper = mountWithStore(<CarouselImageSlider />, null, history);
        wrapper.find(Link).at(0).simulate("click", { button: 0 });
        expect(pushSpy).toHaveBeenCalled();
        expect(pushSpy).toHaveBeenCalledWith(`${PRODUCT}/46`);
    });
});
