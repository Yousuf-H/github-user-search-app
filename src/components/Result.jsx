import React from 'react'
import { Container, ProfileImgContainer, ProfileImg, Top, ProfileWrapper, TitleWrapper, UserName, Date, AccountName, Description, Bottom, StatsWrapper, UserInfoWrapper, Repo, Followers, Following, UserInfo, Icon, Info } from '../Styles/Result.styled'
import ProfilePic from '../assets/pofilePic.jpeg'
import {ReactComponent as Location }from '../assets/icon-location.svg'
import Twitter from '../assets/icon-twitter.svg'
import Website from '../assets/icon-website.svg'
import Company from '../assets/icon-company.svg'

const Result = () => {
  return (
    <Container>
      <Top>
        {/* Profile Image */}
        <ProfileImgContainer>
          <ProfileImg src={ProfilePic} alt='Profile-image'/>
        </ProfileImgContainer>
        
        {/* Profile Info */}
        <ProfileWrapper>
          <TitleWrapper>
            <UserName>Yousuf</UserName>
            <Date>Joined 25 Jan 2018</Date>
          </TitleWrapper>
          <AccountName>@yousuf</AccountName>
          <Description>
            Lorem ipsum dolor sit amet, consectetuer 
            adipiscing elit. Donec odio. Quisque volutpat 
            mattis eros.
          </Description>
        </ProfileWrapper>
      </Top>

      {/* Botom Half */}
      <Bottom>
        <StatsWrapper>
          <Repo>
            <span>Repo</span>
            <span>8</span>
          </Repo>
          <Followers>
            <span>Followers</span>
            <span>3000</span>
          </Followers>
          <Following>
            <span>Following</span>
            <span>38</span>
          </Following>
        </StatsWrapper>

        <UserInfoWrapper>
          <UserInfo>
            <Location/>
            <Info>Wellington</Info>
          </UserInfo>
          <UserInfo>
            <Icon src={Twitter}/>
            <Info>Not Avalabile</Info>
          </UserInfo>
          <UserInfo>
            <Icon src={Website}/>
            <Info>www.github.com</Info>
          </UserInfo>
          <UserInfo>
          <Icon src={Company}/>
            <Info>AGithub</Info>
            </UserInfo>
        </UserInfoWrapper>
      </Bottom>
    </Container>
  )
}

export default Result


