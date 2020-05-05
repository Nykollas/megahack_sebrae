import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './assets/styles/css/style.css';

import { createStore } from 'redux';
import reducers from './redux/reducers';
import { Provider } from 'react-redux';

import Aluno from './pages/alunos/aluno/Aluno';
import Atividade from './pages/alunos/disciplina/Atividade';
import AulaGravada from './pages/alunos/aulagravada/AulaGravada';

import Professor from './pages/professores/professor/Professor';
import ProfessorAtividade from './pages/professores/atividade/Professor';
import ProfessorConteudo from './pages/professores/conteudo/Professor';


import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';





import theme from './theme';
import './types';

const store = createStore(reducers);

ReactDOM.render(
      <Provider store={store}>
            
                  <Router>
                        
                              <Switch>
                                    <Route path="/aluno">

                                          <Atividade></Atividade>
                                    </Route>
                                    <Route path="/atividade">
                                          <Aluno></Aluno>
                                    </Route>
                                    <Route path="/aula_gravada">
                                          <AulaGravada></AulaGravada>
                                    </Route>
                                    <Route path="/professor">
                                          <Professor></Professor>
                                    </Route>
                                    <Route path="/professor_atividade">
                                          <ProfessorAtividade></ProfessorAtividade>
                                    </Route>
                                    <Route path="/professor_conteudo">
                                          <ProfessorConteudo></ProfessorConteudo>
                                    </Route>
                                    <Route path="/">
                                          <Aluno></Aluno>
                                    </Route>
                              </Switch>
                        
                  </Router>
            
      </Provider>,
      document.getElementById('root')
);



serviceWorker.unregister();
