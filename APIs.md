# Application Programming Interfaces

**Voor het kunnen vinden, raadplegen, en downloaden van geo-informatie op het
Internet zijn Application Programming Interfaces (API’s) in gebruik. API’s
spelen een belangrijke rol op het Internet.
Een API dient als interface tussen verschillende softwareprogramma's. Het zorgt
ervoor dat een applicatie automatisch toegang krijgt tot bepaalde data en/of
functionaliteiten.**

## Transitie naar nieuwe generatie API's

De internationale standaarden voor API's komen veelal bij het [Open Geospatial Consortium (OGC)](https://www.ogc.org/) vandaan. Deze standaardistaie organisatie bestaat al sinds 1994. De eerste generatie API standaarden, toen nog 'services' genaamd, zijn gebaseerd op XML en SOAP. Deze standaarden zijn nog steeds geldig en in gebruik, maar worden gaandeweg vervangen door de nieuwe generatie, die is gebaseerd op algemene Web architectuur, zoals REST. Het voordeel van deze nieuwe API's is dat ze geo-informatie onderdeel maken van het ecosysteem van het Web en zo voor een veel breder publiek toegankelijk.

Het OGC is voornemens de oude generatie 'services' standaarden langzaam uit te faseren. De nieuwe OGC API standaarden zijn in ontwikkeling en komen één voor één gereed. Op moment van schrijven zijn er al een paar goedgekeurd. Het is aan te raden om in nieuwe voorzieningen zoveel mogelijk de nieuwe OGC API standaarden toe te passen. Bestaande voorzieningen die op de oude standaarden zijn gebaseerd kunnen nog langere tijd in de lucht gehouden worden. Nieuwe OGC API's kunnen daarnaast gezet worden. Het is ook mogelijk om OGC API's beschikbaar te stellen als laag bovenop oude generatie 'services'. Hiervoor is software beschikbaar.

In onderstaand overzicht zijn de nieuwe generatie OGC API standaarden opgenomen die zijn goedgekeurd, maar ook diegenen die nog in ontwikkeling of **draft** zijn. Dit is bij elke standaard aangegeven.

## Overzicht geo-standaarden API’s

In het overzicht van geo-standaarden voor API’s zijn de onderwerpen onderscheiden en in onderstaande tabellen opgenomen:

-   API standaarden voor het opvragen van webmaps: OGC WMS en OGC API Maps (tabel 5.1);
-   API standaarden voor het bevragen (downloaden) van vectordata: OGC WFS, OGC
    API – Features en ATOM (tabel 5.2);
-   API standaarden en specificaties voor het opvragen (downloaden) van
    rasterdata: OGC WCS en OGC API - Coverages (tabel 5.3);
-   API Standaarden en specificaties voor het opvragen (downloaden) van
    sensordata: OGC SOS, SensorThings API en Environmental Data Retrieval API (tabel 5.4);
-   API Standaarden en specificaties voor bevragen van metadata catalogi: OGC
    CSW en OGC API- Records (tabel 5.5);
-   API standaarden en specificaties voor opvragen van kaarttegels: OGC WMTS,
    OGC API Tiles, 3D Tiles (tabel 5.6);
-   API standaarden en specificaties voor linked data: GeoSPARQL (Tabel 5.7).

## Web mapping API's

*Tabel 5.1 - API standaarden en specificaties voor web mapping: OGC WMS en OGC API Maps*

| **Internationale standaarden/specificaties**                                | **Europese profielen**                                                           | **Nederlandse profielen**                                                                                |
|-----------------------------------------------------------------------------|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| Web Map Server (WMS) Implementation Specification, version 1.3.0 [[WMS]]     | Technical Guidance for the implementation of Inspire View Service. [[INSTGVS]] | Nederlands profiel op ISO 19128 Geographic information — Web Map Server Interface versie 1.0 [[NLWMS]] |
| ISO 19128 Geographic Information – Web Map Service (WMS) [[iso-19128-2005]] | | |
| OGC API Maps **Draft** [[OGCAPIMAPS]] | | | 

## Vectordata API's

*Tabel 5.2 – API standaarden en specificaties voor vectordata: OGC WFS, OGC API – Features en ATOM*

| **Internationale standaarden/specificaties**                                               | **Europese profielen**                                                                | **Nederlandse profielen**                                |
|--------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|----------------------------------------------------------|
| Web Feature Service (WFS) Implementation Specification, version 1.1.3 [[WFS11]]            | Technical Guidance for the implementation of Inspire Download Services. [[INSTGDS]]   | Nederlands WFS Profiel 1.0 op OGC WFS 1.1.0 [[NLWFS]]    | 
| ISO 19142, Geographic information - Web Feature Service (= WFS version 2.0) [[iso-19142-2010]], [[WFS]] |  |  |
| OGC Filter Encoding 2.0 Encoding Standard - With Corrigendum [[FE20]]  |  |  |
| ISO 19143, Geographic information – Filter encoding [[iso-19143-2010]]  |  |   |
| OGC API – Features Part 1 Core [[OAPIF1]]  | OGC API – Features as an INSPIRE download service [[INSGPOAPIF]]  | API Design Rules Geomodule **Draft** [[adr-mod-geo]]     |
| OGC API – Features Part 2 CRS by reference [[OAPIF2]]  |  | API Design Rules Geomodule **Draft** [[adr-mod-geo]]  |
| OGC API – Features Part 3 Filtering **Draft** [[OAPIF3]]  |  |                                                          |
| OGC API – Features Part 4 Create Replace Update and Delete **Draft** [[OAPIF4]]  |  |  |
| ATOM [[rfc4287]]  |  |   |

## Rasterdata API's

*Tabel 5.3 – API standaarden en specificaties voor rasterdata: OGC WCS en OGC API - Coverages*

