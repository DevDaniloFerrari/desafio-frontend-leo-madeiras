import { render, screen } from '@testing-library/react';
import PersonForm from './pages/PersonForm';

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({
        id: "fake-person-id"
    })
}));

test('show contain Editar Pessoa when id is not undefined', () => {
    render(< PersonForm />);
    const linkElement = screen.getByText(/Editar Pessoa/i);
    expect(linkElement).toBeInTheDocument();
});