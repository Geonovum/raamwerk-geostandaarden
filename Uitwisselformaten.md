# Uitwisselformaten

**Op basis van de informatiemodellen worden uitwisselformaten gedefinieerd. Waar
een informatiemodel de semantiek bepaalt, beschrijft een uitwisselformaat de
vorm of syntax waarin geo-informatie op basis van een bepaald informatiemodel
wordt uitgewisseld. Er zijn verschillende manieren om geo-informatie te
representeren en uit te wisselen.**

## Overzicht geostandaarden uitwisselformaten

In het overzicht van geo-standaarden voor uitwisselformaten zijn de onderwerpen onderscheiden en in onderstaande tabellen opgenomen:

-   Uitwisselstandaarden voor het uitwisselen van vectordata;
-   Uitwisselstandaarden voor het uitwisselen van rasterdata;
-   Uitwisselstandaarden voor het uitwisselen van sensordata;
-   Uitwisselstandaarden voor het uitwisselen van 3D data.

## Vectordata uitwisselstandaarden

De vectorrepresentatie wordt gebruikt voor het vastleggen van discrete objecten waarbij de geometrie wordt beschreven met behulp van: punt, lijn en vlak (2D) of met volvlakken (3D). De vectorrepresentatie is uitgebreid beschreven in de internationale standaard [[iso19107]]. Deze standaard geeft ook aanwijzingen voor het expliciet vastleggen van onderlinge relaties tussen geografische objecten. De ISO standaard is zeer uitgebreid. Voor de meeste toepassingen kan je goed uit de voeten met de door OGC opgestelde subset uit deze standaard: Simple Feature Access [[iso-19125-1-2004]].

<aside class="note">Een uitzondering geldt voor cirkelbogen. Wil je geo-objecten met cirkelbogen beschrijven dan kan je het beste gebruik maken van het OGC Simple Features profile voor GML [[GMLSF]] dat de Simple Features subset van geometrietypen, met als extra toevoeging cirkelbogen, toepast op  GML 3.2.1 [[ISO19136]].</aside>

Voor de uitwisseling van vectordata bestaan de volgende standaarden (tabel 6.1).


*Tabel 6.1 – Uitwisselformaten standaarden en specificaties met betrekking tot vectordata*

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
      <td>ISO 19107 Geographic information - Spatial Schema [[ISO-19107-2003]] </td>
      <td>INSPIRE Guidelines for the encoding of spatial data [[inspire-gen]] </td>
      <td> </td>
     </tr>
    <tr>
      <td>ISO 19125 Simple Feature Access Part 1: Common Architecture, version 1.2.1 [[iso-19125-1-2004]] </td>
      <td> </td>
      <td> </td>
     </tr>
    <tr>
      <td>OGC Geography Markup Language (GML) Encoding standard, version 3.2.1 (=ISO 19136) [[iso-19136-2007]] </td>
      <td> </td>
      <td> </td>
     </tr>
    <tr>
      <td>OGC Geography Markup Language (GML) Encoding standard, version 3.3  [[GML33]] </td>
      <td> </td>
      <td> </td>
     </tr>
    <tr>
      <td>OGC Simple Features profile (OGC 10-100r3, version 2.0) op ISO 19136:2007 (GML 3.2.1) [[GMLSF]] </td>
      <td> </td>
      <td> </td>
     </tr>
    <tr>
      <td>OGC GeoPackage Encoding Standard, version 1.4 [[GeoPackage]] </td>
      <td>GeoPackage encoding of INSPIRE datasets. Inspire good practise. [[INSGPGeopackage]] </td>
      <td> </td>
     </tr>
    <tr>
      <td>The GeoJSON Format [[rfc7946]] </td>
      <td> </td>
      <td> </td>
     </tr>
    <tr>
      <td>OGC JSON Features and Geometries, version 0.2.2 **draft** [[JSON-FG]] </td>
      <td> </td>
      <td> </td>
     </tr>
    <tr>
      <td>HTML5 [[html5]] </td>
      <td> </td>
      <td> </td>
     </tr>
    <tr>
      <td>Resource Description Framework (RDF): Concepts and Abstract Syntax. [[rdf11-concepts]] </td>
      <td> </td>
      <td> </td>
    </tr>
  </tbody>
</table>

## Rasterdata uitwisselstandaarden

