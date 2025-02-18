import { ThemeProvider } from '../context/ThemeContext';
import ComplexCalculation from './ComplexCalculation';
import ThemedComponent from './ThemedComponent';
import UserList from './UserList';

export default function Home() {
    return (
      <ThemeProvider>
        <ThemedComponent />
        <UserList />
        <ComplexCalculation number={8} />
      </ThemeProvider>
    )
} 