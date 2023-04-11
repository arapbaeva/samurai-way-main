import React from "react";
import { create } from "react-test-renderer";
import { ProfileStatus } from "./ProfileStatus";


describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        expect(root.instance.state.status).toBe("it-kamasutra.com");
    });
    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        let span = root.findByType('span')
        expect(span.children.toString()).toBe("it-kamasutra.com");
    });
    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root
        let span = root.findByType('span')
        expect(span?.children.length).toBe(1);
    });
});

