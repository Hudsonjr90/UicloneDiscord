import React from 'react';

import { Container, Profile, Avatar, Userdata, Icons, MicIcon, HeadphoneIcon, SettingsIcons } from './styles';

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar />
                <Userdata>
                    <strong>Hudson Kennedy</strong>
                    <span>#4513</span>
                </Userdata>
            </Profile>

            <Icons>
                <MicIcon />
                <HeadphoneIcon />
                <SettingsIcons />
            </Icons>
        </Container>
    );
};

export default UserInfo;