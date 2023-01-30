
import './App.css';
import Profile from './Profile/Profile';
function App() {
  const fullName = "barbie";

   const  bio = "Barbie is a fashion doll manufactured by American toy company Mattel, Inc.and launched on March 9, 1959. American businesswoman Ruth Handler is credited with the creation of the doll using a German doll called Bild Lilli as her inspiration." ;
   
    const profession  ="Teenage Fashion Model ";
   
   
  return (

    <div className="App">
      <Profile fullName ={ fullName} bio = { bio}  profession= { profession}    />
      
      < img src=" https://imgsrc.cineserie.com/2016/06/1490947-1.jpg?ver=1 " alt=" barbie"  width="200px"  />
    <Profile/>
    </div>

  );
}

export default App;
