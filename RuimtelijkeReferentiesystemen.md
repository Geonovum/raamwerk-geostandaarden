# Coördinaatreferentiesystemen

**Geo-informatie is direct gekoppeld aan een locatie op aarde. Via het coördinaatreferentiesysteem (CRS) leggen we coördinaten van een locatie vast. Voor Nederland zijn meerdere CRS-en beschikbaar. RD, ETRS89 en WGS 84 zijn bekende voorbeelden van coördinaatreferentiesystemen.**

## Overzicht standaarden voor coördinaatreferentiesystemen

Voor de definitie van CRS-en is een ISO standaard [iso19111] beschikbaar. Een CRS is opgebouwd uit een datum en een coördinatensysteem. Het coördinatensysteem definieert hoe coördinaten worden uitgedrukt, bijvoorbeeld cartesisch of geografisch. De datum geeft de relatie van het coördinatensysteem met de aarde.

De in Nederland gebruikte CRS-en voor de opslag en uitwisseling van geo-informatie zijn onder te verdelen in verschillende groepen:

* **Geografische CRS-en** geven geografische coördinaten in graden (2D breedte en lengte (Engels: latitude en longitude) en voor 3D ook hoogte) ten opzichte van een ellipsoïdisch model van het aardoppervlak. 
* **Geprojecteerde CRS-en** presenteren geo-informatie op een plat vlak in cartesische (x en y) coördinaten. Een geprojecteerd CRS is een afgeleide van een geografisch CRS, waarbij voor het afbeelden in het platte vlak een kaartprojectie wordt gebruikt.
* **Verticale CRS-en** voor de vastlegging van hoogte en diepte ten opzichte van een referentievlak. Dit referentievlak is vaak gebaseerd op de richting van de zwaartekracht en valt normaal gesproken niet samen met oppervlak van een ellipsoïde. 
* **Samengestelde CRS-en** in het Engels 'Compound CRS' zijn samengestelde CRS-en, bijvoorbeeld samengesteld uit een geprojecteerde CRS en een verticale.

De [[iso19111]] standaard geeft een beschrijving van parameters die het CRS definiëren. Voor [specificatie en naamgeving van een CRS](https://docs.geostandaarden.nl/crs/crs/#naamgeving-van-crs) kunnen Name Type Specification (NTS), Uniform Resource names (URN), of Uniform Resource Locators (URL) worden gebruikt, waarin bijvoorbeeld EPSG-codes kunnen worden opgenomen die verwijzen naar de parameters die het CRS definiëren.  

Voor uitwisseling in het kader van INSPIRE zijn de te gebruiken CRS-en en het specificeren hiervan vastgelegd in specifieke guidelines. De relevante CRS-en die gebruikt worden in het Nederlandse domein van geo-informatie, kunnen ook worden ingedeeld naar hun geografische toepassingsgebied:
* Een **wereldwijd CRS** is een CRS dat gemiddeld zo goed mogelijk bij de gehele aarde aansluit. Wereldwijde CRS-en zijn bedoeld voor kleinschalige of wereldwijde toepassingen, bijvoorbeeld wereldkaarten, satellietnavigatie en het beschrijven processen zoals zeestromingen en platentektoniek. Wereldwijde CRS-en zijn minder geschikt voor het nauwkeurig vastleggen van geo-informatie, doordat in een wereldwijd CRS de coördinaten tijdsafhankelijk zijn als gevolg van platentektoniek;
* Een **continentaal of regionaal CRS** is gekoppeld aan een tektonische plaat; hierdoor bewegen coördinaten in het CRS mee met de tektonische plaat;
* Een **landelijk CRS** is vaak een geprojecteerd CRS dat zo is gekozen dat de vervormingen in het platte vlak minimaal zijn.

De gebruikte stelsels binnen Nederland en hun bijbehorende EPSG-code zijn in bijlage A van de [Handreiking Gebruik coördinaatreferentiesystemen bij uitwisseling en visualisatie van geo-informatie (2022)](https://docs.geostandaarden.nl/crs/crs/) opgenomen.

In de onderstaande tabel 7.1 zijn de standaarden en specificaties benoemd, die van toepassing zijn op de CRS-en voor Nederland.

*Tabel 7.1 - Standaarden en specificaties met betrekking tot CRS-en*

| **Internationale standaarden/specificaties**                                            | **Europese profielen**                                                          | **Nederlandse profielen**                                                      |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| Geographic Information – Spatial Referencing by Coordinates [[iso19111]] (gelijk aan [[OREFCO]]) | INSPIRE specification on Geographical Grid Systems – Guidelines [[inspire-ggs]] | Handreiking Gebruik coördinaatreferentiesystemen bij uitwisseling en visualisatie van geo-informatie [[HRCRS]] |
| ISO 6709 Standard representation of geographic location by coordinates [[iso6709]] | INSPIRE specification on Coordinate Reference Systems – Guidelines [[inspire-crs]] | |
| EPSG codes database & CRS Ids [[epsg]]  |  |  |
| ISO/TS 19127 Geographic Information – Geodetic codes and parameters [iso/tc19127]  |  |  |


## Kwaliteit en CRS-en

CRS-en zelf zijn geen geografische data, de kwaliteit van geografische data valt of staat met het goed vastleggen van het gebruikte coördinaatreferentiesysteem. Zonder informatie over het gebruikte CRS zijn coördinaten getallen zonder betekenis, het is namelijk niet duidelijk wat de relatie van de getallen is met de aarde.

In de [Handreiking Gebruik coördinaatreferentiesystemen bij uitwisseling en visualisatie van geo-informatie (2022)](https://docs.geostandaarden.nl/crs/crs/) worden achtergronden bij CRS-en en diverse aandachtspunten besproken bij het omgaan met CRS-en, zoals:

- CRS-keuze voor informatiemodellen;
- Het meegeven van informatie over CRS-en in informatiemodellen en metadata;
- Eenduidige naamgeving van CRS-en;
- Eenduidige coördinaattransformaties;
- Ondersteuning van CRS-en in uitwisselingsformaten en software(bibliotheken). 