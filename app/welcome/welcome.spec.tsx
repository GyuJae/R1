import { describe, expect, it } from "vitest";
import { render, screen } from '@testing-library/react'
import { Welcome } from "./welcome";

describe("<Welcome />", () => {
    it("Render Test", () => {
        render(<Welcome />);
        
        expect(screen.getByText("Welecome")).toBeDefined();
    })
});