/**
 * Created by tranquochuy on 4/18/17.
 */
import React from 'react';
import HeaderWrapper from 'admin-lte-react/HeaderWrapper';
import Logo from 'admin-lte-react/Logo';
import MiniLogo from 'admin-lte-react/MiniLogo';
import LargeLogo from 'admin-lte-react/LargeLogo';
import Navbar from 'admin-lte-react/Navbar';
import MessagesMenu from 'admin-lte-react/MessagesMenu';
import NotificationsMenu from 'admin-lte-react/NotificationsMenu';
import TasksMenu from 'admin-lte-react/TasksMenu';
import UserMenu from 'admin-lte-react/UserMenu';

import noAvatar from '../../../node_modules/admin-lte/dist/img/avatar.png';

export default function Header() {
    return (
        <HeaderWrapper>
            <Logo>
                <MiniLogo>
                    <b>NOC</b>
                </MiniLogo>
                <LargeLogo>
                    <b>Mobifone </b>
                </LargeLogo>
            </Logo>
            <Navbar>
                <MessagesMenu />
                <NotificationsMenu />
                <TasksMenu />
                <UserMenu
                    image={noAvatar}
                    name="Tran Quoc Huy"
                    title="Mr. Huy"
                    description="Operator"

                    buttons={[
                        { key: 1, text: 'Profile', align: 'left' },
                        { key: 2, text: 'Logout' },
                    ]}
                />
            </Navbar>
        </HeaderWrapper>
    );
}