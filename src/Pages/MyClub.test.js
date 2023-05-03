import { render, screen } from '@testing-library/react';
import MyClub from './MyClub';
import clubMemberData from '../Assets/content/club.json'

describe('My club test suite', () => {

    function renderList() {
        if (window.location.pathname === "/club-members/carnlough") {
            return clubMemberData.clubs[0].carnlough[0].member;
        } else {
            return clubMemberData.clubs[0].cairndhu[0].member;
        }
    }

    it('Should dynamically render the header', () => {
        render(<MyClub />);
        if (window.location.pathname === "/club-members/carnlough") {
            const carnloughHeading = screen.getByText(clubMemberData.clubs[0].carnlough[0].clubName);
            expect(carnloughHeading).toBeInTheDocument();
        } else if (window.location.pathname === "/club-members/cairndhu") {
            const cairndhuHeading = screen.getByText(clubMemberData.clubs[0].cairndhu[0].clubName);
            expect(cairndhuHeading).toBeInTheDocument();
        }
    });

    it('dynamically renders member data', () => {
        render(<MyClub />);
        if (window.location.pathname === "/club-members/carnlough") {
            const renderedContent = screen.getByText(renderList()[0].memberName);
            expect(renderedContent).toBeInTheDocument();
        } else if (window.location.pathname === "/club-members/carindhu") {
            const newRenderedContent = screen.getByText(renderList()[0].memberName);
            expect(newRenderedContent).toBeInTheDocument();
        }
    });
});
