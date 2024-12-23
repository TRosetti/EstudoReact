import {useState} from 'react';
import { Header } from '../../components/Header';
import  ItemList from '../../components/ItemList';
import githubBg from '../../assets/GitHub.svg';
import './styles.css';

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () =>{
    const userData = await fetch(` https://api.github.com/users/${user}`);
    const newUser = await userData.json();
    
    if(newUser.name){
      const {avatar_url, name, bio, login} = newUser;
      setCurrentUser( {avatar_url, name, bio, login} )

      const reposData = await fetch(` https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if(newRepos.length){
        setRepos(newRepos)
      }
    
    }
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div className="bg-container">
          <img src={githubBg} alt="Logo GitHub" className='githubBg' />
        </div>
       
        <div className="content">
          <div className='container-busca'>
            <input 
              type="text"
              name="usuario" 
              id="usuario" 
              placeholder='@username' 
              value={user}  
              onChange={ event => setUser(event.target.value)}
            />

            <button onClick={handleGetData}>Buscar</button>
          </div>
          <div className="profile">
            {currentUser?.name ? ( <> 
              <img src={currentUser.avatar_url} alt="imagem de perfil" className='profile-img'/>
              <div className='profile-content'>
                <h3>{currentUser.name}</h3>
                <span>@{currentUser.login}</span>
                <p>{currentUser.bio}</p>
              </div>
            </>) : null}

            
          </div>
          <hr />

          {repos?.length ? (

            <div>
              <h2 className='repositorio'>Repositório</h2>
              {repos.map( repo => (
                <ItemList title={repo.name} description={repo.description} />
              ))}
              
            </div>

          ) : null}
          
          
        </div>

      </main>
    </div>
  );
}

export default App;
