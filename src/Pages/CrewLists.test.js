import { render, screen } from '@testing-library/react';
import CrewLists from './CrewLists';
import clubMemberData from '../Assets/content/club.json'

describe('Crew lists test suite', () => {

    function renderList() {
        if (window.location.pathname === "/club-members/carnlough") {
            return clubMemberData.clubs[0].carnlough[0].member;
        } else {
            return clubMemberData.clubs[0].cairndhu[0].member;
        }
    }

    it('dynamically renders member data', () => {
        render(<CrewLists />);
        if (window.location.pathname === "/club-members/carnlough") {
            const renderedContent = screen.getByText(renderList()[0].memberName);
            expect(renderedContent).toBeInTheDocument();
        } else if (window.location.pathname === "/club-members/carindhu") {
            const newRenderedContent = screen.getByText(renderList()[0].memberName);
            expect(newRenderedContent).toBeInTheDocument();
        }
    });
});
