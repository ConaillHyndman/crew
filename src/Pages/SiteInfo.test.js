import { render, screen } from '@testing-library/react';
import SiteInfo from './SiteInfo';
import siteContent from "../Assets/content/site.json";

describe('Site information test suite', () => {
    it('Should render page', () => {
        render(<SiteInfo />);
        const siteInfoContent = screen.getByText(siteContent.site[0].siteInfo[0].pageTitle && siteContent.site[0].siteInfo[0].siteImages);
        expect(siteInfoContent).toBeInTheDocument();
    });
});
