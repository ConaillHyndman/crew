import { render, screen } from '@testing-library/react';
import Home from './Home';
import siteContent from "../Assets/content/site.json";

describe('Home test suite', () => {

  const content = siteContent.site[0].home[0];

  it('Should render page', () => {
    render(<Home />);
    const homeContent = screen.getByText(
      content.pageTitle &&
      content.crewsCardTitle &&
      content.crewsCardInfo &&
      content.clubCardTitle &&
      content.clubCardInfo
    );
    expect(homeContent).toBeInTheDocument();
  });
});
