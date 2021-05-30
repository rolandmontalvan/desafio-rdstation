import {render, screen } from "@testing-library/react";
import Launch from ".";

describe('Launch Component', () => {
    test('should show Launch Component', () => {
        render(<Launch />)

        const launchTitle = screen.getByText('Mission')
        
    })
    
})