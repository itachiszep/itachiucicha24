import React from 'react'

const odc1 = () => {
  return (
    <div>
      <div className='center'>
        <img className="itachi" src="/images/itachi-uchiha-naruto-amoled-black-background-minimal-art-3840x2160-6478.jpg"/>
        <iframe width="853" height="480" src="https://www.youtube.com/embed/WxH9YNAfAao"></iframe> 

        <h1>Sieci Komputerowe odc.1 - Podstawy sieci</h1><br/>
        <h2>Podstawowe pojęcia</h2><br/>
        <ul>
          <li>Host to urządzenie z przypisanym adresem IP, którego zadaniem jest odbieranie i wysyłanie danych od lub do innych urządzeń</li>
          <li>Serwer to komputer oferujący usługi takie jak strony WWW, poczta elektroniczna czy wymiana plików innym komputerom</li>
          <li>Klient to komputer (oprogramowanie) korzystający z usług udostępnianych przez serwer</li>
          <li>Medium transmisyjne to element sieci poprzez który urządzenia komunikują się ze sobą i wymieniają dane</li>
          <li>Protokół komunikacyjny to sposób komunikacji i wymiany danych określający reguły i zasady tej komunikacji</li>
          <li>Internet to zbiór sieci rozległych stanowiących globalną sieć komputerową</li>
          <li>Intranet to prywatna sieć wykorzystująca w komunikacji standardy takie jak w sieci Internet z ograniczonym dostępem</li>
          <li>Ekstranet to rozszerzona odmiana sieci Intranet, do której dostęp posiada większa liczba użytkowników</li>
          <li>DNS (ang. Domain Name System) to usługa sieciowa zamieniająca nazwy zrozumiałe dla człowieka (tzw. nazwy mnemoniczne) na adres IP urządzenia w sieci. onet.pl -- 123.123.123.123</li>
          <li>DHCP (ang. Dynamic Host Configuration Protocol) to protokół automatycznej konfiguracji ustawień sieci przydzielający hostom adresy IP, maski podsieci oraz adresy bram</li>
        </ul>

        <h2>Jednostki przesyłu danych</h2>
        <ul>
          <li>Przepustowość - ilość danych przesłanych w jednostce czasu</li>
          <li>1 bajt [B] = 8 bitów [b]</li>
          <li>100 [B] * 8 = 800 bitów [b]</li>
          <li>2 [MB] * 8 = 16 megabitów [Mb]</li>
          <li>16 [Mb] / 8 = 2 megabajty [MB]</li>
        </ul>

        <h2>Przykład 1</h2>
        <ul>
          <li>Ile danych pobierzemy z internetu w czasie jednej godziny przy przepustowości 60Mb/s?</li>
          <li>Dane: Czas: 1 godzina, przepustowość: 60 Mb/s</li>
          <li>60 sekund * 60 minut = 3600 sekund</li>
          <li>60 Mb/s / 8 = 7.5 MB/s</li>
          <li>7,5 MB/s * 3600 sekund = 27000 MB ~ 26.3 GB</li>
          <li>Odpowiedź: W czasie jednej godziny przez łącze o przepustowości 60Mb/s pobierzemy ok. 26.3 GB</li>
        </ul>

        <ul>
          <li>Dane: Wielkość pliku 1 GB, Przepustowość: 10 Mb/s</li>
          <li>10 Mb/s / 8 = 1.25 MB/s</li>
          <li>1 GB = 1024 MB</li>
          <li>1024 MB / 1.25 MB/s = 819.2 sekundy ~ 13 min 39 sek</li>
          <li>Odpowiedź: Plik o wielkości 1 GB przez łącze o przepustowości 10Mb/s pobierzemy w około 13 minut 39 sekund</li>
        </ul>

        <ul>
          <li>Media Transmisyjne</li>
        </ul>

        <img className="itachi" src="/images/Zrzut ekranu z 2025-09-04 18-59-18.png"/>
        <img className="itachi" src="/images/niko2.png"/>
        <img className="itachi" src="/images/niko3.png"/>
        <img className="itachi" src="/images/niko4.png"/>
        <img className="itachi" src="/images/niko5.png"/>
        <img className="itachi" src="/images/niko6.png"/>
        <img className="itachi" src="/images/niko7.png"/>
        <img className="itachi" src="/images/niko8.png"/>
        <img className="itachi" src="/images/niko9.png"/>
        <img className="itachi" src="/images/niko10.png"/>

        <h1>Parametry Techniczne kabla typu skrętka</h1><br/>
        <ul>
          <li>Tłumienie sygnału to stosunek napięcia wyjściowego do napięcia wejściowego wyrażony w decybelach [dB]</li>
          <li>Propagacja sygnału to prędkość impulsu elektrycznego w stosunku do prędkości światła wyrażona w procentach [%]</li>
          <li>Rezystancja to opór jaki kabel stawia prądowi elektrycznemu wyrażona w omach</li>
          <li>Promień zgięcia kabla R = 4x</li>
        </ul>

        <img className="itachi" src="/images/niko11.png"/>
        <img className="itachi" src="/images/niko12.png"/>
        <img className="itachi" src="/images/niko13.png"/>
        <img className="itachi" src="/images/niko14.png"/>

        <ul>
          <li>Światłowód: jednomodowy, wielomodowy</li>
        </ul>
        <img className="itachi" src="/images/niko15.png"/>
        <ul>
          <li>Światłowód jednomodowy - tylko jedna wiązka światła</li>
          <li>Światłowód wielomodowy - wiele wiązek światła</li>
        </ul>
        <img className="itachi" src="/images/niko16.png"/>
        <img className="itachi" src="/images/niko17.png"/>
        <img className="itachi" src="/images/niko18.png"/>

        <h1>Podsumowanie - media miedziane</h1>
        <ul>
          <li>Zalety:
            <ul>
              <li>Niski koszt zakupu</li>
              <li>Łatwe w montażu i instalacji</li>
              <li>Łatwość diagnozowania i naprawy usterek</li>
            </ul>
          </li>
          <li>Wady:
            <ul>
              <li>Wrażliwość na zakłócenia elektromagnetyczne</li>
              <li>Niewielka odległość pomiędzy węzłami sieci</li>
              <li>Mniejsza przepustowość w porównaniu do światłowodu</li>
            </ul>
          </li>
        </ul>

        <h1>Podsumowanie - media światłowodowe</h1>
        <ul>
          <li>Zalety:
            <ul>
              <li>Wysoka przepustowość</li>
              <li>Transmisja na duże odległości</li>
              <li>Znikoma wrażliwość na zakłócenia elektromagnetyczne</li>
            </ul>
          </li>
          <li>Wady:
            <ul>
              <li>Rozmycie sygnału</li>
              <li>Trudniejsze w instalacji</li>
              <li>Drogi osprzęt sieciowy wykorzystujący światłowody</li>
            </ul>
          </li>
        </ul>

        <ul>
          <li>Media bezprzewodowe - fale radiowe</li>
          <li>Fale radiowe to promieniowanie elektromagnetyczne z zakresu częstotliwości od 3 Hz do około 3 THz</li>
          <li>Fale długie, fale krótkie, fale średnie, fale ultrakrótkie</li>
        </ul>
        <img className="itachi" src="/images/niko19.png"/>

        <ul>
          <li>Rodzaje sieci:
            <ul>
              <li>LAN (Local Area Network) - sieć lokalna</li>
              <li>MAN (Metropolitan Area Network) - sieć miejska</li>
              <li>WAN (Wide Area Network) - sieć rozległa</li>
            </ul>
          </li>
          <li>Architektura:
            <ul>
              <li>Klient-serwer: jeden lub kilka komputerów udostępniających usługi innym użytkownikom sieci</li>
              <li>Równorzędna (Peer-to-Peer, P2P): wiele komputerów na tych samych prawach, każdy komputer może korzystać i udostępniać zasoby</li>
            </ul>
          </li>
        </ul>

        <ul>
          <li>Topologia sieci komputerowej:
            <ul>
              <li>Topologia fizyczna - sposób połączenia urządzeń w sieci</li>
              <li>Topologia logiczna - sposób komunikacji między urządzeniami</li>
            </ul>
          </li>
        </ul>

        <ul>
          <li>Topologie fizyczne:
            <ul>
              <li>Magistrali (bus) - wszystkie urządzenia podłączone do wspólnego medium</li>
              <li>Pierścienia (ring) - każde urządzenie podłączone do dwóch sąsiadów tworząc zamknięty krąg</li>
              <li>Gwiazdy (star) - urządzenia podłączone do centralnego punktu (switch/hub)</li>
              <li>Rozszerzona gwiazda (extended star)</li>
              <li>Siatki (mesh)</li>
            </ul>
          </li>
        </ul>

        <ul>
          <li>Topologie logiczne:
            <ul>
              <li>Punkt-punkt - dane przesyłane między dwoma urządzeniami</li>
              <li>Pierścienia - dane przekazywane kolejno przez urządzenia w sieci</li>
              <li>Wielodostępowa - dane przesyłane przez wspólne medium, każdy odbiorca interpretuje tylko swoje dane</li>
            </ul>
          </li>
        </ul>

        <ul>
          <li>Mechanizmy dostępu do medium:
            <ul>
              <li>CSMA/CD - wykrywanie kolizji (Ethernet)</li>
              <li>CSMA/CA - unikanie kolizji (sieci bezprzewodowe)</li>
              <li>Token passing - przesyłanie tokenu umożliwiającego transmisję</li>
            </ul>
          </li>
        </ul>

        <img className="itachi" src="/images/niko20.png"/>
        <img className="itachi" src="/images/niko21.png"/>
        <img className="itachi" src="/images/niko22.png"/>
        <img className="itachi" src="/images/niko23.png"/>
        <img className="itachi" src="/images/niko24.png"/>
        <img className="itachi" src="/images/niko25.png"/>
        <img className="itachi" src="/images/niko26.png"/>
        <img className="itachi" src="/images/niko27.png"/>
        <img className="itachi" src="/images/niko28.png"/>
      </div>
    </div>
  )
}

export default odc1
