import { Stack, IStackTokens, IStackStyles } from '@fluentui/react';
import { Header } from './components/header/header'
import './App.css';
import background from './mtg-background.png'
import { Footer } from './components/footer/footer';
import { Body } from './components/body/body';


const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '100%',
    margin: '0 auto',
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '7px',
    backgroundColor: '#605e5c'
    // backgroundImage: background,
    // backgroundSize: 'cover', // Adjust this to control how the image is displayed
  },
};

export const App: React.FunctionComponent = () => {
  return (
    <Stack horizontalAlign="start" verticalFill styles={stackStyles}>
      <Header/>
      <Body/>
      <Footer/>
    </Stack>
  );
};
