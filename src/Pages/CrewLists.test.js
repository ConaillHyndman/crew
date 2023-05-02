import { render, screen } from '@testing-library/react';
import MyClub from './MyClub';
import clubMemberData from '../Assets/content/club.json'

test('dynamically renders club data', () => {
    render(<MyClub />);
    if (window.location.pathname === "/club-members/carnlough") {
        const headingContent = clubMemberData.clubs[0].carnlough[0].clubName;
        expect(headingContent).toBeInTheDocument();
    } else if (window.location.pathname === "/club-members/cairndhu") {
        const secondHeadingContent = clubMemberData.clubs[0].cairndhu[0].clubName;
        console.log(secondHeadingContent);
        expect(secondHeadingContent).toBeInTheDocument();
    }
});