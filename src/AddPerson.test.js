import { render, screen } from '@testing-library/react';
import PersonForm from './pages/PersonForm';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: undefined
  })
}));

test('show contain Adicionar Pessoa when id is undefined', () => {
  render(< PersonForm />);
  const linkElement = screen.getByText(/Adicionar Pessoa/i);
  expect(linkElement).toBeInTheDocument();
});