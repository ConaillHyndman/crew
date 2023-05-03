import { render, screen } from '@testing-library/react';
import Signup from './Signup';
import siteContent from "../Assets/content/site.json";

describe('Signup test suite', () => {
    it('Should render page', () => {
        render(<Signup />);
        const signupContent = screen.getByText(siteContent.site[0].signup[0].pageTitle);
        expect(signupContent).toBeInTheDocument();
    });
});
