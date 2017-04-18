/**
 * Created by tranquochuy on 4/18/17.
 */
import React from 'react';
import SidebarWrapper from 'admin-lte-react/SidebarWrapper';
import UserPanel from 'admin-lte-react/UserPanel';

import noAvatar from '../../../node_modules/admin-lte/dist/img/avatar.png';

export default function Sidebar() {
    return (
        <SidebarWrapper>
            <UserPanel
                image={noAvatar}
                name="Quoc Huy"
            />
        </SidebarWrapper>
    );
}