| **Internationale standaarden/specificaties**            | **Europese profielen**                                                                                                     | **Nederlandse profielen**           |
|---------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| OGC Web Coverage Service (WCS), version 2.1 [[WCS21]] | Technical Guidance for the implementation of Inspire Download Services using Web Coverage Services (WCS). [[INSTGDSWCS]] | Hetzelfde als het Europese profiel |
| OGC API - Coverages - Part 1: Core, version 0.0.6 **Draft** [[OAPIC]] |  |  |

## Sensordata API's 

*Tabel 5.4 – API Standaarden en specificaties voor sensordata: OGC SOS, EDR API en SensorThings API*

| **Internationale standaarden/specificaties**                            | **Europese profielen**                                                                                                                        | **Nederlandse profielen**            |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| OGC Sensor Observation Service Interface Standard version 2.0 [[SOS]]   | Technical Guidance for implementing download services using the OGC Sensor Observation Service and ISO 19143 Filter Encoding [[INSTGDSSOS]]   | Hetzelfde als het Europese profiel.  |
| OGC SensorThings API part 1 Sensing, version 1.1 [[STAS]] | OGC SensorThings API as an INSPIRE download service (good practice) [[INSGPSTA]]  |  |
| OGC SensorThings API Part 2 Tasking Core, version 1.0 [[STAT]] |  |  |
| OGC API - Environmental Data Retrieval Standard, version 1.0.1 [[EDR]]  |  |  |

## Metadata API's 

*Tabel 5.5 – API Standaarden en specificaties voor metadata: OGC CSW en OGC API - Records*

| **Internationale standaarden/specificaties**                                                                          | **Europese profielen**                                                                  | **Nederlandse profielen**           |
|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|-------------------------------------|
| OGC Catalogue Service for the Web (CSW) Implementation Specification, version 2.0.2 [[CSW]]  | Technical Guidance for the implementation of Inspire Discovery Services. [[INSTGDiS]]   | Hetzelfde als het Europese profiel |
| CSW2 AP ISO, Catalogue Services Specification 2.0.2 - ISO Metadata Application Profile, Version 1.0.0, [[CSWISOAP]]  |  |  |
| OGC API - Records - Part 1: Core **Draft** [[OAPIRECORDS1]]  |  |  |

## Map tile APIs

*Tabel 5.6 – API standaarden en specificaties voor map tiles: OGC Web Map Tile Service (WMTS,) OGC API - Tiles, en 3D Tiles*

| **Internationale standaarden/specificaties**                          | **Europese profielen**                                                          | **Nederlandse profielen**            |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------|--------------------------------------|
| Web Map Tile Service Implementation Standard (WMTS) v1.0.0 [[WMTS]]   | Technical Guidance for the implementation of Inspire View Service [[INSTGVS]]   | Hetzelfde als het Europese profiel | 
| OGC API - Tiles - Part 1: Core [[OAPITILES1]] |  |  |
| OGC 3D Tiles 1.0 [[3DTILES]] |  |  |

Handreikingen voor implementatie:
-   [Praktijkrichtlijn Vector Tiling (2021)](https://docs.geostandaarden.nl/serv/vt/)
-   [Handreiking Best practices Vector Tiling (2021)](https://geonovum.github.io/vector-tiling-best-practices/)

## Linked Data API's

*Tabel 5.7 – API standaarden en specificaties voor linked data: GeoSPARQL*

| **Internationale standaarden/specificaties**                                        | **Europese profielen** | **Nederlandse profielen** |
|-------------------------------------------------------------------------------------|------------------------|---------------------------|
| GeoSPARQL - A Geographic Query Language for RDF Data v1.0 [[GeoSPARQL]]  |  |  |
| GeoSPARQL - A Geographic Query Language for RDF Data v1.1 **Draft** [[GEOSPARQL11]] |  |  |

Handreikingen voor implementatie: 
- NEN 3610 - Linked Data [[NLDP]]

<aside class="note">GeoSPARQL heeft een interactiedeel en een beknopt datamodel (ontologie) voor geodata. Deze handreiking gaat vooral over de datamodel-kant. Misschien hoort de verwijzing meer thuis in het informatiemodel hoofdstuk. </aside>
 
## Kwaliteit van API’s

**API Strategie overheid (beleid) en REST Design Rules**
pm

**Afspraken Quality of Services**
Om de kwaliteit van een service uit te drukken zijn door INSPIRE de drie typen kwaliteitsnormen voor services gedefinieerd (tabel 5.8).

*Tabel 5.8 – Voorbeeld van kwaliteitnormen voor services*

| Kwaliteitsnorm | Uitleg | Voorbeeld |
|----------------|--------|-----------|
| Reliability    | Reliability verwijst naar de hoeveelheid gefaalde requests die een systeem mag teruggeven in een afgesproken tijd.| Bijvoorbeeld `10 \*` een gefaalde request voor een geo-service per week.|
| Beschikbaarheid| Beschikbaarheid meet het percentage van beschikbaarheid (uptime). Het uptime percentage = uptime / (uptime + downtime).| Bijvoorbeeld de geo-service dient in 98% van de requests beschikbaar te zijn.|
| Performance / response tijd| De performance uitgedrukt in response tijd.| Bijvoorbeeld een 800\*600 pixels image met 8bit kleuren dient een response tijd te hebben van maximaal 5 seconden.|

Het is van belang om als service provider hier afspraken over te maken met de service afnemers.

**Validators**

Voor het valideren van services (WMS en WFS) zijn [validators](https://validatie.geostandaarden.nl/) beschikbaar. Met de ETF validator kan de kwaliteit van de WMS en WFS voor het grootste deel getoetst worden.