De raster representatie gebruik je voor het vastleggen van gegevens waarbij aan ieder punt op het aardoppervlak een dynamische waarde wordt toegekend. Voorbeelden zijn de luchtdruk boven Nederland, waardes van een schadelijke stof, temperatuur of – zoals bij een foto - reflectiewaarden. In OGC en ISO/TC 211 termen heet dit een 'coverage'. Zo’n coverage wordt vaak geïmplementeerd door over het terrein een regelmatig grid van punten te leggen (een raster) en voor ieder punt een waarde op te nemen. Deze waarde is bijvoorbeeld een hoogteaanduiding bepaald met behulp van laser altimetrie, of de numerieke codering van een kleurenwaarde opgenomen in een satellietbeeld.
Er zijn verschillende geostandaarden voor coverages of rasterdata (zie tabel 6.2), zoals NETCDF en HDF5. Ook GeoTIFF (Geo Tagged Image File Format), waarbij georeferentie als tags in de file zijn opgenomen. Daarnaast zie je hier ook webstandaarden vermeld als JPEG2000 en PNG. De laatste wordt vooral toegepast in WMS.

*Tabel 6.2 - Uitwisselformaten standaarden en specificaties met betrekking tot rasterdata*

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
      <td>OGC Network Common Data Form (NetCDF) Core Encoding Standard version 1.0. [[NETCDF]] </td>
      <td>INSPIRE Guidelines for the encoding of spatial data [[inspire-gen]]  </td>
      <td> </td>
     </tr>
    <tr>
      <td>Hierarchical Data Format 1.0 [[HDF5]] </td>
      <td> </td>
      <td> </td>
     </tr>
    <tr>
      <td>HDF-EOS5 Data Model, File Format and Library (v1.1) [[HDFEOS]] </td>
      <td> </td>
      <td> </td>
     </tr>
    <tr>
      <td>OGC GeoTIFF Standard, version 1.1 [[GeoTIFF]] </td>
      <td> </td>
      <td> </td>
     </tr>
    <tr>
      <td>ISO/IEC 15444-1:2019 - JPEG 2000 image coding system [[isoJPEG2000]] </td>
      <td> </td>
      <td> </td>
     </tr>
    <tr>
      <td>ISO 19123-1:2023: Geographic information — Schema for coverage geometry and functions Part 1: Fundamentals [[iso-19123-2023]]  </td>
      <td> </td>
      <td> </td>
     </tr>
    <tr>
      <td>ISO 19123-2: Coverage Implementation Schema (CIS 1.0) [[CIS10]] </td>
      <td> </td>
      <td> </td>
     </tr>
    <tr>
      <td>OGC GML for JPEG 2000 [[GMLJPEG2000]] </td>
      <td> </td>
      <td> </td>
     </tr>
    <tr>
      <td>ISO/IEC 15948:2004 - Portable Network Graphics [[PNG]] </td>
      <td> </td>
      <td> </td>
     </tr>
    <tr>
      <td>OGC CoverageJSON Community Standard version 1.0 [[COVJSON]] </td>
      <td> </td>
      <td> </td>
     </tr>  
  </tbody>
</table>

## Sensordata uitwisselstandaarden

Sensoren zijn apparaten voor het meten van stoffen in water, grondsamenstellingen, grondwater, luchtverontreiniging, etc. Sensoren hebben ook een positie en de resultaten van de metingen dienen uitgewisseld te kunnen worden. Voor de uitwisseling van waarnemingen en metingen (‘observations and measurements’) bestaan verschillende uitwisselformaten standaarden (tabel 6.3).

*Tabel 6.3 – Uitwisselformaten standaarden en specificaties met betrekking tot sensordata*

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
      <td>OGC Observations and Measurements version 3.0 [[OMS3]] </td>
      <td>INSPIRE Guidelines for the encoding of spatial data [[inspire-gen]] </td>
      <td>Informatiemodel Metingen [[IMMetingen]] </td>
     </tr>
    <tr>
      <td>Observations and Measurements - XML Implementation 2.0 [[OaMx2]] </td>
      <td> </td>
      <td> </td>
     </tr>
    <tr>
      <td> W3C/OGC Semantic Sensor Network Ontology [[vocab-ssn]] </td>
      <td> </td>
      <td> </td>
     </tr>
    <tr>
      <td>OGC SensorML 2.1 [[SensorML]] </td>
      <td> </td>
      <td> </td>
     </tr>
  </tbody>
</table>

## 3D data uitwisselstandaarden

Om 3-dimensionele data uit te wisselen, dus data over objecten en verschijnselen in de geografische ruimte, waarin de x-y en x-coördinaat zijn vastgelegd, kan je gebruik maken van de volgende standaarden (tabel 6.4).

*Tabel 6.4 – Uitwisselformaten standaarden en specificaties met betrekking tot 3D data*

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
      <td>OGC City Geography Markup Language (CityGML) Encoding Standard version 3.0 [[CityGML3]] </td>
      <td> </td>
      <td> </td>
     </tr>
    <tr>
      <td>CityJSON Community Standard version 2.0 [[CityJSON]] </td>
      <td> </td>
      <td> </td>
     </tr>
  </tbody>
