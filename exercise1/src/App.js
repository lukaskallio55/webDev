import styles from './App.module.css';
import Notifications from './components/Notifications';
import Header from './components/Header';
import MainSection from './components/MainSection';
import SideSection from './components/SideSection';

function App() {

  const newsNotificationData = [
    {
      topic: 'PÄIVÄN TIMANTTI',
      body: ' Tutkija kertoo: Näin sota näkyy meissä edelleen'
    },
    {
      topic: 'PÄIVÄN TIMANTTI',
      body: 'Harriet Rabb tajusi avioliiton taludelliset hyödyt ja kosi: Näin hän sääsätisi aviopuolisonsa 19 200 euroa'
    }
  ]

  const MainSectionData = [
    {
      topic: 'PÄIVÄN TIMANTTI',
      kuva: "./images/korona.webp",
      body: ' Tutkija kertoo: Näin sota näkyy meissä edelleen'
    },
    {
      topic: 'PÄIVÄN TIMANTTI',
      kuva: "./images/korona.webp",
      body: 'Harriet Rabb tajusi avioliiton taludelliset hyödyt ja kosi: Näin hän sääsätisi aviopuolisonsa 19 200 euroa'
    }
  ]

  const SideSectionData = [
    {
      lue: 'Luetuimmat',
      topic: 'PÄIVÄN TIMANTTI',
      nro: '1',
      body: ' Tutkija kertoo: Näin sota näkyy meissä edelleen'
    },
    {
      topic: 'PÄIVÄN TIMANTTI',
      nro: '2',
      body: 'Harriet Rabb tajusi avioliiton taludelliset hyödyt ja kosi: Näin hän sääsätisi aviopuolisonsa 19 200 euroa'
    },
    {
      topic: 'PÄIVÄN TIMANTTI',
      nro: '3',
      body: 'Harriet Rabb tajusi avioliiton taludelliset hyödyt ja kosi: Näin hän sääsätisi aviopuolisonsa 19 200 euroa ja lissäää kaiken maailman liipalaaapaaa joopa jo omenipä taas hohhhoijjajaaaaaaa'
    },
    {
      topic: 'PÄIVÄN TIMANTTI',
      nro: '4',
      body: 'Harriet Rabb tajusi avioliiton taludelliset hyödyt ja kosi: Näin hän sääsätisi aviopuolisonsa 19 200 euroa'
    }
  ]

  return (
    <div>
      <Header/>
      {
        newsNotificationData.map(element => <Notifications topic={element.topic} body={ element.body } />)
      }

      <div className={styles.SideToSide}>
        <div className={styles.uutiset}>
          {
            MainSectionData.map(element => <MainSection topic={element.topic} kuva={element.kuva} body={ element.body } />)
          }
          </div>
          <div className={styles.sivu}>
            {
              SideSectionData.map(element => <SideSection lue={element.lue} nro={element.nro} topic={element.topic} body={ element.body } />)
            }
            </div>
      </div>
    </div>
  );
}

export default App;
