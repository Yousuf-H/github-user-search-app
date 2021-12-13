import styled from "styled-components";

export const Container = styled.div`
  /* border: 3px yellow solid; */
  height: 444px;
  width: 100%;
  background-color: ${props => props.theme.ResultBackgroundColor};
  padding: 35px;
  border-radius: 15px;
  position: relative;
`
export const Top = styled.div`
  /* border: 3px green solid; */
  display: flex;
  justify-content: space-between;
`

export const ProfileImgContainer = styled.div`
  /* border: 3px red solid; */
  width: 117px;
  height: 117px;
  position: relative;

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
  /* border: 3px red solid; */
  width: 78%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TitleWrapper = styled.div`
  /* border: 3px red solid; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const UserName = styled.h1`
  /* border: 3px red solid; */
  color: ${props => props.theme.blackShade};
`

export const Date = styled.span`
  /* border: 3px red solid; */
`

export const AccountName = styled.h3`
  /* border: 3px red solid; */
  color: #0079FF;
  font-size: 16px;
  font-weight: 200;
`

export const Description = styled.p`
  /* border: 3px red solid; */
  margin-top: 24px;
  font-size: 15px;
  font-weight: 200;
`

// ------------------------------------------

export const Bottom = styled.div`
  /* border: 3px red solid; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const StatsWrapper = styled.div`
  /* border: 3px black solid; */
  width: 78%;
  display: flex;
  background-color: ${props => props.theme.body};
  margin-top: 30px;
  border-radius: 10px;
`

// Repo
export const Repo = styled.div`
  /* border: 3px yellow solid; */
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px;
  /* align-items: center; */
  justify-content: space-around;

  span {
    padding: 3px;
  }
`

export const Followers = styled.div`
  /* border: 3px black solid; */
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
  /* border: 3px black solid; */
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
  /* border: 3px blue solid; */
  width: 78%;
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 30px;
`

export const UserInfo = styled.div`
  /* border: 3px blue solid; */
  /* background-color: rgba(255, 255, 255, 0.8); */
  /* border: 1px solid red; */
  padding: 10px;
  font-size: 30px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.fontColor};
  `
export const Icon = styled.img`
  color: yellow;
  fill: green;
  width: 20px;
  height: 22px;
`
export const Info = styled.span`
  font-size: 15px;
  margin-left: 15px;
`









