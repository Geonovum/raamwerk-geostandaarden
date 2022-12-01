# Metadata

**Allereerst moet de informatie, die via de infrastructuur wordt verspreid,
beschreven worden. Karakteristieken van datasets, zoals de eigenaar en de
actualiteit, worden beschreven met behulp van metadata. Metadata wijst de weg in
onze informatiehuishouding, voorkomt dubbele inwinning en beheer van data en
zorgt ervoor dat geo-informatie snel kan worden gevonden.**

## Overzicht geo-standaarden metadata

Er zijn verschillende niveaus waarvoor metadata aangemaakt kunnen worden.
Metadata van data, beschrijft de dataset of dataset reeks. Metadata van
services, beschrijft de ‘service’ of API (WMS,WFS) waarmee (een) ruimtelijke
dataset(s) wordt ontsloten. Internationaal gelden de ISO metadata normen, ISO
19115 voor data en ISO 19119 voor services en waar relevant de OGC
specificaties. In Nederland passen we het Nederlands metadataprofiel voor
datasets en services toe. Dit is een uitbreiding op de Europese INSPIRE kernset,
gebaseerd op specifieke behoeften van de gebruikers in Nederland. Pas je de
Nederlandse profielen toe, dan voldoe je dus ook aan de INSPIRE profielen voor
metadata. In de Nederlandse profielen is ook de aansluiting op data.overheid.nl
meegenomen. [Data.overheid.nl](https://data.overheid.nl/) is een datacatalogus, die de datasets gemakkelijk doorzoekbaar en vindbaar maakt. Om datasets overzichtelijk te kunnen presenteren en om gericht naar datasets te kunnen zoeken, worden datasets in data.overheid.nl beschreven met metadata conform de standaard DCAT. DCAT is een metadata standaard van W3C voor de beschrijving van datasets. Voor Europese portalen is het “DCAT Application Profile for Data Portals in Europe" (DCAT-AP) opgesteld. DCAT-AP maakt het mogelijk voor datacatalogi om hun datasetcollecties te beschrijven met behulp van een gestandaardiseerde beschrijving, om dergelijke beschrijvingen samen te voegen tot één toegangspunt waardoor consumenten datasets gemakkelijker kunnen vinden vanaf één toegangspunt. DCAT-AP heeft een extensie GeoDCAT-AP voor het beschrijven van geodatasets, dataset series en services. Deze extensie is eveneens afgestemd op de INSPIRE kernset en de Nederlandse profielen. 


Tabel 1 - Standaarden en specificaties met betrekking tot metadata standaarden

| **Internationale standaarden/specificaties**                                                                                              | **Europese profielen**                                                                                           | **Nederlandse profielen**                                                   |
|-------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| ISO 19115:2005, Geographic information - Metadata1 [[ISO19115-2005]]                                                                    | Implementing Rule INSPIRE – Metadata [[INSPIRE-IRMD]]                                                               | Nederlands profiel ISO 19115 voor geografie, versie 2.0.1   [[NLISO19115]]    |
| ISO 19115/Cor.1:2006, Geographic information – Metadata, Technical Corrigendum 1 [[ISO19115-2006]]                                      | Corrigendum to metadata regulation [[INSPIRE-CIRMD]]                                                                | Nederlands profiel ISO 19119 voor services, versie 1.2.1 [[NLISO19119]]     |
| ISO 19115-2:2009, Geographic information – Metadata – Part 2: Extensions for imagery and gridded data [[ISO19115-2009]]                 | Technical Guidelines based on EN ISO 19115 and EN ISO 19119 [[INSPIRE-19115-19119]]                                        |                                                                             |
| ISO 19119:2005, Geographic information – Services ISO 19119:2005/Amd 1:2008, Extensions of the service metadata model [[ISO19119-2005]] |  |                                                                             |
| ISO/TS 19139:2007, Geographic information - Metadata – XML Schema Implementation [[ISO19139]]                                          |                                                                                                                  |                                                                             |
| ISO 15836: 2004, Information and documentation – The Dublin Core metadata element set [[ISO15836]]                                      |                                                                                                                  |                                                                             |
| Data Catalog Vocabulary (DCAT) version 2.0 [[vocab-dcat-2]] | DCAT-AP - An extension for the DCAT application profile for data portals in Europe version 1.2 [[dcat-ap]]| 
| | GeoDCAT-AP - A geospatial extension for the DCAT application profile for data portals in Europe version 2.0.0 [[geodcat-ap]] | |


## Kwaliteit van metadata

**Handleiding Metadatakwaliteit**

Het kwaliteitsbeleid voor metadata is vastgelegd in de [Handleiding metadatakwaliteit](https://www.geonovum.nl/uploads/documents/Handleiding%20metadata%20monitoring%20v0.5.pdf). Met behulp van de handleiding kan je aan de hand van 26
elementen die in de metadata-standaarden zijn beschreven, de kwaliteit van je
metadata beoordelen.


**Validatie**

Voor het toetsen van metadata zijn er validators beschikbaar. Deze validators
controleren de correcte toepassing van het Nederlands metadata profiel voor
datasets of voor services. De [validator Nederlands metadataprofiel op ISO 19115 en op ISO 19119](https://validatie.geostandaarden.nl/) valideert de metadat van repsectivelijk datasets en services conform het Nederlands profiel. 
Voor metadata van datasets of services, die voor
INSPIRE zijn aangemerkt, gelden er specifiekere vereisten. Gebruik daarvoor
naast de Nederlandse validator ook de [Europese INSPIRE validator](https://inspire.ec.europa.eu/validator/home/index.html) om die metadata
te valideren.


## Verkenning

Methoden en technieken om data te zoeken, vinden en ontsluiten staan niet stil.
Eind 2021 is een verkenning uitgevoerd naar de toekomst van metadata standaarden.

In de [Verkenning Toekomstbeelden Metadata](https://docs.geostandaarden.nl/vtm/cv-al-vrk-20211125/#d1e9) kijken we naar de rol van metadata in de nabije toekomst. In de verkenning tekent zich een ontwikkeling af naar meer
samenhang en verbinding tussen verschillende metadata-werelden. Aansluiting op
generieke standaarden en het leggen van relaties tussen data, modellen,
begrippen en datacatalogi is daarom van belang. Ook het beter verbinden van
data-aanbieder en data-gebruiker is een aandachtsgebied. Daarnaast valt op dat
vanuit beleid meer samenhang in sturing wordt verwacht. Op basis van deze
verkenning wordt in een volgende stap gekeken in hoeverre het nationaal
georegister voldoet aan dit beeld om op basis daarvan een handelingsperspectief
op te stellen.


