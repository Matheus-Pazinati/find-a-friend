import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f15156;
  height: 100%;
`

export const HomeContent = styled.section`
  max-width: 1316px;
  height: 100vh;
  box-sizing: content-box;
  padding: 7rem 0;
  margin: 0 auto;

  main {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 7.5rem;

    h1 {
      font-size: 4.5rem;
      font-weight: 800;
      line-height: 64.8px;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 1.5rem;
      max-width: 400px;
      font-weight: 600;
      line-height: 34px;
    }

    span {
      margin-right: 1.5rem;
    }

    form {
      display: flex;
      align-items: center;

      div {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      button {
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #f4d35e;
        border: none;
        border-radius: 20px;
        transition: filter 0.2s;
        margin-left: 2rem;

        img {
          width: 22px;
        }

        :hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`