</table>

## Kwaliteit en uitwisselformaten

**Validatie**

Een belangrijk kwaliteitsaspect van een uitwisselformaat is de mogelijkheid deze te valideren. Bij voorkeur gebeurt dit met geautomatiseerde processen, dan wel beschreven procedures en validatieregels. Validatie helpt om uitwisselformaten te laten voldoen aan de bij de geo-standaard horende validatieregels. Om te helpen bij validatie zijn validatietools beschikbaar. De tools zijn bedoeld als hulpmiddel om fouten in de toepassing van geo-standaarden te verminderen. 

Er zijn twee Nederlandse validators voor de validatie van GML (vectordata):
- De [GML3.2 Simple Features validator](http://validatie.geostandaarden.nl/gml/simple-features) controleert of een GML 3.2 bestand voldoet aan het GML 3.2 Simple Feature profile, level 2
- De [Validator voor GML 2D geometrie](http://validatie.geostandaarden.nl/gml/geometrie-2d) controleert of de 2D geometrieën in een GML 3.x bestand conform ISO 19107 (Spatial Schema) zijn.

**Handreiking Geometrie in model en GML**

De handreiking [Geometrie in model en GML](https://docs.geostandaarden.nl/nen3610/gimeg/) beschrijft de toepassing van geometrie in informatiemodellering en de implementatie daarvan in GML. Het is daarmee een ondersteuning voor de toepassing van de norm NEN 3610:2011 – Basismodel geo-informatie [NEN3610]. NEN 3610 gaat hierin niet verder dan verwijzing naar de relevante geo-informatie (ISO) normen. De ISO normen zijn uitgebreid. De handreiking Geometrie in model en GML is een praktische, vereenvoudigde introductie op de ISO norm. Voor de normatieve referentie verwijzen we naar de originele documenten. De handreiking kan als een zelfstandig document worden gelezen.

**Handreiking lichte formaten geometrie**

Voor het uitwisselen van geo-informatie kan je kiezen uit verschillende uitwisselformaten. Wat het beste formaat is voor een toepassing, is afhankelijk van meerdere aspecten. In het bij de data behorende informatiemodel kunnen deze aspecten al naar voren komen – bijvoorbeeld de geometrietypes die worden vastgelegd, het gebruikte modelleerparadigma, etc. Maar vanuit één informatiemodel kunnen ook weer meerdere implementaties in uitwisselingsformaten afgeleid worden – beslissingen in het model sluiten dit niet per sé uit.

Daarom is voor vectorformaten een keuzehulp gemaakt: de handreiking 'Geometrie in uitwisselingsformaten' [[HRLFG]]. Deze legt ook de toepassing uit van de verschillende versies van GML. De handreiking geeft handvaten voor het kiezen van het juiste uitwisselformaat voor de juiste situatie, en geeft gedetaileerde informatie over het uitwisselen van geometrie in de lichte formaten HTML, GML, JSON, GeoPackage en RDF. Deze handreiking zet de belangrijkste aspecten op een rijtje en brengt deze in verband met gangbare toepassingen. De toepassing bepaalt namelijk wat de eisen aan de geometrieën zijn (zijn complexe types nodig? Is een hoge nauwkeurigheid van belang?), en welke verplichtingen aan de orde zijn in de keuze voor standaarden. De antwoorden op deze vragen kunnen al een indicatie geven van de geschiktheid van de uitwisselformaten. Daarnaast is het van belang om inzicht te hebben in de behoeften van gebruikers: is ondersteuning in bepaalde tools/frameworks van belang? Moeten de bestanden leesbaar zijn voor mensen en gemakkelijk te vinden? Hoe belangrijk is de semantiek van de data? Deze handreiking geeft handvaten voor het kiezen van het juiste formaat voor de juiste situatie, en geeft in afzonderlijke hoofdstukken gedetailleerde informatie over het uitwisselen van geometrie in GML, HTML, JSON, GeoPackage en RDF. 

**Wegwijzer 3D standaarden**

De Wegwijzer 3D standaarden is een wegwijzer over het uitwisselen van 3D data [[HRWW3D]]. Het geeft een overzicht van de verschillende bestandsformaten die je hiervoor kunt gebruiken, geeft handvatten voor het kiezen van het juiste formaat voor de juiste situatie, en geeft in afzonderlijke hoofdstukken gedetailleerde informatie over het uitwisselen van 3D data in CityJSON, CityGML, 3D Tiles, I3S, IFC en LAZ.

