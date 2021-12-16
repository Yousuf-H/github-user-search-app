import styled from "styled-components";

export const Container = styled.div`
  /* border: 2px black solid; */
  height: fit-content;
  width: 100%;
  background-color: ${props => props.theme.ResultBackgroundColor};
  padding: 35px;
  border-radius: 15px;
  position: relative;
  display: grid; 
  grid-template-columns: 0.5fr 1.7fr; 
  grid-template-rows: 0.2fr 0.2fr; 
  gap: 10px 10px; 
  grid-template-areas: 
    "top top"
    ". bottom"; 

    @media only screen and (max-width: 768px) {
      grid-template-areas: 
    "top top"
    "bottom bottom";
    }
`
export const Top = styled.div`
  /* border: 2px green solid; */
  display: grid; 
  grid-template-columns: 0.3fr 1fr; 
  grid-template-rows: 0.3fr 0.3fr; 
  gap: 0px 0px; 
  grid-area: top;
  grid-template-areas: 
    "ProfilePhoto profileInfo"
    ". profileDesc"; 

  @media only screen and (max-width: 768px) {
    display: grid; 
    grid-template-columns: 0.1fr 1fr; 
    grid-template-rows: 0.3fr 0.3fr; 
    gap: 10px 10px; 
    grid-template-areas: 
      "ProfilePhoto profileInfo"
      "profileDesc profileDesc"; 
  }
`

export const ProfileImgContainer = styled.div`
  width: 117px;
  height: 117px;
  position: relative;
  grid-area: ProfilePhoto;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.2);
    transition: all .3s linear;
    border-radius: 50%;
  }
`
export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

export const ProfileWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-area: profileInfo;
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`

export const UserName = styled.h1`
  gap: 5px;
  font-size: 26px;
  color: ${props => props.theme.blackShade};
`
export const Date = styled.span``

export const AccountName = styled.h3`
  color: #0079FF;
  font-size: 16px;
  font-weight: 200;
`

export const Description = styled.p`
  margin-top: -40px;
  font-size: 15px;
  font-weight: 200;
  grid-area: profileDesc;

  @media only screen and (max-width: 768px) {
    margin-top: 0;
  }
`

// ------------------------------------------

export const Bottom = styled.div`
  /* border: 3px red solid; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: bottom;
`
export const StatsWrapper = styled.div`
  /* border: 3px black solid; */
  width: 100%;
  display: flex;
  background-color: ${props => props.theme.body};
  margin-top: 15px;
  border-radius: 10px;
`

// Repo
export const Repo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px;
  justify-content: space-around;

  span {
    padding: 3px;
  }
`

export const Followers = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px;
  justify-content: space-around;

span {
  padding: 3px;
}
`
export const Following = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px;
  justify-content: space-around;

span {
  padding: 3px;
}
`

// ----
export const UserInfoWrapper = styled.div`
  /* border: 3px greenyellow solid; */
  width: 100%;
  margin-top: 20px;
  display:grid;
  grid-template-columns: 50% 50%;
  grid-row: auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  @media only screen and (max-width: 768px) {
    display: block;
  }

`

export const UserInfo = styled.div`
  /* border: 1px blue solid; */
  padding: 10px;
  font-size: 30px;
  display: flex;
  align-items: center;
  word-break: break-all;
  color: ${props => props.theme.fontColor};
  `
export const Icon = styled.div`
  /* border: 2px green solid; */
   width: 22px;
   height: 22px;
   display: flex;
   justify-content: center;
   align-items: center;
`
export const Info = styled.span`
  /* border: 2px green solid; */
  font-size: 15px;
  margin-left: 10px;
`









