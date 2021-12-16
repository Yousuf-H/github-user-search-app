import React from 'react'
import { Container, ProfileImgContainer, ProfileImg, Top, ProfileWrapper, TitleWrapper, UserName, Date, AccountName, Description, Bottom, StatsWrapper, UserInfoWrapper, Repo, Followers, Following, UserInfo, Icon, Info } from '../Styles/Result.styled'
import ProfilePic from '../assets/pofilePic.jpeg'
import {ReactComponent as Location }from '../assets/icon-location.svg'
import {ReactComponent as Twitter} from '../assets/icon-twitter.svg'
import{ReactComponent as Website} from '../assets/icon-website.svg'
import {ReactComponent as Company} from '../assets/icon-company.svg'
import { connect } from 'react-redux'
import moment from 'moment'
import Loading from './Loading'

const Result = (props) => {
  const { githubUser } = props

  return (
    <Container>
      {githubUser.isLoading && <Loading />}
      <Top>
        {/* Profile Image */}
        <ProfileImgContainer>
          <ProfileImg src={githubUser.payload.avatar_url ? githubUser.payload.avatar_url : ProfilePic} alt='Profile-image'/>
        </ProfileImgContainer>
        
        {/* Profile Info */}
        <ProfileWrapper>
          <TitleWrapper>
            <UserName>
              {githubUser.payload.name ? githubUser.payload.name : 'The Octocat'}
              <AccountName>@{githubUser.payload.login ? githubUser.payload.login  :'octocat'}</AccountName>
            </UserName>
            <Date>
              Joined {githubUser.payload.created_at ? 
              moment(githubUser.payload.created_at).format('Do MMMM YYYY')
              : 
              '25 Jan 2011'}
            </Date>
          </TitleWrapper>
        </ProfileWrapper>
        <Description>
            {githubUser.payload.bio ? githubUser.payload.bio : 'This profile has no bio'}
        </Description>
      </Top>

      {/* Botom Half */}
      <Bottom>
        <StatsWrapper>
          <Repo>
            <span>Repo</span>
            <span>{githubUser.payload.public_repos}</span>
          </Repo>
          <Followers>
            <span>Followers</span>
            <span>{githubUser.payload.followers}</span>
          </Followers>
          <Following>
            <span>Following</span>
            <span>{githubUser.payload.following}</span>
          </Following>
        </StatsWrapper>

        <UserInfoWrapper>
          <UserInfo>
            <Icon>
              <Location />
            </Icon>
            <Info>{githubUser.payload.location ? githubUser.payload.location : 'Not Available'}</Info>
          </UserInfo>

          <UserInfo>
            <Icon>
              <Twitter/>
            </Icon>
            <Info>{githubUser.payload.twitter_username ? githubUser.payload.twitter_username : 'Not Available'}</Info>
          </UserInfo>

          <UserInfo>
            <Icon>
              <Website />
            </Icon>
            <Info>{githubUser.payload.html_url ? githubUser.payload.html_url : 'Not Available'}</Info>
          </UserInfo>

          <UserInfo>
            <Icon>
              <Company/>
            </Icon>
            <Info>{githubUser.payload.company ? githubUser.payload.company : 'Not Available'}</Info>
            </UserInfo>
        </UserInfoWrapper>
      </Bottom>
    </Container>
  )
}

const mapStateToProps = ({ githubUser }) => {
  return {
    githubUser
  }
}

export default connect(mapStateToProps)(Result)



