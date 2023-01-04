import Header from "../../components/Header";
import {
  Title,
  Container,
  MainContent,
  PublishDialog,
  Posts
} from './style';

export default function HomePage() {
  return (
    <Container>
      <Header />
      <Title>
        timeline
      </Title>
      <MainContent>
        <PublishDialog>

        </PublishDialog>
        <Posts>

        </Posts>
      </MainContent>
    </Container> 
  );
}
