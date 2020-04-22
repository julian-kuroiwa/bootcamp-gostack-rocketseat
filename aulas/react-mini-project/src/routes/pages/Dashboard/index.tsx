import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Dashboard</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="">
          <img
            src="https://avatars3.githubusercontent.com/u/8183883?s=460&u=6a8ed79341c6d51e7d17822ee6319749bc455be6&v=4"
            alt="Julian Kuroiwa"
          />
          <div>
            <strong>Teste Repository</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="">
          <img
            src="https://avatars3.githubusercontent.com/u/8183883?s=460&u=6a8ed79341c6d51e7d17822ee6319749bc455be6&v=4"
            alt="Julian Kuroiwa"
          />
          <div>
            <strong>Teste Repository</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="">
          <img
            src="https://avatars3.githubusercontent.com/u/8183883?s=460&u=6a8ed79341c6d51e7d17822ee6319749bc455be6&v=4"
            alt="Julian Kuroiwa"
          />
          <div>
            <strong>Teste Repository</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="">
          <img
            src="https://avatars3.githubusercontent.com/u/8183883?s=460&u=6a8ed79341c6d51e7d17822ee6319749bc455be6&v=4"
            alt="Julian Kuroiwa"
          />
          <div>
            <strong>Teste Repository</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
