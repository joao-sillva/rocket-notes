import { Container, Links, Content } from "./styles"
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title='Excluir nota' />

          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            tempora quasi accusantium quae exercitationem voluptatem omnis
            hic amet doloribus labore. At culpa quidem fuga repudiandae explicabo
            ducimus suscipit, sunt doloribus.
          </p>

          <Section title='Links úteis'>
            <Links>
              <li><a href="#">https://rocketseat.com.br/</a></li>
              <li><a href="#">https://rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title='Marcadores'>
            <Tag title='Express' />
            <Tag title='NodeJS' />
          </Section>

          <Button title='Voltar' />
        </Content>
      </main>
    </Container>
  )
}