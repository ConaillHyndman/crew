import { render, screen } from '@testing-library/react';
import Login from './Login';
import siteContent from "../Assets/content/site.json";

describe('Login test suite', () => {
    it('Should render page', () => {
        render(<Login />);
        const loginContent = screen.getByText(siteContent.site[0].login[0].pageTitle && siteContent.site[0].login[0].signUpContent);
        expect(loginContent).toBeInTheDocument();
    });
});
