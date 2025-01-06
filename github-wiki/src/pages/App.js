import { useState } from 'react';
import gitLogo from '../assets/GitHub.svg';
import { Container } from './styles';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/itemRepo';
import { api } from '../services/api';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      if (data.id) {
        const isExist = repos.find((repo) => repo.id === data.id);

        if (!isExist) {
          setRepos((prev) => [...prev, data]);
          setCurrentRepo('');
          return;
        } else {
          alert('Repositório já está na lista!');
        }
      }
    } catch (error) {
      alert('Repositório não encontrado!');
    }
  };

  const handleRemoveRepo = (id) => {
    setRepos((prev) => prev.filter((repo) => repo.id !== id));
  };

  return (
    <Container>
      <img src={gitLogo} width={150} height={150} alt="Logo GitHub" />
      <h1>Thiago Rosetti Miranda</h1>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo key={repo.id} repo={repo} handleRemoveRepo={handleRemoveRepo} />
      ))}
    </Container>
  );
}

export default App;
