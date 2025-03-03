import styled from '@emotion/styled';

export const Card = styled.div`
  width: 903px;
  gap: 67px;
  height: 134px;
  background-color: #FAFAFA;
  border-radius: 10px;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Image = styled.img`
  width: 197px;
  height: 90px;
  margin-right: 36px;

`

export const Title = styled.h3`
  font-size: 24px;
  justify-content: space-between;
  width: 400px;
  display: flex;
  padding: 20px 20px 20px 36px;
  border-left: 1px solid black;
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: space-between;
  margin-top: 42px;
`

export const Price = styled.p`
  color: #666;
`

export const Amount = styled.p`
  font-weight: var(--font-bold);
    justify-content: space-between;
`

export const AddButton = styled.button`
  width: 37px;
    justify-content: space-between;
  height: 37px;
  border: 1px solid #666;
  border-radius: 50%;
  background-color: #e9e9e9;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`