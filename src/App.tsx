import { ModeToggle } from '@/components/mode-toggle.tsx';
import { ThemeProvider } from '@/components/theme-provider.tsx';

function App() {
  return (
    <ThemeProvider defaultTheme='system' storageKey='kinly-ui-theme'>
      <div className='h-screen w-full flex flex-col justify-center items-center text-7xl'>
        <p>Basic</p>
        <p className='font-mono'>Setup</p>
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
