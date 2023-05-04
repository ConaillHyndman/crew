import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import CrewLists from './Pages/CrewLists';
import MyClub from './Pages/MyClub';
import SiteInfo from './Pages/SiteInfo';
import ClubMembers from './Pages/ClubMembers';
import MemberAccount from './Pages/MemberAccount';
import AddMember from './Pages/AddMember';
import AddInfo from './Pages/AddInfo';
import ComponentLibrary from './Pages/ComponentLibrary';
import clubMemberData from "./Assets/content/club.json";

let carnloughPath = clubMemberData.clubs[0].carnlough[0].path;
let cairndhuPath = clubMemberData.clubs[0].cairndhu[0].path;

let carnloughMemberPath = clubMemberData.clubs[0].carnlough[0].member.map((i) => i);
let cairndhuMemberPath = clubMemberData.clubs[0].cairndhu[0].member.map((i) => i);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route index element={<Login />} />
      <Route path='/carnlough' element={<Home />} />
      <Route path='/cairndhu' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path={`/crew-lists` + carnloughPath} element={<CrewLists />} />
      <Route path={`/crew-lists` + cairndhuPath} element={<CrewLists />} />
      <Route path={`/my-club` + carnloughPath} element={<MyClub />} />
      <Route path={`/my-club` + cairndhuPath} element={<MyClub />} />
      <Route path='/site-information' element={<SiteInfo />} />
      <Route path={`/club-members` + carnloughPath} element={<ClubMembers />} />
      <Route path={`/club-members` + cairndhuPath} element={<ClubMembers />} />
      <Route path={`/member-account` + carnloughPath + "/" + carnloughMemberPath[0].id} element={<MemberAccount />} />
      <Route path={`/member-account` + cairndhuPath + "/" + cairndhuMemberPath[0].id} element={<MemberAccount />} />
      <Route path={`/member-account` + carnloughPath + "/" + carnloughMemberPath[1].id} element={<MemberAccount />} />
      <Route path={`/member-account` + cairndhuPath + "/" + cairndhuMemberPath[1].id} element={<MemberAccount />} />
      <Route path={`/member-account` + carnloughPath + "/" + carnloughMemberPath[2].id} element={<MemberAccount />} />
      <Route path={`/member-account` + cairndhuPath + "/" + cairndhuMemberPath[2].id} element={<MemberAccount />} />
      <Route path={`/member-account` + carnloughPath + "/" + carnloughMemberPath[3].id} element={<MemberAccount />} />
      <Route path={`/member-account` + cairndhuPath + "/" + cairndhuMemberPath[3].id} element={<MemberAccount />} />
      <Route path={`/member-account` + carnloughPath + "/" + carnloughMemberPath[4].id} element={<MemberAccount />} />
      <Route path={`/member-account` + cairndhuPath + "/" + cairndhuMemberPath[4].id} element={<MemberAccount />} />
      <Route path={`/member-account` + carnloughPath + "/" + carnloughMemberPath[5].id} element={<MemberAccount />} />
      <Route path={`/member-account` + cairndhuPath + "/" + cairndhuMemberPath[5].id} element={<MemberAccount />} />
      <Route path={`/member-account` + carnloughPath + "/" + carnloughMemberPath[6].id} element={<MemberAccount />} />
      <Route path={`/member-account` + cairndhuPath + "/" + cairndhuMemberPath[6].id} element={<MemberAccount />} />
      <Route path={`/member-account` + carnloughPath + "/" + carnloughMemberPath[7].id} element={<MemberAccount />} />
      <Route path={`/member-account` + cairndhuPath + "/" + cairndhuMemberPath[7].id} element={<MemberAccount />} />
      <Route path={`/member-account` + carnloughPath + "/" + carnloughMemberPath[8].id} element={<MemberAccount />} />
      <Route path={`/member-account` + cairndhuPath + "/" + cairndhuMemberPath[8].id} element={<MemberAccount />} />
      <Route path={`/member-account` + carnloughPath + "/" + carnloughMemberPath[9].id} element={<MemberAccount />} />
      <Route path={`/member-account` + cairndhuPath + "/" + cairndhuMemberPath[9].id} element={<MemberAccount />} />
      <Route path={`/add-member` + carnloughPath} element={<AddMember />} />
      <Route path={`/add-member` + cairndhuPath} element={<AddMember />} />
      <Route path={`/add-info` + carnloughPath} element={<AddInfo />} />
      <Route path={`/add-info` + cairndhuPath} element={<AddInfo />} />
      <Route path='/component-library' element={<ComponentLibrary />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
