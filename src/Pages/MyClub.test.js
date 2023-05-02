import { render, screen } from '@testing-library/react';
import MyClub from './MyClub';
import clubMemberData from '../Assets/content/club.json'

describe('My club test suite', () => {
    it('Should render on page', () => {
        render(<MyClub />);
        const pageHeader = screen.getByText(/Rowing Club/i);
        expect(pageHeader).toBeInTheDocument();
    });
  });

// function renderList() {
//     if (window.location.pathname === "/club-members/carnlough") {
//         return clubMemberData.clubs[0].carnlough[0].member
//     } else {
//         return clubMemberData.clubs[0].cairndhu[0].member
//     }
// }

// test('dynamically renders club data', () => {
//     render(<MyClub />);
//     // if (window.location.pathname === "/club-members/carnlough") {
//         const headingContent = screen.getByText(clubMemberData.clubs[0].carnlough[0].clubName);
//         expect(headingContent).toBeInTheDocument();
//     // } else if (window.location.pathname === "/club-members/cairndhu") {
//     //     const secondHeadingContent = clubMemberData.clubs[0].cairndhu[0].clubName;
//     //     console.log(secondHeadingContent);
//     //     expect(secondHeadingContent).toBeInTheDocument();
//     // }
// });

// test('dynamically renders member data', () => {
//     render(<MyClub />);
//     if (window.location.pathname === "/club-members/carnlough") {
//         const renderedContent = renderList()[0].memberName
//         expect(renderedContent).toBeInTheDocument();
//     } else if (window.location.pathname === "/club-members/carindhu") {
//         const newRenderedContent = renderList()[0].memberName
//         expect(newRenderedContent).toBeInTheDocument();
//     }
// });
