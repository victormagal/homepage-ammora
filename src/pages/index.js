import React from "react"
import { Container } from '../styles/guide';
import Logo from '../assets/logo.svg';

export default function Home() {
  return (
    <Container>
      <img width={300} src={Logo} alt='Ammora Soluções Digitais' />
    </Container>
  )
}
