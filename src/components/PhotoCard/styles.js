import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const ImgWrapper = styled.div`
  display: block;
  border-radius: 10px;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`
export const Article = styled.article`
  min-height: 120px;
`

export const Img = styled.img`
  ${fadeIn({ time: '1s' })};
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top:0;
  width: 100%;
`