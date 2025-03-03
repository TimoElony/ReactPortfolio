import { ChakraProvider } from "@chakra-ui/react"; 
import Header from "./components/Header"; 
import LandingSection from "./components/LandingSection"; 
import ProjectsSection from "./components/ProjectsSection"; 
import ContactMeSection from "./components/ContactMeSection"; 
import Footer from "./components/Footer"; 
import { AlertProvider } from "./context/alertContext"; 
import Alert from "./components/Alert"; 
import { FormControl } from "@chakra-ui/react";

console.log(FormControl);
function App() { 
 return ( 
   <ChakraProvider> 
    <AlertProvider> 
       
       <main> 
         <Header /> 
         <LandingSection /> 
         <ProjectsSection /> 
        <ContactMeSection /> 
        
         <Footer /> 
          
         <Alert /> 
        
       </main> 
       
     </AlertProvider> 
   </ChakraProvider> 
 ); 
} 

export default App;