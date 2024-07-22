//Testing the heading section
import {render,screen} from '@testing-library/react';
import App from '../App';
test('heading test', ()=>{
    render(<App/>);
    const headingElement = screen.getByText("Todo's");
    expect(headingElement).toBeInTheDocument();
});