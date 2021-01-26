

// import React from 'react';
// import { render, screen } from '@testing-library/react';

// import App from "./App"
// import { fetchShow as mockFectchShow} from "./api/fetchShow"

// test('renders without errors', ()=>{
//     render(<App />);


// });


// test("Renders Api Data", async () => {
  
//     mockFectchShow.mockResolvedValueOnce({
//         episodes: [
//             {
//             summary: 'A good Episode',
//             name: "Episode",
//             season: 1,
//             image: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
//             }
//         ]
//     });

//     render(<App />);
    
//     const pickASeason = await screen.findByText(/select a season/i);

//     userEvent.click(pickASeason);

//     const season1 = await screen.findByText(/season 1/i);
//     expect(season1).toBeInTheDocument();
//     })
