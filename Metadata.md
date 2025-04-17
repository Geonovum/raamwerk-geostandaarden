# Metadata

**Om data vindbaar te maken en in staat te zijn een eerste indruk te krijgen van haar toepasbaarheid voor gebruik, moeten de data in de geo-informatie infrastructuur worden beschreven. Karakteristieken van de data, zoals de eigenaar en de actualiteit, worden vastgelegd met behulp van metadata. Metadata zorgt ervoor dat geo-informatie kan worden gevonden en gebruikt.**

## Overzicht geo-standaarden metadata

Er zijn verschillende niveaus waarop metadata aangemaakt worden. Metadata van data beschrijft de dataset of dataset reeks (ook dataset series). Metadata van services beschrijft de ‘service’ of API. In Nederland wordt het Nederlands metadataprofiel voor datasets en services toegepast. Dit profiel is gebaseerd op de ISO 19115 voor data en ISO 19119 voor services. Het is een uitbreiding, maar ook verdere specificatie van de Europese INSPIRE metadata vereisten en specifieke behoeften van de gebruikers in Nederland. Met de Nederlandse profielen voor metadata, wordt ook voldaan aan de INSPIRE profielen voor metadata.

In de Nederlandse metadataprofielen is ook de aansluiting op andere dataportalen meegenomen. Om naar datasets uit verschillende domeinen te kunnen zoeken, worden datasets in (open) dataportalen vaak beschreven met metadata conform de standaard DCAT ([[vocab-dcat-3]]). DCAT is een metadata standaard van W3C voor het uitwisselen van metadata tussen verschillende datacatalogi. In Nederland is daarvoor een applicatie profiel opgesteld ([[dcat-ap-nl]]), wat een nadere invulling is van het Europese “DCAT Application Profile for Data Portals in Europe" ([[dcat-ap]]) opgesteld. DCAT-AP wordt veel in Europese dataportalen gebruikt. DCAT-AP heeft een extensie GeoDCAT-AP ([[geodcat-ap]])voor het beschrijven van datasets, dataset series en services. Deze extensie is eveneens afgestemd op INSPIRE. In tabel 7.1 zijn de geo-standaarden voor metadata opgenomen. 

*Tabel 7.1 - Standaarden en specificaties met betrekking tot metadata standaarden*
<table>
  <colgroup>
  <col style= "width: 34%;" >
  <col style= "width: 33%;" >
  <col style= "width: 33%;" >
   </colgroup>
  <thead>
    <tr>
      <th> Internationale standaarden en specificaties </th>
      <th> Europese profielen </th>
      <th> Nederlandse profielen </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ISO 19115:2003, Geographic information - Metadata1 [[ISO19115-2003]] </td>
      <td>Technical Guidance for the implementation of INSPIRE dataset and service metadata based on ISO/TS 19139:2007 [[inspire-TG-metadata]] </td>
      <td> Nederlands profiel ISO 19115 voor geografie, versie 2.1.0 [[NLISO19115]] </td>
    </tr>
    <tr>
      <td>ISO 19115/Cor.1:2006, Geographic information – Metadata, Technical Corrigendum 1 [[ISO19115-2006]] </td>
      <td> </td>
      <td>Nederlands profiel ISO 19119 voor services, versie 2.1.0 [[NLISO19119]] </td>
    </tr>
    <tr>
      <td>ISO 19115-2:2009, Geographic information – Metadata – Part 2: Extensions for imagery and gridded data [[ISO19115-2009]] </td>
      <td> </td>
      <td> </td>
    </tr>
    <tr>
      <td>ISO 19119:2005, Geographic information – Services [[ISO19119-2005]] </td>
      <td> </td>
      <td> </td>
    </tr>
    <tr>
      <td>ISO 19119:2005/Amd 1:2008, Extensions of the service metadata model [[ISO19119-2008]] </td>
      <td> </td>
      <td> </td>
    </tr>
    <tr>
      <td>ISO/TS 19139:2007, Geographic information - Metadata – XML Schema Implementation [[ISO19139]] </td>
      <td> </td>
      <td> </td>
    </tr>
    <tr>
      <td>Data Catalog Vocabulary (DCAT) version 3.0 **W3C Recommendation** [[vocab-dcat-3]] </td>
      <td>DCAT-AP 3.0 [[dcat-ap]] </td>
      <td>DCAT-AP-NL 3.0 [[dcat-ap-nl]] </td>
    </tr>
   <tr>
      <td> </td>
      <td>DCAT-AP High Value Datasets ** Semic Recommendation ** version 3.0.0 [[dcat-ap-hvd]] </td>
      <td> </td>
     </tr>
   <tr>
      <td> </td>
      <td>GeoDCAT Application Profile for data portals in Europe version 3.0.0 [[geodcat-ap]] </td>
      <td> </td>
     </tr>
      </tbody>
</table>

<aside class="note">De [[inspire-TG-metadata]] is gebaseerd op [[ISO19115-2003]]. Dit is de reden dat het NL profiel ook op [[ISO19115-2003]] is gebaseerd en niet op [[ISO19115-2014]].
 </aside>

## Kwaliteit van metadata

**Handleiding Metadatakwaliteit**

Het kwaliteitsbeleid voor metadata is vastgelegd in de [Handleiding metadatakwaliteit](https://www.geonovum.nl/uploads/documents/Handleiding%20metadata%20monitoring%20v0.5.pdf). Met behulp van de handleiding kan aan de hand van 26 elementen, die in de metadata-standaarden zijn beschreven, de kwaliteit van metadata worden beoordeeld.

**Validatie**

Voor het toetsen van metadata zijn er validators beschikbaar. Deze validators controleren de correcte toepassing van het Nederlands metadataprofiel voor datasets en voor services. De [validator Nederlands metadataprofiel op ISO 19115 en op ISO 19119](https://validatie.geostandaarden.nl/) valideert de metadata van respectivelijk datasets en services conform het Nederlands profiel. 

Voor metadata van datasets of services, die voor INSPIRE zijn aangemerkt, gelden er specifiekere vereisten. Gebruik daarvoor
naast de Nederlandse validator ook de [Europese INSPIRE validator](https://inspire.ec.europa.eu/validator/home/index.html) om metadata te valideren.

## Verkenning

Methoden en technieken om data te zoeken, vinden en ontsluiten staan niet stil. Eind 2021 is een verkenning uitgevoerd naar de toekomst van metadata standaarden. In de [Verkenning Toekomstbeelden Metadata](https://docs.geostandaarden.nl/vtm/cv-al-vrk-20211125/#d1e9) tekent zich een ontwikkeling af naar meer samenhang en verbinding tussen verschillende metadata standaarden. Aansluiting op generieke standaarden, zoals DCAT en het leggen van relaties tussen data, modellen, begrippen en datacatalogi is daarom van belang. Ook het beter verbinden van aanbieders en gebruikers van data is een aandachtsgebied. 


