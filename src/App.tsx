import Content from "./components/Layout/Content";
import Subtitle from "./components/Layout/Subtitle";
import Title from "./components/Layout/Title";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Users from "./components/Users/Users";
import useT from "./hooks/useT";
import Devider from "./components/Layout/Devider";

const App: React.FC = () => {
  const t = useT();

  return (
    <Layout>
      <Header />
      <Content>
        <Title>{t.myOrganization}</Title>
        <Devider />
        <Subtitle>{t.users}</Subtitle>
        <Users />
      </Content>
    </Layout>
  );
}
export default App;
