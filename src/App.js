import React, { useState } from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard.js';
import { ModalSet } from './components/Modal.js';
import QuoteAddBtn from './components/QuoteAddBtn.js';
import QuoteForm from './components/QuoteForm.js';
import CustomTheme from './components/CustomTheme.js';
import TheNav from './components/TheNav.js';
import ShiftingNumsPhoneNumber from './components/BadUI/ShiftingNumsPhoneNumber.js';

import quotes from './quote.json';
import { titlecase } from './pipes.js';
import MinesweeperGrid from './components/minesweeper/MinesweeperGrid';

function App() {
  const [page, setPage] = useState('minesweeper');
  const quoteCards = quotes.map((value, index) => (
    <QuoteCard
      key={index}
      title={titlecase(value.title)}
      context={value.context}
      quote={value.quote}
      date={value.date}
    />
  ));
  return (
    <CustomTheme>
      <TheNav
        title={
          page == 'home'
            ? "scheidly's handwriting for the purpose of a tattoo.com"
            : page == 'badUI'
            ? 'Better Bad UI'
            : page == 'minesweeper'
            ? 'Minesweeper'
            : 'page not found'
        }
      />
      {page == 'home' ? (
        <div className="main-grid">
          <div className="quote">{quoteCards}</div>
          <ModalSet
            height="75%"
            width="60%"
            trigger={<QuoteAddBtn></QuoteAddBtn>}
            title={<h1 style={{ marginTop: '0px' }}>Add a Scheidly-ism!</h1>}
            body={<QuoteForm />}
          />
        </div>
      ) : page == 'badUI' ? (
        <ShiftingNumsPhoneNumber className="quote" />
      ) : (
        <MinesweeperGrid size={15} />
      )}
    </CustomTheme>
  );
}

export default App;
